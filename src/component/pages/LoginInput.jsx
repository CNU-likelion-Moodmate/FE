import React, { useState } from "react";
import styled from "styled-components";
import { Div } from "../common/div";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 390px;
  padding: 20px;
  margin-top: 30px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 5px 0;
  border-radius: 10px;
  background-color: #F1F3F5;
  border: none;
  font-size: 16px;
   &::placeholder {
    color: #959595;
  }
  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 13px;
  margin-top: 25px;
  border: none;
  border-radius: 10px;
  background-color: #606060;
  color: white;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #FEE270;
    color: black;
  }
`;

const SignUpLink = styled.a`
  color: #606060;
  font-size: 15px;
  cursor: pointer;
  text-decoration: underline;
  display: block;
  text-align: center;
`;

const LoginInput = () => {

    const [isHovered, setIsHovered] = useState(false);

  return (
    <Div>
      <Form>
        <Input type="email" placeholder="이메일" />
        <Input type="password" placeholder="비밀번호" />
        <Button
          type="submit"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {isHovered ? "시작하기" : "로그인"}
        </Button>
      </Form>
      <SignUpLink href="/signup">회원가입</SignUpLink>
    </Div>
  );
};

export default LoginInput;