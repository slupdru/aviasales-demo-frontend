import React from "react";
import styled from "styled-components";
import { lg, sd } from "../../prop";
import SelectCategoryPanel from "./SelectCategoryPanel";
import SityCard  from "./SityCard"
import sity1 from "./img/backgroundImage.png"
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
        <SityCard img={sity1}/>
        </div>
    );
  }
}

export default SelectPanel;
