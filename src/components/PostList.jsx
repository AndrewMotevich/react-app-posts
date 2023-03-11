import React from "react";
import PostItem from "./PostItem";

export default function PostList({ posts, title, deletePost }) {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      {posts.map((post, index) => {
        return (
          <PostItem
            id={post.id}
            number={index + 1}
            post={post}
            key={index}
            deletePost={deletePost}
          />
        );
      })}
    </div>
  );
}
