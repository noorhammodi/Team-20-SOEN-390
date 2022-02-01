import axios from 'axios';

const devAxios = axios.create({
  baseURL: 'http://localhost:3001'
});

const prodAxios = axios.create({
  baseURL: 'https://covid-tracking-backend.herokuapp.com'
});

// TODO: dynamic switch depending if dev or prod
const isDev = true; // manual switch
const axiosService = isDev ? devAxios : prodAxios;

const addUser = 'rest/api/add-user';
const logUser = 'rest/api/login';

// calls are this easy for json formatted https://github.com/axios/axios#example
const register = async payload => {
  const response = await axiosService.post(addUser, payload);
  return response.data;
}

const login = async payload => {
  const response = await axiosService.post(logUser, payload);
  return response.data;
}

// For export
const loginService = {
  register,
  login,
}

export default loginService;