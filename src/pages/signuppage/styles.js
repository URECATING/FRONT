import styled from "styled-components";

export const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  padding: 20px;
`;

export const Logo = styled.img`
  width: 126px;
  height: 32px;
  flex-shrink: 0;
  opacity: var(--sds-size-stroke-border);
  background: lightgray 50% / cover no-repeat;
`;

export const TitleWrapper = styled.div`
  width: 100%;
  height: 119px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UtingLogo = styled.img`
  width: 40%;
  flex-shrink: 0;
  color: #737373;
  text-align: center;
  font-size: 96px;
  font-weight: 600;
  line-height: 120%;
  white-space: nowrap;
`;

export const DividerWrapper = styled.div`
  display: flex;
  justify-content: center; /* 가운데 정렬 */
  width: 100%; /* 부모 요소의 너비를 100%로 설정 */
  margin-top: 95px; /* 위쪽 여백 */
`;

export const Divider = styled.div`
  width: 80%;
  height: 2px;
  background: #ccc;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 56px;
`;

export const FormHead = styled.div`
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: var(--sds-typography-title-page-font-family);
  font-size: 68px;
  font-style: normal;
  white-space: nowrap;
  margin-bottom: 56px;
`;

export const Input = styled.input`
  width: 355px;
  height: 40px;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #a28181;
  border-radius: 4px;
`;

export const Select = styled.select`
  width: 380px;
  height: 62px;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

export const SignupButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 355.714px;
  height: 60px;
  background: #a50034;
  color: #fff;
  font-family: Montserrat;
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 20px;
  margin-top: 20px;
  cursor: pointer;

  &:hover {
    background-color: #900000;
  }
`;

export const LoginExplanation = styled.div`
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

export const LoginLink = styled.a`
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
