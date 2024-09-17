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
`;

export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 10px;
  margin-top: 50px;
`;

export const CategoryContainer = styled.div`
  justify-content: flex-start;
  margin-left: 300px;
`;

export const MyPage = styled.div`
  justify-content: flex-end;
  font-size: 20px;
  font-weight: 800;
  margin-right: 300px;
  cursor: pointer;
`;

export const Categories = styled.span`
  font-weight: ${(props) => (props.isActive ? "bold" : "normal")};
  cursor: pointer;
  margin-right: 20px;
`;

export const DividerWrapper = styled.div`
  display: flex;
  justify-content: center; /* 가운데 정렬 */
  width: 100%; /* 부모 요소의 너비를 100%로 설정 */
  margin-top: 30px; /* 위쪽 여백 */
`;

export const Divider = styled.div`
  width: 80%;
  height: 2px;
  background: #ccc;
  margin-bottom: 50px;
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

export const ProfileImage = styled.img`
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

export const GroupLeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
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
  width: 350px;
  justify-content: space-between;
  margin-left: 131px;
`;

export const PlusButton = styled.button`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: none;
  background-color: #a50034;
  color: white;
  font-size: 60px;
  position: fixed;
  right: 400px;
  bottom: 50px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #0056b3;
  }
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

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
`;

export const ModalContainer = styled.div`
  background: white;
  border-radius: 8px;
  padding: 20px;
  /* max-width: 1000px; */
  width: 935px;
  height: 815px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  /* position: relative; */
`;

export const ModalBody = styled.div`
  margin: 40px;
  /* background-color: #d9d9d9; */
  justify-content: center;
  align-items: center;
  /* height: 90%; */
  display: flex;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 80px;
`;

export const FormTitle = styled.div`
  margin-left: 10px;
  font-size: 15px;
  font-weight: 600;
`;

export const TitleInput = styled.input`
  width: 376px;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 16px;
`;

export const CategorySelect = styled.select`
  width: 400px;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

export const ParticipationNumberSelect = styled.select`
  width: 400px;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

export const DateInput = styled.input`
  margin-top: 0.5rem;
  border-radius: 4px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  width: 376px;
`;

export const ProfileImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DefaultPostImage = styled.img`
  width: 400px;
  height: 300px;
  object-fit: cover;
  border: 1px solid #ccc;
  margin-top: 10px;
`;

export const ImageUploadWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

export const FolderIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

export const ImageUploadButton = styled.div`
  background-color: #a50034;
  color: white;
  padding: 10px 20px;
  border-radius: 50px;
  cursor: pointer;
  font-size: 16px;
`;

export const ModalFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 20vh;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 16px;
  resize: none;
`;

export const FooterButtonContainer = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: center; /* 중앙 정렬 */
`;

export const CloseButton = styled.button`
  background-color: #f44336; /* Red */
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #d32f2f;
  }
`;

export const SubmitButton = styled.button`
  background-color: #4caf50; /* Green */
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }
`;
