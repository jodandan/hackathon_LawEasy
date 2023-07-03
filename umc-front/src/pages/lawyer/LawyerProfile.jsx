import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getLawer } from "../../api/api";

const ProfileGrid = styled.div`
  padding-top: 30px;
  display: grid;
  grid-template-columns: repeat(
    2,
    1fr
  ); /* Add an additional column for the divider */
  grid-gap: 20px;
  margin: 0px 120px;
  padding-bottom: 10px;
`;

const ProfileItem = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  grid-column-gap: 0px;
`;

const VerticalDivider = styled.div`
  width: 1px; /* width of vertical border */
  background-color: #ccc; /* vertical border color */
  height: 100%; /* Set it equal to the height of the grid item */
  grid-column: 2; /* Set the divider to the second column */
`;

const CounselingCell = styled.div`
  border: 1px solid #ccc;
  padding: 5px;
  padding-right: 5px;
`;

const AdditionalInfo = styled.span`
  font-size: 6px;
  color: gray;
  /* Add any additional styling properties you need */
`;

const LawyerProfile = () => {
  const [lawer, setLawer] = useState([]);
  useEffect(() => {
    getLawer("LABOR")
      .then((res) => setLawer(res.data.result))
      .catch((e) => console.log(e));
  }, []);

  return (
    <ProfileGrid>
      {lawer.map((profile, index) => (
        <>
          <ProfileItem key={index}>
            <p>
              {profile.company}
              <p>
                <AdditionalInfo>{profile.description}</AdditionalInfo>
              </p>
            </p>

            <h3>{profile.name}</h3>
            <p>Introduction: {profile.description}</p>
            <div>
              {/* Phone counseling cell */}
              <CounselingCell>
                Phone Counseling: {profile.phonePrice}
              </CounselingCell>
              {/* Video counseling cell */}
              <CounselingCell>
                Video Counseling: {profile.videoPrice}
              </CounselingCell>
            </div>
          </ProfileItem>
          {/* Center vertical border */}
          {index === 1 && <VerticalDivider />}
        </>
      ))}
    </ProfileGrid>
  );
};

export default LawyerProfile;
