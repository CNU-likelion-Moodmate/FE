import React from 'react';
import styled from 'styled-components';
import { ArrowIcon } from "../../assets/icons";
import { Link, useLocation } from "react-router-dom";
import { URL } from '../../component/constants/content';

const ArrowLinkButton = styled(Link)`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-left: 16px;
`;

const ArrowIconBtn = () => {

  const location = useLocation();

  const isSelected = (path) => {
    return location.pathname === path;
  }

  return (
    <ArrowLinkButton to={URL.CHAT}>
      <ArrowIcon selected={isSelected(URL.CHAT)} />
    </ArrowLinkButton>
  );
};

export default ArrowIconBtn;