import React from "react";
import styled from "styled-components";
import { lg } from "../../prop";
import SelectCategoryPanel from "./SelectCategoryPanel";
import SityCard  from "./SityCard"
import flag from "./img/flag.png"
import sity1 from "./img/backgroundImage.png"
const ContainerCards = styled.div`
display:flex;
flex-wrap:wrap;
justify-content:center;

&>:nth-child(odd){
  margin-right:15px;
}
@media(max-width:${lg}px){
  &>:nth-child(odd){
    margin-right:0px;
  }
}

`

class SelectPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 1
    };
    this.handleChangeCategory = this.handleChangeCategory.bind(this);
  }

  handleChangeCategory(id) {
    console.log(id);
    this.setState({
      selected: id
    });
  }
  render() {
    return (
        <div>
        <SelectCategoryPanel
          selected={this.state.selected}
          handleChangeCategory={this.handleChangeCategory}
        />
      <ContainerCards>
        <SityCard flag={flag} img={sity1} price={1212} date="18 МАРТА" sity="Санкт-Питербург" country="РОССИЯ"/>
        <SityCard flag={flag} img={sity1} price={1212} date="18 МАРТА" sity="Санкт-Питербург" country="РОССИЯ"/>
        <SityCard flag={flag} img={sity1} price={1212} date="18 МАРТА" sity="Санкт-Питербург" country="РОССИЯ"/>
        <SityCard flag={flag} img={sity1} price={1212} date="18 МАРТА" sity="Санкт-Питербург" country="РОССИЯ"/>
      </ContainerCards>
        </div>
    );
  }
}

export default SelectPanel;
