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
        `http://52.78.9.240:8080/api/user/${userId}`,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      if (res.status === 200) {
        setMyInfo(res.data);
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
        <S.ProfileContainer>
          <S.ProfileImageContainer>
            <S.ProfileImage src={myInfo.profileImage} alt="Profile" />
          </S.ProfileImageContainer>
          <S.UserInfo>
            <S.UserName>{myInfo.name}</S.UserName>
            <S.UserGroup>{myInfo.group}</S.UserGroup>
            <S.InputField type="text" value={myInfo.id} readOnly />
            <br></br>
            <S.InputField type="password" defaultValue={myInfo.pw} />
          </S.UserInfo>
        </S.ProfileContainer>
        s
      </S.AppContainer>
    </>
  );
}

export default MyPage;
