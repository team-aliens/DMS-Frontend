import { AxiosError } from 'axios';

const hasMessage = (data: any): data is { message: string } => {
  return typeof data === 'object' && data !== null && 'message' in data;
};

export const handleApiError = (error: AxiosError) => {
  if (error.response) {
    const { status, data } = error.response;
    const message = hasMessage(data)
      ? data.message
      : '알 수 없는 오류가 발생했습니다.';

    switch (status) {
      case 400:
        console.log(`[${status}] 잘못된 요청입니다.\n${message}`);
        break;
      case 404:
        console.log('요청하신 자원을 찾을 수 없습니다.');
        break;
      case 500:
        console.log('서버에 문제가 발생했습니다. 잠시 후 다시 시도해주세요.');
        break;
      default:
        console.log(`[${status}] 오류가 발생했습니다.\n${message}`);
        break;
    }
  } else {
    console.log('네트워크 오류가 발생했습니다. 인터넷 연결을 확인해주세요.');
  }
  return Promise.reject(error);
};
