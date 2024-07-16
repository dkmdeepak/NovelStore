import React from 'react'
import './Sidebar.css'

function Toolbar({openSidebar}) {

  return (
    <>
    <div className='tool-bar'>
      <input type="checkbox" id="checkbox" onClick={openSidebar} />
      <label for="checkbox" className="toggle">
        <div className="bars" id="bar1"></div>
        <div className="bars" id="bar2"></div>
        <div className="bars" id="bar3"></div>
    </label>
    </div>
    </>
  )
}

export default Toolbar