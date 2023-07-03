import React from "react";
import styled from "styled-components";

const ProfileGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  margin: 0px 120px;
  padding-bottom: 10px;
`;

const ProfileItem = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  border: none; /* 경계선 제거 */
`;

const VerticalDivider = styled.div`
  width: 1px; /* 세로 경계선의 너비 */
  background-color: #ccc; /* 세로 경계선의 색상 */
  height: 100%; /* 그리드 아이템의 높이와 동일하게 설정 */
  grid-column: 1 / span 2; /* 아이템이 두 개 열을 가로지르도록 설정 */
`;

const LawyerProfile = () => {
  const profiles = [
    {
      nickname2 : "해결사",
      nickname: "쉽고 친절한 변호사",
      name: "ㅇㅇㅇ변호사",
      introduction: "나는야 변호사",
      price: "$50/hour",
    },
    {
      nickname2 : "해결사",
      nickname: "쉽고 친절한 변호사",
      name: "ㅃㅃㅃ변호사",
      introduction: "나는야 변호사",
      price: "$60/hour",
    },
    {
      nickname2 : "해결사",
      nickname: "쉽고 친절한 변호사",
      name: "ㅁㅁㅁ변호사",
      introduction: "나는야 변호사",
      price: "$70/hour",
    },
    {
      nickname2 : "해결사",
      nickname: "쉽고 친절한 변호사",
      name: "ㄹㄹㄹ변호사",
      introduction: "나는야 변호사",
      price: "$80/hour",
    },
  ];

  return (
    <ProfileGrid>
      {profiles.map((profile, index) => (
        <>
          <ProfileItem key={index}>
          <p>{profile.nickname},{profile.nickname2}</p>
            <h3>{profile.name}</h3>
            <p>소개: {profile.introduction}</p>
            <p>가격: {profile.price}</p>
          </ProfileItem>
          {/* 가운데 세로로 경계선 */}
          {index === 1 && <VerticalDivider />}
        </>
      ))}
    </ProfileGrid>
  );
};

export default LawyerProfile;
