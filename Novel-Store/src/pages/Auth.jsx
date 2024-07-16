import React,{useState} from 'react'
import { Col, Row } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import { userRegister,userLogin } from '../services/allApis';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { TokenAuthContext } from '@/Context Api/AuthContext';

function Auth() {
  const {authStatus,setAuthStatus}=useContext(TokenAuthContext)

    const[status, setStatus] = useState(true)
    const [data,setData]=useState({
      username:'',password:'',email:''
    })
    const navigate=useNavigate()
    // console.log(data);

    const changeStatus = () => {
        setStatus(!status)
    }

    const handleRegister=async()=>{
      console.log(data);
      const{username,password,email}=data
      if(!username || !password || !email){
        toast.warning("Please Fill the Form Properly!!");
      }
      else{
        const result=await userRegister(data)
        console.log(result);
        if(result.status==201){
          toast.success("User Registered Successfully!!");
          setData({username:"",password:"",email:""})
          setStatus(true)
        }
        else{
          toast.error(result.response.data);
        }
      }
    }

    const handleLogin=async()=>{
      const {email,password}=data
      if(email || password){
        const result=await userLogin({email,password})
        console.log(result);
        sessionStorage.setItem('token',result.data.token)
        sessionStorage.setItem('username',result.data.user)
        navigate('/')
        setAuthStatus(true)
        toast.success("Login Successfull")
      }
      else{
      toast.warning("invalid Details")

        
      }
    }
  return (
   <>
    <div className='p-4' >
      <div className='mt-5 mb-5 shadow border container' style={{width:'600px'}}>
      <Row>
          <Col sm={12} md={6} lg={12}>
          {
            status?
              <span className='d-flex justify-content-center mt-5'>
                        <div className='text' style={{fontSize:'90px',fontWeight:'50px'
                          ,color:'rgb(0, 168, 45)', marginTop:'3px'}}>
                        Log In
                        <p className='mx-auto' style={{width:'100px', height:'13px'
                          ,background:'rgb(0, 168, 45)',borderRadius:'30px'}}></p>
                        </div>
              </span>
              :
              <span className='d-flex justify-content-center mt-5'>
                        <div className='text' style={{fontSize:'90px',fontWeight:'30px'
                          ,color:'rgb(0, 168, 45)', marginTop:'3px'}}>
                        Sign Up
                        <p className='mx-auto' style={{width:'100px', height:'13px'
                          ,background:'rgb(0, 168, 45)',borderRadius:'30px'}}></p>
                        </div>
              </span>
          }             
          <br /><br />
          {
            status&&
          <span className='text-center p-4'>
            <p>Email: test1@gmail.com || Pass: 1234</p>
            <p>Email: test2@gmail.com || Pass: 1234</p>
          </span>
          }

            <div className=' mx-auto text-center mt-2' style={{width:'350px'}}>
              {
                !status &&
                <FloatingLabel controlId="user" label="Username" className="mb-3">
                  <Form.Control type="text" placeholder="username" 
                  onChange={(e)=>{setData({...data,username:e.target.value})}}
                  />
                </FloatingLabel>
                        }
                <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                  <Form.Control type="email" placeholder="name@example.com" 
                  onChange={(e)=>{setData({...data,email:e.target.value})}}
                  />
                </FloatingLabel>

                <FloatingLabel controlId="floatingPassword" label="Password">
                  <Form.Control type="password" placeholder="Password" 
                  onChange={(e)=>{setData({...data,password:e.target.value})}}
                  />
                </FloatingLabel>
            </div>

            <div className='mt-4 mb-5 px-5 mx-5 d-flex justify-content-between'>
                {
                  status?
                  <div>
                  <button  className='btn' 
                  onClick={handleLogin} 
                  style={{color:'white',width:'100px',height:'50px',textAlign:'center',fontSize:'15px',fontWeight:'20px',border:'none',
                    backgroundColor:'rgb(0, 168, 45)'}} >
                   <span>Login</span>
                   </button>
                  </div>
                   :
                   <button className='btn'
                    onClick={handleRegister} 
                    style={{color:'white',width:'100px',height:'50px',textAlign:'center',fontSize:'15px',fontWeight:'20px',border:'none',
                    backgroundColor:'rgb(0, 168, 45)'}} >
                   <span>SignUp</span>
                   </button>
                } 
                  <button className='btn btn-link'  
                  onClick={changeStatus}
                  >
                    {
                      status ?
                      <span>I don't have an Account</span>
                        :
                      <span>Already have an Account?</span>
                    }
                  </button><br />
              </div>
              </Col>
          </Row>
          </div>
        </div>
        <ToastContainer />
    </>
    )
  }

export default Auth