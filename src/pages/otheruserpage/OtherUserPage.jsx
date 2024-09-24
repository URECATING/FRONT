import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import * as S from "./styles";

function MyPage() {
  const navigate = useNavigate();

  const handleMainPage = () => {
    navigate("/mainpage");
  };

  const userId = useParams().userId;

  const [myInfo, setMyInfo] = useState(null);

  const getMyInfo = async () => {
    try {
      const res = await axios.get(
        `http://52.78.9.240:8080/api/user/${userId}/mypage`,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
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

  return (
    <>
      <S.AppContainer>
        <S.Header>
          <S.Logo src="/public/png/LGLogo.png" alt="LGU+ Logo" />
        </S.Header>
        <S.TitleWrapper>
          <S.UtingLogo
            onClick={handleMainPage}
            src="/public/png/UtingLogo.png"
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
              <S.InputField type="text" defaultValue={myInfo.pw} readOnly />
            </S.UserInfo>
          </S.ProfileContainer>
        )}
      </S.AppContainer>
    </>
  );
}

export default MyPage;
