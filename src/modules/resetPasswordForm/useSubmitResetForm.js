import { useResponseHookHandle } from '../../utils/hooks/useResponseHookHandle.js';
import { useSetNewPassword } from '../auth/api/useSetNewPassword.js';

export const useSubmitResetForm = () => {
  const { data, error, mutate: submitForm, isLoading } = useSetNewPassword();

  const { responseError, setResponseError } = useResponseHookHandle(error);
  const onSubmit = (data) => {
    if (typeof data.password === 'string' && typeof data.confirm_password === 'string') {
      if (data.password === data.confirm_password) {
        submitForm({ password: data.password });
      }
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
