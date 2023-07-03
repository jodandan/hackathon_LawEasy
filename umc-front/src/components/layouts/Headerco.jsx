import React from 'react';
import { Link } from 'react-router-dom';
import logoTypeImg from '../../assets/LogoLaw.png'
import styled from 'styled-components';

const HeaderContainer = styled.header`
  padding-left:10%;
  border-bottom: solid #b6b6b6 1px;
  img {
    width: 150px;
    position: relative;
    top:10px;
  }
  a{
    font-size: 1.2rem;
    color: dimgrey;;
  }
  position: relative;
  ul {
    display: flex;
    padding: 0;
  }
  li {
    list-style: none;
    margin-right: 10px;
  }
`;

const NAVContainer = styled.div`
  position: relative;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <div>
        <img src={logoTypeImg}></img>
        <button>로그인/회원가입</button>
      </div>

      <NAVContainer>
        <ul>
          <li>
            <Link to="/" style={{ textDecoration: "none" }}>홈</Link>
          </li>
          <li>
            <Link to="/lawyer-introduction" style={{ textDecoration: "none" }}>변호사소개</Link>
          </li>
          <li>
            <Link to="/listWrite" style={{ textDecoration: "none" }}>상담사례</Link>
          </li>
        </ul>
      </NAVContainer>
      </HeaderContainer>
  );
};

export default Header;