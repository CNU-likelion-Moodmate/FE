import React from "react";
import styled from "styled-components";
import { Text } from "../../component/common/div";
import { GRAY2 } from "../../component/constants/color";
import ArrowIconBtn from "./ArrowIconBtn";
import TextArea from "./TextArea";

const Container = styled.div`
  display: flex;
  border-bottom: 1px solid ${GRAY2};
`

const Header = styled(Text)`
  padding: 10px 16px;
  font-family: crayon;
  font-size: 24px;
  text-align: left;
`;

const ChatRoom = () => {
  return(
    <div>
      <Container>
        <ArrowIconBtn />
        <Header>moodmate</Header>
      </Container>
      <TextArea />
    </div>
  )
}

export default ChatRoom;