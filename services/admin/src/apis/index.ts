import axios, {
  AxiosError,
  AxiosHeaders,
  InternalAxiosRequestConfig,
} from 'axios';
import { reIssueToken } from '@/apis/auth';
import { getCookie, setCookie } from '@/utils/cookies';

export const instance = axios.create({
  baseURL: `${process.env.APP_PUBLIC_URL}`,
  timeout: 10000,
});

let isRefreshing = false;
let refreshSubscribers: ((token: string) => void)[] = [];

const hasMessage = (data: any): data is { message: string } => {
  return typeof data === 'object' && data !== null && 'message' in data;
};

const onRefreshed = (token: string) => {
  refreshSubscribers.forEach((callback) => callback(token));
  refreshSubscribers = [];
};

instance.interceptors.request.use(
  (config) => {
    const accessToken = getCookie('access_token');
    if (accessToken) {
      config.headers = new AxiosHeaders({
        ...config.headers,
        Authorization: `Bearer ${accessToken}`,
      });
    }
    return config;
  },
  (error: AxiosError) => Promise.reject(error),
);

instance.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & {
      _retry?: boolean;
    };

    if (error.response.status === 401 || error.response.status === 403) {
      const refreshToken = getCookie('refresh_token');

      if (!refreshToken) {
        window.location.href = '/login';
        return Promise.reject(error);
      }

      if (originalRequest._retry) {
        return Promise.reject(error);
      }
      originalRequest._retry = true;

      if (isRefreshing) {
        return new Promise((resolve) => {
          refreshSubscribers.push((token: string) => {
            originalRequest.headers = new AxiosHeaders({
              ...originalRequest.headers,
              Authorization: `Bearer ${token}`,
            });
            resolve(instance(originalRequest));
          });
        });
      }

      isRefreshing = true;

      try {
        const res = await reIssueToken(refreshToken);
        const newAccessToken = res.access_token;

        setCookie('access_token', newAccessToken, {
          expires: new Date(res.access_token_expired_at),
        });

        setCookie('refresh_token', res.refresh_token, {
          expires: new Date(res.refresh_token_expired_at),
        });

        isRefreshing = false;
        onRefreshed(newAccessToken);

        originalRequest.headers = new AxiosHeaders({
          ...originalRequest.headers,
          Authorization: `Bearer ${newAccessToken}`,
        });
        return instance(originalRequest);
      } catch (err) {
        isRefreshing = false;
        window.location.href = '/login';
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  },
);
