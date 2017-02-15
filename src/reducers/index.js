import {combineReducers} from 'redux';

const counter = (state = {count : 0},action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {count : state.count+1}
      break;
    case 'DECREMENT':
      return {count : state.count-1}
      break;
    default:
      return state;
  }
}

const movieName = (state ='',action) =>{
  switch (action.type) {
    case 'REQUEST_MOVIE_DATA':
      return {
        state : action.movieName
      };
      break;
    default:
      return state;
  }
}
const movieData = (state = {
                            isFetching : false,
                            data : {},
                            },action) => {
        switch (action.type) {
          case 'REQUEST_MOVIE_DATA':
              return {
                isFetching : true,
                data : {}
              }
            break;
          case 'RECIEVE_MOVIE_DATA':
            return{
              isFetching : false,
              data : action.data,
              recievedAt : action.recievedAt
            }
          default:
            return state;

        }
    }
const registerUser = (state = {
                                isPosting : false,
                                successRegistration : false,
                                username:'guest'
                              },action) => {
    switch (action.type) {
      case 'REQUEST_TO_REGISTER':
        return {
          ...state,
          isPosting : true
        };
        break;
      case 'SUCCESS_REGISTER':
        return{
          ...state,
          isPosting :false,
          successRegistration : true,
          username:action.username
        };
        break;
      default:
            return state;
    }

}
const rootReducer = combineReducers({counter,movieName,movieData,registerUser});
export default rootReducer;
