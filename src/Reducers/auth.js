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
        isLoggedIn: true,
        error: null,
        user: action.user,
      };
    }
    case LOGIN_FAIL:{
        return{
            ...state,
            error:action.error,
            inProgress:false
        }
    }
    default: {
      return state;
    }
  }
}
