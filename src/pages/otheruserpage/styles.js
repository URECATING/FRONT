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
  width: 25%;
  flex-shrink: 0;
  color: #737373;
  text-align: center;
  font-size: 96px;
  font-weight: 600;
  line-height: 120%;
  white-space: nowrap;
  cursor: pointer;
`;

export const DividerWrapper = styled.div`
  display: flex;
  justify-content: center; /* 가운데 정렬 */
  width: 100%; /* 부모 요소의 너비를 100%로 설정 */
  margin-top: 70px; /* 위쪽 여백 */
`;

export const Divider = styled.div`
  width: 80%;
  height: 2px;
  background: #ccc;
  margin-bottom: 50px;
`;

export const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 50px;
  width: 100%;
`;

export const ProfileImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 60px;
  width: 20%;
  /* height: 300px; */
`;

export const ProfileImage = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  margin-bottom: 20px;
  object-fit: cover;
  /* height: 100px; */
`;

export const UploadButton = styled.div`
  width: 138px;
  height: 50px;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 22px;
  font-weight: 900;
  background-color: rgba(165, 0, 52, 0.2);
  cursor: pointer;
`;

export const UserInfo = styled.div`
  margin: 10px;
  text-align: left;
`;

export const UserName = styled.div`
  font-family: var(--sds-typography-title-page-font-family);
  color: #544b53;
  font-size: 60px;
  font-style: normal;
  white-space: nowrap;
  margin-bottom: 20px;
  font-weight: bold;
`;

export const UserGroup = styled.div`
  font-family: var(--sds-typography-title-page-font-family);
  color: #544b53;
  font-size: 40px;
  font-style: normal;
  white-space: nowrap;
`;

export const InputField = styled.input`
  width: 355px;
  height: 48px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 12px;
  opacity: var(--sds-size-stroke-border);
  background: #f5f6f8;
  margin-top: 20px;
  font-size: 25px;
  text-align: center;
`;

export const EditButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

export const EditButton = styled.button`
  margin-top: 100px;
  padding: 15px;
  background-color: #900000;
  border-radius: 8px;

  color: #fff;
  font-family: Montserrat;
  font-size: 30px;
  font-weight: bold;
  line-height: 20px; /* 50% */

  display: flex;
  width: 380px;
  height: 55px;
  justify-content: center;
  cursor: pointer;
`;
