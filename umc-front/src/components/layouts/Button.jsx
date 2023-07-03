import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CATEGORIES, { CATEGORIES_LINK } from "../../constants/categories";

const CategoriesContainer = styled.div`
  position: relative;
  padding-left: 15%;
  top: 31px;
`;

const Button = styled.button`
  background-color: #ffffff;
  color: #333333;
  border: 1px solid #ff60d2;
  padding: 10px 20px;
  margin-right: 20px;
  width: 33%;
  margin-bottom: 13px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #333333;
    color: #ffffff;
  }
`;

const Categories = () => {
  return (
    <CategoriesContainer>
      {CATEGORIES.map((category) => (
        <Link key={category} to={`/list/${CATEGORIES_LINK[category]}`}>
          <Button>{category}</Button>
        </Link>
      ))}
    </CategoriesContainer>
  );
};

export default Categories;
