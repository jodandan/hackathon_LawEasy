import React from "react";
import { Link } from "react-router-dom";
import logoTypeImg from "../../assets/LogoLaw.png";
import styled from "styled-components";
import { BiSolidUserRectangle } from "react-icons/bi";

const HeaderContainer = styled.header`
  padding-left: 10%;
  border-bottom: solid #b6b6b6 1px;
  button {
    border-style: none;
    position: relative;
    left: 65%;
  }
  img {
    width: 150px;
    position: relative;
    top: 10px;
  }
  a {
    font-size: 1.2rem;
    color: dimgrey;
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

const Mypage = styled.div`
  position: absolute;
  left: 83%;
  top: 68%;
  z-index: 999;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <div>
        <img src={logoTypeImg}></img>
        <Link to="/Signup">
          <button>로그인</button>
        </Link>
        <Link to="/Signin">
          <button>회원가입</button>
        </Link>
        <Link to="/myPage" style={{ textDecoration: "none" }}>
          <Mypage>
            <BiSolidUserRectangle size="24" />
          </Mypage>
        </Link>
      </div>

      <NAVContainer>
        <ul>
          <li>
            <Link to="/" style={{ textDecoration: "none" }}>
              홈
            </Link>
          </li>
          <li>
            <Link to="/lawyer-introduction" style={{ textDecoration: "none" }}>
              변호사소개
            </Link>
          </li>
          <li>
            <Link to="/list/all" style={{ textDecoration: "none" }}>
              상담사례
            </Link>
          </li>
        </ul>
      </NAVContainer>
    </HeaderContainer>
  );
};

export default Header;
