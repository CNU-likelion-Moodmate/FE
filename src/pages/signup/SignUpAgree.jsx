import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import SignUpHeader from './SignUpHeader';
import SignUpBtn from './SignUpBtn';
import CheckboxField from './CheckboxField';
import { useLocation, useNavigate } from 'react-router-dom';
import { signUpApi } from '../../api/user';
import Loading from '../../component/common/Loading';

const Container = styled.div`
  width: 100%;
  max-width: 390px;
  height: 350px;
  padding: 30px;
  margin: 0 auto;
`;

const SignUpAgree = () => {
  const [allChecked, setAllChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isChecked, setIsChecked] = useState({
    age: false,
    terms: false,
    privacy: false,
  });

  const signUpData = useLocation().state;
  const navigation = useNavigate();

  const handleSubmit = async () => {
    setIsLoading(true);
    const data = {userId: signUpData.email, userPw: signUpData.password, userName: signUpData.userName};
    try {
      const res = await signUpApi(data);
      if (res.status === 200) {
        setIsLoading(false);
        navigation('/login');
      }
    } catch (error) {
      console.error(error);
    }
  }

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

  const handleButtonClick = () => {
    if (isFormValid) {
      navigate('/signup');
    }
  };

  return (
    <>
      <SignUpHeader to="/login" />
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
          link="/age"
        />
        <CheckboxField
          type="checkbox"
          name="terms"
          checked={isChecked.terms}
          onChange={handleChange}
          label="(필수) 서비스 이용약관"
          link="/terms"
        />
        <CheckboxField
          type="checkbox"
          name="privacy"
          checked={isChecked.privacy}
          onChange={handleChange}
          label="(필수) 개인정보 처리방침"
          link="/privacy"
        />
      </Container>

      <SignUpBtn onClick={handleSubmit} isFormValid={isFormValid} type="button">회원가입</SignUpBtn>
      {isLoading && <Loading />}
    </>
  );
};

export default SignUpAgree;