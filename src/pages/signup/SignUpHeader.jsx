import React from "react";
import styled from "styled-components";
import { ArrowLeftIcon } from "../../assets/icons";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 30px
`;

const SignArrow = styled(ArrowLeftIcon)`
  margin-left: 15px;
`;

const Header = styled.div`
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 600;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`

const SignUpHeader = ( {to} ) => {
    return (
        <>
        <Container>
          <Link to={to}>
            <SignArrow />
          </Link>
            <Header>회원가입</Header>
        </Container>
        </>
    )
}

export default SignUpHeader;