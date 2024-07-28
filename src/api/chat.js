import { post } from './base';
import { CHAT_URL } from '../constants/api';

export const selectModelApi = async (data) => {
  const response = await post(CHAT_URL.model, {selectedModel: data});
  return response;
}

export const chatApi = async (data) => {
  const response = await post(CHAT_URL.chatting, {userInput: data});
  return response;
}