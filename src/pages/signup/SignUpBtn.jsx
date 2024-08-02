import React from 'react';
import styled from 'styled-components';

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

const SignUpBtn = ({ isFormValid, onClick, children, type }) => {
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