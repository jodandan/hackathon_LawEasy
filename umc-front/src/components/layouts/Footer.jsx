import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Laweasy = styled.div`
      background-color: #666666;
    display: flex;
    justify-content: center;
    align-items: center;
    /* margin-top: 5%; */
    height: 200px;
`;

const FooterLaw = () => {
  return (
    <Laweasy>
        <p>로이지는 법률에 대한 진입장벽을 낮추고자하는 서비스입니다.</p>
    <button>서비스 소개 - </button>
    </Laweasy>
  );
};

export default FooterLaw;
