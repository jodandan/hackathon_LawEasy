import Headerco from '../../components/layouts/Headerco.jsx';
import React from "react";
import styled from "styled-components";

const HeaderUnder = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HistoryContainer = styled.div`
  background: #E6E6E6;
  height: 400px;
  width: 800px; /* Increase the width */
  text-align: center;
  margin: auto;
  margin-top: 100px;
`;

const MyConsult = styled.div`
  font-size: 20px;
  text-align: left;
  border-bottom: 3px solid black;
  font-weight: bold;
  padding-left: 5%;
  padding-top: 30px;
`;

const Container = styled.div`
  background: #E6E6E6;
  padding: 30px; /* Adjust the padding as needed */
`;

const Writinglist = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  border-bottom: 1px solid black;
  margin-bottom: 25px;
  padding-bottom: 20px;
  text-align: left;
`;

function MyProfile() {
  return (
    <div>
      <HeaderUnder>
        <h2>마이페이지</h2>
      </HeaderUnder>
      <HistoryContainer>
        <MyConsult>내 상담내역</MyConsult>
        <Container>
          <Writinglist>
            <ListItem>제목: 나 커밋안한다</ListItem>
            <ListItem>제목: 다른 상담 내용</ListItem>
            <ListItem>제목: 더 많은 상담 내용</ListItem>
            <ListItem>제목: 다른 상담 내용</ListItem>
            <ListItem>제목: 더 많은 상담 내용</ListItem>
          </Writinglist>
        </Container>
      </HistoryContainer>
    </div>
  );
}

export default MyProfile;
