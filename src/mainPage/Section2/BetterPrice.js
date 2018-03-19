import React from "react";
import styled from "styled-components";
import { lg, sd } from "../../prop";
import calendar from "./img/calendar.png";
import BetterPriceCard from "./BetterPriceCard";
import flag from "./img/flag.png"
const Calendar = styled.img`
    width:60px;
    height:60px;
    margin-bottom:20px;
`
const Data = [
    {
        sity:"Симферополь (Крым)",
        country:"РОССИЯ",
        flag:flag,
        prices:[
            {
            sityFrom:"Москвы",
            price:4813
            },
        {
            sityFrom:"Санкт-Петербурга",
            price:7857
            },
        {
            sityFrom:"Новосибирская",
            price:15127
            },
        {
            sityFrom:"Екатеринбурга",
            price:9275
            },
        {
            sityFrom:"Челябинска",
            price:9148
            },
    ]
    },
    {
        sity:"Симферополь (Крым)",
        country:"РОССИЯ",
        flag:flag,
        prices:[
            {
            sityFrom:"Москвы",
            price:4813
            },
        {
            sityFrom:"Санкт-Петербурга",
            price:7857
            },
        {
            sityFrom:"Новосибирская",
            price:15127
            },
        {
            sityFrom:"Екатеринбурга",
            price:9275
            },
        {
            sityFrom:"Челябинска",
            price:9148
            },
    ]
    },
    {
        sity:"Симферополь (Крым)",
        country:"РОССИЯ",
        flag:flag,
        prices:[
            {
            sityFrom:"Москвы",
            price:4813
            },
        {
            sityFrom:"Санкт-Петербурга",
            price:7857
            },
        {
            sityFrom:"Новосибирская",
            price:15127
            },
        {
            sityFrom:"Екатеринбурга",
            price:9275
            },
        {
            sityFrom:"Челябинска",
            price:9148
            },
    ]
    },
];
const BetterPriceCardContainer = styled.div`

`
function BetterPrice (props){
return(
    <div className={props.className}>
        <Calendar src={calendar}/>
        <div className="title">Лучшие цены на авиабилеты за последний месяц</div>
        <BetterPriceCardContainer>
        <BetterPriceCard flag={flag} static={true} sity="Симферополь (Крым)" country="РОССИЯ" />
        </BetterPriceCardContainer>
    </div>
)
}

export default styled(BetterPrice)`
& .title{
    font-size:24px;
    color:#4A4A4A;
    font-weight:500;
}
`