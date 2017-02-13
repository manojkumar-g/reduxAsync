import fetch from 'isomorphic-fetch';
import axios from 'axios';

export const increment = () => ({
  type:'INCREMENT'
});
export const decrement = () => ({
  type:'DECREMENT'
});

export const requestMovieData = movieName => ({
  type : 'REQUEST_MOVIE_DATA',
  movieName
});

export const recieveMovieData = (movieName,data) =>({
  type : 'RECIEVE_MOVIE_DATA',
  data,
  movieName,
  recievedAt : Date.now()
});

export const fetchMovieData = movieName =>
  dispatch => {
    dispatch(requestMovieData(movieName));
    let url = 'http://www.omdbapi.com/?t='+movieName+'&y=&plot=full&r=json';
    return fetch(url)
          .then(response => response.json())
          .then(
            data =>
              dispatch(
                recieveMovieData(movieName,data)
              ))
          .catch(
            err =>
              console.log(`Error occured ${err}`)
          );

  }

  export const requestToRegister = (username) => ({
    type : 'REQUEST_TO_REGISTER',
    user,
    password
  });
  export const successRegistration = (username) => ({
    type : 'SUCCESS_REGISTER',
    user,
    password
  });

  export const postRegister = (userData) =>
    dispatch => {
      dispatch(requestToRegister(userData.username));
      return axios.post('/reg',userData)
                  .then(dispatch(successRegistration(userData.username)))
                  .catch(err => {console.log(err);});
    }
