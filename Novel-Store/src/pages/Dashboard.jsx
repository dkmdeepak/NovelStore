import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Dash.css'
import { Col, Row } from 'react-bootstrap'




function Dashboard() {
const[user,setUser]=useState('')
useEffect(()=>{
  setUser(sessionStorage.getItem("username"))
  })

  return (
    <>
    <div className='mt-5 mb-5 p-5'>
    <div className='p-4 d-flex justify-content-center' style={{fontSize:'100px'}}>
      <h1>Welcome <span className='text-warning'>{user}</span></h1>
      </div>
      <aside className='d-flex justify-content-center p-5 m-5'>
        <Row>
          <Col >
            <Link to={'/crt'}>
            <div className='cardd1'>
            <h4>Create</h4>
            </div>
            </Link>
          </Col>
          <Col>
            <Link to={'/select'}>
            <div className='cardd2'>
            <h4>Edit / View</h4>
            </div>
            </Link>
          </Col>
          <Col>
            <Link to={'/all'}>
            <div className='cardd3'>
            <h4>View All</h4>
            </div>
            </Link>
          </Col>
        </Row>
      </aside>
    </div>
    </>
  )
}

export default Dashboard