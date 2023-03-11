import "./styles/App.css";
import React, { useState, useMemo } from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript", body: "Description" },
    { id: 2, title: "Python", body: "1. Python" },
    { id: 3, title: "C++", body: "2. Description" },
  ]);

  const [filter, setFilter] = useState({ sort: "", query: "" });

  function createPost(newPost) {
    setPosts([...posts, newPost]);
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
      <PostForm create={createPost} />
      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {sortedAndSearchPosts.length !== 0 ? (
        <PostList
          posts={sortedAndSearchPosts}
          title={"List of Posts"}
          deletePost={deletePost}
        />
      ) : (
        <h1
          style={{
            textAlign: "center",
            fontSize: "20px",
            paddingTop: "20px",
            color: "red",
          }}
        >
          Posts are not found
        </h1>
      )}
    </div>
  );
}

export default App;
