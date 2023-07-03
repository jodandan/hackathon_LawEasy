import React, { useState } from "react";
import styled from "styled-components";
import { useLocation, NavLink, Outlet } from "react-router-dom";
import LawyerProfile from './LawyerProfile'

const MenuContainer = styled.div`
  padding-left:25px;
  display: flex;
  justify-content: space-between;
  margin: 0px 120px;
  padding-bottom: 10px;
  border-width: 100%;
  border-bottom: 1px solid #bcbcbc;
  
`;

const MenuList = styled.ul`
  
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const MenuItem = styled.li`
  margin-right: 25px;

  &:last-child {
    margin-right: 0;
  }
`;

const MenuLink = styled(NavLink)`
  text-decoration: none;
  color: #000;
  padding: 5px;
  font-family: Arial, sans-serif;
  font-size: 16px;

  &.active {
    /* Add styles for active tab */
    font-weight: bold;
  }
`;

const LawyerContainer = styled.div`
  padding-left:25px;
  height: 600px;
`;




const PageA = () => (
  <div>
    <h2>Page A</h2>
    <LawyerProfile />
  </div>
);

const PageB = () => (
  <div>
    <h2>Page B</h2>
    <LawyerProfile />
  </div>
);

const PageC = () => (
  <div>
    <h2>Page C</h2>
    <LawyerProfile />
  </div>
);
    
const LawyerPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const activeTab = queryParams.get("activeTab") || "1";

  const handleTabClick = (tabNumber) => {
    queryParams.set("activeTab", tabNumber);
    window.history.replaceState(null, "", `${location.pathname}?${queryParams}`);
  };

  return (
    <div>
      <MenuContainer>
        <MenuList>
          <MenuItem>
            <MenuLink
              to="?activeTab=1"
              onClick={() => handleTabClick(1)}
              isActive={() => activeTab === "1"}
            >
              Page A
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink
              to="?activeTab=2"
              onClick={() => handleTabClick(2)}
              isActive={() => activeTab === "2"}
            >
              Page B
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink
              to="?activeTab=3"
              onClick={() => handleTabClick(3)}
              isActive={() => activeTab === "3"}
            >
              Page C
            </MenuLink>
          </MenuItem>
          {/* Add more menu items for additional tabs */}
        </MenuList>
      </MenuContainer>
      <LawyerContainer>
         <LawyerProfile />
      </LawyerContainer>
    
      <Outlet />
    </div>
  );
};

export default LawyerPage;
