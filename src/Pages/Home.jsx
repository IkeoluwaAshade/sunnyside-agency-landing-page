import React from 'react'
import styled from 'styled-components'
import imageHeader from '../assets/Jpeg/Desktop/image-header.jpg'
import Header from '../Components/Static/Header'
import HeroPage from '../Components/Block/heroPage/HeroPage'
// import Initial from '../Components/Block/sections/Initial'
import SectionOne from '../Components/Block/sections/SectionOne'
import SectionTwo from '../Components/Block/sections/SectionTwo'
import SectionThree from '../Components/Block/sections/SectionThree'
import Testimonial from '../Components/Block/Testimonials/Testimonial'
import Gallery from '../Components/Block/Gallery/Gallery'
import Footer from '../Components/Static/Footer'


const Home = () => {
  return (
    <Container>
        <Header />
        <HeroPage />
        {/* <Initial /> */}
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <Testimonial />
        <Gallery />
        
        
        <Footer />

        
    </Container>
    
  )
}

export default Home

const Container = styled.div`
 
`