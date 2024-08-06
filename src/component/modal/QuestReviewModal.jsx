import React from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import { customModalStyles } from './ModalStyle';
import { Text, Div } from '../common/div';
import { GoodIcon, BadIcon } from '../../assets/icons';
import { CloseIcon } from '../../assets/icons';

const ButtonContainer = styled(Div)`
  gap: 20px;
  display: flex;
  justify-content: space-between;
  width: 176px;
  margin-top: 18px;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 23px;
  & svg {
    cursor: pointer;
  }
`;

const Close = styled(CloseIcon)`
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
`;

const QuestReviewModal = ({ isOpen = false, closeModal, id, onGoodIconClick }) => {
  
  return(
    <Modal isOpen={isOpen} style={customModalStyles}>
      <Close onClick={closeModal} />
      <Div style={{ top: '50%', transform: 'translateY(-50%)'}}>
        <Text $weight='SEMIBOLD' $size='16px'>이번 퀘스트는 어땠나요?</Text>
        <Text $weight='LIGHT' $size='13px'>좋았다면, 나만의 루틴에도 추가해드릴게요 🎉</Text>
        <ButtonContainer>
          <GoodIcon onClick={onGoodIconClick} id={id} />
          <BadIcon closeModal={closeModal} id={id} />
        </ButtonContainer>
      </Div>
    </Modal>
  );
}

export default QuestReviewModal;