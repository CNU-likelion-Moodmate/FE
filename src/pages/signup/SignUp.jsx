import React, { useState } from "react";
import styled from "styled-components";
import SignUpInput from "./SignUpInput";
import SignUpHeader from "./SignUpHeader";
import SignUpBtn from "./SignUpBtn";

const Container = styled.div`
width: 100%;
height: 350px;
`

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const isFormValid = email && password && confirmPassword && password === confirmPassword;

    return (
        <>
        <SignUpHeader />

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
            id="password"
            type="password"
            placeholder="영어 소문자와 숫자를 포함하여 10자 이상 입력"
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
        <SignUpBtn isFormValid={isFormValid}>다음</SignUpBtn>
        </>
    )
}

export default SignUp;