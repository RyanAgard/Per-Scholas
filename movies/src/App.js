
import MovieDisplay from './components/MovieDisplay';
import Form from './components/Form';
import './App.css';
import { useEffect, useState } from 'react';


function App() {

let [movie,setMovie]=useState()


let movieTitles = ["matrix","avatar","batman","cowboy bebop ","jason bourne","godzilla"]

let random = Math.floor(Math.random()* movieTitles.length)
  useEffect(()=>{
     getMovie(movieTitles[random])
      //  console.log(movie)
  },[])

  async function getMovie(title){
   console.log(title)
   console.log(movie)

   const key = process.env.REACT_APP_KEY
   let url = `http://www.omdbapi.com/?apikey=${key}&t=${title}`
try{
 let Response = await fetch(url) // return a promise
  let data = await Response.json()
setMovie(data)
}
catch(error){
  console.log('something went wrong')
}

  //  fetch(url)
  //  .then((Response)=>Response.json())
  //  .then((data)=>setMovie(data))
 
   // key (property)= values
   // apikey = "2860b842"
   // t = title

  }
  if(movie){
  return (
    <div className="App">
     <MovieDisplay movie ={movie} />
     <Form getMovie={getMovie}/>
    </div>
  );
 } else{
  // if movie is null
  return(
    <div>
//       <h1> search for a movie </h1>
         <Form getMovie = {getMovie}/>
    </div>
  );
 }
}
export default App;
