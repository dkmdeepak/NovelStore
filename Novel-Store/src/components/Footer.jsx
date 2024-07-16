import React from 'react'
import { Col,Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    <div>
    <div className='p-5 w-100 bg-light ' style={{background:'white',borderTop:'solid 1px'}}>
        <Row>
          <Col>
              <h3  className='text-dark' >Novel Store</h3>
              <p className='text-dark' style={{textAlign:'justify'}}>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
              </p>
          </Col>
          <Col className='d-flex flex-column align-items-center'>
            <h3 className='text-dark'>Resources</h3>
            <Link className='text-dark' to='/ab'>About</Link>
            <Link className='text-dark' to='/bl'>Blog</Link>
            

          </Col>
          <Col className='d-flex flex-column align-items-center '>
          <h3 className='text-dark'>Reference</h3>
          <a href="https://react.dev/" target='_blank'>React</a>
          <a href="https://getbootstrap.com/" target='_blank'>Bootstrap</a>
          <a href="https://react-bootstrap.netlify.app/" target='_blank'>React Bootstrap</a>
          <a href="https://www.mongodb.com/" target='_blank'>MongoDB</a>
          <a href="https://expressjs.com/" target='_blank'>Express</a>
          <a href="https://nodejs.org/en" target='_blank'>NodeJS</a>
          </Col>
        </Row>
      </div>
    </div>
    <div><br />
      <h1 className='mx-auto'>
      *fake page for facebook,twiter
      </h1>
      <div style={{textAlign:'center'}} className="footer">Copyright © 2024</div>
    </div>
    </>
  )
}

export default Footer