import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { URL } from "../../src/component/constants/content";
import { Div } from "../../src/component/common/div";
import { GRAY3 } from "../../src/component/constants/color";
import { ChatIcon, QuestIcon, MyPageIcon } from "../../src/assets/icons";

const Container = styled(Div)`
  position: fixed;
  width: 100%;
  height: 60px;
  justify-content: space-evenly;
  display: flex;
`;

const LinkButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-grow: 1;
  font-family: crayon;
`;

const TopAppBar = () => {
  const location = useLocation();

  const isSelected = (path) => {
    return location.pathname === path;
  }

  return (
    <Container>
      <LinkButton to={URL.QUEST}>
        추천 받은 퀘스트
      </LinkButton>
      <LinkButton to={URL.QUESTROUTINE}>
        나만의 퀘스트 루틴
      </LinkButton>
    </Container>
  )
}

export default TopAppBar;