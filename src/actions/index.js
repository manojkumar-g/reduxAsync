import fetch from 'isomorphic-fetch';

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
    console.log(url);
    return fetch(url)
          .then(response => response.json())
          .then(
            data =>
              dispatch(
                recieveMovieData(movieName,data)
              ));

  }
