import { Link, useParams } from "react-router-dom";
import { styled } from "styled-components";
import { BsPencilSquare } from "react-icons/bs";

import CATEGORIES, { CATEGORIES_LINK } from "../../constants/categories";

const data = [
  {
    category: "재산",
    id: 1,
    title: "옆집 강아지를 고소하고 싶습니다",
    created_at: Date.now(),
    gpt_comment: "말이 되는 소리를 하십쇼",
  },
  {
    category: "재산",
    id: 2,
    title: "무한리필집에서 고소를 당했습니다",
    created_at: Date.now(),
    gpt_comment:
      "말이 되는 소리를 하십쇼 말이 되는 소리를 하십쇼 말이 되는 소리를 하십쇼 말이 되는 소리를 하십쇼 말이 되는 소리를 하십쇼 말이 되는 소리를 하십쇼말이 되는 소리를 하십쇼 말이 되는 소리를 하십쇼말이 되는 소리를 하십쇼말이 되는 소리를 하십쇼말이 되는 소리를 하십쇼말이 되는 소리를 하십쇼말이 되는 소리를 하십쇼말이 되는 소리를 하십쇼",
  },
  {
    category: "재산",
    id: 3,
    title: "안 걸리고 무단횡단 하는 방법",
    created_at: Date.now(),
    gpt_comment:
      "말이 되는 소리를 하십쇼 말이 되는 소리를 하십쇼말이 되는 소리를 하십쇼말이 되는 소리를 하십쇼말이 되는 소리를 하십쇼말이 되는 소리를 하십쇼말이 되는 소리를 하십쇼말이 되는 소리를 하십쇼말이 되는 소리를 하십쇼말이 되는 소리를 하십쇼말이 되는 소리를 하십쇼말이 되는 소리를 하십쇼말이 되는 소리를 하십쇼말이 되는 소리를 하십쇼말이 ",
  },
  {
    category: "재산",
    id: 4,
    title: "실수로 개미를 죽였습니다.",
    created_at: Date.now(),
    gpt_comment:
      "말이 되는 소리를 하십쇼 말이 되는 소리를 하십쇼말이 되는 소리를 하십쇼말이 되는 소리를 하십쇼말이 되는 소리를 하십쇼말이 되는 소리를 하십쇼",
  },
  {
    category: "재산",
    id: 5,
    title: "스노우 AI 증명사진으로 민증 만들어도 되나요?",
    created_at: Date.now(),
    gpt_comment:
      "말이 되는 소리를 하십쇼 말이 되는 소리를 하십쇼 말이 되는 소리를 하십쇼말이 되는 소리를 하십쇼말이 되는 소리를 하십쇼말이 되는 소리를 하십쇼말이 되는 소리를 하십쇼말이 되는 소리를 하십쇼 말이 되는 소리를 하십쇼말이 되는 소리를 하십쇼말이 되는 소리를 하십쇼말이 되는 소리를 하십쇼말이 되는 소리를 하십쇼말이 되는 소리를 하십쇼 말이 되는 소리를 하십쇼말이 되는 소리를 하십쇼말이 되는 소리를 하십쇼말이 되는 소리를 하십쇼말이 되는 소리를 하십쇼말이 되는 소리를 하십쇼 말이 되는 소리를 하십쇼말이 되는 소리를 하십쇼말이 되는 소리를 하십쇼말이 되는 소리를 하십쇼말이 되는 소리를 하십쇼말이 되는 소리를 하십쇼 말이 되는 소리를 하십쇼말이 되는 소리를 하십쇼말이 되는 소리를 하십쇼말이 되는 소리를 하십쇼말이 되는 소리를 하십쇼말이 되는 소리를 하십쇼 말이 되는 소리를 하십쇼말이 되는 소리를 하십쇼말이 되는 소리를 하십쇼말이 되는 소리를 하십쇼말이 되는 소리를 하십쇼",
  },
];

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 0 10rem;
`;

const Title = styled.h2`
  font-weight: 300;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  margin: 0;
  padding: 2rem 0;
`;

const CategoryList = styled.div`
  padding: 1.25rem 0;
  display: flex;
  align-items: center;
  gap: 0.725rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
`;

const Category = styled.span`
  opacity: ${({ selected }) => (selected ? "1" : "0.4")};
  border-bottom: ${({ selected }) => (selected ? "1px solid black" : "none")};
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Post = styled.div`
  padding: 2rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

const CategortName = styled.span`
  opacity: 0.6;
  font-size: 0.75rem;
`;

const PostTitle = styled.h2`
  font-weight: 300;
`;

const CommentAuthor = styled.span`
  opacity: 0.8;
  font-size: 0.8rem;
`;

const Comment = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`;

const Created = styled.p`
  font-size: 0.8rem;
  text-align: end;
`;

const PostBtn = styled.div`
  position: fixed;
  right: 10px;
  bottom: 10px;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #e26538;
  * {
    color: white;
    font-size: 0.75rem;
  }
`;

const Yellow = styled.span`
  color: #e26538;
`;

function PostList() {
  const { category } = useParams();
  /* TODO 게시글 정보 가지고 오기 */
  /* 일단 더미 데이터 활용 */
  return (
    <Container>
      <Title>상담사례</Title>
      <CategoryList>
        {CATEGORIES.map((c) => (
          <Category selected={CATEGORIES_LINK[c] === category}>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to={`/list/${CATEGORIES_LINK[c]}`}
            >
              {c}
            </Link>
          </Category>
        ))}
      </CategoryList>
      <ListContainer>
        {data.map((post) => (
          <Post>
            <CategortName>{post.category}</CategortName>
            <PostTitle>{post.title}</PostTitle>
            <CommentAuthor>
              <Yellow>답변 </Yellow> ChAT GPT의 답변입니다
            </CommentAuthor>
            <Comment>{post.gpt_comment}</Comment>
            <Created>{post.created_at}</Created>
          </Post>
        ))}
      </ListContainer>
      <Link style={{ textDecoration: "none", color: "white" }} to="/listWrite">
        <PostBtn>
          <BsPencilSquare width="20px" />
          <span>글 작성</span>
        </PostBtn>
      </Link>
    </Container>
  );
}

export default PostList;
