import React from 'react'
import styled from 'styled-components'
import logoText from '../../assets/logo.svg'
import imageHeader from '../../assets/Jpeg/Desktop/image-header.jpg'

const Header = () => {
  return (
    <Container>
        <Wrapper>

            <Logo>
                <img src={ logoText } alt="Logo Text" />
            </Logo>

            <Navsbar>
            
                    <Nav>About</Nav>

                    <Nav>Services</Nav>

                    <Nav>Project</Nav>

                    <Nav>Contact</Nav>
                
            </Navsbar>
        </Wrapper>
    </Container>
  )
}

export default Header

const Container = styled.div`
    background-color: red;
    /* background-size: cover; */
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
`

const Wrapper = styled.div`
background-color: aqua;
width: 85%;

display: flex;
justify-content: space-between;
align-items: center;
`

const Logo = styled.div`
    /* background-color: skyblue; */
`

const Navsbar = styled.div`
/* background-color: pink; */
width: 300px;


display: flex;
justify-content: space-between;
align-items: center;


`

const Nav = styled.div`
&:hover {
    width: 72px;
    transition: all 350ms;
    border-radius: 20px;
    background-color: hsl(210, 4%, 67%);


    color: skyblue;
    cursor: pointer;
    transform: scale(1.1);
}
`