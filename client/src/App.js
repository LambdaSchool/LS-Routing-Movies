import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Route, Switch,} from "react-router-dom"
import SavedList from './Movies/SavedList';
import MovieList from "./Movies/MovieList"
import MovieCard from "./Movies/MovieCard"
import Movie from "./Movies/Movie"


export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies') // Study this endpoint with Postman
        .then(response => {
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state

          setMovieList(response.data)
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <div>
      <SavedList list={[ /* This is stretch */]} />
      <Switch>
        <Route path = "/Movies/:id">
        <Movie/>
        </Route>

      <Route exact path = "/">
        <MovieList movies = {MovieList}/>
      </Route>
      </Switch>
    </div>
  );
}