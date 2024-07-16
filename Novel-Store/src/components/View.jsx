import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Spinners from '../components/Spinners'
import Addfile from '../components/Addfile'
import '../App.css'


function View() {
  const [books,setBooks]=useState([])
  const [loading,setLoading]=useState(false)

  useEffect(()=>{
    setLoading(true)
    axios.get(`http://localhost:3000/book`).then((res)=>{
      const booksWithId = res.data.data.map((book) => {
        return {...book, id: `book-${index + 1}` }
      })
      setBooks(booksWithId)
      setLoading(false)
    }).catch((err)=>{
      console.log(err);
    })
  },[])
  return (
    <>
    <div className='p-4'>
      <h1>***cONTENT is Here</h1>
        {
        loading?(
        <Spinners/>)
        :
        ( 
          <tbody>
          {
            books.map((book) => (
              <tr key={book._id} className='h-8'>
                <div className='my-4'>
                  <span className='text-xl mr-4 text-blue-500'>ID: </span>
                  <span>{book._id}</span>
                </div>
        
                <div className='my-4'>
                  <span className='text-xl mr-4 text-blue-500'>Title: </span>
                  <span>{book.title}</span>
                </div>
        
                <div className='my-4'>
                  <span className='text-xl mr-4 text-blue-500'>Author: </span>
                  <span>{book.author}</span>
                </div>
        
                <div className='my-4'>
                  <span className='text-xl mr-4 text-blue-500'>Publish Year: </span>
                  <span>{book.publishYear}</span>
                </div>
        
                <div className='my-4'>
                  <span className='text-xl mr-4 text-blue-500'>Content: </span>
                  <span>{book.content}</span>
                </div>
              </tr>
            ))
          }
        </tbody>


         ) 
      } 
    </div>
    </>
  )
}

export default View