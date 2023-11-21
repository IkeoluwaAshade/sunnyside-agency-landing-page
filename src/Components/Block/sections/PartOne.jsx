import React from 'react'
import styled from 'styled-components'

const Section = ({Headings, Paragraph, LearnMore}) => {
  return (
    <Container>
        <Wrapper>
          <Textpart>
            <TextPartHold>

              <h2>{Headings}</h2>

              <p>{Paragraph}</p>

              <a href={LearnMore}></a>
            </TextPartHold>
          </Textpart>
            
        </Wrapper>
    </Container>
  )
}

export default Section

const Container = styled.div`
  background-color: hsl(0, 0%, 100%);
  width: 50vw;
  height: 500px;
  
  @media (max-width: 500px) {
    width: 100%;

  }
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: brown; */
  height: 100%;
`

const Textpart = styled.div`
  /* width: 50vw; */
  
  /* background-color: red; */
  /* margin-top: 200px; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const TextPartHold = styled.div`
  /* width: 60%;
  height: 50%; */
  font-size: 18px;
  margin: 50px 0;

  @media (max-width: 500px) {
    width: 90%;
    text-align: center;
  }
   
  h2 {
    color: hsl(212, 27%, 19%);
    font-family: "Fraunces";
    font-weight: 900;

  }

  p {
    color: hsl(232, 10%, 55%);
    font-family: "Barlow";
    font-size: 18px;
    /* width: 28rem; */
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