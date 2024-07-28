
import Modal from 'react-modal';
import styled from 'styled-components';
import { customModalStyles } from './ModalStyle';
import { Text, Button, Div } from '../common/div';
import { GRAY1 } from '../../constants/color';

const ModalButton = styled(Button)`
  flex-grow: 1;
  align-items: center; 
  height: 54px;
  border-radius: 6px;
`;

const ChatExitModal = ({ isOpen = false }) => {
  return(
    <Modal isOpen={isOpen} style={customModalStyles}>
      <Text $weight='SEMIBOLD' $size='16px'>지금 대화창을 나가면 <br /> 대화가 저장되지 않아요!</Text>
      <Div $flex={true} $margin='18px 0 0' $gap='20px'>
        <ModalButton $backgroundColor={GRAY1}>대화 종료</ModalButton>
        <ModalButton>이어서 대화</ModalButton>
      </Div>
    </Modal>
  );
}

export default ChatExitModal;