import styled from 'styled-components';

export const Container = styled.div`
  /* min-width: 100vw; */
  min-height: 100vh;
  background-color: #d9d9d9;
  display: flex;
  justify-content: center;
`;

export const Comment = styled.div`
    display: flex;
    border-top: solid gray 2px;
    padding-top: 2%;
`;

export const EditContainer = styled.div`
  width: 75vw;
  height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-sizing: border-box;
  padding: 1rem 10rem;
  gap: 1.725rem;
`;

export const MainText = styled.div`
   
`;

export const Banner = styled.div`
     img {
        width: 100%;
    }
`;

export const User = styled.div`
   background-color: #a13e8d;
    width: 40px;
    height: 23px;
    border-radius: 100%;
`;

export const UserText = styled.div`
    margin-left: 10px;
    top: -3%;
    position: relative;
    p {
        margin: 0;
    }
`;
