import React from 'react'
import ButtonStyle from './UI/ButtonStyle/ButtonStyle'

const PostItem = ({post: { id, title, body: description}, deletePost}) => {
  return (
    <div className="post">
        <div className="post__content">
          <p className="post__content-title">{ `${id}. ${title}` }</p>
          <div className="post__content-description">
            {description}
          </div>
        </div>
        <ButtonStyle onClick={() => deletePost(id)}>Delete</ButtonStyle>
      </div>
  )
}

export default PostItem