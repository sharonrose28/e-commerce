import Product from "../../component/Product";
import handleCart from "../reducer/handleCart";

export const addCart=(product) =>{
    return {
        type:"ADDITEM",
        payload:product
    }
}
export const delCart =(product)=>{
    return{
        type:"DELITEM",
        payload :product
    }
}