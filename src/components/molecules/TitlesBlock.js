import React from "react";
import styled from "styled-components";
import { lg, sd } from "../../prop";

const TitlesContainer = styled.div`
  color: white;
  font-weight: 700;
`;
const Title = styled.h1`
  font-size: 40px;
  @media (max-width: ${lg}px) {
    font-size: 32px;
  }
  @media (max-width: ${sd}px) {
    font-size: 20px;
  }
`;
const SubTitle = styled.h2`
  font-size: 24px;
  @media (max-width: ${lg}px) {
    font-size: 20px;
  }
  @media (max-width: ${sd}px) {
    display: none;
  }
`;
export default () => (
  <TitlesContainer>
    <Title>Поиск дешевых авиабилетов</Title>
    <SubTitle>Лучший способ купить авиабилеты дешево</SubTitle>
  </TitlesContainer>
);
