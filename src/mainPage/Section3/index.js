import React from "react";
import styled from "styled-components";
import Container from "../../Container";
import { lg, sd } from "../../prop";
import icon1 from "./img/twitter.png";
import icon2 from "./img/facebook.png";
import icon3 from "./img/vk.png";
import icon4 from "./img/wifi.png";
const NewCon = Container.extend`
  @media (max-width: ${sd}px) {
      display:none;
    }
`
const SendEmailBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom:24px;
  @media (max-width: ${lg}px) {
      flex-direction:column;
      align-items:center;
      margin-bottom:61px;
    }
`;
const InputContainer = styled.div`
  width: 330px;
  margin-left: 16px;
  height: 34px;
  border: 1px #a0b0b9 solid;
  border-radius: 2px;
  display: flex;
`;
const Input = styled.input`
  height: 100%;
  width: 191px;
  border: none;
`;
const Button = styled.input`
  height: 100%;
  color: white;
  width: 139px;
  font-size:16px;
  border: none;
  background: #ff8e41;
  border-radius: 2px;
`;
const LeftBlock = styled.div`
  font-size: 16px;
  color: #5c5c5c;
  width: 400px;
  & .first {
    font-weight: 700;
    font-size: 16px;
    color: #5c5c5c;
  }
`;
const Logos = styled.div`
display:flex;
@media (max-width: ${lg}px) {
    margin-top:20px;
    margin-bottom:24px;
    }
`
const RightBlock = styled.div`
  display: flex;
  @media (max-width: ${lg}px) {
      flex-direction:column;
      align-items:center;
    }
`;
const Logo = styled.img`
  width: 36px;
  height: 36px;
`;

export default ()=>
        <NewCon>
      <SendEmailBlock>
        <LeftBlock>
          <div className="first">Хотите знать всё о скидках на авиабилеты?</div>
          Вы можете подписаться на нашу рассылку через соцсети или по
          электронной почте.
        </LeftBlock>
        <RightBlock>
        <Logos>
          <Logo src={icon1} />
          <Logo src={icon2} />
          <Logo src={icon3} />
          <Logo src={icon4} />
        </Logos>
          <InputContainer>
            <Input />
            <Button type="button" value="Подписаться" />
          </InputContainer>
        </RightBlock>
      </SendEmailBlock>
      </NewCon>