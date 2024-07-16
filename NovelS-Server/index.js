// loads .env file contents into process.env by default
require('dotenv').config()
const express=require('express')
const cors=require('cors')
const router=require('./Routes/routes')
require('./DB/connection')
// const middle=require('./Middleware/jwtMiddleware')

// creating server instance
const nsServer=express()

// configuring cors into sever
nsServer.use(cors())

// configuring json conversation on server
nsServer.use(express.json())

// configuring routes to server
nsServer.use(router)

// nsServer.use(middle)

const PORT=3000

// calling listen method to implement listen mode for server to run 
nsServer.listen(PORT,()=>{
    console.log(`Server is running at:${PORT}`);
})

//Setting response for base_url get request
nsServer.get('/',(req,res)=>{
    console.log(req);
    res.status(200).send("<h2>The get request Hit Successfully!!!<h2/>")
})
// nsServer.use('/books', router)