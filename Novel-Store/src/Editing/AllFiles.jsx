import React, { useEffect, useState } from 'react'
import { bookGetAll } from '../services/allApis'
import { Button, Col, Container, Modal, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Allfiles.css'

function AllFiles() {
    const[allNewBooks,setAllNewBooks]=useState([])
    const[logStatus,setLogStatus]=useState(false)
    const[search,setSearch]=useState('')

    useEffect(()=>{
      if(sessionStorage.getItem('token')){
        getData()
        setLogStatus(true)
      }else{
        console.log('login First');
        setLogStatus(false)
      }
    },[search])
    console.log(allNewBooks);
    
    const getData=async()=>{

      const header={"Authorization":`Bearer ${sessionStorage.getItem('token')}`}
      const result= await bookGetAll(header,search)
      if(result.status==200){
        setAllNewBooks(result.data)
      }
      else{
        console.log(result.response.data);
      }
    }
    const [showModal, setShowModal] = useState(false);
    const [selectedBook, setSelectedBook] = useState({});
        const handleCardClick = (book) => {
        setSelectedBook(book);
        setShowModal(true);
      };
        const handleCloseModal = () => {
        setShowModal(false);
      };
  return (
    
    <div className='p-5 my-5' style={{width:'100%',height:'100%',marginTop: 20}}>
        <input type="text" onChange={(e)=>{setSearch(e.target.value)}}  placeholder="Search For Author" style={{width:'500px' , boxShadow:' 0 0 10px rgba(0, 0, 0, 0.1)'}} className="input"/>
        <br /><br /><br />
        {
            logStatus ? 
            <Row>
            {
                allNewBooks.length>0?
                allNewBooks.map((item,index)=>(

                <Col sm={12} md={4} lg={4}>
                <Container style={{marginTop: 20}} className="card-grid" >
                <div
                  className="card"
                  onClick={() => handleCardClick(item)}
                  >
                      <br />
                      <div className='p-3 d-flex justify-content-end position-absolute top-5 end-4 p-2'>
                      <label className="expand">
                        <input  checked="checked" type="checkbox"/>
                          <svg viewBox="0 0 448 512" height="1em" xmlns="http://www.w3.org/2000/svg" className="expand"><path d="M32 32C14.3 32 0 46.3 0 64v96c0 17.7 14.3 32 32 32s32-14.3 32-32V96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V352zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v64c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H320zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V352z"></path></svg>
                          <svg viewBox="0 0 448 512" height="1em" xmlns="http://www.w3.org/2000/svg" className="compress"><path d="M160 64c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V64zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32H96v64c0 17.7 14.3 32 32 32s32-14.3 32-32V352c0-17.7-14.3-32-32-32H32zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H352V64zM320 320c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32s32-14.3 32-32V384h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H320z"></path></svg>
                      </label>
                      </div>

                    <div className="card-body">
                      <h2 className="card-title" id='card-title' style={{color:'rgb(0, 168, 45)'}}>
                        {index+1}
                        </h2>
                      <br />
                      <h5 className="card-title">
                        <span style={{ fontSize: 18, fontWeight: 'bold' }}>Title: </span>
                        <span><Link to={'/view'}>
                        {item.title}
                        </Link></span>
                      </h5>
                      <p className="card-text">
                        <span style={{ fontSize: 16, fontWeight: 'bold' }}>Author: </span>
                        <span>
                        {item.author}
                          </span>
                      </p>
                      <p className="card-text">
                        <span style={{ fontSize: 16, fontWeight: 'bold' }}>Github: </span>
                        <span>
                        {item.github}
                        </span>
                      </p>

                      <p className="card-text">
                        <span style={{ fontSize: 16, fontWeight: 'bold' }}>Publish Year: </span>
                        <span>
                        {item.publishYear}      
                        </span>
                      </p>
                    </div>
                  </div>                  
            </Container>
                </Col>
                ))
                :
                <h2 className='text-center text-danger'>No Books Available</h2>
            }
            
        </Row>
        :
        <h1 className='text-center text-warning'>PLEASE LOGIN FIRST!</h1>
        } 
           <Modal show={showModal} onHide={handleCloseModal}>
              <Modal.Header >
                <Modal.Title>{selectedBook.title}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p> <strong>Contents:</strong> {selectedBook.content}</p>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" style={{background:'tomato',border:'none',width:'100%'}} onClick={handleCloseModal}>
                  Close
                </Button>
              </Modal.Footer>
              </Modal>   
    </div>
  )
}
export default AllFiles
// 09/05
//08/05 click card