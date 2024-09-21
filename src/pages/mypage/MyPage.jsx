import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { instance } from "../../apis/index";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import * as S from "./styles";

function MyPage() {
  const navigate = useNavigate();

  const handleMainPage = () => {
    navigate("/mainpage");
  };

  const pwRef = useRef(null);
  const [myInfo, setMyInfo] = useState(null);

  const getMyInfo = async () => {
    console.log(localStorage.getItem("token"));
    console.log(myInfo);
    try {
      const res = await axios.get(`http://52.78.9.240:8080/api/user/mypage`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      console.log(res);
      if (res.status === 200) {
        setMyInfo(res.data.data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getMyInfo();
  }, []);

  const handleUpdate = async () => {
    try {
      const response = await instance.post("/api/users/update", myInfo);
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
          <S.UtingLogo
            onClick={handleMainPage}
            src="/src/assets/UtingLogo.png"
            alt="UTing Logo"
          />
        </S.TitleWrapper>
        <S.DividerWrapper>
          <S.Divider />
        </S.DividerWrapper>
        {myInfo && (
          <S.ProfileContainer>
            <S.ProfileImageContainer>
              <S.ProfileImage src={myInfo.image} />
              <S.UploadButton>사진 업로드</S.UploadButton>
            </S.ProfileImageContainer>
            <S.UserInfo>
              <S.UserName>{myInfo.userName}</S.UserName>
              <S.UserGroup>{myInfo.team}</S.UserGroup>
              <S.InputField type="text" value={myInfo.login} readOnly />
              <br></br>
              <S.InputField type="text" defaultValue={myInfo.pw} ref={pwRef} />
            </S.UserInfo>
          </S.ProfileContainer>
        )}
        <S.EditButtonContainer>
          <S.EditButton onClick={handleUpdate}>내 정보 수정하기</S.EditButton>
        </S.EditButtonContainer>
      </S.AppContainer>
    </>
  );
}

export default MyPage;
