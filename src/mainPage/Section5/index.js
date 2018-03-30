import React from "react";
import Container from "../../Container";
import styled from "styled-components";
import img1 from "./img/download (1).png";
import img2 from "./img/download (2).png";
import img3 from "./img/download (3).png";
const MyContainer = Container.extend``;
const Img = styled.img`
  width: 16px;
  margin-right: 7px;
  height: 15px;
`;
const TextTitle = styled.div`
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  color: #4a4a4a;
`;
const Text = styled.div`
  font-size: 14px;
  text-align: left;
  color: #4a4a4a;
  margin-bottom: 24px;
`;
const Link = styled.a`
  color: #00ace2;
  margin-left: 10px;
  text-decoration: none;
`;
function TextBlock(props) {
  return (
    <Text>
      <span>{props.children}</span>
      <Link href="#">Подробнее</Link>
    </Text>
  );
}
function Title(props) {
  return (
    <div className={props.className}>
      <Img src={props.img} />
      <TextTitle>{props.children}</TextTitle>
    </div>
  );
}
const StTitle = styled(Title)`
  display: flex;
  padding-top: 21px;
  margin-bottom: 16px;
`;
export default () => (
  <div>
    <MyContainer>
      <StTitle img={img1}> Как купить дешевые авиабилеты?</StTitle>
      <TextBlock>
        Aviasales.ru — это метапоисковик авиабилетов. Мы ищем билеты на самолет
        по сотням авиакомпаний и находим за считанные минуты самые дешевые
        авиабилеты. Чтобы купить авиабилет дешево, воспользуйтесь нашим поиском,
        который совершенно бесплатно сравнивает цены на авиабилеты онлайн и
        находит самые дешевые перелеты. Больше нет смысла ходить в авиакассы,
        обзванивать агентства — дешевый билет находится на расстоянии клика. На
        нашем сайте вы можете подобрать дешевые билеты на самолет в Европу, Азию
        и на другие континенты. Мы написали для вас простую инструкцию о том,
        как пользоваться поиском и экономить на перелетах от 1000 до 20 000 руб
        в год.
      </TextBlock>
      <StTitle img={img2}>Электронный авиабилет</StTitle>
      <TextBlock>
        Электронный авиабилет — это, по сути, обычный билет на самолет, но
        только в менее привычном для путешественника виде. Вся информация об
        авиаперелете (данные пассажира, маршрут следования) хранится в
        электронной базе, а пассажир получает на руки маршрут-квитанцию.
        Некоторые пассажиры, купив авиабилет онлайн и получив маршрут-квитанцию,
        удивлены ее видом — это обыкновенный лист формата А4, на котором
        распечатана вся информация о предстоящем перелете. Однако это
        действительно официальный документ, подтверждающий договор между
        авиаперевозчиком и пассажиром. При регистрации на рейс пассажир должен
        предъявить маршрут-квитанцию вместе с удостоверением личности точно так
        же, как предъявляют обыкновенный бумажный билет. Следует отметить, что
        электронный билет, приобретенный онлайн, стоит дешевле своего бумажного
        аналога.
      </TextBlock>
      <StTitle img={img3}> 20 советов авиапутешественникам</StTitle>
      <TextBlock>
        Есть масса путеводителей по странам, но ни одного о том, как провести
        время в самолете. Для того, чтобы сделать ваш перелет максимально
        комфортным, мы написали 20 советов о подготовке к путешествию. Ведь
        настоящее путешествие начинается со слов «Добро пожаловать на борт
        нашего самолета»!
      </TextBlock>
    </MyContainer>
  </div>
);
