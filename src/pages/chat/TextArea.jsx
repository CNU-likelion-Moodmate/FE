import { React, useState } from 'react';
import styled from 'styled-components';
import { SendIcon } from "../../assets/icons";
import { GRAY3, BLACK } from '../../component/constants/color';
import { Div } from '../../component/common/div';

// 메시지 입력 컨테이너 스타일 정의
const MessageInputContainer = styled.div`
  margin: 20px;
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 0;
`;

// 입력창과 버튼을 포함하는 컨테이너 스타일 정의
const InputContainer = styled.div`
  width: 335px;
  border: 1px solid ${GRAY3};
  border-radius: 24px;
  display: flex;
  align-items: center;
  position: relative; // 버튼의 절대 위치를 기준으로 설정
  flex: 1;
`;

// 입력창 스타일 정의
const Input = styled.input`
  width: 300px;
  padding: 10px;
  border: none;
  outline: none;
  font-size: 14px;
  caret-color: #FEE270;
  background-color: transparent;
;
`;

// 전송 버튼 스타일 정의
const SendButton = styled.button`
  border: 0;
  outline: 0;
  background-color: white;
  cursor: pointer;
`;

const TextArea = () => {
    const [message, setMessage] = useState('');
      
        const handleBack = () => {
          console.log('Back button clicked'); // 뒤로가기 로직 구현 필요
        };
      
        const handleSend = () => {
          console.log('Send message:', message);
          // 메시지 전송 로직 추가
          setMessage('');
        };

        return (
            <Div>
              <MessageInputContainer>
                <InputContainer>
                  <Input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="메시지 입력..."
                  />
                  <SendButton show={message.length > 0} onClick={handleSend}>
                    <SendIcon />
                  </SendButton>
                </InputContainer>
              </MessageInputContainer>
            </Div>
          );
        };

export default TextArea;