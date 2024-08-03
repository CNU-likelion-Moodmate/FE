import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { URL } from "../../constants/content";
import { Div } from "./div";
import { GRAY3 } from "../../constants/color";
import { ChatIcon, QuestIcon, MyPageIcon } from "../../assets/icons";

const Container = styled(Div)`
  position: fixed;
  bottom: 0;
  display: flex;
  width: 100%;
  max-width: 388px;
  flex-grow: 1;
  height: 60px;
  border-top: solid 1px ${GRAY3};
  border-radius: 0;
  justify-content: space-evenly;
  display: flex;
  background-color: white;
`;

const LinkButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-grow: 1;
`;

const TabBar = () => {
  const location = useLocation();

  const isSelected = (path) => {
    return location.pathname === path;
  }

  return (
    <Container>
      <LinkButton to={URL.QUEST}>
        <QuestIcon selected={isSelected(URL.QUEST)} />
      </LinkButton>
      <LinkButton to={URL.CHAT}>
        <ChatIcon selected={isSelected(URL.CHAT)} />
      </LinkButton>
      <LinkButton to={URL.MYPAGE}>
        <MyPageIcon selected={isSelected(URL.MYPAGE)} />
      </LinkButton>
    </Container>
  )
}

export default TabBar;