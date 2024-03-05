import { useQuery } from 'react-query';
import { GET_REFRESH_TOKEN } from '../../../utils/queryKeys.js';
import axiosClient from '../../axiosInstance/index.js';

export const useGetRefreshToken = () => {
  return useQuery({
    queryKey: GET_REFRESH_TOKEN,
    queryFn: () => {
      axiosClient.get('/v1/auth/refresh-token');
    },
  });
};
