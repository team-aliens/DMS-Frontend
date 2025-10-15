import { reIssueToken } from '@/apis/auth';
import { getCookie, setCookie } from '@/utils/cookies';
import { eventBus } from '@/utils/eventBus';

let isRefreshing = false;
let subscribers: Array<(token: string) => void> = [];

const onRefreshed = (token: string) => {
  subscribers.forEach((callback) => callback(token));
  subscribers = [];
};

export const refreshToken = (): Promise<string> => {
  const refreshToken = getCookie('refresh_token');
  if (!refreshToken) {
    eventBus.emit('sessionExpired');
    return Promise.reject(new Error('No refresh token available'));
  }

  if (isRefreshing) {
    return new Promise((resolve) => {
      subscribers.push((token: string) => resolve(token));
    });
  }

  isRefreshing = true;

  return new Promise((resolve, reject) => {
    reIssueToken(refreshToken)
      .then((res) => {
        const newAccessToken = res.access_token;

        setCookie('access_token', newAccessToken, {
          expires: new Date(res.access_token_expired_at),
        });

        setCookie('refresh_token', res.refresh_token, {
          expires: new Date(res.refresh_token_expired_at),
        });

        isRefreshing = false;
        onRefreshed(newAccessToken);
        resolve(newAccessToken);
      })
      .catch((err) => {
        isRefreshing = false;
        subscribers = [];
        eventBus.emit('sessionExpired');
        reject(err);
      });
  });
};
