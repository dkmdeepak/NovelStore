import React from 'react'
import { Link } from 'react-router-dom'

function Addfile() {
  return (
    <>
    <div>
      <div className='p-5'  style={{display:'flex', justifyContent:'center'}}>
        <Link to='/crt' className='btn'>
        <i className="fa-solid fa-file-circle-plus fa-7x" style={{color: "#008000",}} />
        </Link>
      </div>
      
    </div>
    </>
  )
}

export default Addfile