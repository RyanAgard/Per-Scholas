import {useState } from 'react';
import './App.css';





function App() {

 const orig =[4,4,0,8,0,4,1,2,3,4,5,6,7,8,9,3]

 let [numbers, setnumber]=useState()
      
        const cardChecker = num => {
            let arr = (num + '')
             .split('')
             .reverse()
             .map(x => parseInt(x));
            let lastDigit = arr.splice(0, 1)[0];
            let sum = arr.reduce((acc, val, i) => (i % 2 !== 0 ? acc + val : acc + ((val * 2) % 9) || 9), 0);
            sum += lastDigit;
            return sum % 10 === 0;
          };
          console.log(cardChecker(orig));
         
          


          function handleChange(e) {
          
            setnumber({ ...orig, [e.target.id]: e.target.value });
          }

   return(
   <div className = "App">
    
    <label>Credit Card validator</label>
    <input value={''} onChange = {handleChange} />
    <button onSubmit = {cardChecker} >Submit</button>
    

   </div>

       ) 

   }
export default App;
