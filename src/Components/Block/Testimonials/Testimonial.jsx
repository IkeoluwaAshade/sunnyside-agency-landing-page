import React from 'react'
import styled from 'styled-components'
import PartOne from './PartOne'
import HeadShot from '../../../assets/image-emily.jpg'
import ThomasHead from "../../../assets/image-thomas.jpg"
import JenniesHead from "../../../assets/image-jennie.jpg"

const Testimonial = () => {
  return (
    <Container>
        <Wrapper>

            <PartOne
            HeadShot={HeadShot}

            ParagraphyText="We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."
            
            Name="Emily R."
            Office="Marketing Director"  />

            <PartOne
            HeadShot={ThomasHead}

            ParagraphyText="Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience."
            
            Name="Thomas S."
            Office="Chief Operating Officer" />

            <PartOne
            HeadShot={JenniesHead}

            ParagraphyText="Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"
            
            Name="Jennie F.."
            Office="Business Onwer" />
            
        </Wrapper>
    </Container>
  )
}

export default Testimonial

const Container = styled.div`
background-color: hsl(0, 0%, 100%);
`

const Wrapper = styled.div``