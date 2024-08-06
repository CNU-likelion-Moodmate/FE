import { post } from './base';
import { USER_URL } from '../constants/api';

export const loginApi = async (data) => {
  const response = await post(USER_URL.login, data);
  return response;
}

export const signUpApi = async (data) => {
  console.log(USER_URL.signUp)
  const response = await post(USER_URL.signUp, data);
  return response;
}