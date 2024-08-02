import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Div } from "../common/div";
import { useNavigate } from "react-router-dom";
import { post } from "../../api/base";

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
  margin-top: 35px;
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

const Container = styled.div`
  width: 100%;
  position: relative; // 버튼과 에러 메시지를 절대 위치로 배치하기 위해 설정
`;

const ErrorMessage = styled.p`
  font-size: 15px;
  color: red;
  margin-left: 5px;
  position: absolute;
  bottom: 50px;
`;

const LoginInput = () => {
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isPasswordValid = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*\d)[a-z\d]{2,}$/;
    return passwordRegex.test(password);
  };

  const isFormValid = isEmailValid(userId) && isPasswordValid(userPw);
  const buttonText = isFormValid ? "시작하기" : "로그인";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) {
      setError("ID 또는 비밀번호 형식이 올바르지 않습니다.");
      return;
    }

    try {
      console.log("폼 데이터 전송:", { userId, userPw });
      const response = await post('/login', { userId, userPw });
      console.log("서버 응답:", response);

      if (response.isMember === true ) {
        setIsSubmitted(true);
      } 
    } catch (error) {
      setError("이메일과 비밀번호를 확인해주세요.");
    }
  };

  useEffect(() => {
    if (isSubmitted) {
      navigate("/");
    }
  }, [isSubmitted, navigate]);

  return (
    <Div>
      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="이메일"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <Input
          type="password"
          placeholder="비밀번호"
          value={userPw}
          onChange={(e) => setUserPw(e.target.value)}
        />
        <Container>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Button type="submit" isFormValid={isFormValid}>
          {buttonText}
        </Button>
        </Container>
      </Form>
      <SignUpLink href="/signupagree">회원가입</SignUpLink>
    </Div>
  );
};

export default LoginInput;