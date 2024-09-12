import React, { useEffect, useState } from "react";
import * as S from "./Styles";
import dayjs from "dayjs";

const App = () => {
  /* 게시글 API 연동 코드 */
  const [posts, setPosts] = useState([]);
  const getPosts = async () => {
    try {
      const res = await instance.get("/board");
      setPosts(res.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  const postsTest = [
    {
      id: 1,
      title: "유레카팅",
      creator: "홍길동",
      category: "식사",
      profileImage:
        "https://cdn.pixabay.com/photo/2024/07/16/20/27/woman-8900030_1280.jpg",
      createdAt: "2021-10-10T10:10:10",
      participants: 2,
      totalParticipants: 5,
      postImage:
        "https://cdn.pixabay.com/photo/2023/10/02/14/00/egg-8289259_1280.png",
    },
    {
      id: 2,
      title: "유레카팅",
      creator: "홍길동",
      category: "식사",
      profileImage:
        "https://cdn.pixabay.com/photo/2024/07/16/20/27/woman-8900030_1280.jpg",
      createdAt: "2021-10-10T10:10:10",
      participants: 2,
      totalParticipants: 5,
      postImage:
        "https://cdn.pixabay.com/photo/2023/10/02/14/00/egg-8289259_1280.png",
    },
    {
      id: 3,
      title: "유레카팅",
      creator: "홍길동",
      category: "식사",
      profileImage:
        "https://cdn.pixabay.com/photo/2024/07/16/20/27/woman-8900030_1280.jpg",
      createdAt: "2021-10-10T10:10:10",
      participants: 2,
      totalParticipants: 5,
      postImage:
        "https://cdn.pixabay.com/photo/2023/10/02/14/00/egg-8289259_1280.png",
    },
    {
      id: 4,
      title: "유레카팅",
      creator: "홍길동",
      category: "식사",
      profileImage:
        "https://cdn.pixabay.com/photo/2024/07/16/20/27/woman-8900030_1280.jpg",
      createdAt: "2021-10-10T10:10:10",
      participants: 2,
      totalParticipants: 5,
      postImage:
        "https://cdn.pixabay.com/photo/2023/10/02/14/00/egg-8289259_1280.png",
    },
    {
      id: 5,
      title: "유레카팅",
      creator: "홍길동",
      category: "식사",
      profileImage:
        "https://cdn.pixabay.com/photo/2024/07/16/20/27/woman-8900030_1280.jpg",
      createdAt: "2021-10-10T10:10:10",
      participants: 2,
      totalParticipants: 5,
      postImage:
        "https://cdn.pixabay.com/photo/2023/10/02/14/00/egg-8289259_1280.png",
    },
    {
      id: 6,
      title: "유레카팅",
      creator: "홍길동",
      category: "식사",
      profileImage:
        "https://cdn.pixabay.com/photo/2024/07/16/20/27/woman-8900030_1280.jpg",
      createdAt: "2021-10-10T10:10:10",
      participants: 2,
      totalParticipants: 5,
      postImage:
        "https://cdn.pixabay.com/photo/2023/10/02/14/00/egg-8289259_1280.png",
    },
    {
      id: 7,
      title: "유레카팅팅",
      creator: "홍길동",
      category: "식사",
      profileImage:
        "https://cdn.pixabay.com/photo/2024/07/16/20/27/woman-8900030_1280.jpg",
      createdAt: "2021-10-10T10:10:10",
      participants: 2,
      totalParticipants: 5,
      postImage:
        "https://cdn.pixabay.com/photo/2023/10/02/14/00/egg-8289259_1280.png",
    },
    {
      id: 8,
      title: "유레카팅팅팅",
      creator: "홍길동",
      category: "스터디",
      profileImage:
        "https://cdn.pixabay.com/photo/2024/07/16/20/27/woman-8900030_1280.jpg",
      createdAt: "2021-10-10T10:10:10",
      participants: 2,
      totalParticipants: 5,
      postImage:
        "https://cdn.pixabay.com/photo/2023/10/02/14/00/egg-8289259_1280.png",
    },
    {
      id: 9,
      title: "유레카팅팅팅팅",
      creator: "홍길동",
      category: "스터디",
      profileImage:
        "https://cdn.pixabay.com/photo/2024/07/16/20/27/woman-8900030_1280.jpg",
      createdAt: "2021-10-10T10:10:10",
      participants: 2,
      totalParticipants: 5,
      postImage:
        "https://cdn.pixabay.com/photo/2023/10/02/14/00/egg-8289259_1280.png",
    },
    {
      id: 10,
      title: "유레카팅팅팅팅팅",
      creator: "홍길동",
      category: "게임",
      profileImage:
        "https://cdn.pixabay.com/photo/2024/07/16/20/27/woman-8900030_1280.jpg",
      createdAt: "2021-10-10T10:10:10",
      participants: 2,
      totalParticipants: 5,
      postImage:
        "https://cdn.pixabay.com/photo/2023/10/02/14/00/egg-8289259_1280.png",
    },
    {
      id: 11,
      title: "유레카팅팅팅팅팅팅팅",
      creator: "홍길동",
      category: "운동",
      profileImage:
        "https://cdn.pixabay.com/photo/2024/07/16/20/27/woman-8900030_1280.jpg",
      createdAt: "2021-10-10T10:10:10",
      participants: 2,
      totalParticipants: 5,
      postImage:
        "https://cdn.pixabay.com/photo/2023/10/02/14/00/egg-8289259_1280.png",
    },
    {
      id: 12,
      title: "유레카팅",
      creator: "홍길동",
      category: "운동",
      profileImage:
        "https://cdn.pixabay.com/photo/2024/07/16/20/27/woman-8900030_1280.jpg",
      createdAt: "2021-10-10T10:10:10",
      participants: 2,
      totalParticipants: 5,
      postImage:
        "https://cdn.pixabay.com/photo/2023/10/02/14/00/egg-8289259_1280.png",
    },
  ];

  /* 페이지 관련 코드 */
  const [currentIndex, setCurrentIndex] = useState(null);
  const postsPerSlide = 6;

  const totalSlides = Math.ceil(postsTest.length / postsPerSlide);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  /* 카테고리 관련 코드 */
  const [activeCategory, setActiveCategory] = useState("식사");
  const categories = ["식사", "스터디", "게임", "운동", "번개"];

  const currentPosts = postsTest
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value });
  };

  const handleSubmit = () => {
    setPosts((prevPosts) => [
      ...prevPosts,
      {
        ...newPost,
        id: prevPosts.length + 1,
        createdAt: selectedDate
          ? selectedDate.toISOString()
          : new Date().toISOString(),
        participants: 0,
        totalParticipants: 5,
      },
    ]);
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

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <S.AppContainer>
      <S.Header>
        <S.Logo src="/src/assets/LGLogo.png" alt="LGU+ Logo" />
      </S.Header>
      <S.TitleWrapper>
        <S.UtingLogo src="/src/assets/UtingLogo.png" alt="UTing Logo" />
      </S.TitleWrapper>
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
                <S.GroupLeaderInfo>
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
                <S.TitleInput type="text" placeholder="" />
                <S.FormTitle>날짜 및 시간</S.FormTitle>
                <S.DateInput
                  type="datetime-local"
                  id="meeting-time"
                  max="2077-06-20T21:00"
                  min="2077-06-05T12:30"
                  value="2024-06-10T09:10"
                />
              </S.InputWrapper>
              <S.ProfileImageWrapper>
                <S.DefaultPostImage src="https://cdn.pixabay.com/photo/2023/10/02/14/00/egg-8289259_1280.png"/>
              </S.ProfileImageWrapper>
            </S.ModalBody>
            <S.ModalFooter>
              <S.FormTitle>소개글</S.FormTitle>
              <S.SubmitButton onClick={handleSubmit}>등록</S.SubmitButton>
              <S.CloseButton onClick={handleModalClose}>닫기</S.CloseButton>
            </S.ModalFooter>
          </S.ModalContainer>
        </S.ModalOverlay>
      )}
    </S.AppContainer>
  );
};

export default App;
