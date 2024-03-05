import { useMutation } from 'react-query';
import axiosClient from '../../axiosInstance/index.js';

/**
 *
 * @template TData
 * @return {UseMutationResult<TData, unknown, {email: string, password: string}, unknown>}
 */
export const useSignIn = () => {
  return useMutation({
    /**
     *
     * @param {{email: string, password: string}}data
     * @return {Promise<TData>}
     */
    mutationFn: (data) => axiosClient.post('/auth/login', data),
  });
};
