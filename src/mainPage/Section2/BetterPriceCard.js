import styled from "styled-components";
import React from "react";
import {lg, sd } from "../../prop";
import PlaceBlock from "./PlaceBlock";
const PlaceBlockInPriceCard = PlaceBlock.extend`
margin-bottom:24px;
`

function BetterPriceCard(props){
    return(
        <div className={props.className}>
            <PlaceBlockInPriceCard flag={props.flag} sity={props.sity} static={props.static} country={props.country}/>
            
        </div>
    )
}
export default BetterPriceCard;