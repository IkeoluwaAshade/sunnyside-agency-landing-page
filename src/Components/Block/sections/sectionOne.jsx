import React from 'react'
import styled from 'styled-components'
import PartOne from './PartOne'
import PartTwo from './PartTwo'
import imageTransform from '../../../assets/Jpeg/Desktop/image-transform.jpg'

const SectionTwo = () => {
  return (
        <Wrapper>

            <PartOne Headings="Transform your brand"

            Paragraph="We are a full-service creative agency speciallizing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you."

            LearnMore="Learn More"
            />

            <PartTwo Image={imageTransform} />

        </Wrapper>
    
  )
}

export default SectionTwo


const Wrapper = styled.div`
/* background-color: red; */
width: 100%;
display: flex;

/* flex-direction: column; */

@media (max-width: 500px) {
  flex-direction: column-reverse;
  
  
}
`