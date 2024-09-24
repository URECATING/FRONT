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

export const TitleWrapper = styled.div`
  width: 100%;
  height: 119px;
  /* height: 119px; */
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Logo = styled.img`
  width: 7%;
  aspect-ratio: 126 / 32;
  /* height: 32px; */
  flex-shrink: 0;
  opacity: var(--sds-size-stroke-border);
  background: lightgray 50% / cover no-repeat;
`;

export const UtingLogo = styled.img`
  width: 40%;
  flex-shrink: 0;
  margin-bottom: 1vw;
  color: #737373;
  text-align: center;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: var(--sds-typography-title-page-font-family);
  font-size: 5vw;
  font-style: normal;
  font-weight: var(--sds-typography-title-page-font-weight);
  line-height: 120%; /* 115.2px */
  letter-spacing: -1.92px;
  white-space: nowrap;
`;

export const DividerWrapper = styled.div`
  display: flex;
  justify-content: center; /* 가운데 정렬 */
  /* margin-top: 95px; 위쪽 여백 */
  margin-top: 3vw;
`;

export const Divider = styled.div`
  width: 80%;
  height: 2px;
  background: #ccc;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  aspect-ratio: 1728 / 1117;
`;

export const ImagePlaceholder = styled.div`
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 56px;
  margin-bottom: 56px;
  font-size: 18px;
  color: #555;
  width: 55%;
  aspect-ratio: 1728 / 1117;
  object-fit: cover;
`;

export const PromotionText = styled.div`
  text-align: center;
  padding: 20px;
  color: #555;
`;

export const Heading = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin: 10px 0;
  color: #a50034;
`;

export const SubHeading = styled.h3`
  font-size: 20px;
  font-weight: normal;
  margin: 8px 0;
  color: #737373;
`;

export const Description = styled.p`
  font-size: 15px;
  margin: 10px 0;
  color: #737373;
`;

export const StartButton = styled.button`
  width: 21%;
  aspect-ratio: 356 / 60;
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

export const LoginExplanation = styled.div`
  /* width: 406px;
  height: 34px; */
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
