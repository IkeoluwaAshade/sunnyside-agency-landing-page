import React from 'react'
import styled from 'styled-components'
import PartOne from './PartOne'
import PartTwo from './PartTwo'
import imageTransform from '../../../assets/Jpeg/Desktop/image-transform.jpg'

const SectionThree = () => {
  return (
    <Container>
        <Wrapper>

            <PartOne Headings="Transform your brand"

            Paragraph="We are a full-service creative agency speciallizing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you."

            LearnMore="Learn More"
            />

            <PartTwo Image={imageTransform} />

        </Wrapper>
    </Container>
  )
}

export default SectionThree

const Container = styled.div`

`

const Wrapper = styled.div`
    display: flex;
`