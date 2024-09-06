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
  background: url(<path-to-image>) lightgray 50% / cover no-repeat;
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

// export const Footer = styled.footer`
//   width: 100%;
//   height: 204px;
//   background: #555;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;
