import styled from "styled-components";
export default styled.section`
  background: ${props =>
    props.blue
      ? `linear-gradient(to bottom,#00B0DE 0%,#01AEDC 3.7%, #02ABDB 7.44%, #02ABDB 11.16%, #02ABDB 11.38%, #196EBD 100%)`
      : "white"};
  height:${props => 
    props.vh100 ? '100vh':'auto'};
  }
`;
