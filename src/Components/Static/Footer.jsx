import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '../../assets/icon-facebook.svg'
import InstagramIcon from '../../assets/icon-instagram.svg'
import TwitterIcon from '../../assets/icon-twitter.svg'
import PinterestIcon from '../../assets/icon-pinterest.svg'

const Footer = () => {
  return (
    <Container>
        <Wrapper>

            <Logo><h2>sunnyside</h2></Logo>
            
            <Nav>
              <About>
                <span>About</span>
              </About>

              <Services>
                <span>Services</span>
              </Services>

              <Projects>
                <span>Projects</span>
              </Projects>
            </Nav>

            <Socials>

              <Facebook>
                <img src={FacebookIcon} alt="" />
              </Facebook>

              <Instagram>
                <img src={InstagramIcon} alt="" />
              </Instagram>

              <Twitter>
                <img src={TwitterIcon} alt="" />
              </Twitter>

              <Pinterest>
                <img src={PinterestIcon} alt="" />
              </Pinterest>
            </Socials>

            <Assignment>
              <h3>13th November, 2023 (Monday)<p>Second Assignment</p></h3>
            </Assignment>
            
        </Wrapper>
    </Container>
  )
}

export default Footer

const Container = styled.div`
    background-color: hsl(168, 34%, 41%);
    color: hsl(167, 40%, 24%);
    font-size: 16px;
    font-weight: 700;
    width: 100%;
    height: 450px;
    
    @media (max-width: 500px) {
      height: 520px;
    } 

    bottom: 0;
    /* position: fixed; */
    
`

const Wrapper = styled.div `
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

const Logo = styled.div`

/* background-color: red; */
height: 55px;
margin-top: 72px;
font-family: "Barlow";
font-size: 29px;
/* font-weight: 600; */

display: flex;
justify-content: center;
align-items: center;


@media (max-width: 500px) {
  padding-top: 120px;
}
`

const Nav = styled.div`
/* background-color: aqua; */
width: 350px;
height: 40px;
font-family: "Barlow";
font-size: 21px;
margin-top: 36px;

display: flex;
justify-content: space-between;
align-items: center;

@media (max-width: 500px) {
  width: 250px;
}
`

const About = styled.div`

&:hover {
color: hsl(0, 0%, 100%);
cursor: pointer;
}
`

const Services = styled.div`

&:hover {
color: hsl(0, 0%, 100%);
cursor: pointer;
}
`

const Projects = styled.div`
  
&:hover {
color: hsl(0, 0%, 100%);
cursor: pointer;
} 
`

const Socials = styled.div`
/* background-color: purple; */
width: 250px;
height: 40px;
margin-top: 5rem;

display: flex;
justify-content: space-between;
align-items: center;

@media (max-width: 500px) {
  width: 200px;
}
`

const Facebook = styled.div`

img:hover {
  color: hsl(0, 0%, 100%);
  cursor: pointer;
}
`

const Instagram = styled.div`

img:hover {
  color: hsl(0, 0%, 100%);
  cursor: pointer;
}
`

const Twitter = styled.div`

img:hover {
  color: hsl(0, 0%, 100%);
  cursor: pointer;
}
`

const Pinterest = styled.div`

img:hover {
  color: hsl(0, 0%, 100%);
  cursor: pointer;
}
`

const Assignment = styled.div`
/* background-color: #123456; */
color: hsl(0, 0%, 100%);
text-align: center;
line-height: 10px;
margin-top: 62px;
font-size: 10px;
font-family: "Barlow";
font-weight: 900;

@media (max-width: 500px) {
  margin-top: 22px;
}
`