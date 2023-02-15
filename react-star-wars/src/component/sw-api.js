import { useState } from "react";
 
function starShipinfo({getMovie}) {

 let [input,setinput]= useState('')

 function handleChange(e){

  setinput(e.target.value)
 }

 function handleSubmit(e){
     e.preventDefault()
    console.log(input)
    getMovie(input)
 }

    return (
      <div>
              <form onSubmit={handleSubmit}> 
                 <button value = {input} onChange ={handleChange}/>
                 <button> search </button>

             </form>
      </div>
    );
  }
  
  export default starShipinfo;