import React from 'react'
import styled from 'styled-components'
import imageHeader from '../../../assets/Jpeg/Desktop/image-header.jpg'
import ArrowDown from '../../../assets/icon-arrow-down.svg'

const HeroPage = () => {
  return (
    <Container>
        <Wrapper>
            <h1>We are creatives</h1>
            <img src={ArrowDown} alt="An arron pointing downward" />
        </Wrapper>
    </Container>
  )
}

export default HeroPage

const Container = styled.div`
background-image: url(${imageHeader});
/* background-repeat: no-repeat; */
width: 100%;
height: 100vh;
background-position: center;
background-size: cover;
`

const Wrapper = styled.div`
    h1 {
        color: #fff;
        text-transform: uppercase;
        font-family: "Fraunces";
        font-size: 60px;
        font-weight: 700;
    }

    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    img {
        margin-top: 155px;
    }
`

