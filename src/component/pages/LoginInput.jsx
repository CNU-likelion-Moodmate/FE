import React, { useState } from "react";
import styled from "styled-components";
import { Div } from "../common/div";
import { useNavigate } from "react-router-dom";
import { loginApi } from "../../api/user";
import Loading from "../common/Loading";
import { useDispatch } from "react-redux";
import { login } from "../../store/slices/userSlice";

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
  const [isLoading, setIsLoading] = useState(false);
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // const isPasswordValid = (password) => {
  //   const passwordRegex = /^(?=.*[a-z])(?=.*\d)[a-z\d]{10,}$/;
  //   return passwordRegex.test(password);
  // };

  const isFormValid = isEmailValid(userId);
  // const isFormValid = isEmailValid(userId) && isPasswordValid(userPw);
  const buttonText = isFormValid ? "시작하기" : "로그인";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) {
      setError("ID 또는 비밀번호 형식이 올바르지 않습니다.");
      return;
    }
    setIsLoading(true);
    try {
      const response = await loginApi({ userId, userPw });
      console.log(response)
      if (response.status === 200) {
        console.log("success")
        const {userId, userName} = response.data;
        dispatch(login({email: userId, name: userName}))
        setIsLoading(false);
        navigate("/");
      }
      // if (response.data.isMember === true ) {
      //   // dispatch(login({name:  }))
      //   navigate("/");
      // }
    } catch (error) {
      setIsLoading(false);
      setError("아이디랑 비밀번호를 확인해주세요.");
    }
  };

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
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <Button type="submit" isFormValid={isFormValid}>
          {buttonText}
        </Button>
      </Form>
      <SignUpLink href="/signup">회원가입</SignUpLink>
      {isLoading && <Loading />}
    </Div>
  );
};

export default LoginInput;