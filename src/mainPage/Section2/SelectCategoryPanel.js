import React from "react";
import styled from "styled-components";
import { lg, sd, xs } from "../../prop";
import SelectCategoryCard from "./SelectCategoryCard";
import Icon1 from "./img/Group-5.png";
import Icon2 from "./img/Group-4.png";
import Icon3 from "./img/Group-3.png";
import Icon4 from "./img/Group-2.png";
import Icon5 from "./img/Group-1.png";
import Icon6 from "./img/Group.png";
const GroupCard = styled.div`
display:flex;
justify-content:center;
`

class SelectCategoryPanel extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={this.props.className}>
        <GroupCard>
          <SelectCategoryCard
            id={1}
            selected={this.props.selected === 1 ? true : false}
            handleChangeCategory={this.props.handleChangeCategory}
            text1="КУДА"
            text2="УГОДНО"
            icon={Icon1}
          />
          <SelectCategoryCard
            id={2}
            selected={this.props.selected === 2 ? true : false}
            handleChangeCategory={this.props.handleChangeCategory}
            text1="СОЛНЦЕ"
            text2="И МОРЕ"
            icon={Icon2}
          />
          <SelectCategoryCard
            id={3}
            selected={this.props.selected === 3 ? true : false}
            handleChangeCategory={this.props.handleChangeCategory}
            text1="ШОПИНГ,"
            text2="ГОРОД"
            icon={Icon3}
          />
        </GroupCard>
        <GroupCard>
          <SelectCategoryCard
            id={4}
            selected={this.props.selected === 4 ? true : false}
            handleChangeCategory={this.props.handleChangeCategory}
            text1="КУЛЬТУРА"
            text2="И ИСТОРИЯ"
            icon={Icon4}
          />
          <SelectCategoryCard
            id={5}
            selected={this.props.selected === 5 ? true : false}
            handleChangeCategory={this.props.handleChangeCategory}
            text1="НОЧНАЯ"
            text2="ЖИЗНЬ"
            icon={Icon5}
          />
          <SelectCategoryCard
            id={6}
            selected={this.props.selected === 6 ? true : false}
            handleChangeCategory={this.props.handleChangeCategory}
            text1="ОТДЫХ"
            text2="С ДЕТЬМИ"
            icon={Icon6}
          />
        </GroupCard>
      </div>
    );
  }
}

const StSelectCategoryPanel = styled(SelectCategoryPanel)`
  display: flex;
  justify-content: center;
  @media(max-width:${sd}px){
    flex-direction:column;
}
`;
export default StSelectCategoryPanel;
