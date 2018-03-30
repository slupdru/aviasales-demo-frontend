import React from "react";
import Container from "../../Container";
import SectionContainer from "../../SectionContainer";
import styled from "styled-components";
import pobeda from "./img/pobeda.png"
import { lg, sd } from "../../prop";
import CompanyCard from "./CompanyCard";
import logoInRed from "./img/logo.png";
const Title = styled.div`
font-size:30px;
font-weight:500;
color:white;
text-align:left;
margin-bottom:20px;
`
const MyContainer = Container.extend`
    padding-bottom:24px;
    padding-top:24px;
`
const CardContainer = styled.div`
    display:flex;
    justify-content:space-between;
    margin-bottom:25px;
    @media(max-width:${lg}px) and (min-width:${sd}px){
        & > :nth-child(2){
            margin-left:16px;
            margin-right:16px;
        }
    }
    @media(max-width:${sd}px){
        flex-direction:column;
        & > :nth-child(2){
            margin-top:12px;
            margin-bottom:12px;
        }
        margin-bottom:32px;
    }
}

    
`
const UnderTextContainer = styled.div`
display:flex;
justify-content:space-between;
@media(max-width:${sd}px){
    flex-direction:column;
    & > :nth-child(1){
            margin-bottom:8px;
        }
}
`
const UnderText = styled.div`
font-size:16px;
color:white;
`
export default ()=>
<SectionContainer blue>
<MyContainer>
<Title>
    Спецпредложения на авиабилеты 
</Title>
<CardContainer>
<CompanyCard logo={pobeda} textInRed="Билеты от 499 рублей!" company="Победа" logoInRed={logoInRed} priсe={499} days={19} text="Билеты от 499 рублей!"/>
<CompanyCard logo={pobeda} textInRed="Билеты от 499 рублей!" company="Победа" logoInRed={logoInRed} priсe={499} days={19} text="Билеты от 499 рублей!"/>
<CompanyCard logo={pobeda} textInRed="Билеты от 499 рублей!" company="Победа" logoInRed={logoInRed} priсe={499} days={19} text="Билеты от 499 рублей!"/>
</CardContainer>
<UnderTextContainer>
    <UnderText>Смотреть все спецпредложения</UnderText>
    <UnderText>* средняя цена по направлениям</UnderText>
</UnderTextContainer>
</MyContainer>
</SectionContainer>