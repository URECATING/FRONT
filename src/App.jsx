import styled from "styled-components";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import { instance } from "./apis";

function App() {
  const [count, setCount] = useState(0);
  const getPost = async () => {
    try {
      const res = await instance.get("/post");
      console.log(res.data.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    console.log("count:", count);
  }, [count]);

  useEffect(() => {
    getPost();
  }, []);

  return (
    <Wrapper>
      <Header />
      <ContentWrapper>
        <Content>본문입니다.</Content>
        <Content style={{ backgroundColor: "blue" }}>본문3입니다.</Content>
      </ContentWrapper>
      {`카운트: ${count}`}
      <button
        style={{ backgroundColor: "green" }}
        onClick={() => setCount(count + 1)}
      >
        Click me
      </button>
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  width: 500px;
  height: 500px;
  background-color: skyblue;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default App;
