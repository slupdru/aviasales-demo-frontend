import React from "react";
import styled from "styled-components";
import {  sd } from "../../prop";

const Flag = styled.img`
border-radius:100px;
width:46px;
height:46px;
margin-right:16px;
@media(max-width:${sd}px){
    display:${props=>!props.static?'none':'inline-block'};
}
`

const TownContainer = styled.div`
display:flex;
flex-direction:column;
& .sity {
    font-size:22px;
    font-weight:700;
    color:#5B5B5C;
    text-align:left;
    margin-bottom:2px;
    @media(max-width:${sd}px){
        font-size:${props=>!props.static?'16px':'22px'};
        margin-bottom:${props=>!props.static?'4px':'2px'};
    }
    
}

& .country {
    font-size:12px;
    color:#A0B0B9;
    font-weight:500;
    text-align:left;
}
`
function PlaceBlock(props){
    console.log(props.static);
return(
<div className={props.className}>
    <Flag static={props.static} src={props.flag}/>
    <TownContainer static={props.static}>
        <div className="sity">{props.sity}</div>
        <div className="country">{props.country}</div>
    </TownContainer>
</div>
)
}

export default styled(PlaceBlock)`
display:flex;
`;