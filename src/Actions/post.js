import { ADD_POST, UPDATE_POSTS,ADD_COMMENT } from './actionTypes';
import { APIurls } from '../helper/urls';
import { getFormBody } from '../helper/utils';
export function fetchPosts() {
  return (dispatch) => {
    const url = APIurls.fetchPosts();
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch(updatePosts(data.post));
      });
  };
}
export function updatePosts(posts) {
  return {
    type: UPDATE_POSTS,
    posts,
  };
}

export function addPost(post) {
  return {
    type: ADD_POST,
    post,
  };
}
export function createPost(content) {
  return (dispatch) => {
    const url = "http://localhost:8000/api/v1/posts/add";
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: localStorage.getItem('token'),
      },
      body: getFormBody({ content }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          dispatch(addPost(data.data.post));
        }
      });
  };
}
export function createComment(content,postId)
{
  return (dispatch)=>{
    const url="http://localhost:8000/api/v1/posts/addcomment";
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: localStorage.getItem('token'),
      },
      body: getFormBody({ content,postId }),
    })
    .then((response)=>response.json())
    .then((data)=>{
      console.log(data);
      if(data.success)
      { console.log(data.data);
        dispatch(addComment(data.data.comment,postId));
      }
    })

  }
}

export function addComment(comment,postId)
{
  return {
    type:ADD_COMMENT,
    comment,
    postId
  }
}
