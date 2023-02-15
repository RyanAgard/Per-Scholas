
import MovieDisplay from './components/MovieDisplay';
import Form from './components/Form';
import './App.css';
import { useState } from 'react';


function App() {

let [movie,setMovie]=useState({})

  function getMovie(title){
   console.log(title)
   console.log(movie)

   const key = "2860b842"
   let url = `http://www.omdbapi.com/?apikey=${key}&t=${title}`


   fetch(url)
   .then((Response)=>Response.json())
   .then((data)=>setMovie(data))


   
   // key (property)= values
   // apikey = "2860b842"
   // t = title

  }
  return (
    <div className="App">
     <MovieDisplay movie ={movie} />
     <Form getMovie={getMovie}/>
    </div>
  );
}

export default App;
