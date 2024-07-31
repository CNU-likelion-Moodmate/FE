import { post, get } from './base';
import { QUEST_URL } from '../constants/api';

export const recommandQuestApi = async (data) => {  // data = mood1, mood2, activity
  const response = await post(QUEST_URL.recommand, data);
  return response;
}

export const LoadQuestApi = async (userId) => {
  const response = await get(QUEST_URL.load, userId);
  return response;
}

export const CompleteQuestApi = async (data) => {
  const response = await post(QUEST_URL.complete, data);
  return response;
}

export const SaveQuestApi = async (data) => {
  const response = await post(QUEST_URL.save, data);
  return response;
}

export const DeleteQuestApi = async (userId, data) => {
  const response = await get(QUEST_URL.load, userId);
  return response;
}