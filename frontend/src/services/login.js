import axios from 'axios'

// setup axios
const instance = axios.create({
  baseURL: 'http://localhost:5000'
})

const addUser = 'rest/api/add-user'
const logUser = 'rest/api/login'

const register = async payload => {
  const response = await instance.post(addUser, payload)
  return response.data
}

const login = async payload => {
  const response = await instance.post(logUser, payload)
  return response.data
}

const loginService = {
  register,
  login,
}

export default loginService;