import React from "react";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import axios from "axios";
import * as S from "./styles";

function Login() {
  const navigate = useNavigate();

  const loginRef = useRef(null);
  const pwRef = useRef(null);

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://52.78.9.240:8080/api/user/login", {
        login: loginRef.current.value,
        password: pwRef.current.value,
      });
      if (res.status === 200) {
        navigate("/mainpage");
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("userId", res.data.data.id);
      }
    } catch (e) {
      throw new Error("API 호출에 실패했습니다.");
    }
  };

  const handleSignup = () => {
    navigate("/signup");
  };

  return (
    <S.AppContainer>
      <S.Header>
        <S.Logo src="/src/assets/LGLogo.png" alt="LGU+ Logo" />
      </S.Header>
      <S.TitleWrapper>
        <S.UtingLogo src="/src/assets/UtingLogo.png" alt="UTing Logo" />
      </S.TitleWrapper>
      <S.DividerWrapper>
        <S.Divider />
      </S.DividerWrapper>
      <S.FormContainer>
        <S.FormHead>로그인</S.FormHead>
        <S.Input ref={loginRef} type="text" placeholder="아이디" required />
        <S.Input ref={pwRef} type="password" placeholder="비밀번호" required />
        <S.LoginButton onClick={handleLogin}>로그인</S.LoginButton>
        <S.LoginExplanation>
          <S.LoginLink onClick={handleSignup}>회원가입</S.LoginLink> 하러가기
        </S.LoginExplanation>
      </S.FormContainer>
    </S.AppContainer>
  );
}

export default Login;
