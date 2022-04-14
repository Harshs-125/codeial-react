import React,{useState} from 'react';
import { connect } from 'react-redux';
import {createPost} from '../Actions/post';


function CreatePost(props) {
  const [postState, setPostState] = useState({
    content: '',
  });
  const handleClick = (e) => {
      e.preventDefault();
      props.dispatch(createPost(postState.content));
  };
  const handleChange = (e) => {
    setPostState({
      content: e.target.value,
    });
  };
  return (
    <div className="create-post">
      <textarea
        className="add-post"
        value={postState.content}
        onChange={handleChange}
      />
      <div>
        <button id="add-post-btn" onClick={handleClick}>
          Add Post
        </button>
      </div>
    </div>
  );
}

export default connect()(CreatePost);
