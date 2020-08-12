import React from 'react';

function Post({post}) {
    const {title, body} = post
    return (
        <div>
            <h1>{title}</h1>
            <h2>{body}</h2>
        </div>
    );
}

export default Post;