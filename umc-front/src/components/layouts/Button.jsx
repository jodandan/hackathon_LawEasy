import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CategoriesContainer = styled.div`
    position: relative;
    padding-left: 15%;
    top: 31px;
`;

const Button = styled.button`
  background-color: #ffffff;
  color: #333333;
  border: 1px solid #FF60D2;
  padding: 10px 20px;
  margin-right: 20px;
  width: 33%;
  margin-bottom: 13px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #333333;
    color: #ffffff;
  }
`;

const Categories = () => {
  return (
    <CategoriesContainer>
        <Link to="/listWrite"><Button>재산</Button></Link>
        <Link to="/listWrite"><Button>사기</Button></Link>
        <Link to="/listWrite"><Button>병역</Button></Link>
        <Link to="/listWrite"><Button>의료</Button></Link>
        <Link to="/listWrite"><Button>노동</Button></Link>
        <Link to="/listWrite"><Button>폭력</Button></Link>
        <Link to="/listWrite"><Button>사이버</Button></Link>
        <Link to="/listWrite"><Button>교통</Button></Link>
        <Link to="/listWrite"><Button>범죄</Button></Link>
        <Link to="/listWrite"><Button>모욕</Button></Link>
        <Link to="/listWrite"><Button>가정</Button></Link>
        <Link to="/listWrite"><Button>기타</Button></Link>
    </CategoriesContainer>
  );
};

export default Categories;
