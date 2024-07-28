import React, { useState } from "react";
import styled from "styled-components";
import { Div } from "../common/div";
import { Link } from "react-router-dom";

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

const LoginLink = styled(Link)`
  display: inline-block;
  width: 100%;
  text-decoration: none;
`

const Button = styled.button`
  width: 100%;
  padding: 13px;
  margin-top: 25px;
  border: none;
  border-radius: 10px;
  background-color: #606060;
  color: white;
  font-size: 16px;
  cursor: ${(props) => (props.isFormValid ? "pointer" : "default")};
  background-color: ${(props) => (props.isFormValid ? "#FEE270" : "#606060")};
  color: ${(props) => (props.isFormValid ? "black" : "white")};
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

    // 상태 변수 정의
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 이메일 형식을 검사하는 함수
  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // 비밀번호 형식을 검사하는 함수
  const isPasswordValid = (password) => {
    // 영어 소문자와 숫자를 포함하여 10자 이상인지 확인
    const passwordRegex = /^(?=.*[a-z])(?=.*\d)[a-z\d]{10,}$/;
    return passwordRegex.test(password);
  };

  // 버튼 텍스트를 결정하는 함수
  const isFormValid = isEmailValid(email) && isPasswordValid(password);
  const buttonText = isFormValid ? "시작하기" : "로그인";

  return (
    <Div>
      <Form>
      <Input
          type="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {isFormValid ? (
          <LoginLink to="/">
            <Button type="button" isFormValid={isFormValid}>
              {buttonText}
            </Button>
          </LoginLink>
        ) : (
          <Button type="button" isFormValid={isFormValid}>
            {buttonText}
          </Button>
        )}
      </Form>
      <SignUpLink href="/signup">회원가입</SignUpLink>
    </Div>
  );
};

export default LoginInput;