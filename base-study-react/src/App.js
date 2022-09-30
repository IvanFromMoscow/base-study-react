import React, { useState } from "react";
import FormFilter from "./components/FormFilter";
import FormPost from "./components/FormPost";
import PostList from "./components/PostList";
import ButtonStyle from "./components/UI/ButtonStyle/ButtonStyle";
import Modal from "./components/UI/Modal/Modal";
import { useSortAndSearchPost } from "./hooks/useSortAndSearchPost";

import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'JavaScript description ...' },
    { id: 2, title: 'React', body: 'React description ...' },
    { id: 3, title: 'Vue', body: 'Vue description ...' },
    { id: 4, title: 'NodeJs', body: 'NodeJs description ...' }

  ]);

  const [filter, setFilter] = useState({ sort: '', search: '' });
  const [modal, setModal] = useState(false);

  const sortedAndSearchPosts = useSortAndSearchPost(posts, filter.sort, filter.search);


  const handleCreatePost = (post) => {
    setPosts([...posts, post]);
    setModal(false);
  }

  const handleDeletePost = (id) => {
    setPosts([...posts].filter(post => post.id !== id));
  }

  return (
    <div className="App">
      <ButtonStyle onClick={() => setModal(true)}>Create post</ButtonStyle>
      <hr className="filter__hr" />
      <FormFilter filter={filter} setFilter={setFilter} posts={posts} />
      <Modal visible={modal} setVisible={setModal}>
        <FormPost createPost={handleCreatePost}/>
      </Modal>
      <PostList posts={sortedAndSearchPosts} title='My first List' deletePost={handleDeletePost} />
    </div>
  );
}

export default App;
