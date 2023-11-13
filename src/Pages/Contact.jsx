import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <Container>
        <Link to="/contact"></Link>

        <h2>This is the Contact page</h2>
    </Container>
  )
}

export default Contact

const Container = styled.div``