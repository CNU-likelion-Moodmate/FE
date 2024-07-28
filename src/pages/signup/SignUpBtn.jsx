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
  cursor: pointer;
  background-color: ${(props) => (props.isFormValid ? "#FEE270" : "#606060")};
  color: ${(props) => (props.isFormValid ? "black" : "white")};
`;

const SignUpBtn = ({ isFormValid, onClick, children, type = 'submit' }) => {
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