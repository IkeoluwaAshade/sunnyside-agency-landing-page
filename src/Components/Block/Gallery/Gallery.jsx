import React from 'react'
import styled from 'styled-components'
import MilkBottle from '../../../assets/Jpeg/Desktop/image-gallery-milkbottles.jpg'
import Orange from '../../../assets/Jpeg/Desktop/image-gallery-orange.jpg'
import Cone from '../../../assets/Jpeg/Desktop/image-gallery-cone.jpg'
import SugarCube from '../../../assets/Jpeg/Desktop/image-gallery-sugarcubes.jpg'

const Gallery = () => {
  return (
    <Container>
        <Wrapper>
            <img src={MilkBottle} alt="" />

            <img src={Orange} alt="" />

            <img src={Cone} alt="" />

            <img src={SugarCube} alt="" />

        </Wrapper>
    </Container>
  )
}

export default Gallery

const Container = styled.div`
background-color: hsl(0, 0%, 100%);
/* width: 100%; */
height: 455px;
`

const Wrapper = styled.div`
display: flex;

img {
    width: 100%;
    height: 378px;
}
`
