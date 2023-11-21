import React from 'react'
import styled from 'styled-components'

const PartOne = ({HeadShot, ParagraphyText, Name, Office}) => {
  return (
    <Container>
        <Wrapper>
          <ProfileShot>
            <img src={HeadShot} alt="An shot of  Thomas S." />
          </ProfileShot>

          <ParagraphDiv>
            <p>{ParagraphyText}</p>
          </ParagraphDiv>

          <Details>
            <h3>{Name}</h3>
            <p>{Office}</p>
          </Details>


        </Wrapper>
    </Container>
  )
}

export default PartOne

const Container = styled.div`
  margin-left: 12px;
`

const Wrapper = styled.div`
/* background-color: red; */
width: 350px;
height: 550px;

display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

@media (max-width: 500px) {
  width: 90%;
  
}
`

const ProfileShot = styled.div`

img {
  border-radius: 50%;
}
`

const ParagraphDiv = styled.div`
color: hsl(213, 9%, 39%);
font-family: "Barlow";
font-size: 18px;
font-weight: 600;
text-align: center;

`

const Details = styled.div`
text-align: center;

h3 {
color: hsl(212, 27%, 19%);
font-family: "Fraunces";
font-weight: 900;
font-size: 21px;
}

p {
color: hsl(232, 10%, 55%);
font-family: "Barlow";
font-weight: 700;
}
`
