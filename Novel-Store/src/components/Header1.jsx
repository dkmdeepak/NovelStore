import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';





function Header1({status}) {

  return (
    <>
    
    
    <div style={{background:'white'}}>
              <Navbar className="bg-body-tertiary" style={{borderBottom:'solid 1px'}} >

                <Container className=' d-flex justify-content-center' >
                    <Navbar.Brand href="/" className="d-flex align-items-center" >
                      <Link to={'/'}>
                      <img
                        alt=""
                        src="https://evernote.com/_next/image?url=%2Fimages%2Ficons%2Fcheck.webp&w=64&q=75"
                        width="50"
                        height="50"
                        className="mr-2"
                        />
                        </Link>
                        <Link to={'/'}>
                        <h2 className="mb-0">NOVAL STORE 2024</h2>
                        </Link>
                    </Navbar.Brand>
               </Container>
              </Navbar>
      </div>
    </>
  )
}

export default Header1;