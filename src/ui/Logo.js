import React from 'react'
import styled from 'styled-components'
import logo from './img/logo.png'
import {sd} from '../prop'

const LogoContainer = styled.div`
position:absolute;
left:10px;
 display:   flex;
 align-items:center;
 flex-direction:row;
 & .logo_text{
    @media (max-width: ${sd}px) {
        display:none;
    }
     margin-left:12px;
     color:white;
     font-size:20px;
     font-weight:400;
 }
`
const Logo = styled.img`
margin-left:10px;
width:30px;
height:29px;
`

export default ()=> <LogoContainer><Logo src = {logo}/> <div className="logo_text">aviasails</div></LogoContainer>