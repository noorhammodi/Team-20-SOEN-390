import axios from 'axios'

// setup axios
const instance = axios.create({
  baseURL: 'http://localhost:5000'
})

const addUser = 'rest/api/add-user'
const logUser = 'rest/api/login'

const register = async credentials => {
  const response = await instance.post(addUser, credentials)
  return response.data
}

const login = async credentials => {
  const response = await instance.post(logUser, credentials)
  return response.data
}

const loginService = {
  register,
  login,
}

export default loginService;