import axios from 'axios'

// setup axios, just use 'axios' instead of 'instance' if frontend is on the same domain, otherwise modify the baseURL.
const instance = axios.create({
  baseURL: 'http://localhost:5000'
})

const addUser = 'rest/api/add-user'
const logUser = 'rest/api/login'

// calls are this easy for json formatted https://github.com/axios/axios#example
const register = async payload => {
  const response = await instance.post(addUser, payload)
  return response.data
}

const login = async payload => {
  const response = await instance.post(logUser, payload)
  return response.data
}

// For export
const loginService = {
  register,
  login,
}

export default loginService;