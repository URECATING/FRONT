import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { instance } from "../../apis/index";
import { useEffect, useRef, useState } from "react";
import * as S from "./Styles";

function MyPage() {
  const navigate = useNavigate();

  const handleMainPage = () => {
    navigate("/mainpage");
  };

  const userId = useParams().userId;
  console.log(userId);
  const pwRef = useRef(null);
  const [myInfo, setMyInfo] = useState(null);

  const getMyInfo = async () => {
    try {
      const res = await instance.get(`http://52.78.9.240:8080/api/user/${userId}`);
      setMyInfo(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getMyInfo();
  }, []);

  const myInfo2 = {
    name: "홍길동",
    group: "백엔드 대면",
    id: "hong",
    pw: "1234",
    profileImage:
      "https://cdn.pixabay.com/photo/2024/07/16/20/27/woman-8900030_1280.jpg",
  };

  const handleUpdate = async () => {
    try {
      const response = await instance.post("/api/users/update", myInfo2);
      if (response.status === 200) {
        getMyInfo();
      }
      console.log("수정 완료:", response.data);
    } catch (error) {
      console.error("수정 실패:", error);
    }
  };

  return (
    <>
      <S.AppContainer>
        <S.Header>
          <S.Logo src="/src/assets/LGLogo.png" alt="LGU+ Logo" />
        </S.Header>
        <S.TitleWrapper>
          <S.UtingLogo onClick={handleMainPage} src="/src/assets/UtingLogo.png" alt="UTing Logo" />
        </S.TitleWrapper>
        <S.DividerWrapper>
          <S.Divider />
        </S.DividerWrapper>
        <S.ProfileContainer>
          <S.ProfileImageContainer>
            <S.ProfileImage src={myInfo2.profileImage} alt="Profile" />
            <S.UploadButton>사진 업로드</S.UploadButton>
          </S.ProfileImageContainer>
          <S.UserInfo>
            <S.UserName>{myInfo2.name}</S.UserName>
            <S.UserGroup>{myInfo2.group}</S.UserGroup>
            <S.InputField type="text" value={myInfo2.id} readOnly />
            <br></br>
            <S.InputField type="text" defaultValue={myInfo2.pw} ref={pwRef} />
          </S.UserInfo>
        </S.ProfileContainer>
        <S.EditButtonContainer>
          <S.EditButton onClick={handleUpdate}>내 정보 수정하기</S.EditButton>
        </S.EditButtonContainer>
      </S.AppContainer>
    </>
  );
}

export default MyPage;
