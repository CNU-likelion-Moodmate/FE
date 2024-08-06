import React, { useState } from "react";
import styled from "styled-components";
import SignUpInput from "./SignUpInput";
import SignUpHeader from "./SignUpHeader";
import SignUpBtn from "./SignUpBtn";

const Container = styled.div`
width: 100%;
margin-bottom: 54px;
`

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [userName, setUserName] = useState("");

    const isFormValid = email && password && confirmPassword && password === confirmPassword && userName;

    return (
        <>
        <SignUpHeader to="/login" />
        <Container>
          <SignUpInput
            id="email"
            type="email"
            placeholder="moodmate@mail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="이메일 아이디"
          />
          <SignUpInput
            id="userName"
            type="text"
            placeholder="이름을 입력해주세요"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            label="이름"
          />
          <SignUpInput
            id="password"
            type="password"
            placeholder="비밀번호를 입력해주세요"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label="비밀번호"
          />
          <SignUpInput
            id="confirmPassword"
            type="password"
            placeholder="위와 동일한 비밀번호를 입력해 주세요"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            label="비밀번호 확인"
          />
        </Container>
        <SignUpBtn isFormValid={isFormValid} to="/signupagree" state={{email, password, userName}} type="submit">다음</SignUpBtn>
        </>
    )
}

export default SignUp;