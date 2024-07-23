import React from 'react';
import TabBar from '../component/common/TabBar';
import TopAppBar from './TopAppBar';
import QuestItem from '../component/pages/QuestItem';
import styled from "styled-components";
import { GRAY1 } from '../component/constants/color';
import QuestDeleteModal from '../component/modal/QuestDeleteModal';
import QuestReviewModal from '../component/modal/QuestReviewModal';

const QuestItemContainer = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
`

const BackgroundColor = styled.div`
height: calc(100vh - 60px);
background-color: ${GRAY1};
`

const Quest = () => {
  return(
    <>
      <BackgroundColor>
        <TopAppBar />
        <QuestItemContainer>
          <QuestItem />
          <QuestItem />
          <QuestItem />
        </QuestItemContainer>
      </BackgroundColor>
      <TabBar />
      <QuestDeleteModal />
      <QuestReviewModal />
    </>
  );
}

export default Quest;