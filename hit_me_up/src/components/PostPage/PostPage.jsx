import React from "react";
import PostShare from "../PostShare/PostShare";
import Posts from "../Posts/Posts";
import "./PostPage.css";

const PostPage = () => {
  return (
    <div className="PostPage">
      <PostShare />
      <Posts />
    </div>
  );
};

export default PostPage;
