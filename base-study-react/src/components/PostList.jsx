import React from 'react'
import PostItem from './PostItem'

const PostList = ({ posts, title, deletePost }) => {
    return (
        <div>
            
                {!posts.length 
                    ? <h1 style={{ textAlign: "center" }}>Not found post by your query!</h1> 
                    : <h1>{title}</h1>}
            
            {
                posts.map(
                    (post, index) => <PostItem post={post} key={post.id} deletePost={deletePost} />
                )
            }
        </div>
    )
}

export default PostList