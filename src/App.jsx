import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Start from "./pages/startpage/Start";
import Signup from "./pages/signuppage/Signup";
import Login from "./pages/loginpage/Login";
import MyPage from "./pages/mypage/MyPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mypage/:userId" element={<MyPage />} />
      </Routes>
    </Router>
  );
}

export default App;
