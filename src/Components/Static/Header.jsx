import React, {useState} from 'react'
import styled from 'styled-components'
import logoText from '../../assets/logo.svg'
// import imageHeader from '../../assets/Jpeg/Desktop/image-header.jpg'
import {GiHamburgerMenu} from 'react-icons/gi'
import {GiCancel} from 'react-icons/gi'
import { Link } from 'react-router-dom'

const Header = () => {

    const [toggle, setToggle] = useState(false)

    const toggleChange = () => {
        setToggle(!toggle)
    }


  return (
    <Container>
        <Wrapper>

            <Logo>
                <img src={ logoText } alt="Logo Text" />
            </Logo>

            <Navsbar>
                <Link to='/'>
                </Link>

                <Link style={{
                    textDecoration: "none",
                }} to='/about'>
                    <Nav>About</Nav>
                </Link>

                <Link style={{
                    textDecoration: "none",
                }} to='/service'>
                    <Nav>Services</Nav>
                </Link>
                

                <Link style={{
                    textDecoration: "none",
                }} to='/project'>
                    <Nav>Projects</Nav>
                </Link>

                <Link to='/contact'>
                    <ContactDiv>Contact</ContactDiv>
                </Link>
                
            </Navsbar>

            <BurgerIconHold onClick={toggleChange}>
                {toggle ? (
                    <GiCancel color='white'
                    size='25px' />
                ) : (
                    <GiHamburgerMenu color='white'
                    size='25px' />
                )
                }

            </BurgerIconHold>




        </Wrapper>
    </Container>
  )
}

export default Header

const Container = styled.div`
    background-color: #3EBFFF;
    /* background-size: cover; */
    width: 100%;
    height: 70px;

    display: flex;
    justify-content: center;
    align-items: center;
`

const Wrapper = styled.div`
/* background-color: aqua; */
width: 85%;

display: flex;
justify-content: space-between;
align-items: center;
`

const Logo = styled.div`
    /* background-color: skyblue; */
`

const Navsbar = styled.div`
/* background-color: red; */
width: 325px;


display: flex;
justify-content: space-between;
align-items: center;


@media screen and (max-width: 768px) {
    display: none;
}

`

const Nav = styled.div`
color: hsl(0, 0%, 100%);


&:hover {
    background-color: #6FCFFF;
    color: hsl(0, 0%, 100%);
    width: 72px;
    font-family: "Fraunces";
    font-size: 14px;
    font-weight: 700;
    border-radius: 20px;
    padding: 5px 8px;
    

    display: flex;
    justify-content: center;
    align-items: center;

    transition: all 350ms;
    text-transform: uppercase;
    cursor: pointer;
    transform: scale(1.1);
}

`



const ContactDiv = styled.div`
 background-color: hsl(0, 0%,100%);
 color: #000;
 border-radius: 20px;
 width: 80px;
 padding: 7px;
 font-size: 14px;
 font-weight: 900;
 text-transform: uppercase;

 display: flex;
 justify-content: center;
 align-items: center;


 &:hover {
    background-color: #6FCFFF;
    color: hsl(0, 0%, 100%);
    width: 72px;
    font-family: "Fraunces";
    font-size: 14px;
    font-weight: 700;
    border-radius: 20px;
    padding: 5px 8px;
    

    display: flex;
    justify-content: center;
    align-items: center;

    transition: all 350ms;
    text-transform: uppercase;
    cursor: pointer;
    transform: scale(1.1);
}

`


const BurgerIconHold = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
    }
`