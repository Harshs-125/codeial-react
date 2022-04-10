import { LOGIN_START, LOGIN_FAILED, LOGIN_SUCCESS,AUTHENTICATE_USER,LOG_OUT, CLEAR_AUTH_STATE } from './actionTypes';
import { APIurls } from '../helper/urls';
import { getFormBody } from '../helper/utils';
export function startLogin() {
  return {
    type: LOGIN_START,
  };
}
export function loginFailed(errorMessage) {
  return {
    type: LOGIN_FAILED,
    error: errorMessage,
  };
}
export function loginSuccess(user) {
  return {
    type: LOGIN_SUCCESS,
    user,
  };
}

export function login(email, password) {
  console.log(email + ' ' + password);
  return (dispatch) => {
    dispatch(startLogin);
    const url = 'http://localhost:8000/api/v1/users/createsession';
    fetch(url, {
      method: 'post',
      headers: {
        Mode: 'no-cors',
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      //make sure to serialize your JSON body
      body: getFormBody({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('data', data);
        if (data.success) {
          //dispatch an action to save user
          localStorage.setItem('token', data.data.token);
          dispatch(loginSuccess(data.data.user));

          return;
        } else dispatch(loginFailed(data.message));
      });
  };
}

export function authenticateUser(user){
  return {
      type:AUTHENTICATE_USER,
      user
  };
}
export function logoutUser(){
  return {
      type:LOG_OUT,
  };
}
export function clearAuthState(){
  return {
    type:CLEAR_AUTH_STATE,
  }
}
