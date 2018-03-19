import React from "react";
import styled from "styled-components";
import { lg, sd } from "../../prop";
import PlaceBlock from "./PlaceBlock";
const Img = styled.div`
width:100%;
height:212px;
background:url(${(props)=>props.img});
background-size:cover;
background-position:center;
@media(max-width:${sd}px){
    height:141px;
}
background-repeat:no-repeat;
`
const MainContainer = styled.div`
display:flex;
justify-content:space-between;
margin-top:12px;
margin-left:24px;
margin-right:24px;
padding-bottom:16px;
@media(max-width:${sd}px){
    margin-left:16px;
    margin-right:16px;
    padding-bottom:12px;
}
`


const RightBlock = styled.div`
& .price{
    font-size:22px;
    margin-bottom:2px;
    color:#00BAE8;
    text-align:right;
    @media(max-width:${sd}px){
        font-size:14px;
        margin-bottom:3px;
    }
}
& .date{
    font-size:12px;
    font-weight:500;
    color:#A0B0B9;
    text-align:right;
}
`


function SityCard(props){
return(
    <div className={props.className}>
        <Img img={props.img}/>
        <MainContainer>
        <PlaceBlock flag={props.flag} sity={props.sity} country={props.country}/>
        <RightBlock>
            <div className="price">{`Найти от ${props.price} ₽`}</div>
            <div className="date">{props.date}</div>
        </RightBlock>
        </MainContainer>
    </div>
)
}

export default styled(SityCard)`
border-radius:8px;
width:calc(50% - 15px);
@media(max-width:${lg}px){
    width:calc(100% - 15px);
}
@media(max-width:${sd}px){
    width:100%;
}
margin-bottom:31px;

box-shadow:0 2px 12px rgba(0, 75, 93, 0.12);
`