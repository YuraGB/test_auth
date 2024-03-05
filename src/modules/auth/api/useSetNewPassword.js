import { SET_NEW_PASSWORD } from '../../../utils/queryKeys.js';
import axiosClient from '../../axiosInstance/index.js';
import { useMutation } from 'react-query';

export const useSetNewPassword = () => {
  return useMutation({
    mutationKey: SET_NEW_PASSWORD,
    mutationFn: (data) => axiosClient.post('/auth/set-password', data),
  });
};
