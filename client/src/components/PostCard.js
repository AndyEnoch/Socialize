import React from 'react';

function PostCard({ post: { body, createdAt, id, username, likeCount, commentCount, likes } }) {
    return (
        <div>
            <h4>Posts</h4>
        </div>
    )
}

export default PostCard;
