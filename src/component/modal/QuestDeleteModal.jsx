import React from 'react';
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

const QuestDeleteModal = ({ isOpen = false, closeModal, id, handleDelete, resetButtonVisibility }) => {
  const Delete = () => {
    handleDelete(id);
    closeModal();
  }
  return(
    <Modal isOpen={isOpen} style={customModalStyles}>
      <Text $weight='SEMIBOLD' $size='16px'>추천 받은 퀘스트를 <br />완전히 삭제하시겠어요?</Text>
      <Div $flex={true} $margin='18px 0 0' $gap='20px'>
        <ModalButton $backgroundColor={GRAY1} onClick={() => { closeModal(); resetButtonVisibility(); }}>돌아가기</ModalButton>
        <ModalButton onClick={Delete}>삭제할게요</ModalButton>
      </Div>
    </Modal>
  );
}

export default QuestDeleteModal;