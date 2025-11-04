import axios, {
  AxiosError,
  AxiosHeaders,
  InternalAxiosRequestConfig,
} from 'axios';
import { refreshToken } from '@/apis/TokenRefresher';
import { getCookie } from '@/utils/cookies';
import { handleApiError } from '@/utils/apiErrorHandler';

export const instance = axios.create({
  baseURL: import.meta.env.DEV
    ? '/api' // 개발 환경: 프록시 사용
    : `${import.meta.env.VITE_APP_PUBLIC_URL}`, // 프로덕션 환경: 직접 API 서버 사용
  timeout: 10000,
});

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

    if (error.response?.status === 401 || error.response?.status === 403) {
      if (originalRequest._retry) {
        return Promise.reject(error);
      }
      originalRequest._retry = true;
      try {
        const newAccessToken = await refreshToken();
        originalRequest.headers = new AxiosHeaders({
          ...originalRequest.headers,
          Authorization: `Bearer ${newAccessToken}`,
        });
        return instance(originalRequest);
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }

    return handleApiError(error);
  },
);
