// import { useSelector } from 'react-redux';
import { post, get, del } from './base';
import { QUEST_URL } from '../constants/api';

// const { userId } = useSelector((state) => state.user.value);

export const recommandQuestApi = async (data) => { 
  const response = await post(QUEST_URL.recommand, data);
  return response;
}

export const LoadQuestApi = async (userId) => {
  const response = await get(QUEST_URL.load(userId));
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

export const DeleteQuestApi = async (questRecordId) => {
  const response = await del(QUEST_URL.delete, {questRecordId});
  return response;
}
