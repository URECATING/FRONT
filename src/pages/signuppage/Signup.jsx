import React from "react";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import axios from "axios";
import * as S from "./styles";

function Signup() {
  const [group, setGroup] = useState("");
  const [gender, setGender] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const nameRef = useRef(null);
  const idRef = useRef(null);
  const pwRef = useRef(null);

  const handleGroupChange = (e) => {
    setGroup(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleSignUp = async () => {
    console.log(nameRef.current.value);
    console.log(idRef.current.value);
    console.log(pwRef.current.value);
    console.log(group);
    console.log(gender);
    try {
      console.log("회원가입 시도");
      const res = await axios.post("http://52.78.9.240:8080/api/user/join", {
        userName: nameRef.current.value,
        login: idRef.current.value,
        password: pwRef.current.value,
        team: group,
        gender: gender,
        phone: "010-1234-5678",
      });
      if (res.status === 200) {
        handleLogin();
      }
    } catch (e) {
      throw new Error("API 호출에 실패했습니다.");
    }
  };
  return (
    <S.AppContainer>
      <S.Header>
        <S.Logo src="/public/png/LGLogo.png" alt="LGU+ Logo" />
      </S.Header>
      <S.TitleWrapper>
        <S.UtingLogo src="/public/png/UtingLogo.png" alt="UTing Logo" />
      </S.TitleWrapper>
      <S.DividerWrapper>
        <S.Divider />
      </S.DividerWrapper>
      <S.FormContainer>
        <S.FormHead>회원가입</S.FormHead>
        <S.Input ref={nameRef} type="text" placeholder="이름" required />
        <S.Input ref={idRef} type="text" placeholder="아이디" required />
        <S.Input
          ref={pwRef}
          type="password"
          placeholder="비밀번호는 8자 이상이어야 하며, 영문과 숫자를 포함"
          required
        />
        <S.Select required onChange={handleGroupChange}>
          <option value="" disabled selected>
            소속
          </option>
          <option value="백엔드_대면">백엔드_대면</option>
          <option value="프론트_대면">프론트_대면</option>
          <option value="백엔드_비대면">백엔드_비대면</option>
          <option value="프론트_비대면">프론트_비대면</option>
        </S.Select>
        <S.Select required onChange={handleGenderChange}>
          <option value="" disabled selected>
            성별
          </option>
          <option value="M">남성</option>
          <option value="W">여성</option>
        </S.Select>
        <S.SignupButton onClick={handleSignUp}>회원가입</S.SignupButton>
        <S.LoginExplanation>
          <S.LoginLink onClick={handleLogin}>로그인</S.LoginLink> 하러가기
        </S.LoginExplanation>
      </S.FormContainer>
    </S.AppContainer>
  );
}

export default Signup;
