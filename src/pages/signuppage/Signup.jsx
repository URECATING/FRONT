import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import * as S from "./Styles";

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

  const handleSignUp = () => {
    console.log(nameRef.current.value);
    console.log(idRef.current.value);
    console.log(pwRef.current.value);
    console.log(group);
    console.log(gender);
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
        <S.FormHead>회원가입</S.FormHead>
        <S.Input ref={nameRef} type="text" placeholder="이름" required />
        <S.Input ref={idRef} type="text" placeholder="아이디" required />
        <S.Input ref={pwRef} type="password" placeholder="비밀번호" required />
        <S.Select required onChange={handleGroupChange}>
          <option value="" disabled selected>
            소속
          </option>
          <option value="backend_off">백엔드_대면</option>
          <option value="frontend_off">프론트_대면</option>
          <option value="backend_on">백엔드_비대면</option>
          <option value="frontend_on">프론트_비대면</option>
        </S.Select>
        <S.Select required onChange={handleGenderChange}>
          <option value="" disabled selected>
            성별
          </option>
          <option value="man">남성</option>
          <option value="woman">여성</option>
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
