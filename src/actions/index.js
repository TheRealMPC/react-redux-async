import axios from 'axios'

function fecthingSwapi(){
  return {
    type: 'Fetching Swapi',
    swapi:{isFetching:true}
  }
}

function fetchSwapiSuccess(results){
  return {
    type:'Fetched Success',
    swapi:{isFetching:false, data:results}
  }
}
function fetchSwapiError(error){
  return {
    type:'Fetched Error',
    swapi:{isFetching:false, data:error}
  }
}

export function fetchSwapiAPI(){
  return dispatch => {
    dispatch(fecthingSwapi());
    return axios.get('http://swapi.co/api/people/1')
      .then(response => {
        console.log(response)
        dispatch(fetchSwapiSuccess(response.data))
      })
      .catch(err => {
        console.log(err)
        dispatch(fetchSwapiError(err))
      })
  }
}

 // AUTH0
//// Simple Actions
  function showLock(){
    return {
      type:SHOW_LOCK
    }
  }
  function lockSuccess(profile, token){
    return {
      type: LOCK_SUCCESS,
      isAuthenticated: true,
      profile,
      token
    }
  }
  function lockError(err){
    return {
      type:LOCK_ERROR,
      err
    }
  }

  //LOGIN SIMPLE ACTIONS
  function requestLogin(creds){
    return {
      type:LOGIN_REQUEST,
      isFetching:true,
      isAuthenticated: false,
      creds
    }
  }
  function receiveLogin(user){
    return {
      type:LOGIN_SUCCESS,
      isFetching:false,
      isAuthenticated: true,
      id_token: user.id_token
    }
  }
  function loginError(message){
    return {
      type:LOGIN_FAILURE,
      isFetching:false,
      isAuthenticated: false,
      message
    }
  }
// Action Types
 export const SHOW_LOCK = 'SHOWLOCK'
 export const LOCK_SUCCESS = 'LOCK_SUCCESS'
 export const LOCK_ERROR = 'LOCK_ERROR'

 export const LOGIN_REQUEST = "LOGIN_REQUEST"
 export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
 export const LOGIN_FAILURE = "LOGIN_FAILURE"

 export const LOGOUT_REQUEST = "LOGOUT_REQUEST"
 export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS"
 export const LOGOUT_FAILURE = "LOGOUT_FAILURE"

 const lock = new Auth0Lock(process.env.AUTH0_CLIENT_ID, process.env.AUTH0_DOMAIN);
 //const lock = new Auth0Lock(process.env.AUTH0_CLIENT_ID, process.env.AUTH0_DOMAIN, options);
 // const options = {
 //   theme: {
 //     logo: 'https://example.com/assets/logo.png',
 //     primaryColor: 'green'
 //   }
 // };

export function login(){
 return (dispatch) => {
   lock.show()
 }
}

export function logout(){
  // Clear user token and profile data from localStorage
  console.log('removeItem');
  localStorage.removeItem('id_token');
  localStorage.removeItem('profile');
}

export function doAuthentication(){
  return dispatch => {
    lock.on('authenticated', function(authResult){
      lock.getProfile(authResult.idToken, function(err, profile){
        if (err) {
          return dispacth(lockError(err))
        }
        localStorage.setItem('profile', JSON.stringify(profile))
        localStorage.setItem('id_token', authResult.idToken)
        return dispatch(lockSuccess(profile))
      })
    })
  }
}
