import { LOGIN_START } from './actionTypes';
import { APIurls } from '../helper/urls';
import { getFormBody } from '../helper/utils';
export function startLogin() {
  return {
    type: LOGIN_START,
  };
}

export function login(email, password) {
  return (dispatch) => {
    const url = APIurls.login();
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: getFormBody({ email, password }), 
    });
  };
}
