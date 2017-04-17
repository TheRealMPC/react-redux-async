import { combineReducers } from "redux"
import { LOGIN_SUCCESS, LOGIN_FAILURE, SHOW_LOCK, LOCK_SUCCESS, LOCK_ERROR } from "../actions"



  function user(state = {}, action) {
    switch(action.type) {
      case SHOW_LOCK:
        return Object.assign({}, state, {isAuthenticated:false})
      case LOCK_SUCCESS:
        return Object.assign({}, state, Object.assign({}, action.profile, action.isAuthenticated))
      case LOCK_ERROR:
        return Object.assign({}, state, Object.assign({}, action.err, {}))
      default:
        return state
    }
  }

const rootReducer = combineReducers(
  {user, swapi}
)

//Reducer
//"State Function"
function swapi(state = {test: true}, action){
  switch(action.type){
    case "Fetching Swapi":
      return Object.assign({}, state, action.swapi)
    case "Fetched Success":
      const Success = Object.assign({}, state, action.swapi)
      console.log('suck', Success)
      return Success
    case "Fetched Error":
      return Object.assign({}, state, action.swapi)
    default:
      return state
  }
}




export default rootReducer;
