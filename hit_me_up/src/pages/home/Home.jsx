import React from "react";
/*import PostSide from "../components/PostSide/PostSide";
import ProfileSide from "../components/profileSide/ProfileSide";
import RightSide from "../components/RightSide/RightSide";*/
import "./Home.css";
import ProfilePage from "../../components/ProfilePage/ProfilePage";
const Home = () => {
  return (
    <div className="Home">
      <div className="postSide">Posts</div>
      <ProfilePage />
    </div>
  );
};

export default Home;
