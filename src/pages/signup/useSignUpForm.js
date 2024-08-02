import { useState } from 'react';
import { signUpApi } from '../../api/signup';

const useSignUpForm = (navigate) => {
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [userNameError, setUserNameError] = useState('');

  const isIdValid = (id) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(id);
  const isPasswordValid = (password) => /^(?=.*[a-z])(?=.*\d)[a-z\d]{2,}$/.test(password);
  const isFormValid = isIdValid(userId) && isPasswordValid(userPw) && confirmPassword && userPw === confirmPassword && userName;

  const handleSuccess = () => {
    if (window.confirm("회원가입이 완료되었습니다.")) {
      navigate('/login');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setEmailError('');
    setPasswordError('');
    setConfirmPasswordError('');
    setUserNameError('');

    let hasError = false;

    if (!isIdValid(userId)) {
      setEmailError('유효한 이메일 주소를 입력해주세요.');
      hasError = true;
    }

    if (!isPasswordValid(userPw)) {
      setPasswordError('비밀번호는 영어 소문자와 숫자를 포함해야 합니다.');
      hasError = true;
    }

    if (userPw !== confirmPassword) {
      setConfirmPasswordError('비밀번호가 일치하지 않습니다.');
      hasError = true;
    }

    if (!userName) {
      setUserNameError('이름을 입력해주세요.');
      hasError = true;
    }

    if (hasError) return;

    try {
      const response = await signUpApi(userId, userPw, userName, {
        onConflict: (msg) => setEmailError(msg),
        onBadRequest: (msg) => setEmailError(msg),
        onServerError: (msg) => setEmailError(msg),
        onNoResponse: (msg) => setEmailError(msg),
        onError: (msg) => setEmailError(msg),
      });

      if (response.status === 200) {
        handleSuccess();
      }
    } catch (error) {
      console.error('회원가입 요청 중 오류가 발생했습니다.', error);
    }
  };

  return {
    userId,
    setUserId,
    userPw,
    setUserPw,
    confirmPassword,
    setConfirmPassword,
    userName,
    setUserName,
    emailError,
    passwordError,
    confirmPasswordError,
    userNameError,
    isFormValid,
    handleSubmit,
  };
};

export default useSignUpForm;