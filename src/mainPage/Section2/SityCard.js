import React from "react";
import styled from "styled-components";

const Img =styled.div`
width:100%;
height:212px;
background:url(${(props)=>props.img});
background-size:contain;
`
const MainContainer = styled.div`
display:flex;
justify-content:space-between;
`

const LeftBlock = styled.div`


`
const RightBlock = styled.div`

`
const TownContainer = styled.div`

`
const Flag = styled.img`
border-radius:100px;
box-shadow:0 0 8px rgba(38, 38, 38, 0.1);
`
function SityCard(props){
return(
    <div className={props.className}>
        <Img img={props.img}/>
        <MainContainer>
        <LeftBlock>
            <Flag src={props.flag}/>
        </LeftBlock>
        <RightBlock>пизда</RightBlock>
        </MainContainer>
    </div>
)
}

export default styled(SityCard)`
border-radius:8px;
box-shadow:0 2px 12px rgba(0, 75, 93, 0.12);
`