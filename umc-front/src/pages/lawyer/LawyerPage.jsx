import styled from "styled-components";
import { Routes, Route, Link, Navigate } from "react-router-dom";

const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0px 120px;
  padding-bottom: 10px;
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

const MenuLink = styled(Link)`
  text-decoration: none;
  color: #000;
  padding: 5px;
  font-family: Arial, sans-serif;
  font-size: 16px;
`;

const PageA = () => (
    <div>
      <h2>Page A</h2>
      
    </div>
  );
  
  const PageB = () => (
    <div>
      <h2>Page B</h2>
      {/* Add content for Page B */}
    </div>
  );

const LawyerPage = () => {
  return (
    <div>
      <MenuContainer>
        <MenuList>
          <MenuItem>
            <MenuLink to="/1">Page A</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/2">Page B</MenuLink>
          </MenuItem>
        </MenuList>
      </MenuContainer>

      <Routes>
        <Route path="/" />
        <Route path="/1" element={<PageA />} />
        <Route path="/2" element={<PageB />} />
      </Routes>
    </div>
  );
};

export default LawyerPage;
