import { useNavigate } from "react-router-dom";
import * as S from "./styles";

function Start() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/signup");
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
      <S.Main>
        <S.ImagePlaceholder>
          <S.PromotionText>
            <S.Heading>마음에 드는 모임을 찾아 가입하고,</S.Heading>
            <S.SubHeading>
              새로운 친구들과 함께 즐거운 시간을 보내세요!
            </S.SubHeading>
            <br></br>
            <S.Description>
              Uting은 여러분의 소중한 만남을 지원합니다.
            </S.Description>
          </S.PromotionText>
        </S.ImagePlaceholder>
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
