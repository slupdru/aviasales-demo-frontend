import React from "react";
import styled from "styled-components";
const RedLine = styled.div`
  height: 63px;
`;
const TextInRedLine = styled.div`
  color: white;
  font-size: 16px;
`;
const CardContainer = styled.div`
  width: 298px;
`;
const Body = styled.div`

`;

const Cost = styled.div`
color:#5C5C5C;
    & .ot{
        font-size:12px;
    }
    & .price{
        font-size:16px;
    }
`
const Days = styled.div`
    font-size:12px;
    color:#D93633;
`
const ComponyLine = styled.div`
dislay:flex;
justify-content:space-between;
`;
const LeftBlock = styled.img``;
const RightBlock = styled.div``;
function CompanyCard(props) {
  return (
    <CardContainer>
      <RedLine>
        <TextInRedLine>
        {props.textInRed}
        </TextInRedLine>
      </RedLine>
      <Body>
        <ComponyLine>
        <LeftBlock src={props.logo}/>
        <RightBlock></RightBlock>
        </ComponyLine>
      </Body>
    </CardContainer>
  );
}
