import "./styles/App.css";
import React, { useState, useMemo } from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import { MyModal } from "./components/UI/modals/MyModal";
import MyButton from "./components/UI/buttons/MyButton";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript", body: "Description" },
    { id: 2, title: "Python", body: "1. Python" },
    { id: 3, title: "C++", body: "2. Description" },
  ]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);

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

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) => {
        return a[filter.sort].localeCompare(b[filter.sort]);
      });
    } else {
      return posts;
    }
  }, [filter.sort, posts]);

  const sortedAndSearchPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.query)
    );
  }, [filter.query, sortedPosts]);

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
      <PostList
        posts={sortedAndSearchPosts}
        title={"List of Posts"}
        deletePost={deletePost}
      />
    </div>
  );
}

export default App;
