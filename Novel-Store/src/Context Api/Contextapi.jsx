import React, { createContext, useState } from 'react'


export const  addBooksResponseContext=createContext('')
export const  bookEditResponseContext=createContext('')

function Contextapi({children}) {
    const [addBooksResponse,setAddBooksResponse]=useState('')
    const [bookEditResponse,setBookEditResponse]=useState('')
  return (
    <>
    <addBooksResponseContext.Provider value={{addBooksResponse,setAddBooksResponse}}>
        <bookEditResponseContext.Provider value={{bookEditResponse,setBookEditResponse}}>
         {children}
      </bookEditResponseContext.Provider>
    </addBooksResponseContext.Provider>
    </>
  )
}

export default Contextapi