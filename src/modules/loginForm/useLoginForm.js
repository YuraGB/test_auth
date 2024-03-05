import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import emailValidationConfig from '../../utils/validation/emailValidationConfig.js';
import { useLoginSubmit } from './useLoginSubmit.js';
import { useNavigate } from 'react-router-dom';
const regEmailValidation = emailValidationConfig.pattern.value;

export const useLoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { onSubmit, isLoading, responseError, setResponseError, data } = useLoginSubmit();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  // observe email field
  const watchEmailField = watch('email');

  useEffect(() => {
    const subscription = watch(({ email }) => {
      // clear response error
      if (responseError) {
        setResponseError(false);
      }
      // if email is valid, show password field
      if (regEmailValidation.test(email)) {
        setShowPassword(true);
      } else {
        setShowPassword(false);
      }
    });

    return () => subscription.unsubscribe();
  }, [responseError, setResponseError, watch, watchEmailField]);

  useEffect(() => {
    if (data && !data?.error) {
      // clear the form
      reset();

      // redirect to the to whatever page
      navigate('/');
    }
  }, [data, navigate, reset]);

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    showPassword,
    isLoading,
    responseError,
  };
};
