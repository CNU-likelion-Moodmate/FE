import React from 'react';
import styled from 'styled-components';
import { ArrowIcon } from "../../assets/icons";

const ArrowButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-left: 16px;
`;

const ArrowIconBtn = ({ onClick }) => {
  return (
    <ArrowButton onClick={onClick}>
      <ArrowIcon />
    </ArrowButton>
  );
};

export default ArrowIconBtn;