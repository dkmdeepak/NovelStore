import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import server_url from '../services/server_url'



function Userprofile() {
  const [user, setUser] = useState({
    id:'',username:'',password:'',github:'',linkedin:'',profile:''
  })
  const[preview,setPreview]=useState('')
  const[existingProfile,setExistingProfile]=useState('')

  useEffect(() => {
    if(sessionStorage.getItem('token')){
      const userDetails=JSON.parse(sessionStorage.getItem('userDetails'))
      setUser({id:userDetails._id,username:userDetails.username,email:userDetails.email,
        password:userDetails.password,github:userDetails.github,linkedin:userDetails.linkedin,profile:''})
      setExistingProfile(userDetails.profile)
    }
  },[])
console.log(user);
  useEffect(()=>{
    
      if(user.profile){
        setPreview(URL.createObjectURL(user.profile))
    }
    else{
      setPreview('')
    }
  },[user.profile])
  console.log(user);
  return (
    <>
      <div className='d-flex justify-content-center'>
        <Row>
          <label htmlFor="in" >
            <input type="file" id='in' style={{display:'none'}} onChange={(e)=>setUser({...user,profile:e.target.files[0]})}/>
            {
              existingProfile==''?
              <img src={preview?preview:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1DW2AbPjiyr_z8wPldURnj7pUcyca6F0GrA&s"} alt="im" className='img-fluid' width={'200px'}/>
              :
              <img src={`${server_url}/uploads/${existingProfile}`} alt="im" className='img-fluid' width={'200px'}/>

            }
          </label>
          <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
            Username
          </label>
          <input
          style={{width:'200px'}}
            type="text"
            id="username"
            placeholder='Username'
            value={user?.username}
            onChange={(e)=>setUser({...user,username:e.target.value})}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

          <div className="mb-4">
          <label htmlFor="github" controlId="floatingInput" className="block text-gray-700 text-sm font-bold mb-2">
            Github
          </label>
          <input
            type="text"
            id="github"
            style={{width:'200px'}}
            placeholder='Github'
            value={user?.github}
            onChange={(e)=>setUser({...user,github:e.target.value})}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
          <div className="mb-4">
          <label htmlFor="linkedIn" className="block text-gray-700 text-sm font-bold mb-2">
          LinkedIn
          </label>
          <input
            type="text"
            id="linkedIn"
            style={{width:'200px'}}
            placeholder='LinkedIn'
            value={user?.linkedin}
            onChange={(e)=>setUser({...user,linkedin:e.target.linkedin})}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div> 
        </Row>
      </div>
    </>
  )
}

export default Userprofile