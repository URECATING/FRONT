import { React, useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";
import dayjs from "dayjs";
import axios from "axios";

const App = () => {
  /* 게시글 API 연동 코드 */
  const [posts, setPosts] = useState([]);
  const [participationNumber, setParticipationNumber] = useState(1);
  const [participationCounts, setParticipationCounts] = useState({});
  const [category, setCategory] = useState("식사");

  const getPosts = async () => {
    console.log(localStorage.getItem("token"));
    try {
      const res = await axios.get("http://52.78.9.240:8080/board", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      console.log(res.data);
      if (res.status === 200) {
        setPosts(res.data.data);
        fetchParticipationCounts(res.data.data.map((post) => post.postId));
      }
    } catch (e) {
      console.log(e);
    }
  };

  const fetchParticipationCounts = async (postIds) => {
    try {
      const counts = await Promise.all(
        postIds.map(async (postId) => {
          const res = await axios.get(
            `http://52.78.9.240:8080/post-join/${postId}/join-count`,
            {
              headers: {
                Authorization: localStorage.getItem("token"),
              },
            }
          );
          return { postId, count: res.data.data }; // { postId, count } 형태로 반환
        })
      );

      // 참가 인원수 상태 업데이트
      const countsMap = counts.reduce((acc, curr) => {
        acc[curr.postId] = curr.count;
        return acc;
      }, {});
      setParticipationCounts(countsMap);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  /* 페이지 관련 코드 */
  const [currentIndex, setCurrentIndex] = useState(null);
  const postsPerSlide = 6;

  const totalSlides = Math.ceil(posts.length / postsPerSlide);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  /* 카테고리 관련 코드 */
  const [activeCategory, setActiveCategory] = useState("식사");
  const categories = ["식사", "스터디", "게임", "운동", "번개"];

  const currentPosts = posts
    .filter((post) => post.category === activeCategory)
    .slice(currentIndex * postsPerSlide, (currentIndex + 1) * postsPerSlide);

  /* 모달 관련 코드 */
  const [modalOpen, setModalOpen] = useState(false);
  const [newPost, setNewPost] = useState({
    title: "",
    creator: "",
    category: "",
    postImage: "",
  });

  const handlePlusButton = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setNewPost({ title: "", creator: "", category: "", postImage: "" }); // 모달 닫을 때 초기화
  };

  const handleSubmit = async () => {
    const formData = new FormData();

    formData.append("title", titleRef.current.value);
    formData.append("meetingDate", dateRef.current.value);
    formData.append("category", category);
    formData.append("maxCapacity", participationNumber.toString());
    formData.append("place", positionRef.current.value);
    formData.append("content", contentRef.current.value);

    const imageFile = await fetch(postImage).then((res) => res.blob());
    formData.append("image", imageFile, "postImage.png");

    try {
      const res = await axios.post(
        "http://52.78.9.240:8080/board/create",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      console.log(res);
      getPosts();
    } catch (e) {
      console.log(e);
    }
    handleModalClose();
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleParticipationNumberChange = (e) => {
    setParticipationNumber(e.target.value);
  };

  /* 모달 날짜 관련 코드 */
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  /* 모달 이미지 관련 코드 */
  const [postImage, setPostImage] = useState(
    "https://cdn.pixabay.com/photo/2023/10/02/14/00/egg-8289259_1280.png"
  );

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPostImage(reader.result.toString());
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  /* 게시글 등록 API 연동 코드 */
  const titleRef = useRef(null);
  const dateRef = useRef(null);
  const positionRef = useRef(null);
  const contentRef = useRef(null);

  /* 유저 정보 페이지 이동 코드 */
  const navigate = useNavigate();

  const navigateToLeaderMyPage = (leaderId) => {
    navigate(`/otheruserpage/${leaderId}`);
  };

  const navigateToMyPage = () => {
    navigate("/mypage");
  };

  const navigateToDetailPage = (postId) => {
    navigate(`/detailpage/${postId}`);
  };

  return (
    <S.AppContainer>
      <S.Header>
        <S.Logo src="/src/assets/LGLogo.png" alt="LGU+ Logo" />
      </S.Header>
      <S.TitleWrapper>
        <S.UtingLogo src="/src/assets/UtingLogo.png" alt="UTing Logo" />
      </S.TitleWrapper>
      <S.MenuWrapper>
        <S.CategoryContainer>
          {categories.map((category) => (
            <S.Categories
              key={category}
              isActive={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </S.Categories>
          ))}
        </S.CategoryContainer>
        <S.MyPage onClick={navigateToMyPage}>마이페이지</S.MyPage>
      </S.MenuWrapper>
      <S.DividerWrapper>
        <S.Divider />
      </S.DividerWrapper>

      <S.PostContainer>
        {currentPosts.map((post) => (
          <S.Post key={post.id}>
            <S.ImageWrapper onClick={() => navigateToDetailPage(post.postId)}>
              <S.Category>{post.category}</S.Category>
              <S.Image src={post.image} alt={post.title} />
              <S.Title>{post.title}</S.Title>
            </S.ImageWrapper>
            <S.ContentWrapper>
              <S.Content>
                <S.ProfileImageContainer
                  onClick={() => navigateToLeaderMyPage(post.userId)}
                >
                  <S.ProfileImage src={post.userImage} alt={post.creator} />
                </S.ProfileImageContainer>
                <S.GroupLeaderInfo
                  onClick={() => navigateToLeaderMyPage(post.userId)}
                >
                  <S.Creator> {post.username} </S.Creator>{" "}
                  <S.CreatorGroup>{post.team}</S.CreatorGroup>
                </S.GroupLeaderInfo>
                <S.GroupInfo>
                  <S.DateWrapper>
                    <S.Calendar
                      src="/src/assets/Calendar.png"
                      alt="Calendar Logo"
                    />
                    <S.Date>
                      {dayjs(new Date(post.createdAt)).format("MM/DD HH:mm")}
                    </S.Date>
                  </S.DateWrapper>
                  <S.ParticipationWrapper>
                    <S.ParticipationIcon
                      src="/src/assets/participation.png"
                      alt="participation Logo"
                    />
                    <S.ParticipationNumber>
                      {participationCounts[post.postId] || 0}/{post.maxCapacity}
                      명 참여
                    </S.ParticipationNumber>
                  </S.ParticipationWrapper>
                </S.GroupInfo>
              </S.Content>
            </S.ContentWrapper>
          </S.Post>
        ))}
        <S.PlusButton onClick={handlePlusButton}>+</S.PlusButton>
      </S.PostContainer>
      <S.ButtonContainer>
        <S.PageButton onClick={handlePrev}>이전</S.PageButton>
        <S.PageButton onClick={handleNext}>다음</S.PageButton>
      </S.ButtonContainer>

      {modalOpen && (
        <S.ModalOverlay>
          <S.ModalContainer>
            <S.ModalBody>
              <S.InputWrapper>
                <S.FormTitle>제목</S.FormTitle>
                <S.TitleInput
                  ref={titleRef}
                  type="text"
                  placeholder="제목을 작성해주세요."
                  required
                />
                <S.FormTitle>카테고리</S.FormTitle>
                <S.CategorySelect
                  required
                  value={category}
                  onChange={handleCategoryChange}
                >
                  <option value="" disabled>
                    카테고리
                  </option>
                  <option value="식사">식사</option>
                  <option value="스터디">스터디</option>
                  <option value="게임">게임</option>
                  <option value="운동">운동</option>
                  <option value="번개">번개</option>
                </S.CategorySelect>
                <S.FormTitle>인원수</S.FormTitle>
                <S.ParticipationNumberSelect
                  required
                  value={participationNumber}
                  onChange={handleParticipationNumberChange}
                >
                  <option value="" disabled>
                    인원수
                  </option>
                  <option value="1">1명</option>
                  <option value="2">2명</option>
                  <option value="3">3명</option>
                  <option value="4">4명</option>
                  <option value="5">5명</option>
                  <option value="6">6명</option>
                  <option value="7">7명</option>
                </S.ParticipationNumberSelect>
                <S.FormTitle>위치</S.FormTitle>
                <S.TitleInput ref={positionRef} type="text" placeholder="" />
                <S.FormTitle>날짜 및 시간</S.FormTitle>
                <S.DateInput
                  onChange={handleDateChange}
                  ref={dateRef}
                  type="datetime-local"
                  id="meeting-time"
                  max="2077-06-10T21:00"
                  min="2024-06-10T12:30"
                  value={selectedDate || ""}
                />
              </S.InputWrapper>
              <S.ProfileImageWrapper>
                <S.DefaultPostImage src={postImage} />
                <S.ImageUploadWrapper>
                  <S.FolderIcon
                    src="/src/assets/folderIcon.png"
                    alt="Folder Logo"
                  />
                  <S.ImageUploadButton
                    onClick={() => document.getElementById("fileInput").click()}
                  >
                    사진 추가하기
                  </S.ImageUploadButton>
                  <input
                    type="file"
                    id="fileInput"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={handleImageUpload}
                  />
                </S.ImageUploadWrapper>
              </S.ProfileImageWrapper>
            </S.ModalBody>
            <S.ModalFooter>
              <S.FormTitle>소개글</S.FormTitle>
              <S.FooterContainer>
                <S.TextArea
                  ref={contentRef}
                  placeholder="소개글을 작성해주세요."
                />
              </S.FooterContainer>
              <S.FooterButtonContainer>
                <S.SubmitButton onClick={handleSubmit}>등록</S.SubmitButton>
                <S.CloseButton onClick={handleModalClose}>닫기</S.CloseButton>
              </S.FooterButtonContainer>
            </S.ModalFooter>
          </S.ModalContainer>
        </S.ModalOverlay>
      )}
    </S.AppContainer>
  );
};

export default App;
