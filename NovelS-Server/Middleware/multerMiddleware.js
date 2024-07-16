const multer=require('multer')

const storage=multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,'./uploads')
    },
    filename:(req,file,callback)=>{
        callback(null,`Img-${Date.now()}-${file.originalname}`)
    }
})

const fileFilter=(req,file,callback)=>{
if(file.mimetype=='image/jpg' || file.mimetype=='image/jpeg' || file.mimetype=='image/png'){

    callback(null,true)
}
else{
    callback(null,false)
    return callback(new Error('Please Upload File'))
}
}
const multerconfig=multer({
    storage,fileFilter
})

module.exports=multerconfig