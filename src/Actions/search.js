import { FETCH_SEARCH_SUCCESS_RESULT } from './actionTypes';

export function searchUsers(searchText) {
  return (dispatch) => {
    const url = `http://localhost:8000/api/v1/users/search?text=${searchText}`;
    fetch(url, {
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    })
      .then((response) => response.json())
      .then((data) => {
          console.log(data);
        if (data.success) {
            console.log(data.users);
          dispatch(searchResultSuccess(data.users));
        } else {
          dispatch(searchResultSuccess([]));
        }
      });
  };
}
export function searchResultSuccess(users) {
  return {
    type: FETCH_SEARCH_SUCCESS_RESULT,
    users,
  };
}
