import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Div } from "./component/common/div";
import { Chat, ChatRoom, MyPage, NotFound, Quest, QuestRoutine, Login, SignUp, SignUpAgree } from "./pages";
import { GRAY3 } from "./constants/color";

function App() {
  return (
    <BrowserRouter>
      <Div $height='100vh' $margin='0 auto' $radius='0' $border={`1px solid ${GRAY3}`}>
        <Routes>
          <Route path="/" element={<Chat />} />
          <Route path="/chat" element={<ChatRoom />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/quest" element={<Quest />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/questroutine" element={<QuestRoutine />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signupagree" element={<SignUpAgree />} />
        </Routes>
      </Div>
    </BrowserRouter>
  );
}

export default App;
