import "./QuestItem.css";
import { HeartIcon } from "../../assets/icons";
import React, { useState } from 'react';
import styled from 'styled-components';

const QuestItemButton = styled.button`
  border: none;
  cursor: pointer;
  padding: 10px 20px;
  margin: 10px 5px;
  border-radius: 17px;
  font-size: 11px;
  background-color: ${(props) => props.color || '#D9D9D9'};
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

const QuestItem = () => {
    const [showButton, setShowButton] = useState(false);

    const handleItemClick = () => {
        setShowButton(!showButton);
    };

    return (
        <QuestItemContainer onClick={handleItemClick} noHover={showButton}>
            <div className="Quest">
                <div className="QuestText">신곡 차트에서 내 플레이리스트 만들기</div>
                <HeartIcon className="HeartIcon" />
            </div>
            <div className="QuestDate">{new Date().toLocaleDateString()}</div>
            {showButton && (
                <ButtonContainer>
                    <QuestItemButton>삭제할래요</QuestItemButton>
                    <QuestItemButton color="#FEE270">완료했어요</QuestItemButton>
                </ButtonContainer>
            )}
        </QuestItemContainer>
    )
}

export default QuestItem;
