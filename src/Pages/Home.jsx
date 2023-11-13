import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <Container>This is Home
        <Link to="/"></Link>
    </Container>
    
  )
}

export default Home

const Container = styled.div``