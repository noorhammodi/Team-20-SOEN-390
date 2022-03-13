import axios from 'axios';
import config from '../utils/config';

const devAxios = axios.create({
  baseURL: 'http://localhost:3001',
});

const prodAxios = axios;
const axiosService = config.isDev() ? devAxios : prodAxios;
const getUsers = 'api/users';

// calls are this easy for json formatted https://github.com/axios/axios#example
const getAll = async () => {
  const response = await axiosService.get(getUsers);
  return response;
};

// For export
const adminService = {
  getAll,
};

export default adminService;
