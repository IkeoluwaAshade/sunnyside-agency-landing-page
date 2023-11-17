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
`

const Wrapper = styled.div`
  display: flex;
`

const Textpart = styled.div`
  width: 50vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const TextPartHold = styled.div`
  width: 60%;
  height: 50%;
  font-size: 18px;
  margin: 50px 0;

  h2 {
    color: hsl(212, 27%, 19%);
    font-family: "Fraunces";
    font-weight: 900;

  }

  p {
    color: hsl(232, 10%, 55%);
    font-family: "Barlow";
    font-size: 18px;
    width: 28rem;
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