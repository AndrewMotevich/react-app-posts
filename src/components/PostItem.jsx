import React from "react";
import MyButton from "./UI/buttons/MyButton";

export default function PostItem(props) {
  return (
    <div className="post">
      <div className="post__container">
        <strong>
          {props.post.id}. {props.post.title}
        </strong>
        <div>{props.post.body}</div>
      </div>
      <div className="post__button">
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
