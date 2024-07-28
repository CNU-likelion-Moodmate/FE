import React, { useState } from "react";
import styled from "styled-components";

const Form = styled.div`
  width: 100%;
  max-width: 390px;
  padding: 20px;
  margin-top: 5px;
`;

const Label = styled.label`
  display: block;
  font-size: 16px;
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 5px;
  margin: 10px 0 0 0;
  border: none;
  border-bottom: 1px solid #959595;
  font-size: 15px;
   &::placeholder {
    color: #959595;
  }
  &:focus {
    outline: none;
  }
`;

const SignUpInput = ({ id, type, placeholder, value, onChange, label }) => {
  return (
      <Form>
        <Label htmlFor={id}>{label}</Label>
        <Input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />      
      </Form>
  );
};

export default SignUpInput;