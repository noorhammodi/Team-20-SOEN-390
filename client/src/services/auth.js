import axios from 'axios';
import config from '../utils/config';

const devAxios = axios.create({
  baseURL: 'http://localhost:3001',
});

const prodAxios = axios;
const axiosService = config.isDev() ? devAxios : prodAxios;
const endpoint = 'api/auth/validate';

// calls are this easy for json formatted https://github.com/axios/axios#example
const validate = async (token) => axiosService.get(endpoint, { headers: { 'x-access-token': token } });

// For export
const authService = {
  validate,
};

export default authService;
