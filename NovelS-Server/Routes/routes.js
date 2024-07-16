const express=require('express')
const userController=require('../Controller/userController')
const bookController=require('../Controller/bookController')
const router=express.Router()
const jwtMiddle=require('../Middleware/jwtMiddleware')
const multerconfig=require('../Middleware/multerMiddleware')


router.post("/register",userController.userRegister)

router.post("/login",userController.userLogin)


//route for add new books to db
router.post("/books",jwtMiddle,multerconfig.single('image'),bookController.bookCreate)
router.get("/all-books",jwtMiddle,bookController.allBooks)
router.get("/user-books",jwtMiddle,bookController.userBooks)
router.put('/edit-books/:bid',jwtMiddle,multerconfig.single('image'),bookController.editBooks)
router.delete('/delete-books/:bid',jwtMiddle,bookController.removeBooks)

module.exports=router