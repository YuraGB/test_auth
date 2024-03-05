import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://auth-qa.qencode.com/v1',
});

export default axiosClient;
