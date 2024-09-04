import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  padding: 20px;
`;

const TitleWrapper = styled.div`
  width: 100%;
  height: 119px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Logo = styled.img`
  width: 126px;
  height: 32px;
  flex-shrink: 0;
  opacity: var(--sds-size-stroke-border);
  background: url(<path-to-image>) lightgray 50% / cover no-repeat;
`;

const Title = styled.div`
  flex-shrink: 0;
  margin-bottom: 74;
  color: #737373;
  text-align: center;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: var(--sds-typography-title-page-font-family);
  font-size: 96px;
  font-style: normal;
  font-weight: var(--sds-typography-title-page-font-weight);
  line-height: 120%; /* 115.2px */
  letter-spacing: -1.92px;
  white-space: nowrap;
`;

const DividerWrapper = styled.div`
  display: flex;
  justify-content: center; /* 가운데 정렬 */
  width: 100%; /* 부모 요소의 너비를 100%로 설정 */
  margin-top: 95px; /* 위쪽 여백 */
`;

const Divider = styled.div`
  width: 80%;
  height: 2px;
  background: #ccc;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImagePlaceholder = styled.div`
  width: 444px;
  height: 344px;
  flex-shrink: 0;
  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 56px;
  margin-bottom: 56px;
  font-size: 18px;
  color: #555;
`;

const StartButton = styled.button`
  width: 355.714px;
  height: 60px;
  flex-shrink: 0;
  border-radius: var(--sds-size-radius-100);
  background: #a50034;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.3);
  cursor: pointer;

  color: #fff;
  text-align: center;
  font-family: Montserrat;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 62.5% */
  text-transform: uppercase;
  margin-bottom: 20px;

  &:hover {
    background-color: #900000;
  }
`;

const LoginExplanation = styled.div`
  width: 406px;
  height: 34px;
  flex-shrink: 0;
  color: var(--black-100, #000);
  text-align: center;
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  text-transform: uppercase;
  margin-bottom: 56px;
`;

const LoginLink = styled.a`
  color: var(--black-100, #a50034);
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  text-transform: uppercase;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Footer = styled.footer`
  width: 100%;
  height: 204px;
  flex-shrink: 0;
  background: #555;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Start() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/signup");
  };

  return (
    <AppContainer>
      <Header>
        <Logo src="/src/assets/LGLogo.png" alt="LGU+ Logo" />
      </Header>
      <TitleWrapper>
        <Title>유레카팅 logo</Title>
      </TitleWrapper>
      <DividerWrapper>
        <Divider />
      </DividerWrapper>
      <Main>
        <ImagePlaceholder>유레카팅 서비스 소개 이미지</ImagePlaceholder>
        <StartButton onClick={handleStart}>시작하기</StartButton>
        <LoginExplanation>
          이미 계정이 있나요? <LoginLink href="/login">로그인</LoginLink>
        </LoginExplanation>
      </Main>
      <Footer>
        <p>FOOTER</p>
      </Footer>
    </AppContainer>
  );
}

export default Start;
