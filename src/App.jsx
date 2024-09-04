import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import { Routes } from "react-router-dom";
import Start from "./pages/start";
import Signup from "./pages/signup";
import Login from "./pages/login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
