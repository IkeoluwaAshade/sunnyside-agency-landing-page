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
        <First>
          <img src={MilkBottle} alt="" />

          <img src={Orange} alt="" />
        </First>

        <Second>
          <img src={Cone} alt="" />

          <img src={SugarCube} alt="" />
        </Second>

      </Wrapper>

    </Container>
  
  )
}

export default Gallery

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Wrapper = styled.div`
/* width: 100%; */
/* background-color: red; */
height: 300px;
display: flex;

@media (max-width: 500px) {
  flex-direction: column;
}

`

const First = styled.div`
  width: 50vw;

  img {
    height: 100%;
    width: 25vw;
    object-fit: cover;
  }

  @media (max-width: 500px) {
    width: 100vw;

    img {
      width: 50vw;
    }
  }
`

const Second = styled.div`
  width: 50vw;

  img {
    height: 100%;
    width: 25vw;
    object-fit: cover;
  }

  @media (max-width: 500px) {
    width: 100vw;

    img {
      width: 50vw;
    }
  }
`
