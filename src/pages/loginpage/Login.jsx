import { useNavigate } from "react-router-dom";
import * as S from "./Styles";

function Login() {
  const navigate = useNavigate();

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
        <S.Input type="text" placeholder="아이디" required />
        <S.Input type="password" placeholder="비밀번호" required />
        <S.LoginButton>로그인</S.LoginButton>
        <S.LoginExplanation>
          <S.LoginLink onClick={handleSignup}>회원가입</S.LoginLink> 하러가기
        </S.LoginExplanation>
      </S.FormContainer>
      {/* <S.Footer>
        <p>FOOTER</p>
      </S.Footer> */}
    </S.AppContainer>
  );
}

export default Login;
