import React from 'react';
import {connect} from 'react-redux';
import {increment,decrement,fetchMovieData} from '../actions';
import Counter from '../components/Counter';
import SearchForm from '../components/SearchForm';
import Results from '../components/Results';
let App = (props) =>
    (
      <div className="container">
        <Counter {...props}/>
        <SearchForm fetchMovieData = {props.fetchMovieData}/>
        <Results {...props.movieData}/>
      </div>
    );


App = connect(
  (state) => ({
    count: state.counter.count,
    movieName: state.movieName,
    movieData : state.movieData
  }),
  {increment,decrement,fetchMovieData}
)(App);

export default App;
