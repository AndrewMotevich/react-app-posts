import React from "react";
import PostItem from "./PostItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export default function PostList({ posts, title, deletePost }) {
  if (!posts.length) {
    return (
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
    );
  } else {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>{title}</h1>
        <TransitionGroup>
          {posts.map((post, index) => {
            return (
              <CSSTransition key={post.id} timeout={500} classNames="post">
                <PostItem
                  id={post.id}
                  number={index + 1}
                  post={post}
                  deletePost={deletePost}
                />
              </CSSTransition>
            );
          })}
        </TransitionGroup>
      </div>
    );
  }
}
