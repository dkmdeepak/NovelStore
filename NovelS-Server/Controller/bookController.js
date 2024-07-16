const books = require('../Models/bookModel')

// save new books to db
    exports.bookCreate=async(req,res)=>{
        const userId=req.payload
        const {title,author,github,publishYear,content}=req.body
        // console.log(title,author,github,publishYear,content,userId)
        try{
            const existingBook=await books.findOne({github})
            if (existingBook) {
            res.status(406).json("books Already Added")
        }
        else{
            const newBook=new books({
                title,author,github,publishYear,content,userId
            })
            await newBook.save()
            res.status(201).json(newBook)
            }
        }
        catch(err){
                console.log(err);
                res.status(500).json(err)
        }
  }  


  exports.allBooks=async(req,res)=>{
    console.log("inside all Projects");
    const search=req.query.search;
    console.log(search);    
    try{
        const query={
            author:{$regex:search,$options:'i'}
        }
        const result=await books.find(query)
        // console.log(result);
        if(result){
            res.status(200).json(result)
        }
        else{
            res.status(401).json('No Books Available!!')
        }
    }
    catch (err) {
        if (err.code === 11000 && err.keyPattern.publishYear) {
            // Duplicate publishYear error
            return res.status(400).json("Duplicate publishYear value");
        } else {
            console.log(err);
            return res.status(500).json(err);
        }
    }
    
  }

  exports.userBooks=async(req,res)=>{
    try{
        const userId=req.payload
        const result=await books.find({userId})
        if(result){
            res.status(200).json(result)
        }
        else{
            res.status(401).json('No Books Available!!')
        }
    }
    catch(err){
            console.log(err);
            res.status(406).json(err)
    }
  }

  exports.editBooks=async(req,res)=>{
    const { title, author, github, publishYear, content } = req.body
    const userId=req.payload
    const { bid }= req.params
    try{
        const updateBook = await books.findByIdAndUpdate({ _id:bid },
            { title, author, github, publishYear, content, userId },{  new:true })
            await updateBook.save()
            res.status(200).json(updateBook)
    }
    catch(err){
        console.log(err);
        res.status(406).json(err)
    }

  }

  exports.removeBooks=async(req,res)=>{
    const { bid }=req.params
    console.log(bid);
    try{
        const result=await books.findByIdAndDelete({ _id: bid })
        res.status(200).json(result)
    }
    catch(err){
        console.log(err);
        res.status(406).json(err)
    }
  }
