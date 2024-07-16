import React,{useEffect,useState} from 'react'
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import './Home.css'
import { Row,Col } from 'react-bootstrap';

function Home() {
  const [token,setToken]=useState("")
  useEffect(()=>{
    setToken(sessionStorage.getItem('token'))
  })

  return (
    <>
 <div >

      <span  className='m-5'>
          <h1 
          className='text-center mt-5' style={{fontSize:'80px',opacity:'60%'}}
          >
            Tame your work,<br />
          organize your life
          </h1>
        </span>
      <div className='p-4' style={{ display:'flex' , justifyContent:'center' }}>
      <div>
      {
        token?
        <Link to={ '/dash' } className='btn btn-success' id='all-items' style={{ width:"350px",height:"90px" }}>
        <h3 id='all-item' className='mx-auto'>All Items</h3>
        </Link>
        :
        <Link to={ '/auth' } className='btn' id='start' style={{ width: "350px",height: "90px" }}>
        <h3 className='mx-auto p-3'>Start for free</h3>
        </Link>
      }
      </div>
      </div>
      <br /><br />
      <div>
      <main>
        <div id='main-intro' className='main-intro p-4'>
          <div className='text-center'>
            <h1 id='star'>NOVEL <br />STORE<br />2024 </h1>
          </div>
        </div>
      </main>
      <Nav.Item>
        <div>
          <Row>
            <Col>
            <span className='mx-5' >
            <img className='mx-5 px-5' style={{ width:'500px',height:'400px' }} 
            src="https://evernote.com/_next/image?url=%2Fimages%2Fsplit%2Fno-signal.webp&w=1920&q=75" alt="" />
            </span>
            </Col>
            <Col>
            <span>
            <p className='p-5 m-5' style={{ fontSize:'30px' }}>
            Evernote automatically syncs across all your devices so you can access your most important information anytime, anywhere. No WiFi? No problem—offline mode means you can continue to use Evernote even when the internet cuts out.
            </p>
            </span>
            
            </Col>
          </Row>
        </div>
      <div className='p-4 mb-5' style={{display:'flex' , justifyContent:'center' }}>
        <div>
      {
        token?
        <Link to={ '/dash' } className='btn btn-success' id='all-items' style={{  width: "350px",height: "90px"}}>
        <h3 id='all-item' className='mx-auto'>All Items</h3>
        </Link>
        :
        <Link to={ '/auth' } className='btn' id='start' style={{  width: "350px",height: "90px"}}>
        <h3 className='mx-auto p-3'>Start for free</h3>
        </Link>
      }
         </div>
      </div>     
     </Nav.Item>
    </div>
 </div>
      
    </>
  )
}

export default Home