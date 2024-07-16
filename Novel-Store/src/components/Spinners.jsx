import React from 'react'
import Spinner from 'react-bootstrap/Spinner';

function Spinners() {
  return (
    <>
    <div className='d-flex justify-content-center'>
    <Spinner animation="grow" variant="success" />
    <Spinner animation="grow" variant="light" />
    <Spinner animation="grow" variant="success" />
    <Spinner animation="grow" variant="light" />
    <Spinner animation="grow" variant="success" />
    </div>
    </>
  )
}

export default Spinners



// css
// .sidenav{
//   width:340px;
//   background: tomato;
//   position: absolute;
//   height: 2046px;
//   padding: 0 30px;
//   left:-100%;
//   transition: all 0.9s;
// }

// .sidenav.active{
//   left:0;
// }

// .logo{
//   width: 60px;  
// }

// ul{
//   padding: 0;
// }

// ul li{
//   list-style-type: none;
//   margin: 10px 0;
// }

// ul li a{
//   color: blue;
//   text-decoration: none;
//   font-size: 16px;
//   display: block;
//   padding: 10px 15px;
//   border-radius: 6px;
// }

// ul li a:hover,
// ul li a.active{
//   background: greenyellow;
// }



// .btnn{
//   font-size: 20px;
  
// }

// react
// import React, { useState } from 'react';
// import './Sidebar.css'


// const Sidebar = ({show}) => {
//   return (
//    <>
  //  <div className={show ? 'sidenav active' : 'sidenav'}>
      // <div className='p-5'>
      // <img src="https://evernote.com/_next/image?url=%2Fimages%2Ficons%2Fcheck.webp&w=64&q=75" alt="logo" className='logo'/>
      // </div>
  //     <ul>
  //        <li>
  //           <a href="/" >
  //           <i className="fa-solid fa-house" size='2xl' style={{color: "#001109",}} />
  //           <span className="ms-3">Home</span>
  //           </a>
  //        </li>
  //        <li>
  //           <a href="/dash">
  //           <i className="fa-solid fa-gauge" size="2xl" style={{color: "#001109",}} />
  //           <span className="ms-3">Dashboard</span>
  //           </a>
  //        </li>
  //        <li>
  //           <a href="/prod">
  //           <i className="fa-solid fa-bag-shopping" size="2xl" style={{color: "#001109",}} />
  //           <span className="ms-3">Products</span>
  //           </a>
  //        </li>
  //        <li>
  //           <a href="/auth">
  //           <i className="fa-solid fa-user-lock" size="2xl" style={{color: "#001109",}} />
  //           <span className="ms-3">Sign In</span>
  //           </a>
  //        </li>
  //     </ul>
  //  </div>
//    </>
//   );
// };

// export default Sidebar   