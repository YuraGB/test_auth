import { useEffect, useState } from 'react';
import { formatErrorMessage } from '../formatErroMessage.js';

export const useResponseHookHandle = (error) => {
  const [responseError, setResponseError] = useState(false);
  /**
   * Error from the server
   */
  useEffect(() => {
    if (error?.response?.data?.detail) {
      setResponseError(formatErrorMessage(error.response.data.detail));
    } else {
      if (error?.message) {
        formatErrorMessage(error.message);
      }
    }
  }, [error]);

  return {
    responseError,
    setResponseError,
  };
};
