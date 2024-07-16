const mongoose=require('mongoose')
const connectionString=process.env.DATABASE

mongoose.connect(connectionString).then(()=>{
    console.log("MongoDB Atlas connection Successfully!!!");
}).catch((err)=>{
    console.log("Mongoose");
    console.log(err);
})

