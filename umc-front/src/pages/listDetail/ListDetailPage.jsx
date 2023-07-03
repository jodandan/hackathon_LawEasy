import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import banner from "../../assets/ban.png";
import axios from "axios"; // axios 모듈 import

import {
  Container,
  Comment,
  EditContainer,
  MainText,
  Banner,
  User,
  UserText,
} from "../../style/ListDetailPageStyle.jsx";

const CommentUpdate = styled.div`
  width: 100%;
  position: relative;
  padding-top: 1%;
  input {
    width: 100%;
  }
  button {
    position: relative;
    left: 93%;
    margin-top: 5px;
  }
`;

const ListDetail = () => {
  const [mainText, setMainText] = useState(null);
  const [comments, setComments] = useState([]);

  const [comment, setComment] = useState(""); // 댓글을 저장할 상태
  const [commentInput, setCommentInput] = useState(""); // 댓글 입력 값을 관리할 상태

  const submitComment = () => {
    // commentInput 값으로 댓글 전송 로직을 구현해주세요.
    // API 호출이나 다른 저장 로직을 이 부분에 작성합니다.
    // 댓글 전송 후 필요한 업데이트를 수행할 수 있습니다.
    console.log("댓글 전송:", commentInput);
    setComment(commentInput); // comment 상태를 업데이트하여 댓글 데이터 저장
    setCommentInput(""); // 댓글 입력값 초기화
  };

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://43.202.93.57:8080/posts/${id}`
        );
        const data = response.data.result;
        console.log(data);
        setMainText(data);
        setComments(data.comments);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  if (!mainText) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Container>
        <EditContainer>
          <MainText>
            <h1>{mainText.category}</h1>
            <p>{mainText.nickname}</p>

            <h1>{mainText.title}</h1>
            <p>{mainText.content}</p>
            <p>{mainText.createdAt}</p>
          </MainText>
          <Banner>
            <img src={banner} alt="배너" />{" "}
            {/* 이미지에는 alt 속성을 추가해주는 것이 좋습니다. */}
          </Banner>
          <p>👑 답변</p>

          <Comment>
            <h3>Chat Gpt 답변</h3>
            <p>{mainText.gptComment}</p>
            {comments.map((comment) => (
              <Comment key={comment.commentId}>
                <UserText>
                  <h3>{comment.nickname}</h3>
                  <p>{comment.content}</p>
                  <p>{comment.createdAt}</p>
                </UserText>
              </Comment>
            ))}
            <Comment>
              {/* 댓글 데이터 표시 */}
              {comment && (
                <div>
                  <h3>우영우 변호사</h3>
                  <UserText>
                    <p>{comment}</p>
                    <p>2023.08.02</p>
                  </UserText>
                </div>
              )}
            </Comment>
            <CommentUpdate>
              {" "}
              <input
                type="text"
                value={commentInput}
                onChange={(e) => setCommentInput(e.target.value)}
                placeholder="댓글을 입력하세요"
              />{" "}
              <button onClick={submitComment}>댓글 작성</button>
            </CommentUpdate>
          </Comment>
        </EditContainer>
      </Container>
    </div>
  );
};

export default ListDetail;
