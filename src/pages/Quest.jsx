import React, { useEffect, useState } from 'react';
import TabBar from '../component/common/TabBar';
import TopAppBar from './TopAppBar';
import QuestItem from '../component/pages/QuestItem';
import styled from "styled-components";
import { GRAY1 } from '../constants/color';
import DeleteQuestModal from '../component/modal/DeleteQuestModal';
import { LoadQuestApi, DeleteQuestApi } from '../api/quest';
import Loading from '../component/common/Loading';

const QuestItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: calc(100% - 110px);
  overflow-y: auto;
`

const Quest = () => {
  const [isDeleteCompleteOpen, setIsDeleteCompleteOpen] = useState(false);
  const [questList, setQuestList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const res = await LoadQuestApi('user2@test.com');
      setQuestList(res.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  const handleDelete = async (id) => {
    setIsLoading(true);
    try {
        await DeleteQuestApi(id);
        await fetchData();
        setIsLoading(false);
        setIsDeleteCompleteOpen(true);
    } catch (error) {
        console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return(
    <div style={{ height: 'calc(100vh - 60px)', backgroundColor: GRAY1, paddingBottom: 20 }}>
      <TopAppBar />
      <QuestItemContainer>
        {questList.length > 0 && questList.slice(0).reverse().map((quest, index) => (
          <QuestItem key={index} quest={quest} handleDelete={handleDelete} />
         ))}
      </QuestItemContainer>
      <TabBar />
      <DeleteQuestModal isOpen={isDeleteCompleteOpen} closeModal={() => setIsDeleteCompleteOpen(false)} />
      {isLoading && <Loading />}
    </div>
  );
}

export default Quest;