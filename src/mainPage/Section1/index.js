import React, { Component } from "react";
import SectionContainer from "../../SectionContainer";
import HeaderContainer from "../../HeaderContainer";
import Logo from "../../ui/Logo";
import Container from "../../Container";
import MainForm from "./MainForm";
class Section1 extends Component {
  render() {
    return (
      <SectionContainer blue vh100>
        <Container>
          <HeaderContainer>
            <Logo />
          </HeaderContainer>
          <MainForm/>
        </Container>
      </SectionContainer>
    );
  }
}

export default Section1;
