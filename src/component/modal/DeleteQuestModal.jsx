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

const DeleteQuestModal = ({ isOpen = false, closeModal }) => {
  return(
    <Modal isOpen={isOpen} style={customModalStyles}>
      <Div style={{ top: '50%', transform: 'translateY(-50%)'}}>
        <Text $weight='SEMIBOLD' $size='16px'>삭제가 완료되었어요!</Text>
        <Div $flex={true} $margin='18px 0 0' $gap='20px'>
          <ModalButton $backgroundColor={GRAY1} onClick={closeModal}>확인</ModalButton>
        </Div>
      </Div>
    </Modal>
  );
}

export default DeleteQuestModal;