import React from "react";
import styled from "styled-components";
import { lg, sd } from "../../prop";
import calendar from "./img/calendar.png";
import BetterPriceCard from "./BetterPriceCard";
import flag from "./img/flag.png";
import LogosBlock from "./LogosBlock";


const Calendar = styled.img`
  width: 60px;
  height: 60px;
  margin-bottom: 20px;
`;
const Data = [
  {
    sity: "Симферополь (Крым)",
    country: "РОССИЯ",
    flag: flag,
    prices: [
      {
        sityFrom: "Москвы",
        price: 4813
      },
      {
        sityFrom: "Санкт-Петербурга",
        price: 7857
      },
      {
        sityFrom: "Новосибирская",
        price: 15127
      },
      {
        sityFrom: "Екатеринбурга",
        price: 9275
      },
      {
        sityFrom: "Челябинска",
        price: 9148
      }
    ]
  },
  {
    sity: "Симферополь (Крым)",
    country: "РОССИЯ",
    flag: flag,
    prices: [
      {
        sityFrom: "Москвы",
        price: 4813
      },
      {
        sityFrom: "Санкт-Петербурга",
        price: 7857
      },
      {
        sityFrom: "Новосибирская",
        price: 15127
      },
      {
        sityFrom: "Екатеринбурга",
        price: 9275
      },
      {
        sityFrom: "Челябинска",
        price: 9148
      }
    ]
  },
  {
    sity: "Симферополь (Крым)",
    country: "РОССИЯ",
    flag: flag,
    prices: [
      {
        sityFrom: "Москвы",
        price: 4813
      },
      {
        sityFrom: "Санкт-Петербурга",
        price: 7857
      },
      {
        sityFrom: "Новосибирская",
        price: 15127
      },
      {
        sityFrom: "Екатеринбурга",
        price: 9275
      },
      {
        sityFrom: "Челябинска",
        price: 9148
      }
    ]
  }
];

const BetterPriceCardContainer = styled.div`
  display: flex;
  & > :nth-child(2) {
    padding-left: 35px;
    border-left: 1px dashed #afbec6;
    border-right: 1px dashed #afbec6;
    padding-right: 35px;
    @media (max-width: ${lg}px) {
      padding-left: 0px;
      padding-right: 0px;
      border: none;
    }
  }
  & > :nth-child(1) {
    padding-right: 35px;

    @media (max-width: ${lg}px) {
      padding-right: 0px;
    }
  }
  & > :nth-child(3) {
    padding-left: 35px;
    @media (max-width: ${lg}px) {
      padding-left: 0px;
    }
  }
  justify-content: center;
  @media (max-width: ${lg}px) {
    flex-direction: column;
  }
`;
const WeKnowCotainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const WeKnow = styled.div`
  font-size: 16px;
  color: #4a4a4a;
  margin-top: 30px;
  width: 615px;
  @media (max-width: ${sd}px) {
    width: auto;
    }
`;
const NotOferta = styled.div`
  font-size: 14px;
  color: #a0b0b9;
  margin-top: 16px;
`;
const LowCostContainer = styled.div`
    @media (max-width: ${sd}px) {
      display:none;
    }
  margin-top: 97px;
  margin-bottom: 28px;
`;
const LowCostTitle = styled.div`
  font-size: 32px;
  font-weight: 500;
  color: #5c5c5c;
`;

function BetterPrice(props) {
  return (
    <div className={props.className}>
      <Calendar src={calendar} />
      <div className="title">Лучшие цены на авиабилеты за последний месяц</div>
      <BetterPriceCardContainer>
        {Data.map((elem, index) => (
          <BetterPriceCard
            key={index}
            static={true}
            flag={elem.flag}
            sity={elem.sity}
            country={elem.country}
            prices={elem.prices}
          />
        ))}
      </BetterPriceCardContainer>
      <WeKnowCotainer>
        <WeKnow>
          Мы знаем, где купить авиабилеты дешево. Билеты на самолет в 220 стран
          мира. Поиск и сравнение цен на авиабилеты среди 100 агенств и 728
          авиакомпаний.
        </WeKnow>
        <NotOferta>
          Цены, найденные пользователями за последние 48 часов, не являются
          офертой
        </NotOferta>
      </WeKnowCotainer>
      <LowCostContainer>
        <LowCostTitle>
          Дешевые билеты от крупнейших авиакомпаний и агенств
        </LowCostTitle>
        <LogosBlock />
      </LowCostContainer>

    </div>
  );
}

export default styled(BetterPrice)`
  & .title {
    font-size: 24px;
    color: #4a4a4a;
    font-weight: 500;
    margin-bottom: 60px;
  }
  @media(max-width:${sd}px){
      margin-bottom:40px;
}
`;
