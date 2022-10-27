import axios from "axios";

export const instance = axios.create({
  baseURL: 'https://kidslike-v1-backend.goit.global/',
});

const setToken = (token = '') => {
  instance.defaults.headers.authorization = `Bearer ${token}`
}

export const register = async data => {
  const { data: result } = await instance.post('auth/register', data)
  setToken(result.token);
  console.log(result)
  return result
}

export const login = async data => {
  const { data: result } = await instance.post('auth/login', data)
  setToken(result.token);
  return result
}

export const logout = async () => {
  await instance.post('auth/logout')
  setToken('');
}
