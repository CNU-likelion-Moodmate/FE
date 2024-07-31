import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledButton = styled.button`
  width: 334px;
  height: 50px;
  left: 50%;
  transform: translateX(-50%);
  border: none;
  border-radius: 10px;
  font-size: 16px;
  background-color: ${(props) => (props.isFormValid ? "#FEE270" : "#606060")};
  color: ${(props) => (props.isFormValid ? "black" : "white")};
  cursor: ${(props) => (props.isFormValid ? "pointer" : "default")};
`;

//폼 제출 이벤트가 발생해야 Link이동 됨!
const SignUpBtn = ({ isFormValid, onClick, children, type, to }) => {
  if (isFormValid) {
  return ( 
    <Link to={to}>
      <StyledButton
          isFormValid={isFormValid}
          onClick={onClick}
          type={type}
      >
          {children}
      </StyledButton>
    </Link>);
  }
  return (
    <StyledButton
          isFormValid={isFormValid}
          onClick={onClick}
          type={type}
      >
          {children}
      </StyledButton>
  );
};

export default SignUpBtn;