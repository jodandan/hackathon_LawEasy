import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import banner from '../../assets/ban.png';
import { Container, Comment, EditContainer, MainText, Banner, User, UserText } from '../../style/ListDetailPageStyle.jsx';



// const [mainText, setMainText] = useState('');

// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const response = await axios.get('API_URL'); // API_URL을 실제 API 엔드포인트로 변경해야 합니다.
//       setMainText(response.data.mainText);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   fetchData();
// }, []);

const ListDetail = () => {
  return (
   <div>
    <Container>
      <EditContainer>
        <MainText>
            <p>사이버</p>
            <h1>트위터 디엠 통매음 고소</h1>
            <p>얼마 전 트위터 디엠으로 어쩌꼬 저쩌공 럼ㅇ베아러니멍아러너아달, 아저애러미이나어리저디안얼어차앚다어다아아
            얼마 전 트위터 디엠으로 어쩌꼬 저쩌공 럼ㅇ베아러니멍아러너아달, 아저애러미이나어리저디안얼어차앚다어다아아
            얼마 전 트위터 디엠으로 어쩌꼬 저쩌공 럼ㅇ베아러니멍아러너아달, 아저애러미이나어리저디안얼어차앚다어다아아
            </p>
            <p>2021.02.03</p>
        </MainText>
        <Banner>
            <img src={banner}></img>
        </Banner>
        <p>👑 답변</p>
        <Comment>
            <User></User>
            <UserText>
                <p>CHAT GPT</p>
                <p>addngldadigdfddfdfadgdagrjnhgmhf
                ㅇㄴㄻㅇㄹ
                ㅁㅇㅁㄻㅇ
                ㅁㅇㄻㄴㅇㄻㄴㅇㄻㅇㄴㄻㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㄹㅇ
                ㅁㄴㅇㅁㄹㄹㄹㄹㄹㄹㄹㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ</p>
                <p>2023.07.03</p>
            </UserText>
        </Comment>
        
         {/* 가운데 디브 */}
         {/* 그리고 그 안에 본문container */}
         {/* 밑에 배너 */}
         {/* 그리고 댓글 */}
      </EditContainer>
    </Container>
    
   
   </div>
  );
};

export default ListDetail;
