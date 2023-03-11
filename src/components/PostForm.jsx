import React, { useState } from "react";
import MyButton from "./UI/buttons/MyButton";
import MyInput from "./UI/inputs/MyInput";

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: "", description: "" });

  function addNewPost(event) {
    event.preventDefault();
    const newPost = {
      id: Date.now(),
      title: post.title,
      body: post.description,
    };
    setPost({ title: "", description: "" });
    create(newPost);
  }

  return (
    <form>
      <MyInput
        onChange={(event) => {
          setPost({ ...post, title: event.target.value });
        }}
        value={post.title}
        type="text"
        placeholder="Title"
      />
      <MyInput
        onChange={(event) => {
          setPost({ ...post, description: event.target.value });
        }}
        value={post.description}
        type="text"
        placeholder="Description"
      />
      <MyButton onClick={addNewPost}>Add Post</MyButton>
    </form>
  );
};

export default PostForm;
