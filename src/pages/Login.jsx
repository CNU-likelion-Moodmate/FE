import React from "react";
import styled from "styled-components";
import LoginInput from "../component/pages/LoginInput";

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40%;
`;

const HeaderText = styled.div`
  font-family: Crayon;
  font-size: ${props => props.size};
  margin-top: 10px
`

const Login = () => {
    return (
        <>
        <Header>
            <HeaderText size='50px'>moodmate</HeaderText>
            <HeaderText size='16px'>나만을 위한 감정관리 대화메이트</HeaderText>
        </Header>
        <LoginInput />
        </>
    )
}

export default Login;