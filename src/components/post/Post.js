import './Post.css';
import React from 'react';

function Post({ post }) {
    return (
        <div className="post">
            <div className="post-title-container">
                <h2>{post.title}</h2>
            </div>
            <div className="post-text-container">
                <p>{post.selftext}</p>
            </div>
            <div className="post-image-container">
              <img src={post.url} alt="" className="post-image" />
            </div>
        </div>
    );
};

export default Post;