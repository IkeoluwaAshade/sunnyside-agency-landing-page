// import React from 'react'
// import styled from 'styled-components'
// import PartThree from './PartThree'
// import Tomatoe from '../../../assets/Jpeg/Desktop/image-graphic-design.jpg'
// import Tangerine from '../../../assets/Jpeg/Desktop/image-photography.jpg'

// const SectionThree = () => {
//   return (
//     <Container>
//         <Wrapper>
//             <PartThree
//             Fruit={Tomatoe}

//             Headings="Graphic Design"

//             Paragraphy="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention." />

//             <PartThree Fruit={Tangerine}
            
//             Headings="Photography" 
            
//             Paragraphy="Increase your credibilty by getting the most stunning, high-quality photos that improve your business image." />

            
//         </Wrapper>
//     </Container>
//   )
// }

// export default SectionThree

// const Container = styled.div``

// const Wrapper = styled.div`
// display: flex;
// `


import React from 'react'
import styled from 'styled-components'
import Tomatoe from '../../../assets/Jpeg/Desktop/image-graphic-design.jpg'
import Tangerine from '../../../assets/Jpeg/Desktop/image-photography.jpg'

const SectionThree = () => {
  return (
    <Container>
        <Wrapper>
            <FirstPart>
                <ImageDiv>
                <img src={Tomatoe} alt="" /></ImageDiv>

                <HeadingandPara>
                <h2>Graphic Design</h2>

                <p>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention.</p></HeadingandPara>

            </FirstPart>

            <SecondPart>
                <ImageDivTwo>
                <img src={Tangerine} alt="" /></ImageDivTwo>

                <Div>
                <HeadingandParaTwo>
                <h2>Photography</h2>

                
                <p>Increase your credibilty by getting the most stunning, high-quality photos that improve your business image.</p></HeadingandParaTwo></Div>

            </SecondPart>

        </Wrapper>
    </Container>
  )
}

export default SectionThree

const Container = styled.div`
/* background-color: red; */

`

const Wrapper = styled.div`
    display: flex;
    height: 750px;
`

const FirstPart = styled.div`
/* background-image: url(${Tomatoe}); */
background-color: #90D4C7;
color: hsl(167, 40%, 24%);
width: 50vw;



h2 {
font-family: Fraunces;
font-weight: 900;
}

p {
/* background-color: red; */
width: 21rem;
text-align: center;
font-family: Barlow;
font-weight: 600;
font-size: 18px;
}

    
`

const ImageDiv = styled.div`
display: flex;
justify-content: center;

width: 100%;
height: 400px;
`

const HeadingandPara = styled.div`

display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

`










const SecondPart = styled.div`
    background-color: #54C2FB;
    color: hsl(198, 62%, 26%);
    width: 50vw;
    

`

const ImageDivTwo = styled.div`
    width: 100%;
    height: 400px;
    display: flex;
    justify-content: center;
`

const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const HeadingandParaTwo = styled.div`
    /* background-color: red; */
    width: 24rem;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    

    h2 {
        font-family: Fraunces;
        /* font-size: 18px; */
        font-weight: 900;
    }

    p {
        font-family: Barlow;
        font-size: 18px;
        font-weight: 600;
        text-align: center;
    }
`