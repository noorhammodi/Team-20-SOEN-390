import axios from 'axios';
import config from '../utils/config';

const devAxios = axios.create({
  baseURL: 'http://localhost:3001',
});

const prodAxios = axios;
const axiosService = config.isDev() ? devAxios : prodAxios;
const addUser = 'api/users/new';

// calls are this easy for json formatted https://github.com/axios/axios#example
const register = async (payload) => {
  const response = await axiosService.post(addUser, payload);
  return response;
};

// For export
const newRegisterService = {
  register,
};

export default newRegisterService;
