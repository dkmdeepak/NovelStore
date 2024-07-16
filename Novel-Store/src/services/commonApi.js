import axios from "axios";

export const commonApi=async(httpRequestMethod,url,reqBody,reqHeader)=>{
    const reqConfig={
        method:httpRequestMethod,
        url,
        data:reqBody,
        headers:reqHeader?reqHeader:{"Content-Type":"application/json"}
    }
return await axios(reqConfig).then((res)=>{return res}).catch((err)=>{return err})
}