import fetch from 'isomorphic-fetch';
import axios from 'axios';
import {browserHistory} from 'react-router';

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

   const requestToRegister = (username) => ({
    type : 'REQUEST_TO_REGISTER',
    username
  });
   const successRegistration = (username) => ({
    type : 'SUCCESS_REGISTER',
    username
  });
   const failureRegister = () => ({
    type : 'FAILURE_REGISTER'
  });
   const requestToLogin = () => ({
    type : 'REQUEST_TO_LOGIN',
  });
   const successLogin = (username) => ({
    type : 'SUCCESS_LOGIN',
    username
  });
   const failureLogin = () => ({
    type : 'FAILURE_LOGIN'
  });

  export const postLogin = userData =>
    dispatch =>{
      dispatch(requestToLogin());
      return axios.post('/login',userData)
                  .then(res => {
                    if(res.status ===200)
                      dispatch(successLogin(userData.username));
                  })
                  .catch(
                    err =>{
                      dispatch(failureLogin())
                      console.log(err);
                    }
                  );
    }


  export const postRegister = (userData) =>
    dispatch => {
      dispatch(requestToRegister(userData.username));
      return axios.post('/signup',userData)
                  .then(res => {
                    if(res.status ===200)

                      dispatch(successRegistration(userData.username));
                      browserHistory.goBack('/')


                  })
                  .catch(
                    err =>{
                      dispatch(failureRegister());
                      console.log('user Already exists i guess');
                      console.log(err);
                    }
                  );
      ;
    }
