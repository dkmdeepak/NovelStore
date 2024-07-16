import { commonApi } from "./commonApi"
import base_url from "./server_url"

//  //register
export const userRegister=async(data)=>{
    return await commonApi("POST",`${base_url}/register`,data,"")
}

// //login
export const userLogin=async(data)=>{
    return await commonApi("POST",`${base_url}/login`,data,"")
}

// //create
export const bookCreate=async(data,header)=>{
    return await commonApi("POST",`${base_url}/books`,data,header)
}

// // //all books 
export const bookGetAll=async(header,search)=>{
    return await commonApi("GET",`${base_url}/all-books?search=${search}`,"",header)
}

// // //all books 
export const bookUser=async(header)=>{
    return await commonApi("GET",`${base_url}/user-books`,"",header)
}

// edit books
export const bookEdit=async(id,data,header)=>{
    return await commonApi("PUT",`${base_url}/edit-books/${id}`,data,header)
    // return { status: 200, response: result }
}


//delete books
export const bookRemove=async(id,header)=>{
    return await commonApi("DELETE",`${base_url}/delete-books/${id}`,{},header)
}

