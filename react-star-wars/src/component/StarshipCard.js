import React ,{useEffect,useState} from "react";
import  { getData } from "./sw-api";


function StarShipsCard(){
   let [starship,setstarships] = useState([])

    useEffect(()=>{
     async function starShipData(){
      const data =await getData();
      setstarships(data.results)
      console.log(data.results)
     }starShipData()
      
      },[])

     return(
     <div className= "cardbox">
         {starship.map((item,index)=><p className="card" key={index}>{item.name}</p>)}
     </div>

   )

 }
export default StarShipsCard