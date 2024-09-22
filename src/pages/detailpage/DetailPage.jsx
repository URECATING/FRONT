import { React, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as S from "./styles";
import axios from "axios";

const Map = ({ place }) => {
  useEffect(() => {
    if (!window.kakao) {
      console.error("Kakao Map API not loaded");
      return;
    }

    const container = document.getElementById("map"); // 지도를 표시할 div
    const options = {
      center: new window.kakao.maps.LatLng(37.5665, 126.978), // 초기 위치 (서울)
      level: 3, // 지도의 확대 수준
    };

    const map = new window.kakao.maps.Map(container, options); // 지도 생성

    // 장소 검색
    const places = new window.kakao.maps.services.Places();
    places.keywordSearch(place, (data, status) => {
      if (status === window.kakao.maps.services.Status.OK) {
        const coords = new window.kakao.maps.LatLng(data[0].y, data[0].x);
        map.setCenter(coords); // 지도 중심 이동

        // 마커 생성
        const marker = new window.kakao.maps.Marker({
          position: coords,
        });
        marker.setMap(map); // 마커를 지도에 표시
      } else {
        console.error("장소 검색 실패:", status);
      }
    });
  }, [place]);

  return (
    <div
      id="map"
      style={{
        width: "457px",
        height: "213px",
        borderRadius: "5px",
        marginTop: "10px",
      }}
    />
  );
};

const App = () => {
  const [kakaoLoaded, setKakaoLoaded] = useState(false);
  const [isJoined, setIsJoined] = useState(false);
  const [isLike, setIsLike] = useState(false);
  const [detailInfo, setDetailInfo] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  /* 카테고리 관련 코드 */
  const [activeCategory, setActiveCategory] = useState("식사");
  const categories = ["식사", "스터디", "게임", "운동", "번개"];

  const navigate = useNavigate();
  const postId = useParams().detailId;

  useEffect(() => {
    const loadKakaoMapScript = () => {
      const script = document.createElement("script");
      script.src =
        "//dapi.kakao.com/v2/maps/sdk.js?appkey=daccd0a3e4e8d709768a0c41667684c8&libraries=services";
      script.async = true;
      script.onload = () => setKakaoLoaded(true);
      document.body.appendChild(script);
    };

    loadKakaoMapScript();
    getDetailInfo();
    getLikeInfo();
    getJoinInfo();
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      const res = await axios.get(
        `http://52.78.9.240:8080/post/${postId}/comments`,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      if (res.status === 200) {
        setComments(res.data.data); // 댓글 상태 업데이트
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleCommentChange = (e) => {
    setNewComment(e.target.value); // 입력 필드의 값 업데이트
  };

  const handleCommentSubmit = async () => {
    if (!newComment.trim()) return; // 빈 댓글 제출 방지

    try {
      const res = await axios.post(
        `http://52.78.9.240:8080/post/${postId}/comments`,
        { content: newComment }, // 댓글 내용
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      if (res.status === 200) {
        setNewComment(""); // 입력 필드 초기화
        fetchComments(); // 댓글 목록 새로고침
      }
    } catch (e) {
      console.log(e);
    }
  };

  /* 마이페이지로 이동 */
  const navigateToMyPage = () => {
    navigate("/mypage");
  };

  const handleMainPage = () => {
    navigate("/mainpage");
  };

  const navigateToLeaderMyPage = (leaderId) => {
    navigate(`/otheruserpage/${leaderId}`);
  };

  const checkIsJoined = async (data) => {
    if (data.data === true) {
      setIsJoined(true);
    }
  };

  const checkIsLike = async (data) => {
    if (data.data === true) {
      setIsLike(true);
    }
  };

  const getLikeInfo = async () => {
    try {
      const res = await axios.get(
        `http://52.78.9.240:8080/post/${postId}/is-liked`,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      if (res.status === 200) {
        checkIsLike(res.data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const getJoinInfo = async () => {
    try {
      const res = await axios.get(
        `http://52.78.9.240:8080/post-join/posts/${postId}`,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      if (res.status === 200) {
        checkIsJoined(res.data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const getDetailInfo = async () => {
    try {
      const res = await axios.get(`http://52.78.9.240:8080/board/${postId}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      console.log(res);
      if (res.status === 200) {
        setDetailInfo(res.data.data);
        checkIsJoined(res.data.code);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleLike = async () => {
    if (isLike) {
      try {
        const res = await axios.delete(
          `http://52.78.9.240:8080/post/${postId}/like`,
          {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          }
        );
        if (res.status === 200) {
          getDetailInfo();
          setIsLike(false);
        }
      } catch (e) {
        console.log(e);
      }
    } else {
      try {
        const res = await axios.post(
          `http://52.78.9.240:8080/post/${postId}/like`,
          {},
          {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          }
        );
        if (res.status === 200) {
          getDetailInfo();
          setIsLike(true);
        }
      } catch (e) {
        console.log(e);
      }
    }
  };

  const handleJoin = async () => {
    if (isJoined) {
      try {
        const res = await axios.delete(
          `http://52.78.9.240:8080/post-join/${postId}`,
          {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          }
        );
        if (res.status === 200) {
          getDetailInfo();
          setIsJoined(false);
        }
      } catch (e) {
        console.log(e);
      }
    } else {
      try {
        const res = await axios.post(
          `http://52.78.9.240:8080/post-join`,
          { postId: postId },
          {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          }
        );
        if (res.status === 200) {
          console.log(res);
          getDetailInfo();
          setIsJoined(true);
        }
      } catch (e) {
        console.log(e);
      }
    }
  };

  const formatMeetingDate = (dateString) => {
    const date = new Date(dateString);
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      weekday: "long",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    };
    const formatter = new Intl.DateTimeFormat("ko-KR", options);
    const formattedDate = formatter.format(date);
    return formattedDate.replace(/(\d{4})\. (\d{2})\. (\d{2})\./, "$2월 $3일");
  };

  return (
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
      <S.MenuWrapper>
        <S.CategoryContainer>
          {categories.map((category) => (
            <S.Categories key={category} isActive={activeCategory === category}>
              {category}
            </S.Categories>
          ))}
        </S.CategoryContainer>
        <S.MyPage onClick={navigateToMyPage}>마이페이지</S.MyPage>
      </S.MenuWrapper>
      <S.DividerWrapper>
        <S.Divider />
      </S.DividerWrapper>
      {detailInfo && (
        <S.DetailContainer>
          <S.PostImageContainer>
            <S.PostImage src={detailInfo.image} />
            <S.UserImage
              onClick={() => navigateToLeaderMyPage(detailInfo.userId)}
              src={detailInfo.userImage}
            />
            {isLike ? (
              <S.HeartImage
                onClick={handleLike}
                src="/src/assets/RedHeart.png"
                alt="Heart"
              />
            ) : (
              <S.HeartImage
                onClick={handleLike}
                src="/src/assets/Heart.png"
                alt="Heart"
              />
            )}
          </S.PostImageContainer>
          <S.PostTitleWrapper>
            <S.Title>{detailInfo.title}</S.Title>
            <S.PostStatus>
              <S.Category>{detailInfo.category}</S.Category>
              <S.Status>{detailInfo.status}</S.Status>
            </S.PostStatus>
          </S.PostTitleWrapper>
          <S.DividerWrapper>
            <S.TitleDivider />
          </S.DividerWrapper>
          <S.ContentContainer>
            <S.Content
              dangerouslySetInnerHTML={{
                __html: detailInfo.content.replace(/\n/g, "<br />"),
              }}
            />
          </S.ContentContainer>
          <S.InfoSection>
            <S.InfoWrapper>
              <S.InfoTitle>일시</S.InfoTitle>
              <S.InfoText>
                {formatMeetingDate(detailInfo.meetingDate)}
              </S.InfoText>
            </S.InfoWrapper>
            <S.InfoWrapper>
              <S.InfoTitle>장소</S.InfoTitle>
              <S.InfoText>{detailInfo.place}</S.InfoText>
            </S.InfoWrapper>
            <S.KakaoMapContainer>
              {kakaoLoaded && <Map place={detailInfo.place} />}
            </S.KakaoMapContainer>
            <S.InfoWrapper>
              <S.InfoTitle>모집인원</S.InfoTitle>
              <S.InfoText>2/{detailInfo.maxCapacity}</S.InfoText>
            </S.InfoWrapper>
          </S.InfoSection>
          {!isJoined ? (
            <S.Button
              onClick={handleJoin}
              style={{
                backgroundColor: "#a50034",
              }}
            >
              유레카팅 하러가기
            </S.Button>
          ) : (
            <S.Button
              onClick={handleJoin}
              style={{
                backgroundColor: "#a4989c",
              }}
            >
              유레카팅 참가취소
            </S.Button>
          )}
          ;
          <S.DividerWrapper>
            <S.TitleDivider />
          </S.DividerWrapper>
          <S.CommentSection>
            <S.CommentTitle>댓글 {comments.length}</S.CommentTitle>
            <S.CommentInputWrapper>
              <S.CommentInput
                value={newComment}
                onChange={handleCommentChange}
                placeholder="댓글 작성..."
              />
              <S.CommentButton onClick={handleCommentSubmit}>
                작성
              </S.CommentButton>
            </S.CommentInputWrapper>
            {comments.map((comment) => (
              <S.Comment key={comment.id}>
                <strong>{comment.username}</strong>: {comment.content}
              </S.Comment>
            ))}
          </S.CommentSection>
        </S.DetailContainer>
      )}
    </S.AppContainer>
  );
};

export default App;
