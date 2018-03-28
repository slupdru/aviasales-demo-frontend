import React from "react";
import styled from "styled-components";
import { lg } from "../../prop";
import Logo1 from "./img/agenciesAgencyLogo.png";
import Logo2 from "./img/agenciesAgencyLogo1.png";
import Logo3 from "./img/agenciesAgencyLogo2.png";
import Logo4 from "./img/agenciesAgencyLogo4.png";
import Logo5 from "./img/agenciesAgencyLogo5.png";
import arrowLeft from "./img/Shape.png";
import arrowRight from "./img/Shape1.png";
const StLg = styled.img`
  margin-right: 20px;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ArrowLeft = styled.img`
  width: 18px;
  height: 32px;
  margin-right: 86px;
`;
const ArrowRight = styled.img`
  width: 18px;
  height: 32px;
  margin-left: 84px;
`;
const LogosContainer = styled.div`
  margin-top: 15px;
  @media (max-width: ${lg}px) {
    margin-top: 24px;
  }
`;
const Circles = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;
const Circle = styled.div`
  background: ${props => (props.gray ? "#818181" : "white")};
  width: 10px;
  height: 10px;
  border: 1px #818181 solid;
  border-radius: 100%;
  margin-right: 8px;
`;
const ThreeIcon = styled.div`
  display: inline-block;
  @media (max-width: ${lg}px) {
    margin-bottom: 32px;
    display: block;
  }
`;
class LogosBlock extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        <Container>
          <ArrowLeft src={arrowLeft} />
          <LogosContainer>
            <ThreeIcon>
              <StLg src={Logo1} />
              <StLg src={Logo2} />
              <StLg src={Logo3} />
            </ThreeIcon>
            <StLg src={Logo4} />
            <StLg src={Logo5} />
          </LogosContainer>
          <ArrowRight src={arrowRight} />
        </Container>
        <Circles>
          <Circle gray />
          <Circle />
          <Circle />
        </Circles>
      </div>
    );
  }
}

export default styled(LogosBlock)`
  margin-bottom: 28px;
`;
