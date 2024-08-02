export const USER_URL = {
  login: '/login',
  register: '/register',
};

export const CHAT_URL = {
  model: '/select-model',
  chatting: '/chat',
};

export const QUEST_URL = {
  recommand: '/recommendQuest',
  save: '/saveQuest',
  load: (userId) => `/loadQuest?userId=${userId}`,
  complete: '/completeQuest', 
  delete: '/deleteQuest',
}