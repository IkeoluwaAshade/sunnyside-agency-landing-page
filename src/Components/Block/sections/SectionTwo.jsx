import React from 'react'
import styled from 'styled-components'
import PartTwo from './PartTwo'
import PartOne from './PartOne'
import imageStandOut from '../../../assets/Jpeg/Desktop/image-stand-out.jpg'

const SectionTwo = () => {
  return (

        <Wrapper>

          <PartTwo Image={imageStandOut}/>

          <PartOne
            Headings="Stand out to the right audience"

            Paragraph="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places."

            LearnMore="Learn more"
          />

        </Wrapper>
  )
}

export default SectionTwo

const Wrapper = styled.div`
  display: flex;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`



