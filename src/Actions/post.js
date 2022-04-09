import {UPDATE_POSTS} from './actionTypes';
import { APIurls } from '../helper/urls';
export function fetchPosts() {
  return (dispatch) => {
    const url = APIurls.fetchPosts();
    console.log('url',url);
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch(updatePosts(data.post));
      });
  };
}
export function updatePosts(posts){
   return {
       type: UPDATE_POSTS,
       posts
   }
}
