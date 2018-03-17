import React from "react";
import styled from "styled-components";

const StSelectCategoryCard = styled(SelectCategoryCard)`
  width: 89px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SelectCategoryIcon = styled.img`
  width: 48px;
  height: 48px;
`;
const SelectCategoryText = styled.div`
  font-size: 12px;
  width: 70px;
  color: ${props => (props.selected ? "#5C5C5C" : "#00ACE2")};
  border-bottom: ${props => (props.selected ? "1px #00ACE2 solid" : "none")};
  padding-bottom: 5px;
`;

function SelectCategoryCard(props) {
  return (
    <div
      onClick={() => props.handleChangeCategory(props.id)}
      className={props.className}
    >
      <SelectCategoryIcon src={props.icon} />
      <SelectCategoryText selected={props.selected}>
        <div>{props.text1}</div>
        <div>{props.text2}</div>
      </SelectCategoryText>
    </div>
  );
}
export default StSelectCategoryCard;
