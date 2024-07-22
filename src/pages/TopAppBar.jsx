import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { URL } from "../../src/component/constants/content";
import { Div } from "../../src/component/common/div";
import { BLACK, GRAY3 } from "../../src/component/constants/color";
import { ChatIcon, QuestIcon, MyPageIcon } from "../../src/assets/icons";

const Container = styled(Div)`
  width: 100%;
  height: 90px;
  justify-content: space-evenly;
  display: flex;
  margin-bottom: 20px;
`;

const LinkButton = styled(Link)`
  color: ${ props => props.$color || BLACK };
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-grow: 1;
  font-family: crayon;
`;

const Underline = styled.div`
  height: ${ props => props.$height || '4px'};
  width: ${ props => props.$width || '110%'};
  border-radius : 8px;
  background-color: ${ props => props.$color || BLACK };
  margin-top: 10px;
`;

const TopAppBar = () => {
  const location = useLocation();

  const isSelected = (path) => {
    return location.pathname === path;
  }

  return (
    <Container>
      <div>
        <LinkButton to={URL.QUEST}>
        추천 받은 퀘스트
        <Underline />
        </LinkButton>
      </div>
      <div>
        <LinkButton to={URL.QUESTROUTINE}>
          나만의 퀘스트 루틴
        <Underline />
        </LinkButton>
      </div>
    </Container>
  )
}

export default TopAppBar;