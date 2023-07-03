import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import banner from '../../assets/ban.png';
import axios from 'axios'; // axios 모듈 import

import { Container, Comment, EditContainer, MainText, Banner, User, UserText } from '../../style/ListDetailPageStyle.jsx';

const ListDetail = () => {
  const [mainText, setMainText] = useState(null);
  const [comments, setComments] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://43.202.93.57:8080/posts/${id}`);
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
            <p>사이버</p>
            <h1>{mainText.category}</h1>
            <p>{mainText.createdAt}</p>
            <h1>{mainText.title}</h1>
            <p>{mainText.content}</p>
            <p>{mainText.nickname}</p>
          </MainText>
          <Banner>
            <img src={banner} alt="배너" /> {/* 이미지에는 alt 속성을 추가해주는 것이 좋습니다. */}
          </Banner>
          <p>👑 답변</p>
          <Comment>
            <User></User>
            {comments.map((comment) => (
              <Comment key={comment.commentId}>
                <User></User>
                <UserText>
                  <p>{comment.nickname}</p>
                  <p>{comment.content}</p>
                  <p>{comment.createdAt}</p>
                </UserText>
              </Comment>
            ))}
          </Comment>
        </EditContainer>
      </Container>
    </div>
  );
};

export default ListDetail;
