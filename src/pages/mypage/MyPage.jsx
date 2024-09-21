import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import dayjs from "dayjs";
import * as S from "./styles";

function MyPage() {
  const navigate = useNavigate();
  const pwRef = useRef(null);
  const [myInfo, setMyInfo] = useState(null);
  const [joinedPosts, setJoinedPosts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [participationCounts, setParticipationCounts] = useState({});
  const [postDetails, setPostDetails] = useState({});
  const postsPerPage = 3;

  const handleMainPage = () => {
    navigate("/mainpage");
  };

  const navigateToDetailPage = (postId) => {
    navigate(`/detailpage/${postId}`);
  };

  const navigateToLeaderMyPage = (leaderId) => {
    navigate(`/otheruserpage/${leaderId}`);
  };

  const getMyInfo = async () => {
    console.log(localStorage.getItem("token"));
    console.log(myInfo);
    try {
      const res = await axios.get(`http://52.78.9.240:8080/api/user/mypage`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      if (res.status === 200) {
        setMyInfo(res.data.data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const getJoinedPosts = async () => {
    try {
      const res = await axios.get(
        "http://52.78.9.240:8080/post-join/users/joins",
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      if (res.status === 200) {
        setJoinedPosts(res.data.data);
        fetchPostDetails(res.data.data.map((post) => post.postId));
      }
    } catch (e) {
      console.log(e);
    }
  };

  const fetchPostDetails = async (postIds) => {
    try {
      const details = await Promise.all(
        postIds.map(async (postId) => {
          const res = await axios.get(
            `http://52.78.9.240:8080/board/${postId}`,
            {
              headers: {
                Authorization: localStorage.getItem("token"),
              },
            }
          );
          console.log(res);
          if (res.status === 200) {
            console.log(res.data.data);
            fetchParticipationCounts(postId);
          }
          return { postId, data: res.data.data }; // { postId, data } 형태로 반환
        })
      );

      // 게시글 세부 정보 상태 업데이트
      const detailsMap = details.reduce((acc, curr) => {
        if (curr.data) {
          acc[curr.postId] = curr.data;
        }
        return acc;
      }, {});
      setPostDetails(detailsMap);
    } catch (e) {
      console.log(e);
    }
  };

  const fetchParticipationCounts = async (postId) => {
    try {
      const res = await axios.get(
        `http://52.78.9.240:8080/post-join/${postId}/join-count`,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );

      if (res.status === 200) {
        // 참가 인원수 상태 업데이트
        setParticipationCounts((prevCounts) => ({
          ...prevCounts,
          [postId]: res.data.data, // postId를 키로 하여 참가 인원수 저장
        }));
      } else {
        console.error(
          `Failed to fetch participation count for postId: ${postId}`
        );
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getMyInfo();
    getJoinedPosts();
  }, []);

  const handleUpdate = async () => {
    try {
      const response = await axios.patch(
        "http://52.78.9.240/api/users/update",
        myInfo
      );
      if (response.status === 200) {
        getMyInfo();
      }
      console.log("수정 완료:", response.data);
    } catch (error) {
      console.error("수정 실패:", error);
    }
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 1, Math.ceil(joinedPosts.length / postsPerPage) - 1)
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const currentPosts = joinedPosts.slice(
    currentIndex * postsPerPage,
    (currentIndex + 1) * postsPerPage
  );

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
        <S.DividerWrapper>
          <S.TitleDivider />
        </S.DividerWrapper>

        {/* 내가 가입한 게시글 목록 */}
        <S.PostContainer>
          {currentPosts.map((post) => (
            <S.Post key={post.postId}>
              {postDetails[post.postId] && (
                <>
                  <S.ImageWrapper
                    onClick={() => navigateToDetailPage(post.postId)}
                  >
                    <S.Category>{postDetails[post.postId].category}</S.Category>
                    <S.Image
                      src={postDetails[post.postId].image}
                      alt={postDetails[post.postId].title}
                    />
                    <S.Title>{postDetails[post.postId].title}</S.Title>
                  </S.ImageWrapper>
                  <S.ContentWrapper>
                    <S.Content>
                      <S.PostProfileImageContainer
                        onClick={() =>
                          navigateToLeaderMyPage(
                            postDetails[post.postId].userId
                          )
                        }
                      >
                        <S.PostProfileImage
                          src={postDetails[post.postId].userImage}
                          alt={postDetails[post.postId].username}
                        />
                      </S.PostProfileImageContainer>
                      <S.GroupLeaderInfo
                        onClick={() =>
                          navigateToLeaderMyPage(
                            postDetails[post.postId].userId
                          )
                        }
                      >
                        <S.Creator>
                          {postDetails[post.postId].username}
                        </S.Creator>
                        <S.CreatorGroup>
                          {postDetails[post.postId].team}
                        </S.CreatorGroup>
                      </S.GroupLeaderInfo>
                      <S.GroupInfo>
                        <S.DateWrapper>
                          <S.Calendar
                            src="/src/assets/Calendar.png"
                            alt="Calendar Logo"
                          />
                          <S.Date>
                            {dayjs(
                              new Date(postDetails[post.postId].createdAt)
                            ).format("MM/DD HH:mm")}
                          </S.Date>
                        </S.DateWrapper>
                        <S.ParticipationWrapper>
                          <S.ParticipationIcon
                            src="/src/assets/participation.png"
                            alt="participation Logo"
                          />
                          <S.ParticipationNumber>
                            {participationCounts[post.postId] || 0}
                            /{postDetails[post.postId].maxCapacity}명 참여
                          </S.ParticipationNumber>
                        </S.ParticipationWrapper>
                      </S.GroupInfo>
                    </S.Content>
                  </S.ContentWrapper>
                </>
              )}
            </S.Post>
          ))}
        </S.PostContainer>

        {/* 페이지네이션 버튼 */}
        <S.ButtonContainer>
          <S.PageButton onClick={handlePrev} disabled={currentIndex === 0}>
            이전
          </S.PageButton>
          <S.PageButton
            onClick={handleNext}
            disabled={(currentIndex + 1) * postsPerPage >= joinedPosts.length}
          >
            다음
          </S.PageButton>
        </S.ButtonContainer>
      </S.AppContainer>
    </>
  );
}

export default MyPage;
