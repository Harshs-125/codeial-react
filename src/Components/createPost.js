import React from 'react';

function createPost(props) {
  const [postState, setPostState] = useState({
    content: '',
  });
  const handleClick=(e)=>{

  }
  const handleChange=(e)=>{
      setPostState({
          content:e.target.value,
      })
}
  return (
    <div className="create-post">
      <textarea
        className="add-post"
        value={postState.content}
        onChange={handleChange}
      />
      <div>
          <button id="add-post-btn" onClick={handleClick}>Add Post</button>
      </div>
    </div>
  );
}

export default createPost;
