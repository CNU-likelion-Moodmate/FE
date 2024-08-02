import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import SignUpInput from "./SignUpInput";
import SignUpHeader from "./SignUpHeader";
import SignUpBtn from "./SignUpBtn";
import useSignUpForm from "./useSignUpForm";

const Container = styled.div`
  width: 100%;
  height: 450px;
  position: relative; // 부모 컨테이너에 상대적 위치 지정
`;

const InputWrapper = styled.div`
  margin-bottom: 10px; // 입력창과 버튼 사이에 여백 추가
`;

const ErrorMessage = styled.p`
  font-size: 14px;
  color: red;
  margin-left: 20px;
  position: absolute; // 에러 메시지를 절대 위치로 설정
  bottom: 0px; // 입력창 아래에 위치
  left: 0;
  width: 100%;
`;

const SignUp = () => {
  const navigate = useNavigate();
  const {
    userId, setUserId,
    userPw, setUserPw,
    confirmPassword, setConfirmPassword,
    userName, setUserName,
    emailError, passwordError,
    confirmPasswordError, userNameError,
    isFormValid,
    handleSubmit,
  } = useSignUpForm(navigate);

  return (
    <>
      <SignUpHeader to="/signupagree" />
      <form onSubmit={handleSubmit}>
        <Container>
          <InputWrapper>
            <SignUpInput
              id="userId"
              type="email"
              placeholder="moodmate@mail.com"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              label="이메일 아이디"
            />
            {emailError && <ErrorMessage>{emailError}</ErrorMessage>}
          </InputWrapper>
          <InputWrapper>
            <SignUpInput
              id="userPw"
              type="password"
              placeholder="영어 소문자와 숫자를 포함하여 입력"
              value={userPw}
              onChange={(e) => setUserPw(e.target.value)}
              label="비밀번호"
            />
            {passwordError && <ErrorMessage>{passwordError}</ErrorMessage>}
          </InputWrapper>
          <InputWrapper>
            <SignUpInput
              id="confirmPassword"
              type="password"
              placeholder="위와 동일한 비밀번호를 입력해 주세요"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              label="비밀번호 확인"
            />
            {confirmPasswordError && <ErrorMessage>{confirmPasswordError}</ErrorMessage>}
          </InputWrapper>
          <InputWrapper>
            <SignUpInput
              id="userName"
              type="text"
              placeholder="이름을 입력해주세요"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              label="사용자 이름"
            />
            {userNameError && <ErrorMessage>{userNameError}</ErrorMessage>}
          </InputWrapper>
          <SignUpBtn isFormValid={isFormValid} type="submit">회원가입</SignUpBtn>
        </Container>
      </form>
    </>
  );
};

export default SignUp;