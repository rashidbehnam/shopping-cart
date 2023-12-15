import { useEffect,useState } from "react";

const localCache={};
export default function useDetails(id){
    console.log('local cache',localCache)
   const [detail,setDetail]= useState({})
    useEffect(()=>{
        if(localCache[id]){
            setDetail(localCache[id]);
        }else{
            fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) =>{setDetail(json);localCache[id]=json} )
        }
        
      
    },[id])

    return detail
}