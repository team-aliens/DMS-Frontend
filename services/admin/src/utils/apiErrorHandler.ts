import { AxiosError } from 'axios';

const hasMessage = (data: any): data is { message: string } => {
  return typeof data === 'object' && data !== null && 'message' in data;
};

export const handleApiError = (error: AxiosError) => {
  if (error.response) {
    const { status, data } = error.response;
    const message = hasMessage(data)
      ? data.message
      : 'An unknown error occurred';

    switch (status) {
      case 400:
        alert(`[${status}] ${message}`);
        break;
      case 404:
        alert('The requested resource was not found.');
        break;
      case 500:
        alert('A server error occurred. Please try again later.');
        break;
      default:
        alert(`[${status}] ${message}`);
        break;
    }
  } else {
    alert('A network error occurred. Please check your connection.');
  }
  return Promise.reject(error);
};
