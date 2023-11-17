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
    img {
        width: 50vw;
        height: 100%;
        object-fit: cover;
    }
`