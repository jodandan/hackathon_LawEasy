import { useRef, useState } from "react";
import styled from "styled-components";
import CATEGORIES from "../../constants/categories";

const Container = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background-color: #d9d9d9;
  display: flex;
  justify-content: center;
`;

const EditContainer = styled.div`
  width: 75vw;
  height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-sizing: border-box;
  padding: 5rem 10rem;
  gap: 1.725rem;
`;

const EditDesc = styled.div`
  display: flex;
  width: 60vw;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  p {
    font-weight: 700;
    margin: 0;
  }
`;

const InputContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  gap: 2rem;
  width: 100%;
`;

const RadioBox = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.725rem;
`;

const Radio = styled.div`
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 10000px;

  .select {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  label {
    font-weight: 600;
    margin-bottom: 0.725rem;
  }
`;

const Input = styled.input`
  box-sizing: border-box;
  height: 2rem;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  width: 100%;
  outline: none;
`;

const Textarea = styled.textarea`
  box-sizing: border-box;
  width: 100%;
  min-height: 10rem;
  resize: none;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  padding: 1rem;

  outline: none;
`;

const Blur = styled.span`
  opacity: 0.7;
`;

const Yellow = styled.span`
  color: #e26538;
`;

const ListWrite = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const currentRef = useRef(null);

  const changeTitle = (e) => {
    setTitle(e.target.value);
  };

  const changeContent = (e) => {
    setContent(e.target.value);
  };

  const selectCategory = (e) => {
    if (currentRef.current === e.target) return;
    // console.log()
    // currentRef.current.classList.remove("select");
    // currentRef.current = e.target;
    e.target.classList.add("select");
  };

  return (
    <Container>
      <EditContainer>
        <EditDesc>
          <p>상담글을 작성하고</p>
          <p>
            <Yellow>무료로</Yellow> 변호사 답변을 받으세요
          </p>
        </EditDesc>
        <InputContainer>
          <RadioBox>
            {CATEGORIES.map((category) => (
              <Radio key={category} onClick={selectCategory}>
                {category}
              </Radio>
            ))}
          </RadioBox>
          <InputBox>
            <label htmlFor="title">
              제목{" "}
              <Blur>
                (10자 이상<Yellow>*</Yellow>)
              </Blur>
            </label>
            <Input
              value={title}
              onChange={changeTitle}
              id="title"
              type="text"
              placeholder="제목을 작성해주세요"
            />
          </InputBox>
          <InputBox>
            <label htmlFor="content">
              내용{" "}
              <Blur>
                (200자 이상<Yellow>*</Yellow>)
              </Blur>
            </label>
            <Textarea
              name="content"
              id="content"
              placeholder="내용을 작성해주세요"
              value={content}
              onChange={changeContent}
            />
          </InputBox>
        </InputContainer>
      </EditContainer>
    </Container>
  );
};

export default ListWrite;
