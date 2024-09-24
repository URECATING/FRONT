import styled from "styled-components";

export const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
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

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PostImageContainer = styled.div`
  position: relative;
`;

export const PostImage = styled.img`
  width: 854px;
  height: 247px;
  align-items: center;
  object-fit: cover;
`;

export const UserImage = styled.img`
  width: 98px;
  height: 98px;
  border-radius: 50%;
  position: absolute;
  object-fit: cover;
  top: 202px;
  left: 22px;
  cursor: pointer;
`;

export const HeartImage = styled.img`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 210px;
  right: 20px;
  cursor: pointer;
`;

export const PostTitleWrapper = styled.div`
  margin-top: 70px;
  width: 854px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 48px;
  font-weight: 900;
`;

export const PostStatus = styled.div`
  display: flex;
  align-items: center;
`;

export const Category = styled.div`
  background-color: #d9d9d9;
  color: #3a3a3a;
  font-size: 16px;
  font-weight: 1000;
  margin: 5px 10px;
  width: 70px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 20px;
`;

export const Status = styled.div`
  background-color: #ffc8c8;
  color: #3a3a3a;
  font-size: 16px;
  font-weight: 1000;
  margin: 5px 10px;
  width: 70px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 20px;
`;

export const TitleDivider = styled.div`
  width: 35%;
  height: 2px;
  background: #ccc;
  margin-bottom: 20px;
`;

export const ContentContainer = styled.div`
  width: 854px;
  min-height: 200px;
  padding: 30px;
  flex-shrink: 0;
  border-radius: 30px;
  border: var(--sds-size-stroke-border) solid;
`;

export const Content = styled.div`
  line-height: 1.5;
  font-size: 25px;
  font-style: normal;
  font-weight: 300;
`;

export const InfoSection = styled.div`
  padding-top: 10px;
  margin-top: 20px;
  width: 854.01px;
  height: 440px;
  flex-shrink: 0;
  border-radius: 30px;
  border: var(--sds-size-stroke-border) solid;
  background: #f7f7f7;
  border-radius: 50px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const InfoTitle = styled.div`
  font-size: 22px;
  margin-right: 80px;
  margin-left: 74px;
  margin-top: 15px;
  font-weight: 900;
`;

export const InfoText = styled.p`
  font-size: 20px;
  margin-top: 15px;
  font-weight: 500;
`;

export const KakaoMapContainer = styled.div`
  display: flex;
  justify-content: center; /* 수평 중앙 정렬 */
  margin-bottom: 20px;
`;

export const Button = styled.button`
  /* background-color: #a50034; */
  color: white;
  padding: 10px 20px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  margin-top: 30px;

  width: 552px;
  height: 90px;

  text-align: center;
  font-size: 40px;
  font-weight: 800;

  &:hover {
    background-color: #c4002c;
  }
`;

export const CommentSection = styled.div`
  width: 854px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 50px;
`;

export const CommentTitle = styled.div`
  font-size: 22px;
  font-weight: 900;
`;

export const CommentInputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

export const CommentInput = styled.textarea`
  width: 700px;
  height: 30px;
  margin-top: 10px;
  border-radius: 10px;
  border: 1px solid #ccc;
  font-size: 18px;
  padding: 10px;
`;

export const CommentButton = styled.button`
  margin-top: 10px;
  background-color: #a50034;
  color: white;
  height: 52px;
  padding: 10px 20px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  margin-left: 10px;

  &:hover {
    background-color: #c4002c;
  }
`;

export const Comment = styled.div`
  margin-top: 10px;
  font-size: 18px;
`;

// styles.js 파일에 추가
export const ParticipantImages = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
`;

export const ParticipantImage = styled.img`
  width: 50px; // 이미지 크기 조정
  height: 50px;
  border-radius: 50%; // 원형으로 만들기
  margin-right: 5px; // 간격 조정
  object-fit: cover;
`;
