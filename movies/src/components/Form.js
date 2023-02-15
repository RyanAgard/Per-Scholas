import { useState } from "react";
function Form({getMovie}) {

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
                 <input value = {input} onChange ={handleChange}/>
                 <button> search </button>
             </form>
      </div>
    );
  }
  
  export default Form;