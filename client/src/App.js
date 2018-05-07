import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
// import MovieCard from './MovieCard/MovieCard';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {
    const savedList = this.state.savedList;
    savedList.push(movie);
    this.setState({ savedList });
  };

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />
        <Route path = "/" component={MovieList}></Route>
        <Route path = "/movie/:id" component={Movie}></Route>
        {/* <Route path = "/movieList" component={MovieList}></Route> */}
        {/* <Route path = "/savedList" component={SavedList}></Route> */}
      </div>
    );
  }
}
