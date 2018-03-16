import styled from "styled-components";
import {lg, sd, xs} from "../../prop";
const Container = styled.div`
    width:${lg}px;
    margin:auto;
    @media (max-width: ${lg}px) {
        width:${sd}px;
    }
    @media (max-width: ${sd}px) {
        width:${xs}px;
    }
    @media (max-width: ${xs}px) {
        width:auto;
    }
  }
`
export default Container