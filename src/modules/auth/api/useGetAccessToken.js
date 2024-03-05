import { useQuery } from 'react-query';
import { GET_ACCESS_TOKEN } from '../../../utils/queryKeys.js';
import axiosClient from '../../axiosInstance/index.js';

export const useGetAccessToken = () => {
  return useQuery({
    queryKey: GET_ACCESS_TOKEN,
    queryFn: () => {
      axiosClient.get('/v1/auth/access-token');
    },
  });
};
