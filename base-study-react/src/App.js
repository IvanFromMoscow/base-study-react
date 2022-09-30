import React, { useEffect, useState } from "react";
import FormFilter from "./components/FormFilter";
import FormPost from "./components/FormPost";
import PostList from "./components/PostList";
import ButtonStyle from "./components/UI/ButtonStyle/ButtonStyle";
import Modal from "./components/UI/Modal/Modal";
import { useSortAndSearchPost } from "./hooks/useSortAndSearchPost";

import './styles/App.css';
import PostService from "./API/PostService";
import Loader from "./components/UI/Loader/Loader";
import { useFetching } from "./hooks/useFetching";
import { getArrayPages } from "./utils/pages";
import Pagination from "./components/UI/Pagination/Pagination";

function App() {
  const [posts, setPosts] = useState([]);

  const [filter, setFilter] = useState({ sort: '', search: '' });
  const [modal, setModal] = useState(false);
  const [arrayPages, setArrayPages] = useState([]);
  const [page, setPage] = useState(1);

  const [getPagePosts, isPostLoading, postError] = useFetching(async (page) => {
    const posts = await PostService.getbyLimitAndPage(page);
    setPosts(posts.data);
    const totalCount = posts.headers['x-total-count'];
    setArrayPages(getArrayPages(totalCount));
  });

  useEffect(() => {
    getPagePosts(page);
  }, [page]);

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
        <FormPost createPost={handleCreatePost} />
      </Modal>
      {
        postError && <h1>{postError.msg}</h1>
      }
      {isPostLoading
        ? <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><Loader /></div>
        : <>
              <PostList posts={sortedAndSearchPosts} title='My first List' deletePost={handleDeletePost} />
              <Pagination pages={arrayPages} currentPage={page} setPage={setPage}/>
          </>
        

      }

    </div>
  );
}

export default App;
