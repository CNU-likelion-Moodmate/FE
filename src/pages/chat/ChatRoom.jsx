import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { GRAY2, GRAY3 } from '../../constants/color';
import { Div } from "../../component/common/div";
import { ReceivedMessage, SentMessage } from '../../component/pages/chatroom/Message';
import { ArrowIcon } from '../../assets/icons';
import { chatApi, selectModelApi } from '../../api/chat';

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

const Input = styled.input`
  position: absolute;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 54px);
  border: solid 1px ${GRAY3};
  height: 43px;
  border-radius: 24px;
  padding: 0 19px;
  &:focus {
    outline: none;
  }
`;

const ChatRoom = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { type } = location.state;
  const [chatInput, setChatInput] = useState('');
  const [chatList, setChatList] = useState([]);
  const [isMounted, setIsMounted] = useState(false);

  const addChat = (chat, isUser) => {
    setChatList((prev) => [...prev, { chat, isUser }]);
  }

  useEffect(() => {
    if(isMounted) return;
    setIsMounted(true);
    const selectModel = async () => {
      try {
        const res = await selectModelApi(type);
        addChat( res.data.responseChat, false );
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

  const handleSendMessage = async () => {
    addChat(chatInput, true);
    setChatInput('');
    try {
      const res = await chatApi(chatInput);
      addChat(res.data.responseChat, false);
    } catch (error) {
      console.error(error);
    }
  }

  const handleKeyDown = (e) => {
    if (e.isComposing || e.keyCode === 229) return; 
    if(e.key !== 'Enter') return;
    handleSendMessage();
  }

  return(

    <Div $radius='0' $height='100vh'>
      <Header>
        <ArrowIcon onClick={handleBack} style={{ cursor: 'pointer'}} />
        moodmate
      </Header>
      <Div $flex={true} $direction='column' $justify='flex-start' $padding='20px 28px' $maxHeight='calc(100vh - 130px)' style={{ overflowY: 'auto'}}> 
        {chatList.map((chat, index) => {
          if(chat.isUser) {
            return <SentMessage key={index} chat={chat.chat} />
          } else {
            return <ReceivedMessage key={index} chat={chat.chat} />
          }
        })
        }
      </Div>
        <Input 
          type="text" 
          placeholder='메시지 입력 ...'
          onKeyDown={handleKeyDown}
          onChange={(e) => setChatInput(e.target.value)}
          value={chatInput}
        />
    </Div>
  )
}

export default ChatRoom;