import "../styles/App.css";
import React, { useState, useEffect } from "react";
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import { MyModal } from "../components/UI/modals/MyModal";
import MyButton from "../components/UI/buttons/MyButton";
import { usePosts } from "../hooks/usePosts";
import PostService from "../API/PostService";
import { Loader } from "../components/UI/loaders/Loader";
import { useFetching } from "../hooks/useFetching";
import usePagination from "../hooks/usePagination";
import getPageCount from "../components/utils/pages.js";
import Pagination from "../components/UI/pagination/Pagination";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query);

  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [totalPages, pagesArray, setTotalPages] = usePagination();
  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    const totalCountHeader = response.headers["x-total-count"];
    setTotalPages(getPageCount(totalCountHeader, limit));
  });

  useEffect(() => {
    fetchPosts();
  }, [page]);

  function createPost(newPost) {
    setPosts([...posts, newPost]);
    setModal(false);
  }

  function deletePost(id) {
    const updatedPosts = [];
    posts.forEach((element) => {
      if (element.id !== id) {
        updatedPosts.push(element);
      }
    });
    setPosts(updatedPosts);
  }

  const changePage = (page) => {
    setPage(page);
  };

  return (
    <div className="App">
      <MyButton style={{ marginTop: "20px" }} onClick={() => setModal(true)}>
        Add post
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {postError && <h1>Error: {postError}</h1>}
      {isPostsLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          <Loader />
        </div>
      ) : (
        <PostList
          posts={sortedAndSearchPosts}
          title={"List of Posts"}
          deletePost={deletePost}
        />
      )}
      <Pagination page={page} pagesArray={pagesArray} changePage={changePage} />
    </div>
  );
}

export default Posts;
