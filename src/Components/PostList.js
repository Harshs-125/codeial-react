import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class PostList extends Component {
  
  render() {
    const { posts } = this.props;
    return (
      <div>
        <div className="posts-list">
          {posts.map((post) => (
            <div className="post-wrapper" key={post._id}>
              <div className="post-header">
                <Link to='/profile' >
                <div className="post-avatar">
                  <img
                    src="https://cdn-icons.flaticon.com/png/512/924/premium/924915.png?token=exp=1645509197~hmac=51659acae37605fe1e84f42c7dc138a1"
                    alt="profile-img"
                  />
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
                  <input placeholder="Write a Comment"></input>
                  <div className="post-comments-list">
                    <div className="post-comments-item">
                      <div className="post-comment-header">
                        <span className="post-comment-author">Harsh Soni</span>
                        <span className="post-comment-time">a min ago</span>
                        <span className="post-comment-likes">1</span>
                      </div>
                      <div className="post-comment-content">Random comment</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}


export default PostList;
