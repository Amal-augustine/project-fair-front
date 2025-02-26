import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

function Header() {

  const navigate=useNavigate()

  const logout=()=>{

    
    sessionStorage.clear()
  navigate('/')
  
  }



  return (
    <>
      <Navbar expand="lg" style={{backgroundColor:'rebeccapurple'}}>
        <Container>
          <Navbar.Brand >
            <Link to={'/'} className='text-white fw-bolder fs-3 text-decoration-none'>
              <h4>
                <i className="fa-brands fa-docker text-warning"></i> &nbsp;
                Project Fair</h4></Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav " className=' shadow-none ' />
          <Navbar.Collapse id="basic-navbar-nav " className='mt-4'>
            <Nav className="ms-auto">
              <button className='btn btn-warning text-info  fw-bolder '   style={{ borderRadius: '5px' }} onClick={logout} >Logout</button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header