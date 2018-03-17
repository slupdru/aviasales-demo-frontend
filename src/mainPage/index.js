import React, { Component } from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
class MainPage extends Component {
    render(){
        return(
            <div>
            <Section1/>
            <Section2/>
            </div>
        )
    }
}

export default MainPage