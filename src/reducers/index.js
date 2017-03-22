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
const authenticateUser = (state = {
      isAuthenticated : false,
      username : 'guest',
      isWaiting:false
      },action) =>{
          switch (action.type) {
            case 'REQUEST_TO_REGISTER':
              return {...state,
                      isWaiting:true}
              break;
            case 'SUCCESS_REGISTER':
              return {...state,
                      isWaiting:false,
                      username:action.username,
                      isAuthenticated:true}
              break;
              case 'FAILURE_REGISTER':
                return {...state,
                        isWaiting:false}
                break;
              case 'REQUEST_TO_LOGIN':
                return {...state,
                        isWaiting:true}
                break;
              case 'SUCCESS_LOGIN':
                return {...state,
                        isWaiting:false,
                        username:action.username,
                        isAuthenticated:true}
                break;
              case 'FAILURE_LOGIN':
                return {...state,
                        isWaiting:false}
                break;
            default:
              return state;
          }
}
const rootReducer = combineReducers({counter,movieName,movieData,authenticateUser});
export default rootReducer;
