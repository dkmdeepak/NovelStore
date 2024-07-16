import React from 'react'
import './Sidebar.css'

function Backdrop({sidebar,closeSidebar}) {
  return (
        <div onClick={closeSidebar} className={sidebar? "backdrop backdrop--open":"backdrop"}></div>
  )
}

export default Backdrop