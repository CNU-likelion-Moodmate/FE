import React from 'react';
import styled from 'styled-components';

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const Checkbox = styled.input`
  margin-right: 10px ;
`;

const Label = styled.label`
  font-size: 15px;
  font-weight: 400;
`;

const FullWidthLabel = styled.label`
  font-size: 15px;
  font-weight: 700;
  display: block;
`;

const Link = styled.a`
  color: #959595;
  text-decoration: underline;
  cursor: pointer;
  font-size: 14px;
`;

const CheckboxField = ({ type, name, checked, onChange, label, fullWidth, link }) => {
    return (
        <CheckboxContainer>
          <div style={{ display: 'flex', alignItems: 'center', margin: '5px 0 0 0'}}>
            <Checkbox type={type} name={name} checked={checked} onChange={onChange} />
            {fullWidth ? <FullWidthLabel>{label}</FullWidthLabel> : <Label>{label}</Label>}
          </div>
          {link && <Link href={link}>보기</Link>}
        </CheckboxContainer>
      );
};

export default CheckboxField;