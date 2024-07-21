import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Div } from "./component/common/div";
import { Chat, ChatRoom, MyPage, NotFound, Quest } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Div $height='100vh' $margin='0 auto' $radius='0' $border='1px solid'>
        <Routes>
          <Route path="/" element={<Chat />} />
          <Route path="/chat" element={<ChatRoom />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/quest" element={<Quest />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Div>
    </BrowserRouter>
  );
}

export default App;
