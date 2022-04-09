  import {LOGIN_START,LOGIN_FAILED,LOGIN_SUCCESS,AUTHENTICATE_USER,LOG_OUT} from '../Actions/actionTypes';
const initialAuthState = {
  user: {},
  error: null,
  isLoggedIn: false,
  inProgress: false,
};


export default function auth(state = initialAuthState, action) {
  switch (action.type) {
    case LOGIN_START: {
      return {
        ...state,
        inProgress: true,
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        user: action.user,
        isLoggedIn: true,
        inProgress:false,
        error: null
      };
    }
    case LOGIN_FAILED:{
        return{
            ...state,
            inProgress:false,
            error:action.error,
        }
    }
    case AUTHENTICATE_USER:{
      return {
        ...state,
        user:action.user,
        isLoggedIn:true
      }
    }
    case LOG_OUT:{
      return {
        ...state,
        user:{},
        isLoggedIn:false,
      }
    }
    default: {
      return state;
    }
  }
}
