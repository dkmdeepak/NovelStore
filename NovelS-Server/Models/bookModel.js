const mongoose=require('mongoose')

const bookSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    publishYear:{
        type:Number,
        unique: true 
        },
    github:{
        type:String,
        required:true
    },
    // linkedin:{
    //     type:String,
    //     required:true
    // },
    createdAt:{
        type:Date,
        default:Date.now
    },
    updatedAt:{
        type:Date,
        default:Date.now,
    },
    userId:{
        type:String,
        required:true,
    },
},
    {
    timestamps:true,
    }
)

const books=mongoose.model('books',bookSchema)
module.exports=books