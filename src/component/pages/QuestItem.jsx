import "./QuestItem.css";
import { HeartIcon } from "../../assets/icons";
import React, { useState } from 'react';
import styled from 'styled-components';
import QuestDeleteModal from '../modal/QuestDeleteModal';
import { YELLOW } from "../../constants/color";
import QuestReviewModal from "../modal/QuestReviewModal";

const QuestItemButton = styled.button`
  border: none;
  cursor: pointer;
  padding: 10px 20px;
  margin: 10px 5px;
  border-radius: 17px;
  font-size: 11px;
  background-color: ${(props) => props.color || '#D9D9D9'};
  color: black;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  pointer-events: auto;
`;

const QuestItemContainer = styled.div`
  width: 333px;
  border: 1px solid #D9D9D9;
  border-radius: 13px;
  margin: 0 auto;
  background-color: #FFFFFF;
  cursor: pointer;
  position: relative;
  transition: background-color 0.3s ease;
  ${props => props.noHover && `
    pointer-events: none;
  `}
`;

const QuestItem = ({ quest, handleDelete }) => {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isReviewOpen, setIsReviewOpen] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const handleItemClick = () => {
    setShowButton(!showButton);
  };

    return (
        <>
          <QuestItemContainer onClick={handleItemClick} noHover={showButton}>
            <div className="Quest">
              <div className="QuestText">{quest.contents}</div>
              <HeartIcon className="HeartIcon" />
            </div>
            <div className="QuestDate">{quest.date}</div>
            {showButton && (
              <ButtonContainer>
                <QuestItemButton onClick={()=>setIsDeleteOpen(true)}>삭제할래요</QuestItemButton>
                <QuestItemButton onClick={()=>setIsReviewOpen(true)} color={YELLOW}>완료했어요</QuestItemButton>
              </ButtonContainer>
            )}
          </QuestItemContainer>
          <QuestDeleteModal isOpen={isDeleteOpen} handleDelete={handleDelete} id={quest.questRecordId} closeModal={() => setIsDeleteOpen(false)} />
          <QuestReviewModal isOpen={isReviewOpen} id={quest.questRecordId} closeModal={() => setIsReviewOpen(false)} />
        </>
    )
}

export default QuestItem;
