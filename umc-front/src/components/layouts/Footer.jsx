import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logoType from '../../assets/LawEasyB.png';
const Laweasy = styled.div`
      background-color: #858585;
    display: block;
    padding-top: 1%;
    padding-left: 10%;
    padding-right: 13%;
    overflow: hidden;
    justify-content: center;
    align-items: center;
    /* margin-top: 5%; */
    p {
        font-size: 0.5rem;
    }
    height: 200px;
`;

const FooterLaw = () => {
  return (
    <Laweasy>
        <h3>회사소개 이용약관</h3>
        <p>(주)로앤컴퍼니   서울시 강남구 강남대로 374, 케이스퀘어빌딩 3층   사업자번호 : 264-81-01728   통신판매번호 : 2016-서울서초-0227</p>
        <p>(주)로앤컴퍼니는 대한민국 법률시장의 정보비대칭과 불법 법조브로커를 해소하여 투명하고 공정한 법률시장을 만들기 위해 로톡(LawTalk) 서비스를 제공하고 있습니다. 로톡은 의뢰인회원의 법률상담 내용 및 상담 여부, 법률사건 내용 및 수임 여부, 변호사회원의 선택 등에 대해 일절 관여하지 않아 변호사법 및 기타 관련규정을 준수하고 있으며, 변호사회원이 의뢰인회원에게 제공하는 서비스의 내용과 질에 대해 어떠한 법적책임도 부담하지 않습니다. 또한 회원간의 예약 및 결제정보의 중개서비스 또는 통신판매중개 시스템을 제공할 뿐, 통신판매의 당사자가 아닙니다. 모든 법률상담은 각 변호사회원이 직접 수행하며, 모든 변호사회원은 각 소속 법률사무소, 로펌에서 독립적으로 법률업무를 수행합니다. 그리고 로톡에 가입한 변호사들 상호간에는 어떠한 조직적인 관계가 없음을 밝힙니다. 로톡에 표시된 변호사회원의 정보는 해당 변호사가 직접 제공한 것이며 무단으로 복제, 편집, 전시, 전송, 배포, 판매, 방송, 공연 등에 이용할 수 없습니다</p>
       <img src={logoType}></img>
         <p>(주)시장의 정보비대칭과 불법 법조브로커를 해소하여 투명하고 공정한 법률시장을 만들기 위해 로톡(LawTalk) 서비스를 제공하고 있습니다. 로톡은 의뢰인회원의 법률상담 내용방송, 공연 등에 이용할 수 없습니다</p>
    </Laweasy>
  );
};

export default FooterLaw;
