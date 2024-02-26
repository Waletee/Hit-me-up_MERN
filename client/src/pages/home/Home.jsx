import React from "react";
/*import PostSide from "../components/PostSide/PostSide";
import ProfileSide from "../components/profileSide/ProfileSide";
import RightSide from "../components/RightSide/RightSide";*/
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
