import React from "react";
import { useParams } from "react-router-dom";
import { instance } from "../apis/index";
import { useEffect } from "react";
function MyPage() {
  const userId = useParams().userId;
  console.log(userId);
  //   const getMyInfo = async () => {
  //     try {
  //       const myInfo = await instance.get(`/user/${userId}`);
  //     } catch (e) {
  //       throw e;
  //     }
  //   };

  //   useEffect(() => {
  //     getMyInfo();
  //   }, []);

  const myInfo = {
    name: "홍길동",
    group: "개발팀",
    id: "hong",
    pw: "1234",
    profileImage:
      "https://cdn.pixabay.com/photo/2021/08/25/20/17/field-6574453_960_720.jpg",
  };

  return (
    <div>
      sdf
      <div>{myInfo.name}</div>
      <div>{myInfo.group}</div>
      <div>{myInfo.id}</div>
      <div>{myInfo.pw}</div>
      <img src={myInfo.profileImage} alt="profile" />
    </div>
  );
}

export default MyPage;
