import React from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { GRAY2, GRAY3 } from '../../constants/color';
import { Text, Div } from "../../component/common/div";
import { ReceivedMessage, SentMessage } from '../../component/pages/chatroom/Message';
import { ArrowIcon } from '../../assets/icons';

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

  const handleBack = () => {
    navigate(-1);
  }
  return(

    <Div $radius='0' $height='100vh'>
      <Header>
        <ArrowIcon onClick={handleBack} style={{ cursor: 'pointer'}} />
        moodmate
      </Header>
      <Div $flex={true} $direction='column' $justify='flex-start' $padding='20px 28px' $maxHeight='calc(100vh - 130px)' style={{ overflowY: 'auto'}}> 
        <ReceivedMessage />
        <SentMessage />
      </Div>
        <Input type="text" placeholder='메시지 입력 ...' />
    </Div>
  )
}

export default ChatRoom;