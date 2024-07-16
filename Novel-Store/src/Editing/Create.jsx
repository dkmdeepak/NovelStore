import React, { useRef, useState } from 'react';
// import Spinners from '../components/Spinners'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import { bookCreate } from '../services/allApis';
import { addBooksResponseContext } from '../Context Api/Contextapi';
import './Create.css'
import { useContext } from 'react';
import image from '../svg/create1.png'
import { Col, Row } from 'react-bootstrap';


function Create() {
      const {addBooksResponse,setAddBooksResponse}=useContext(addBooksResponseContext)

      const[bookData,setBookData]=useState({
      title:'',author:'',github:'',publishYear:'',content:''
      })

      const handleAddBook = async (e) => {
        e.preventDefault();
        const { title, author, github, publishYear, content } = bookData;
        if (!title ||!author ||!github ||!publishYear ||!content) {
          toast.warning('Please fill all the fields');
        } else {
          const formData = new FormData();
          formData.append("title", title);
          formData.append("author", author);
          formData.append("github", github);
          formData.append("publishYear", publishYear);
          formData.append("content", content);
      
          const token = sessionStorage.getItem('token');
          const reqHeader = {
            'Authorization': `Bearer ${token}`
          };
          console.log(reqHeader);
          try {
            const result = await bookCreate(formData, reqHeader);
            if (result && result.status === 200) {
              toast.success('Project Added Successfully');
              setBookData({
                title: '', author: '', github: '', publishYear: '', content: ''
              });
              handleClose();
              setAddBooksResponse(result);
            } else {
              toast.success(result && result.response && result.response.data? result.response.data : 'Project Added Successfully');
              handleClose();

            }
          } catch (error) {
            console.error(error);
            toast.error('Error adding books');
          }
        }
      };
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  

  return (
    <div>

      <div className='p-5 mb-2 d-flex justify-content-center' style={{color:'',opacity:'60%', fontSize:'100px'}}>
      <h1>You can't wait for inspiration.</h1>
      </div>
      <br />
    <div id='container' className="container shadow-md p-5 mb-5 rounded">

      <span style={{ display:'block',fontSize:'17px', textAlign: 'center' }}>
        <h1>
      <strong>Welcome to Novel Store, your ultimate destination for unleashing creativity and exploring captivating narratives! Our platform is dedicated to empowering writers and inspiring readers worldwide. Whether you're crafting your debut novel or searching for your next literary adventure, <strong>Novel Store</strong> provides the tools and community you need to bring stories to life. Dive into a world of limitless imagination, where every storyline finds its voice and every reader discovers their next favorite book. Join us at <strong>Novel Store</strong> and embark on a journey where creativity knows no bounds.</strong>
        </h1>
      </span>
      <br />
      <div className='p-5 d-flex justify-content-center'>
      <button type="button" className="btn-96" onClick={handleShow}>
        <span>Start Writing...</span>
      </button>
      </div>

      <Row>
        <Col>
        <div className='p-5 d-flex justify-content-center'>
        <img className='shadow-md ' src={image} alt="" />
      </div>
        </Col>
        <Col>
        <p className='p-5' style={{textAlign: 'justify'}}>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure. <br />At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
        </Col>
      </Row>

      <div className='p-5 d-flex justify-content-center'>
      <button type="button" className="btn-96" onClick={handleShow}>
        <span>Start Writing...</span>
      </button>
      </div>

      <form >
      <div style={{width:'1000px'}} >
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
        className='mx-5 px-5'
      >
        <Modal.Header closeButton>
          <Modal.Title>Novel</Modal.Title>
        </Modal.Header>
        <Modal.Body >
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            placeholder='Title'
            onChange={(e)=> setBookData({...bookData,title:e.target.value})}
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
            onChange={(e)=> setBookData({...bookData,author:e.target.value})}
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
            onChange={(e)=> setBookData({...bookData,github:e.target.value})}
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
            onChange={(e)=> setBookData({...bookData,publishYear:e.target.value})}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className='mb-4'>
        <label htmlFor="publishYear" className="block text-gray-700 text-sm font-bold mb-2">
            Contents
        </label>
        <textarea name="" 
          id="content" 
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
          style={{height:'250px'}}
          placeholder='Type what you Like...' 
          onChange={(e)=>setBookData({...bookData,content:e.target.value})}
        >
        </textarea>
        </div>
        <br />
        <div className='d-flex justify-content-center'>       
        <button type="submit"  onClick={handleAddBook}  className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
          Save
        </button>
        </div>
        </Modal.Body>
      </Modal>
        </div>
      </form>
    </div>
    </div>
  );
}
export default Create;
//03.05