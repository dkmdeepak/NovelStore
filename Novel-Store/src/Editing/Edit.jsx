import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { bookEdit, bookRemove } from '../services/allApis';
import { toast } from 'react-toastify';
import { bookEditResponseContext } from '@/Context Api/Contextapi';
import { useContext } from 'react';

function Edit({allNewBook}) {

  const{bookEditResponse,setBookEditResponse}=useContext(bookEditResponseContext)


  const[bookData,setBookData]=useState({
    id:allNewBook._id,title:allNewBook.title,author:allNewBook.author,github:allNewBook.github,publishYear:allNewBook.publishYear,content:allNewBook.content
    })

  const handleUpdate=async()=>{
    console.log(bookData);
    const { title, author, github, publishYear, content } = bookData
    if( !title || !author || !github || !publishYear || !content ) {
      toast.warning('Please fill all the fields')
    }
    else{

      const token= sessionStorage.getItem('token')
      const reqHeader={
        'Authorization':`Bearer ${token}`
          }

          try {
          const result=await bookEdit(bookData.id,bookData,reqHeader)
          if(result.status==200){
            toast.success(`Novel ${bookData.title} Updated Successfully`)
            handleClose()
            setBookEditResponse(result)
          }

          else{
            toast.info(result.response.data)
          }
        } 

        catch (error) {
          console.error(error);    
          toast.error("Error updating novel");
        }
        }
      }


      const [show, setShow] = useState(false);
      const handleClose = () => {
        setShow(false);
        setBookData({
          id:allNewBook._id,title:allNewBook.title,author:allNewBook.author,github:allNewBook.github,publishYear:allNewBook.publishYear,content:allNewBook.content
          })
      }

  const handleShow = () => setShow(true);
  return (
    <>
      <div>
      <button id='cool' className='me-3 x-1 y-3' onClick={handleShow}>
          <i className='fa-solid fa-pen-to-square fa-xl'/>
      </button>


      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Your Story</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form >

          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
              Title
            </label>
            <input
              type="text"
              id="title"
              placeholder='Title'
              value={bookData.title}
              onChange={(e)=>{setBookData({...bookData,title:e.target.value})}}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="author" className="block text-gray-700 text-sm font-bold mb-2">
              Author
            </label>
            <input
              type="text"
              id="author"
              placeholder='Author'
              value={bookData.author}
              onChange={(e)=>{setBookData({...bookData,author:e.target.value})}}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="github" className="block text-gray-700 text-sm font-bold mb-2">
              Github Url
            </label>
            <input
              type="text"
              id="github"
              placeholder='Github'
              value={bookData.github}
              onChange={(e)=>{setBookData({...bookData,github:e.target.value})}}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="publishYear" className="block text-gray-700 text-sm font-bold mb-2">
              Publishing Year
            </label>
            <input
              type="number"
              id="publishYear"
              placeholder='Publishing Year'
              value={bookData.publishYear}
              onChange={(e)=>{setBookData({...bookData,publishYear:e.target.value})}}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className='mb-4'>
          <label htmlFor="publishYear" className="block text-gray-700 text-sm font-bold mb-2">
              Contents
          </label>
          <textarea name="" 
            id="content" 
            style={{height:'300px'}}
            placeholder='Type what you Like...' 
            value={bookData.content}
            onChange={(e)=>{setBookData({...bookData,content:e.target.value})}}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
          >
          </textarea>
          </div>
          <br />
          <div className='d-flex justify-content-center'>       
          </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Update
            </Button>
        </Modal.Footer>
      </Modal>    
      </div>
    </>
  )
}

export default Edit