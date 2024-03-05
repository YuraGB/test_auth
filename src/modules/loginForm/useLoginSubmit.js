import { useSignIn } from '../auth/api/useSignIn.js';
import { useEffect, useState } from 'react';
import { formatErrorMessage } from '../../utils/formatErroMessage.js';
import { useResponseHookHandle } from '../../utils/hooks/useResponseHookHandle.js';

/**
 *
 * @return {{isLoading, data, onSubmit: onSubmit, setValidationError: (value: (((prevState: boolean) => boolean) | boolean)) => void, reset, error, validationError: boolean, isSuccess}}
 */
export const useLoginSubmit = () => {
  const { data, error, isLoading, isSuccess, mutate: submitForm } = useSignIn();
  const { responseError, setResponseError } = useResponseHookHandle(error);

  const onSubmit = (data) => {
    const { email, password } = data;
    if (email && password) {
      submitForm(data);
    }
  };

  return {
    onSubmit,
    isLoading,
    isSuccess,
    error,
    data,
    responseError,
    setResponseError,
  };
};
