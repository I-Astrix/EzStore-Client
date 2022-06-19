import { publicRequest } from "./requestMethods";
import axios from "axios";

export const fetchHomeProducts = async()=>{
    try{
        const request = await publicRequest.get('/api/products');
        const response = await request.data;
        console.log(response)
        return response;
    }
    catch{
        console.log('Error')
    }
}