import React from "react";
import "./Home.css";
import ProfilePage from "../../components/ProfilePage/ProfilePage";
import PostPage from "../../components/PostPage/PostPage";

const Home = () => {
  return (
    <div className="Home">
      <ProfilePage />
      <PostPage />
    </div>
  );
};

export default Home;
