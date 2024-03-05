import { useMutation } from 'react-query';
import { RESET_PASSWORD } from '../../../utils/queryKeys.js';
import axiosClient from '../../axiosInstance/index.js';

export const useResetPassword = () => {
  return useMutation({
    mutationKey: RESET_PASSWORD,
    mutationFn: (data) => axiosClient.post('/auth/reset-password', data),
  });
};
