import React from "react";
import styled from "styled-components";
import { sd } from "../../prop";
import editIcon from "./img/edit.png";
import compas from "./img/compas.svg";
const EditIcon = styled.img`
  width: 15px;
  height: 15px;
`;
const Compas = styled.img`
  width: 64px;
  height: 64px;
  margin-bottom: 20px;
`;
const CompasBlockContainer = styled.div`
  font-size: 24px;
  margin-top: 56px;
  margin-bottom: 56px;

  @media (max-width: ${sd}px) {
    font-size: 18px;
    margin-top: 40px;
    margin-bottom: 32px;
  }
`;
const CompasTextContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const CompasText = styled.div`
  width: 450px;
  & .town {
    color: #00bae8;
  }
  @media(max-width:${sd}px){
    width:235px
  }
`;
export default () => (
  <CompasBlockContainer>
    <Compas src={compas} />
    <CompasTextContainer>
      <CompasText>
        <span>Популярные направления перелетов из города</span>
        <span className="town"> Москва </span>
        <EditIcon src={editIcon} />
      </CompasText>
    </CompasTextContainer>
  </CompasBlockContainer>
);
