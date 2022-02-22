import { UPDATE_POSTS } from '../Actions/actionTypes';

export default function post(state = [], action) {
  switch (action.type) {
    case UPDATE_POSTS:
      return action.posts;
    default:
      return state;
  }
}
