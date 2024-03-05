import { useResetPassword } from '../auth/api/useResetPassword.js';
import { useResponseHookHandle } from '../../utils/hooks/useResponseHookHandle.js';

export const useSubmitForgotForm = () => {
  const { data, error, mutate: submitForm, isLoading } = useResetPassword();

  const { responseError, setResponseError } = useResponseHookHandle(error);

  const onSubmit = (data) => {
    if (typeof data.email === 'string') {
      submitForm({ email: data.email });
    }
  };

  return {
    onSubmit,
    data,
    error,
    isLoading,
    responseError,
    setResponseError,
  };
};
