import React from "react";
import styled from "styled-components";
import { lg, sd, xs } from "../../prop";
import Input from "./Input";
import arrowIcon from "./img/arrow.svg"
import calendarIcon from "./img/calendar.svg"

const SityFromInput = Input.extend`
    width:224px;
    @media (max-width: ${lg}px) {
        width:311px;
    }
    @media (max-width: ${sd}px) {
        width:308px;
    }
    @media (max-width: ${xs}px) {
        width:auto;
    }
`
const SityToInput = Input.extend`
    width:226px;
    @media (max-width: ${lg}px) {
        width:311px;
    }
    @media (max-width: ${sd}px) {
        width:308px;
    }
    @media (max-width: ${xs}px) {
        width:auto;
    }
`
const DateToInput = Input.extend`
    width:180px;
    @media (max-width: ${lg}px) {
        width:155px;
    }
    @media (max-width: ${sd}px) {
        width:153px;
    }
    @media (max-width: ${xs}px) {
        width:auto;
    }
`
const DateBackInput = Input.extend`
    width:180px;
    @media (max-width: ${lg}px) {
        width:154px;
    }
    @media (max-width: ${sd}px) {
        width:153px;
    }
    @media (max-width: ${xs}px) {
        width:auto;
    }
`
const PassengerCountInput = Input.extend`
    width:212px;
    @media (max-width: ${lg}px) {
        width:311px;
    }
    @media (max-width: ${sd}px) {
        width:308px;
    }
    @media (max-width: ${xs}px) {
        width:auto;
    }
`


const StFormBlock= styled(FormBlock)`
    margin-top:40px;
`
function FormBlock (props){

    return (
        <div className={props.className}>
            <SityFromInput icon={arrowIcon} iconWidth={16} iconHeight={16} startValue = "Москва"/>
            <SityToInput  startHolder="Город прибытия"/>
            <DateToInput icon={calendarIcon} iconWidth={17} iconHeight={20} startHolder="Туда"/>
            <DateBackInput icon={calendarIcon} iconWidth={17} iconHeight={20}  startHolder="Обратно"/>
            <PassengerCountInput startValue="1 пассажир, эконом"/>
        </div>
    )
}
export default StFormBlock