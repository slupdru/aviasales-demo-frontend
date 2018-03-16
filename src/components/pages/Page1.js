import React, { Component } from "react";
import Section from "../atoms/Section";
import HeaderContainer from "../atoms/HeaderContainer";
import Logo from "../atoms/Logo";
import Container from "../atoms/Container";
import MainForm from "../organisms/MainForm"
class Page1 extends Component {
  render() {
    return (
      <Section blue vh100>
        <Container>
          <HeaderContainer>
            <Logo />
          </HeaderContainer>
          <MainForm/>
        </Container>
      </Section>
    );
  }
}

export default Page1;
