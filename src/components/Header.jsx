import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <>
    
    <Navbar className="bg-success w-100">
        <Container>
            
          <Navbar.Brand className=' fs-3 pt-3' style={{fontFamily:'Afacad Flux, serif'}}><img
              src="https://cdn-icons-png.flaticon.com/512/5363/5363451.png"
              width="40"
              height="40"
              className="d-inline-block align-top"></img> Student Management </Navbar.Brand>
              
              <Link to={'/'}>
              <button style={{fontFamily:'Afacad Flux, serif'}} className='btn  text-success bg-light fw-bold fs-5'> Logout</button>
              </Link>
        </Container>
      
   
      </Navbar>
    
    </>
  )
}

export default Header