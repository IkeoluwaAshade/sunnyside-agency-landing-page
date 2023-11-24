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
        {/* <Gallery /> */}
        
        
        {/* <Footer /> */}

        
    </Container>
    
  )
}

export default Home

const Container = styled.div`
 background-image: url(${imageHeader});
/* background-color: red; */
// width: 100%;
// height: 100vh;
// background-position: center;
// background-size: cover;


 `

// const Wrapper = styled.div`
//   h1 {
//     color:  #fff;
//     text-transform: uppercase;
//     font-family: "Fraunces";
//     font-size: 60px;
//     font-weight: 700;
//     /* margin-bottom: 70px; */
//   }

//   /* background-color: red; */
//   width: 100%;
//   display: flex;
//   justify-content: center;
//   flex-direction: column;
//   align-items: center;

//   img {
//     margin-top: 90px;
//   }
// `