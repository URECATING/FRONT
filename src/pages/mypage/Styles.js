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
  border-radius: 50%;
  width: 300px;
  height: 300px;
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

export const TitleDivider = styled.div`
  width: 35%;
  height: 2px;
  background: #ccc;
  margin-bottom: 20px;
`;

export const PostContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  flex-wrap: wrap;
  margin: 0 auto;
  grid-gap: 36px;
`;

export const Post = styled.div`
  border: 1px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
  width: 500px;
  height: 270px;
  margin: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  height: 194px;
  object-fit: cover;
  opacity: 0.5;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 194px;
  position: relative;
  cursor: pointer;
`;

export const Category = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: #d9d9d9;
  color: #3a3a3a;
  font-size: 16px;
  font-weight: 1000;
  margin: 5px 10px;
  width: 63px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 20px;
`;

export const ContentWrapper = styled.div`
  padding-top: 15px;
  height: 76px;
  display: flex;
  background-color: #f9f9f9;
  position: relative;
  cursor: pointer;
`;

export const Title = styled.h2`
  font-size: 1.5em;
  margin: 0;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const GroupInfo = styled.div`
  margin-left: 110px;
  color: #666;
  font-size: 1em;
  display: flex;
  flex-direction: column; /* 요소를 세로로 정렬 */
  align-items: flex-start; /* 왼쪽 정렬 */
`;

export const DateWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Calendar = styled.img`
  margin-right: 5px;
`;

export const Date = styled.div`
  font-weight: 800;
`;

export const ParticipationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 800;
`;

export const ParticipationNumber = styled.div``;

export const ParticipationIcon = styled.img`
  margin-right: 5px;
`;

export const PostProfileImageContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const PostProfileImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border: 1px solid #ccc;
  position: absolute;
  top: -50%;
  z-index: 1;
  border-radius: 50%;
  margin-left: 19px;
`;

export const ButtonContainer = styled.div`
  display: flex; /* 버튼을 가로로 배치 */
  justify-content: center; /* 중앙 정렬 */
  margin: 20px 0; /* 위아래 여백 */
`;

export const PageButton = styled.button`
  background-color: #a50034;
  color: white; /* 글자색 */
  border: none; /* 테두리 없음 */
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s; /* 배경색 전환 효과 */
  margin: 0 10px;

  &:hover {
    background-color: #0056b3; /* 호버 시 배경색 */
  }

  &:active {
    background-color: #004085; /* 클릭 시 배경색 */
  }

  &:disabled {
    background-color: #c0c0c0; /* 비활성화 시 배경색 */
    cursor: not-allowed; /* 비활성화 커서 */
  }
`;

export const GroupLeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

export const Creator = styled.div`
  font-size: 1.3em;
  font-weight: 600;
`;

export const CreatorGroup = styled.div`
  font-size: 1em;
  font-weight: 400;
  color: #666;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  width: 450px;
  margin-left: 131px;
  margin-right: 30px;
`;
