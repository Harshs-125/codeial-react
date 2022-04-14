import React from 'react';
import { Link } from 'react-router-dom';
function Comment(props) {
    const {comment}=props;
  return (
    <div className="post-comment-item">
      <div className="post-comment-header">
        <span className="post-comment-author">{comment.user.name}</span>
        <span className="post-comment-time">a min ago</span>
        <span className="post-comment-likes">{comment.likes.length}</span>
      </div>
      <div className="post-comment-content">{comment.content}</div>
    </div>
  );
}

export default Comment;
