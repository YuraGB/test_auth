import { useSubmitResetForm } from './useSubmitResetForm.js';
import { useFormHook } from '../../utils/hooks/useFormHooks.js';

export const useResetPasswordForm = () => {
  const { onSubmit, data, isLoading, responseError, setResponseError } = useSubmitResetForm();
  const { errors, handleSubmit, register, watch } = useFormHook(data, responseError, setResponseError);

  return { register, handleSubmit, errors, onSubmit, watch, isLoading, responseError };
};
