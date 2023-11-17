import React from 'react'
import styled from 'styled-components'


const PartThree = ({Fruit, Headings, Paragraphy}) => {
  return (
    <Container>
        <Wrapper>

            <img src={Fruit} alt="" />

            <h3>{Headings}</h3>

            <p>{Paragraphy}</p>
        </Wrapper>
    </Container>
  )
}

export default PartThree

const Container = styled.div``

const Wrapper = styled.div``