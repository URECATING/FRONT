import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Start from "./pages/startpage/Start";
import Signup from "./pages/signuppage/Signup";
import Login from "./pages/loginpage/Login";
import OtherUserPage from "./pages/otheruserpage/OtherUserPage.jsx";
import MyPage from "./pages/mypage/MyPage";
import MainPage from "./pages/mainpage/MainPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/otheruserpage/:userId" element={<OtherUserPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/mainpage" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
