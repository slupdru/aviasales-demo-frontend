import styled from "styled-components";
import React from "react";
import {lg} from "../../prop";
import PlaceBlock from "./PlaceBlock";
const PlaceBlockInPriceCard = PlaceBlock.extend`
margin-bottom:24px;
`
const Container = styled.div`
display:flex;
justify-content:space-between;
`
const Sity = styled.div`
font-size:16px;
color:#4a4a4a;
`
const Price = styled.div`
font-size:16px;
color:#00BAE8;
`
function BetterPriceCard(props){
    return(
        <div className={props.className}>
            <PlaceBlockInPriceCard flag={props.flag} sity={props.sity} static={props.static} country={props.country}/>
            {props.prices.map((elem, index) => <Container key={index}><Sity>{elem.sityFrom}</Sity><Price>{`от ${(elem.price+'').slice(0,-3)} ${(elem.price+'').slice(-3)}₽`}</Price></Container>)}
        </div>
    )
}
export default styled(BetterPriceCard)`
width:365px;
margin-bottom:50px;
@media(max-width:${lg}px){
    width:auto;
}
`;