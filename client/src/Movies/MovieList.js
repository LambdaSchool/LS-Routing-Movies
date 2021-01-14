import React from 'react';
import { Route, Link } from 'react-router-dom';

export default function MovieList(props) {
  return (
    

    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
        
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { title, director, metascore} = props.movie;
  
  const { id } = props.movie;

  return (
    <div className="movie-card">
      <Link to={`/movies/${id}`}>
      <h2>{title}</h2>
      </Link>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
  );
}
