import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import banner from '../../assets/ban.png';
import axios from 'axios'; // axios 모듈 import

import { Container, Comment, EditContainer, MainText, Banner, User, UserText } from '../../style/ListDetailPageStyle.jsx';

const ListDetail = () => {


// const [mainText, setMainText] = useState('');
// const [comment, setComment] = useState('');
// const {id } = useParams();

// useEffect(() => {
//     fetchComment(id); // 페이지가 로드될 때 호출
//     const fetchMainText = async (id) => {
//         try {
//           const response = await axios.get(`http://13.124.104.174:8080/app/guide/gpt`);
//           setMainText(response.data);
//         } catch (error) {
//           console.error(error);
//         }
//       };

//   const fetchComment = async () => {
//     try {
//       const response = await axios.get(`http://13.124.104.174:8080/app/guide/${id}`);
//       setComment(response.data); // 받아온 데이터를 상태에 저장
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   fetchMainText();
//   fetchComment();
// }, []);


  return (
    <div>
      <Container>
        <EditContainer>
          <MainText>
            <p>사이버</p>
            <h1></h1>
            <p></p>
            {/* <p>{mainText.categories}</p> 
            <h1>{mainText.title}</h1> 
            <p>{mainText.content}</p> 
            <p>{mainText.nickname}</p>  */}
            <p>2021.02.03</p>
          </MainText>
          <Banner>
            <img src={banner} alt="배너" /> {/* 이미지에는 alt 속성을 추가해주는 것이 좋습니다. */}
          </Banner>
          <p>👑 답변</p>
          <Comment>
            <User></User>
            {/* {comments.map((comment) => (
            <Comment key={comment.id}>
              <User></User>
              <UserText>
                <p>{comment.nickname}</p>
                <p>{comment.comment}</p>
                <p>2023.07.03</p>
              </UserText>
            </Comment>
          ))} */}
          </Comment>
        </EditContainer>
      </Container>
    </div>
  );
};

export default ListDetail;