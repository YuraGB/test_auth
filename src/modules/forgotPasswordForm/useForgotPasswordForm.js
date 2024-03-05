import { useSubmitForgotForm } from './useSubmitForgotForm.js';
import { useFormHook } from '../../utils/hooks/useFormHooks.js';
import { useNavigate } from 'react-router-dom';

export const useForgotPasswordForm = () => {
  const { onSubmit, isLoading, responseError, setResponseError, data } = useSubmitForgotForm();
  const { errors, handleSubmit, register, watch } = useFormHook(data, responseError, setResponseError);
  const navigate = useNavigate();

  const onCancel = () => {
    navigate('/login');
  };
  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
    watch,
    isLoading,
    onCancel,
    responseError,
  };
};
