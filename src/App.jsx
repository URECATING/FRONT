import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Start from "./pages/start";
import Signup from "./pages/signup";
import Login from "./pages/login";
import MyPage from "./pages/MyPage";

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
