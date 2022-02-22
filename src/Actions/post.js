import {UPDATE_POSTS} from './actionTypes';

export function fetchPosts() {
  return (dispatch) => {
    const url = '/api/v1/posts';
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.post);
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
