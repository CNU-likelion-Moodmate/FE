import axios from "axios";

const api = axios.create({
  baseURL: "https://moodmate-app-d57dc9f1306a.herokuapp.com/", // 기본 URL
  headers: {
    'Content-Type': 'application/json',
  },
});

const handleApiError = (error, callbacks) => {
  if (error.response) {
    switch (error.response.status) {
      case 409:
        if (callbacks.onConflict) callbacks.onConflict("이메일 또는 사용자 이름이 이미 존재합니다.");
        break;
      default:
        if (callbacks.onServerError) callbacks.onServerError("서버 오류: " + error.response.status);
    }
  } else if (error.request) {
    if (callbacks.onNoResponse) callbacks.onNoResponse("서버 응답 없음: " + error.request);
  } else {
    if (callbacks.onError) callbacks.onError("오류 발생: " + error.message);
  }
};

// 회원가입 요청 함수
export const signUpApi = async (userId, userPw, userName, callbacks) => {
  try {
    const response = await api.post("/signUp", {
      userId,
      userPw,
      userName,
    });
    console.log("성공", response);
    return response;
  } catch (error) {
    handleApiError(error, callbacks);
    throw error;
  }
};