import React from "react";
import Container from "../../Container";
import SectionContainer from "../../SectionContainer";
import CompasBlock from "./CompasBlock";
import SelectPanel from "./SelectPanel";
class Section2 extends React.Component {
  render() {
    return (
      <SectionContainer>
        <Container>
          <CompasBlock />
          <SelectPanel />
        </Container>
      </SectionContainer>
    );
  }
}

export default Section2;
