import React, { Component } from "react";
import styled from "styled-components";
import Section1 from "./Section1";
import { sd } from "../prop";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import line from "./line.png";
const Line = styled.img`
  width: 100%;
  margin-bottom:32px;
  @media (max-width: ${sd}px) {
      display:none;
    }
`;
class MainPage extends Component {
    render(){
        return(
            <div>
            <Section1/>
            <Section2/>
            <Line src={line} />
            <Section3/>
            <Section4/>
            </div>
        )
    }
}

export default MainPage