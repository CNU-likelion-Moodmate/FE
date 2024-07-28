import React, { useState } from 'react';
import styled from 'styled-components';
import SignUpHeader from './SignUpHeader';
import SignUpBtn from './SignUpBtn';
import CheckboxField from './CheckboxField';

const Container = styled.div`
  width: 100%;
  max-width: 390px;
  height: 350px;
  padding: 30px;
  margin: 0 auto;
`;

const SignUpAgree = () => {
  const [allChecked, setAllChecked] = useState(false);
  const [isChecked, setIsChecked] = useState({
    age: false,
    terms: false,
    privacy: false,
  });

  const handleAllChange = () => {
    const newValue = !allChecked;
    setAllChecked(newValue);
    setIsChecked({
      age: newValue,
      terms: newValue,
      privacy: newValue,
    });
  };

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setIsChecked((prev) => ({
      ...prev,
      [name]: checked,
    }));
    if (!checked) {
      setAllChecked(false);
    } else if (checked && isChecked.age && isChecked.terms ) {
      setAllChecked(true);
    }
  };

  const isFormValid = allChecked || (isChecked.age && isChecked.terms && isChecked.privacy );

  return (
    <>
      <SignUpHeader to="/signup" />
      <Container>
        <CheckboxField
          type="checkbox"
          checked={allChecked}
          onChange={handleAllChange}
          label="약관 전체 동의"
          fullWidth
        />
        <CheckboxField
          type="checkbox"
          name="age"
          checked={isChecked.age}
          onChange={handleChange}
          label="만 14세 이상입니다"
          link="/"
        />
        <CheckboxField
          type="checkbox"
          name="terms"
          checked={isChecked.terms}
          onChange={handleChange}
          label="(필수) 서비스 이용약관"
          link="/"
        />
        <CheckboxField
          type="checkbox"
          name="privacy"
          checked={isChecked.privacy}
          onChange={handleChange}
          label="(필수) 개인정보 처리방침"
          link="/"
        />
      </Container>
      <SignUpBtn isFormValid={isFormValid} to="/" type="button">회원가입</SignUpBtn>
    </>
  );
};

export default SignUpAgree;