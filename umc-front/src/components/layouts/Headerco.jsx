import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">홈</Link>
          </li>
          <li>
            <Link to="/lawyer-introduction">변호사소개</Link>
          </li>
          <li>
            <Link to="/listWrite">상담사례</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;