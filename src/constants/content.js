import FRIEND from '../assets/cards/friend.png';
import ADVISER from '../assets/cards/adviser.png';
import RecommendQuest from '../component/pages/chatroom/RecommendQuest';

export const MOBILE_SIZE = '390px';

export const URL = {
  CHAT: '/',
  CHAT_ROOM: '/chat/:id',
  QUEST: '/quest',
  MYPAGE: '/mypage',
  NOT_FOUND: '*',
  QUESTROUTINE: '/questroutine',
}

export const CAROUSEL = {
  FRIEND: {
    type: 'friendly',
    image: FRIEND,
    title: '다정한 곰곰이',
    content: '오늘 힘든 하루를 보냈나요? 아니면 기분 좋은 일이 있었나요? 어떤 상황이든, 당신의 이야기를 따뜻하게 들어주는 다정한 친구가 되어줄게요. 당신의 하루를 조금 더 따뜻하고,\r\n 조금 더 행복하게 만들어줄 거예요 🍀',
  },
  ADVISER: {
    type: 'serious',
    image: ADVISER,
    title: '냉철한 조언자',
    content: '어려운 문제에 부딪혔을 때,\r\n  혼자서 고민하기엔 마음이 답답하고 불안할 때,\r\n  당신의 문제를 함께 고민하고 쌓인 스트레스를 덜어주는\r\n  든든한 친구가 되어줄게요 🧸',
  }
}

export const FONT_WEIGHT = {
  LIGHT: {fontWeight: 300},
  REGULAR: {fontWeight: 400},
  MEDIUM: {fontWeight: 500},
  SEMIBOLD: {fontWeight: 600},
  BOLD: {fontWeight: 700},
}

export const EMOTION = ['불안', '슬픔', '두려움', '후회', '우울', '속상함', '외로움', '공허함', '미움', '귀찮음', '답답함', '지친'];

export const CHAT = {
  friendly: '안녕! 난 곰곰이라고 해! 너의 따뜻한 친구가 되고 싶어. 나에게 고민을 말해줄래?',
  serious: '안녕! 난 곰곰이라고 한단다! 너의 냉철한 조언자가 되고 싶어. 나에게 고민을 말해주겠니?',
  quest: <RecommendQuest />
}