import React from 'react'
import styled from 'styled-components'
import imageTransform from '../../../assets/Jpeg/Desktop/image-transform.jpg'

const sectionOne = () => {
  return (
    <Container>
        <Wrapper>
            <TextPart>
                <h2>Tansform your brand</h2>
                <TextPartHold>
                    <p>
                        We  are a full-service creative agency speciallizing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.
                    </p>

                    <a href="">Learn More</a>
                </TextPartHold>
                
            </TextPart>

            <EggPart>
                <img src={imageTransform} alt="Image of an Egg with a yellow background" />
            </EggPart>
        </Wrapper>
    </Container>
  )
}

export default sectionOne

const Container = styled.div`
background-color: hsl(0, 0%, 100%);

`

const Wrapper = styled.div``

const TextPart = styled.div`

h2 {
color: hsl(212, 27%, 19%);
}
`

const TextPartHold = styled.div`

p {
    color: hsl(232, 10%, 55%);
    font-family: "Barlow";
    font-size: 18px;
}

a {
    color: hsl(212, 27%, 19%);
    font-family: "Fraunces";
    font-weight: 700;
    text-transform: uppercase;
    text-decoration-color: hsl(51, 100%, 49%);




    &:hover {
        cursor: pointer;
        font-weight: 900;
    }
}
`

const EggPart = styled.div``