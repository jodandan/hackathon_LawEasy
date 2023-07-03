import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import banner from '../../assets/ban.png';
import { Container, Comment, EditContainer, MainText, Banner, User, UserText } from '../../style/ListDetailPageStyle.jsx';
import FooterLaw from '../../components/layouts/Footer';

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
    const [comment, setComment] = useState(''); // 댓글을 저장할 상태
  const [commentInput, setCommentInput] = useState(''); // 댓글 입력 값을 관리할 상태
  const submitComment = () => {
    // commentInput 값으로 댓글 전송 로직을 구현해주세요.
    // API 호출이나 다른 저장 로직을 이 부분에 작성합니다.
    // 댓글 전송 후 필요한 업데이트를 수행할 수 있습니다.
    console.log('댓글 전송:', commentInput);
  setComment(commentInput); // comment 상태를 업데이트하여 댓글 데이터 저장
  setCommentInput(''); // 댓글 입력값 초기화
  };
  return (
   <div>
    <Container>
      <EditContainer>
        <MainText>
            <p>교통</p>
            <h1>무면허 음주운전 범인도피죄 상담 및 대처 방안</h1>
            <p>작년 8월에 남자친구가 무면허 음주운전을 하고 대물(정차된 오토바이 뒷면 살짝 찌그러진 정도)피해를 입혔습니다
            둘이서 차에서 잠깐 이야기하는 사이 갑자기 차를 출발 시켜  동승자인 저도 말리기도 했고 자기도 아닌 걸 알았는지 50m정도 이동하고  중간에 세워서 대리를 기다리다가 오토바이 주인이 와서 그때 사건을 인지했습니다  피해자와는 경찰조사 때 합의했고요 2진이다 보니 현장에 없던 b친구한테 부탁을 해 운전자 바꿔치기를 하고 경찰 조사 때도 거짓증언을 하였습니다 저도 남자친구가 시키는 대로 거짓 증언을 했고 사고 당시 b친구가 남자친구 연락을 안 받아서 제가 대신 상황을 전달하게 되었습니다
            그러다 현재 몇 일 전 검찰 조사  때 남자친구가 먼저 자수를 해서 저희 다 자수를 하였습니다
            전과는 없고요 조사했던 분도  검사님도 반성문 써오면 벌금 줄여준다 하였고 전 약식기소로 벌금형 나올 줄 알고 기다렸는데 어제 구공판 하였다고 문자가 왔습니다
            재판도 처음이고 결과가 어떻게 되는건지 너무 걱정되네요
            </p>
            {/* <p>{mainText}</p> */}
            <p>2021.02.03</p>
        </MainText>
        <Banner>
            <img src={banner}></img>
        </Banner>
        <p>👑 답변</p>
        <Comment>
            {/* <User></User> */}
            <UserText>
                <p>CHAT GPT</p>
                <p>사건이 검찰에 송치된 후, 검찰이 조사를 진행하고 자수 협상을 진행한 것으로 이해했습니다. 그리고 어제 구공판이 진행되었다는 메시지를 받았다고 합니다. 이는 법원에서 사건을 심리하고 결정을 내리는 과정입니다.

재판에서는 여러 가지 요소를 고려하여 판결을 내립니다. 이에는 사건의 경중, 증거, 각 측의 주장 및 증언, 법적 규정 등이 포함됩니다. 심리 과정에서 변호사를 통해 자신의 주장을 전달하고 변호 받을 수 있으며, 검찰과 변호사는 서로의 주장을 반박하거나 논쟁할 수 있습니다.</p>
 <p>2023.07.03</p>
            </UserText>
<CommentUpdate> <input
    type="text"
    value={commentInput}
    onChange={(e) => setCommentInput(e.target.value)}
    placeholder="댓글을 입력하세요"
  />  <button onClick={submitComment} >댓글 작성</button>
  </CommentUpdate>
           

        </Comment>
        <Comment>
  {/* 댓글 데이터 표시 */}
  {comment && (
    <div>
        <p>김상옥 변호사</p>
      <UserText>
        <p>{comment}</p>
        <p>2023.08.02</p>
      </UserText>
    </div>
  )}
</Comment>
        
         {/* 가운데 디브 */}
         {/* 그리고 그 안에 본문container */}
         {/* 밑에 배너 */}
         {/* 그리고 댓글 */}
      </EditContainer>
    </Container>
    {/* <FooterLaw></FooterLaw> */}
    
   
   </div>
  );
};

export default ListDetail;