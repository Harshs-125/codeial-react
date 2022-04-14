import React ,{useState} from 'react';

import { Link } from 'react-router-dom';
import dp from "../Components/assets/user.png";
import { createComment } from '../Actions/post';
import {Comment} from './';
import { connect } from 'react-redux';
function Post(props) {
    const {post}=props;
    const [comment,setComment]=useState('');
    const handleChange=(e)=>{
     setComment(e.target.value);
    }
    const handleAddComment=(e)=>{
        if(e.key==='Enter')
        {
            props.dispatch(createComment(comment,post._id))
            setComment('');
        }
    }
  return (
    <div className="post-wrapper" key={post._id} post={post}>
      <div className="post-header">
        <Link to={`/profile/${post.user._id}`}>
          <div className="post-avatar">
            <img src={dp} alt="profile-img" />
            <div>
              <span className="post-author">{post.user.name}</span>
              <span className="post-time">{post.createdAt}</span>
            </div>
          </div>
        </Link>
        <div className="post-content">{post.content}</div>
        <div className="post-actions">
          <div className="post-like">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png"
              alt="like-btn"
            />
            <span>{post.likes.length}</span>
          </div>
          <div className="post-comments-icon">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2462/2462719.png"
              alt="comment-btn"
            />
            <span>{post.comments.length}</span>
          </div>
        </div>
        <div className="post-comment-box">
          <input placeholder="Write a Comment" onChange={handleChange} onKeyPress={handleAddComment} value={comment}></input>
          <div className="post-comments-list">
            {
             post.comments.map((comment)=>{
                 return <Comment comment={comment} key={comment._id} postId={post._id}/>
             })
            }
          </div>
        </div>
      </div>
    </div>
  );
}
function mapStateToProps({auth})
{
    return {
        user:auth.user,
    }
}
export default connect(mapStateToProps)(Post);
