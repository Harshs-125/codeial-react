import {
  SIGNUP_FAILED,
  SIGNUP_SUCCESS,
  SIGNUP_START,
} from '../Actions/actionTypes';
const initialSignupState = {
  error: null,
  isSignedIn: false,
  inProgress: false,
  user: {},
};
export default function signup(state = initialSignupState, action) {
  switch (action.type) {
    case SIGNUP_START: {
      return {
        ...state,
        inProgress: true,
      };
    }
    case SIGNUP_SUCCESS: {
      debugger;
      return {
        ...state,
        inProgress: false,
        user: action.user,
        error: null,
      };
    }
    case SIGNUP_FAILED: {
      return {
        ...state,
        inProgress: false,
        error: action.error,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
}
