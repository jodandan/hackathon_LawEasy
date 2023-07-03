import styled from "styled-components";

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
  box-sizing: border-box;
  padding: 5rem 10rem;
`;

const EditDesc = styled.div`
  p {
    font-weight: 700;
  }
`;

const Yellow = styled.span`
  color: #e26538;
`;

const ListWrite = () => {
  return (
    <Container>
      <EditContainer>
        <EditDesc>
          <p>상담글을 작성하고</p>
          <p>
            <Yellow>무료로</Yellow> 변호사 답변을 받으세요
          </p>
        </EditDesc>
      </EditContainer>
    </Container>
  );
};

export default ListWrite;
