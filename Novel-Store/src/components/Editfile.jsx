import React from 'react'
import { Link } from 'react-router-dom'

function Addfile() {
  return (
    <>
    <div>
      <div className='p-5'  style={{display:'flex', justifyContent:'center'}}>
        <Link to='/crt' className='btn'>
        <i className='fa-solid fa-pen-to-square fa-2xl'/>
        </Link>
      </div>
      
    </div>
    </>
  )
}

export default Addfile