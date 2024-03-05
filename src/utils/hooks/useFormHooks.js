import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';

export const useFormHook = (data, responseError, setResponseError) => {
  const navigate = useNavigate();
  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const watchFields = watch();

  useEffect(() => {
    if (data && !data?.error) {
      // clear the form
      reset();

      // redirect to the to whatever page
      navigate('/');
    }
  }, [data, navigate, reset]);

  useEffect(() => {
    const subscription = watch(() => {
      // clear response error
      if (responseError) {
        setResponseError(false);
      }
    });

    return () => subscription.unsubscribe();
  }, [responseError, setResponseError, watch, watchFields]);

  return {
    register,
    reset,
    watch,
    handleSubmit,
    errors,
  };
};
