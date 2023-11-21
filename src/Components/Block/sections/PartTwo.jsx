import React from 'react'
import styled from 'styled-components'

const PartTwo = ({ Image }) => {
  return (
    <Container>
        <img src={Image} alt="Image of an Egg with a yellow background" />
    </Container>
  )
}

export default PartTwo

const Container = styled.div`
width: 50vw;
height: 500px;

@media (max-width: 500px) {
    width: 100%;
  }


    img {


        width: 50vw;
        height: 500px; 
        object-fit: cover;

        @media (max-width: 500px) {
    width: 100%;
  }

    }
`