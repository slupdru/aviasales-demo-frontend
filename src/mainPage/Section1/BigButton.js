import styled from "styled-components";
import {lg, sd } from "../../prop";
import aero from "./img/aero.svg";
const Button = styled.button`
  width: 308px;
  height: 64px;
  border-radius: 4px;
  background: #ff9241;
  font-size: 24px;
  color: #ffffff;
  margin-top:48px;
  border: none;
  position: relative;
  font-weight: 700;
  @media (max-width: ${lg}px) {
    margin-top:32px;
  }
  @media (max-width: ${sd}px) {
    height: 56px;
    margin-top:16px;
  }
  &:after {
    content: "";
    width: 26px;
    height: 21px;
    position: absolute;
    right: 24px;
    top: 22px;
    background: url(${aero});
  }


`;

export default Button;
