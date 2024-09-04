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

const Logo = styled.img`
  width: 126px;
  height: 32px;
  flex-shrink: 0;
  opacity: var(--sds-size-stroke-border);
  background: url(<path-to-image>) lightgray 50% / cover no-repeat;
`;

const TitleWrapper = styled.div`
  width: 100%;
  height: 119px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  flex-shrink: 0;
  color: #737373;
  text-align: center;
  font-size: 96px;
  font-weight: 600;
  line-height: 120%;
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

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 56px;
`;

const FormHead = styled.div`
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: var(--sds-typography-title-page-font-family);
  font-size: 68px;
  font-style: normal;
  white-space: nowrap;
  margin-bottom: 56px;
`;

const Input = styled.input`
  width: 355px;
  height: 40px;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #a28181;
  border-radius: 4px;
`;

const Select = styled.select`
  width: 380px;
  height: 62px;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const LoginButton = styled.button`
  width: 355.714px;
  height: 60px;
  background: #a50034;
  color: #fff;
  font-family: Montserrat;
  font-size: 32px;
  font-weight: 600;
  margin-top: 20px;
  margin-bottom: 20px;
  cursor: pointer;

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
  background: #555;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Login() {
  const navigate = useNavigate();

  const handleSignup = () => {
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
      <FormContainer>
        <FormHead>로그인</FormHead>
        <Input type="text" placeholder="아이디" required />
        <Input type="password" placeholder="비밀번호" required />
        <LoginButton>로그인</LoginButton>
        <LoginExplanation>
          <LoginLink onClick={handleSignup}>회원가입</LoginLink> 하러가기
        </LoginExplanation>
      </FormContainer>
      <Footer>
        <p>FOOTER</p>
      </Footer>
    </AppContainer>
  );
}

export default Login;
