import React from "react";
import { useNavigate } from "react-router-dom";
import MyButton from "./UI/buttons/MyButton";

export default function PostItem(props) {
  const router = useNavigate();
  return (
    <div className="post">
      <div className="post__container">
        <strong>
          {props.post.id}. {props.post.title}
        </strong>
        <div>{props.post.body}</div>
      </div>
      <div className="post__buttons">
        <MyButton
          onClick={() => {
            router(`/posts/${props.post.id}`);
          }}
        >
          Watch
        </MyButton>
        <MyButton
          onClick={() => {
            props.deletePost(props.id);
          }}
        >
          Delete
        </MyButton>
      </div>
    </div>
  );
}
