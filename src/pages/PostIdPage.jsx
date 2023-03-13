import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import PostService from "../API/PostService";
import { Loader } from "../components/UI/loaders/Loader";

const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [fetchPostById, isLoading, error] = useFetching(async () => {
    const response = await PostService.getById(params.id);
    setPost(response.data);
  });
  const [fetchComments, isCommentsLoading, commentsEerror] = useFetching(
    async () => {
      const response = await PostService.getCommentsById(params.id);
      setComments(response.data);
    }
  );

  useEffect(() => {
    fetchPostById();
    fetchComments();
  }, []);

  return (
    <div>
      <h1>You open post {params.id}</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {post.id}.{post.title}
        </div>
      )}
      <h1>Comments</h1>
      {isCommentsLoading ? (
        <Loader />
      ) : (
        <div>
          {comments.map((comment) => {
            return (
              <div key={comment.id} style={{ margin: "15px 0" }}>
                <div>{comment.email}</div>
                <div>{comment.name}</div>
                <div>{comment.body}</div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default PostIdPage;
