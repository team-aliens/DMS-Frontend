import { LoginPage } from '@team-aliens/design-system/dist/components/login/LoginPage/LoginPage';
import { useState } from 'react';
import { useObj } from '@/hooks/useObj';
import { useForm } from '@/hooks/useForm';
import { LoginRequest } from '@/apis/auth/request';
import { useLoginMutation } from '@/hooks/useAuthApi';

interface ErrorPropsType {
  account_id: string;
  password: string;
  device_token: string;
}

export const TeacherLoginPage = () => {
  const autoSave = true;
  const { obj: errorMessages, changeObjectValue: changeErrorMessage } =
    useObj<ErrorPropsType>({
      account_id: '',
      password: '',
      device_token: '',
    });

  const { onHandleChange, state: loginState } = useForm<LoginRequest>({
    account_id: '',
    password: '',
    device_token: 'admin_default',
  });

  const loginMutation = useLoginMutation({
    loginState,
    autoSave,
    changeErrorMessage,
  });
  return (
    <LoginPage
      value={loginState}
      onChange={onHandleChange}
      onClick={() => loginMutation.mutate()}
    />
  );
};
