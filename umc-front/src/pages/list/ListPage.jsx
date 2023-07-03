import { useState } from "react";
import styled from "styled-components";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { RxBox } from "react-icons/rx";

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
  min-height: 100vh;
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

const InputContainer = styled.div`
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
  transition: 0.2s all ease-in;
  border: ${({ selected }) =>
    selected ? "none" : "1px solid rgba(0, 0, 0, 0.3)"};
  border-radius: 10000px;
  background-color: ${({ selected }) => (selected ? "#FF60D2" : "white")};
  color: ${({ selected }) => (selected ? "white" : "black")};
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
  padding: 0.725rem 0.5rem;
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

const CheckDesc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const SubmitBtn = styled.button`
  transition: 0.2s all ease-in;
  border: 0;
  background-color: transparent;
  width: 100%;
  padding: 0.725rem;
  background-color: ${({ active }) => (active ? "#FF60D2" : "#cfcfcf")};
  color: white;
  font-size: 1.25rem;
  border-radius: 10px;
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
  const [selected, setSelected] = useState("");
  const [agree, setAgree] = useState(false);

  const changeTitle = (e) => {
    setTitle(e.target.value);
  };

  const changeContent = (e) => {
    setContent(e.target.value);
  };

  const selectCategory = (e) => {
    if (selected === e.target.innerText) {
      setSelected("");
      return;
    }
    setSelected(e.target.innerText);
  };

  const changeAgree = (e) => {
    setAgree(!agree);
  };

  const submitData = () => {
    if (title.length === 0) {
      alert("제목을 입력해주세요");
      return;
    }
    if (content.length === 0) {
      alert("본문을 입력해주세요");
      return;
    }
    if (selected.length === 0) {
      alert("카테고리를 선택해주세요");
      return;
    }

    const data = {
      title,
      content,
      selected,
    };

    console.log(data);
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
              <Radio
                selected={category === selected}
                key={category}
                onClick={selectCategory}
              >
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
          <InputBox>
            <CheckDesc>
              <p>상담글 등록 전 반드시 확인해주세요!</p>
              <ul>
                <li>
                  상담글 제목은 답변을 받기에 적합한 내용으로 일부 변경될 수
                  있습니다.
                </li>
                <li>상담글에 변호사의 답변 등록 시 글 삭제가 불가합니다.</li>
                <li>
                  등록된 상담글은 네이버 지식인, 포털 사이트, 로톡 사이트에
                  내용이 공개됩니다.
                </li>
                <li>
                  아래 사항에 해당할 경우, 서비스 이용이 제한될 수 있습니다.
                </li>
                <li>
                  개인정보(개인/법인 실명, 전화번호, 주민번호, 주소, 아이디 등)
                  및 외부 링크가 포함된 경우
                </li>
                <li>변호사 선임 및 변호사 선임 비용과 관련된 질문인 경우</li>
                <li>법률 문제 해결을 목적으로 작성한 상담글이 아닌 경우</li>
                <li>
                  동일/유사한 내용의 게시물을 지속적으로 반복 게재하는 경우
                </li>
                <li>의미없는 문자의 나열인 경우</li>
              </ul>
              <span onClick={changeAgree}>
                {agree ? <AiOutlineCheckCircle /> : <RxBox />} 안내 사항을 모두
                확인했으며, 동의합니다.
              </span>
            </CheckDesc>
          </InputBox>
        </InputContainer>
        <SubmitBtn onClick={submitData} active={agree}>
          상담글 등록하기
        </SubmitBtn>
      </EditContainer>
    </Container>
  );
};

export default ListWrite;
