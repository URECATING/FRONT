import { useNavigate } from "react-router-dom";
import * as S from "./Styles";

function Start() {
  const navigate = useNavigate();

  const handleStart = () => {
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
      <S.Main>
        <S.ImagePlaceholder>유레카팅 서비스 소개 이미지</S.ImagePlaceholder>
        <S.StartButton onClick={handleStart}>시작하기</S.StartButton>
        <S.LoginExplanation>
          이미 계정이 있나요? <S.LoginLink href="/login">로그인</S.LoginLink>
        </S.LoginExplanation>
      </S.Main>
      {/* <Footer>
        <p>FOOTER</p>
      </Footer> */}
    </S.AppContainer>
  );
}

export default Start;
