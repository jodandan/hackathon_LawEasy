import React from 'react';
import { Link } from 'react-router-dom';

const ListWrite = () => {
  return (
   <div>
    작성페이지 입니다.
    <Link to="/listDetail"><button>상세페이지</button></Link>
   </div>
  );
};

export default ListWrite;
