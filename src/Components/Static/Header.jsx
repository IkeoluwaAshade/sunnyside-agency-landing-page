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
                <Navigation>
                    <Nav>About</Nav>

                    <Nav>Services</Nav>

                    <Nav>Project</Nav>

                    <Nav>Contact</Nav>
                </Navigation>
            </Navsbar>
        </Wrapper>
    </Container>
  )
}

export default Header

const Container = styled.div`
    background-image: ;
    background-size: cover;
`

const Wrapper = styled.div``

const Logo = styled.div`
    background-color: skyblue;
`

const Navsbar = styled.div``

const Navigation = styled.div``

const Nav = styled.div``