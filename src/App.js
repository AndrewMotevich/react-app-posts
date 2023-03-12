import "./styles/App.css";
import React, { useState, useEffect } from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import { MyModal } from "./components/UI/modals/MyModal";
import MyButton from "./components/UI/buttons/MyButton";
import { usePosts } from "./hooks/usePosts";
import PostService from "./API/PostService";
import { Loader } from "./components/UI/loaders/Loader";
import { useFetching } from "./hooks/useFetching";

function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query);
  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const posts = await PostService.getAll();
    setPosts(posts);
  });

  useEffect(() => {
    fetchPosts();
  }, []);

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
    </div>
  );
}

export default App;
