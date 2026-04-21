import { AxiosError } from 'axios';
import { eventBus } from './eventBus';

const hasMessage = (data: any): data is { message: string } => {
  return typeof data === 'object' && data !== null && 'message' in data;
};

interface FieldError {
  [key: string]: string;
}

interface FieldErrorResponse {
  field_error: FieldError;
}

const hasFieldError = (data: any): data is FieldErrorResponse => {
  return (
    typeof data === 'object' &&
    data !== null &&
    'field_error' in data &&
    typeof data.field_error === 'object' &&
    data.field_error !== null
  );
};

export const handleApiError = (error: AxiosError) => {
  let message: string;
  if (error.response) {
    const { status, data } = error.response;

    switch (status) {
      case 400:
        if (hasFieldError(data)) {
          const errorDetails = Object.entries(data.field_error)
            .map(([field, msg]) => `${field}: ${msg}`)
            .join('\n');
          message = `${errorDetails}`;
        } else if (hasMessage(data)) {
          message = `${data.message}`;
        } else {
          message = `[${status}] 잘못된 요청입니다.`;
        }
        break;
      case 404:
        message = '요청하신 자원을 찾을 수 없습니다.';
        break;
      case 500:
        message = '서버에 문제가 발생했습니다. 잠시 후 다시 시도해주세요.';
        break;
      default:
        if (hasMessage(data)) {
          message = `${data.message}`;
        } else {
          message = `[${status}] 알 수 없는 오류가 발생했습니다.`;
        }
        break;
    }
  } else {
    message = '네트워크 오류가 발생했습니다. 인터넷 연결을 확인해주세요.';
  }
  console.log(message);
  eventBus.emit('showToast', { message, type: 'ERROR' });

  return Promise.reject(error);
};
