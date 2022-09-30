import React from 'react'
import { useState } from 'react'
import ButtonStyle from './UI/ButtonStyle/ButtonStyle'
import InputStyle from './UI/InputStyle/InputStyle'

const FormPost = ({createPost}) => {
    const [post, setPost] = useState({ id: '', title: '', body: '' })
    
    const handleClick = (e) => {
        e.preventDefault();
        createPost({...post, id: Date.now()});
        setPost({id: '', title: '', body: ''});
    }
    
    return (
        <div>
            <form>
                <InputStyle placeholder="Input title of your post" value={post.title} onChange={(e) => setPost(
                    { ...post, title: e.target.value }
                )} />
                <InputStyle placeholder="Input body of your post"  value={post.body} onChange={(e) => setPost(
                    { ...post, body: e.target.value }
                )} />
                <ButtonStyle onClick={handleClick}>Create post</ButtonStyle>
            </form>
        </div>
    )
}

export default FormPost