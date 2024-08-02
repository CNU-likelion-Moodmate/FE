import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { GRAY2, GRAY3 } from '../../constants/color';
import { Div, Button, Input } from "../../component/common/div";
import { ReceivedMessage, SentMessage } from '../../component/pages/chatroom/Message';
import { ArrowIcon } from '../../assets/icons';
import { chatApi, selectModelApi } from '../../api/chat';
import { CHAT } from '../../constants/content';
import SelectEmotion from '../../component/pages/chatroom/SelectEmotion';
// import { useSelector } from 'react-redux';

const Header = styled(Div)`
  display: flex;
  height: 48px;
  padding: 0 16px;
  font-family: crayon;
  font-size: 24px;
  text-align: left;
  border-bottom: 1px solid ${GRAY2};
  gap: 13px;
  justify-content: flex-start;
  border-radius: 0;
`;

const InputContainer = styled(Div)`
  position: absolute;
  bottom: 24px;
  display: flex;
  width: calc(100% - 54px);
  left: 50%;
  transform: translateX(-50%);
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

const ChatRoom = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { type } = location.state;
  const [chatInput, setChatInput] = useState('');
  const [chatList, setChatList] = useState([]);
  const [isMounted, setIsMounted] = useState(false);
  const [showSelectEmotion, setShowSelectEmotion] = useState(false);
  const [isSelectEmotion, setIsSelectEmotion] = useState({emotion: [], activity: 0});
  const [isInputActive, setInputActive] = useState(true);
  const [isRecommendOk, setIsRecommendOk] = useState(false);
  // const { emotion, activity } = useSelector((state) => state.emotion.value);
  const isRecommendActive = chatList.length > 5;
  
  useEffect(() => {
    setShowSelectEmotion(false);
    if (!isSelectEmotion.emotion.length) return;
    const chat = isSelectEmotion.emotion.join(',');
    handleSendMessage(chat);
    // eslint-disable-next-line
  }, [isSelectEmotion]);

  const addChat = (chat, isUser) => {
    setChatList((prev) => [...prev, { chat, isUser }]);
  }

  useEffect(() => {
    setInputActive(!showSelectEmotion);
  }, [showSelectEmotion])

  useEffect(() => {
    setShowSelectEmotion(chatList.length === 5);
  }, [chatList]);

  useEffect(() => {
    addChat(CHAT[type], false);
    if(isMounted) return;
    setIsMounted(true);
    const selectModel = async () => {
      try {
        
        await selectModelApi(type);
      } catch (error) {
        console.error(error);
      }
    }
    selectModel();
    // eslint-disable-next-line
  }, [])

  const handleBack = () => {
    navigate(-1);
  }

  const handleSendMessage = async (chat) => {
    addChat(chat, true);
    setChatInput('');
    try {
      const res = await chatApi(chat);
      console.log('chatApi-res', res);
      addChat(res.data.responseChat, false);
    } catch (error) {
      console.error(error);
    }
  }

  const handleKeyDown = (e) => {
    if (e.isComposing || e.keyCode === 229) return; 
    if(e.key !== 'Enter') return;
    handleSendMessage(chatInput);
  }
  
  const handleRecommendQuest = () => {
    setIsRecommendOk(true);
    setInputActive(false);
  }

  return(
    <Div $radius='0' $height='100vh'>
      <Header>
        <ArrowIcon onClick={handleBack} style={{ cursor: 'pointer'}} />
        moodmate
      </Header>
      <Div $flex={true} $direction='column' $justify='flex-start' $padding='20px 28px' $maxHeight='calc(100vh - 160px)' style={{ overflowY: 'auto'}}> 
        {chatList.map((chat, index) => {
          return chat.isUser ? <SentMessage key={index} chat={chat.chat} /> : <ReceivedMessage key={index} chat={chat.chat} />
        })}
        {showSelectEmotion && <SelectEmotion selected={setIsSelectEmotion} />}
        {isRecommendOk && CHAT['quest']}
      </Div>
      <InputContainer>
        {isRecommendActive && isInputActive && <Button $backgroundColor={GRAY3} onClick={handleRecommendQuest} >퀘스트 추천받기</Button>}
        {isInputActive &&
          <Input 
            type="text" 
            placeholder='메시지 입력 ...'
            onKeyDown={handleKeyDown}
            onChange={(e) => setChatInput(e.target.value)}
            value={chatInput}
          />
        }
      </InputContainer>
    </Div>
  )
}

export default ChatRoom;