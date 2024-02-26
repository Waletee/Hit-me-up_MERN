import React from "react";
import PostPage from "../../components/PostPage/PostPage";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import ProfileLeft from "../../components/ProfileLeft/ProfileLeft";
/*import RightSide from "../../components/RightSide/RightSide";*/
import "./Profile.css";

const Profile = () => {
  return (
    <div className="Profile">
      <ProfileLeft />
      <div className="Profile-center">
        <ProfileCard location = 'profilePage'/>
      <PostPage/>
      </div>
      {/*<RightSide/>*/}
    </div>
  );
};

export default Profile;
