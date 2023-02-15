
function MovieDisplay({movie}) {
    return (
      <div>
        <h1>Title: {movie.Title}</h1>
        <h2>Genre: {movie.Genre}</h2>
        <img src={movie.Poster} alt ={movie.Title}/>
        <h2>Year: {movie.Year}</h2>
        <h3>Rated: {movie.Rated}</h3>
      </div>
    );
  }
  
  export default MovieDisplay;