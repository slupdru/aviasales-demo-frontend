import React from "react";
import styled from "styled-components";
import { lg} from "../../prop";
const RedLine = styled.div`
  height: 63px;
  background:#CD2027;
  display:flex;
  justify-content:space-between;
  align-items:center;
  width:100%;
`;
const TextInRedLine = styled.div`
  color: white;
  font-size: 16px;
  margin-left:16px;
  margin-right:10px;
  text-align:left;
`;
const CardContainer = styled.div`
width:298px;
@media(max-width:${lg}px){
  width:auto;
}
`;
const Body = styled.div`
background:white;
padding-left:12px;
padding-right:12px;
padding-bottom:20px;
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
    margin-top:10px;
`
const TextLine = styled.div`
    margin-top:12px;
    font-size:12px;
    text-align:left;
    color:#242424;
    margin-bottom:44px;
`

const ComponyLine = styled.div`
display:flex;
padding-top:12px;
align-items:center;
justify-content:space-between;
`;
const LeftBlock = styled.img``;
const RightBlock = styled.div``;
const Button = styled.a`
    width:calc(100%-32px);
    margin-left:16px;
    margin-right:16px;
    height:40px;
    display:block;
    line-height:40px;
    color:#CD1F27;
    border-radius:3px;
    border:2px #CD1F27 solid;
`
const LogoInRed= styled.img`
width:38px;
height:38px;
margin-right:12px;
`;
function CompanyCard(props) {
  return (
    <CardContainer>
      <RedLine>
        <TextInRedLine>
        {props.textInRed}
        </TextInRedLine>
        <LogoInRed src={props.logoInRed}/>
      </RedLine>
      <Body>
        <ComponyLine>
        <LeftBlock src={props.logo}/>
        <RightBlock>
        <Cost> <span className="ot">от</span><span className="price">{` ${props.priсe} ₽`}</span></Cost>
        <Days>{`Осталось ${props.days} дней`}</Days>
        </RightBlock>
        </ComponyLine>
        <TextLine>
          {`${props.text} Специальное предложение от авивкомпании ${props.company}`}
        </TextLine>
        <Button>Узнать подробности</Button>
      </Body>
    </CardContainer>
  );
}
export default CompanyCard;