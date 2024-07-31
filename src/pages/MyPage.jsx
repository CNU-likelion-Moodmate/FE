import React, { useState, useEffect } from 'react';
import TabBar from "../component/common/TabBar";
import ProfileImage from '../assets/cards/profile_default.png';
import { Div, ProfileName, ProfileId, Line } from "../component/common/div";
import styled from "styled-components";
import InfoItem from "../component/pages/InfoItem";

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  `

const ProfileImg = styled.div`
display: flex;
flex-direction: column;
gap: 30px;
`

const MyPage = () => {
  const [name, setName] = useState('');
  const [userId, setUserId] = useState('');

  useEffect(() => {
    // 서버에서 데이터 가져오는 대신 임시 데이터 설정
    setName('영주');
    setUserId('yeongju');
  }, []);

  return(
    <div>
      <Div $margin='70px 0 0' $flex={true} $direction='column'>
        <ProfileImg>
          <img src={ProfileImage} alt="Profile"/>
        </ProfileImg>
        <ProfileName>{name}</ProfileName>
        <ProfileId>{userId}</ProfileId>
        <Line />
      </Div>
      <InfoContainer>
        <InfoItem text="문의하기"/>
        <InfoItem text="개인정보처리방침"/>
        <InfoItem text="로그아웃"/>
      </InfoContainer>
      <TabBar />
    </div>
  )
}

export default MyPage;