import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
const Appnav = () => {
  return (
    <>
    <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand className='cap'><b>MDIGITZ</b></Navbar.Brand>
          
        </Container>
      </Navbar>
    </>
  )
}

export default Appnav