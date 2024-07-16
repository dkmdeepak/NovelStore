import React from 'react'
import { Link } from 'react-router-dom'


function Sidebar({ sidebar }) {
  return (
    <>
   <div>
      <div className={sidebar ? 'sidebar sidebar--open' : 'sidebar'}>
         <span className='mx-5'>
         <article className='d-flex justify-content-end'>
         <img src="https://evernote.com/_next/image?url=%2Fimages%2Ficons%2Fcheck.webp&w=64&q=75" alt="logo" className='btn'/>
         </article>
         <li>
            <Link to={'/'}>
            <i className="fa-solid fa-house fa-xl" style={{color: "#001109",}} />
            <span className="ms-3">Home</span>
            </Link>
         </li>
         <li>
         <Link to={'/dash'}>
            <i className="fa-solid fa-gauge fa-xl" style={{color: "#001109",}} />
            <span className="ms-3">Dashboard</span>
            </Link>
         </li>
         <li>
         <Link to={'/prod'}>
            <i className="fa-solid fa-bag-shopping fa-xl" style={{color: "#001109",}} />
            <span className="ms-3">Products</span>
            </Link>
         </li>
         <li>
         <Link to={'/auth'}>
            <i className="fa-solid fa-user-lock fa-xl" style={{color: "#001109",}} />
            <span className="ms-3">Sign In</span>
            </Link>
         </li>
         </span>
      </div>
   </div>
   </>
  )
}

export default Sidebar