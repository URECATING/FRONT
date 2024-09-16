import { React, useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";
import dayjs from "dayjs";
import axios from "axios";

const App = () => {
  /* 게시글 API 연동 코드 */
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    console.log(localStorage.getItem("token"));
    try {
      const res = await axios.get("http://52.78.9.240:8080/board", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      if (res.status === 200) {
        setPosts(res.data.data);
      }
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
  const [activeCategory, setActiveCategory] = useState("점심");
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
    console.log(titleRef.current.value);
    console.log(dateRef.current.value);
    console.log(positionRef.current.value);
    console.log(contentRef.current.value);
    console.log(category);
    console.log(participationNumber);
    console.log(defaultPostImage);

    try {
      const res = await axios.post(
        "http://52.78.9.240:8080/board/create",
        {
          username: "홍길동",
          title: titleRef.current.value,
          meetingDate: dateRef.current.value,
          category: category,
          maxCapacity: participationNumber,
          place: positionRef.current.value,
          content: contentRef.current.value,
          image: defaultPostImage,
        },
        {
          headers: {
            Authorization:
              "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJybGFkYnN0biIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE3MjYyOTQ2OTZ9.MDWZwphc4y114OpiTCi4H56baqVg0QTCRMRT7mT2Aphvz4BG7LP1hsR9qwNwLNcym8bZOgEf5136cIF3txUGxw",
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

  const [participationNumber, setParticipationNumber] = useState(0);
  const [category, setCategory] = useState("");

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleParticipationNumberChange = (e) => {
    setParticipationNumber(e.target.value);
  };

  /* 모달 날짜 관련 코드 */
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  /* 모달 이미지 관련 코드 */
  const [defaultPostImage, setDefaultPostImage] = useState(
    "https://cdn.pixabay.com/photo/2023/10/02/14/00/egg-8289259_1280.png"
  );

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setDefaultPostImage(reader.result.toString());
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
        <S.MyPage
          onClick={navigateToMyPage}
        >
          마이페이지
        </S.MyPage>
      </S.MenuWrapper>
      <S.DividerWrapper>
        <S.Divider />
      </S.DividerWrapper>

      <S.PostContainer>
        {currentPosts.map((post) => (
          <S.Post key={post.id}>
            <S.ImageWrapper>
              <S.Category>{post.category}</S.Category>
              <S.Image src={post.postImage} alt={post.title} />
              <S.Title>{post.title}</S.Title>
            </S.ImageWrapper>
            <S.ContentWrapper>
              <S.ProfileImage src={post.profileImage} alt={post.creator} />
              <S.Content>
                <S.GroupLeaderInfo
                  onClick={() => navigateToLeaderMyPage(post.leaderId)}
                >
                  <S.Creator> {post.creator} </S.Creator>{" "}
                  <S.CreatorGroup>백엔드 대면반</S.CreatorGroup>
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
                      {post.participants}/{post.totalParticipants}명 참여
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
                <S.CategorySelect required onChange={handleCategoryChange}>
                  <option value="" disabled selected>
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
                  onChange={handleParticipationNumberChange}
                >
                  <option value="" disabled selected>
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
                  ref={dateRef}
                  type="datetime-local"
                  id="meeting-time"
                  max="2077-06-20T21:00"
                  min="2077-06-05T12:30"
                  value={selectedDate}
                />
              </S.InputWrapper>
              <S.ProfileImageWrapper>
                <S.DefaultPostImage src={defaultPostImage} />
                <S.ImageUploadWrapper>
                  <S.FolderIcon
                    src="/src/assets/folderIcon.png"
                    alt="Folder Logo"
                  />
                  <S.ImageUploadButton
                    onClick={() => document.getElementById("fileInput").click()}
                  >
                    <input
                      type="file"
                      id="fileInput"
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={handleImageUpload}
                    />
                    사진 추가하기
                  </S.ImageUploadButton>
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
