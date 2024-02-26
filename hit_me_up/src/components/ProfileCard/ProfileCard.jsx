import React from "react";
import Cover from "../../Images/cover.jpeg";
import Profile from "../../Images/Profile_avatar1.png";
import "./ProfileCard.css";

{/*
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
*/}
  const ProfileCard = ({location}) => {
    const ProfilePage = true;
  {/*const { user } = useSelector((state) => state.authReducer.authData);
  const posts = useSelector((state)=>state.postReducer.posts)
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;*/}

  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img src={Cover} alt="CoverImage" />
        <img
          src={Profile}
          alt="ProfileImage"
        />
      </div>
      <div className="ProfileName">
        <span>Taiwo Abiodun</span>
        <span>Full Stack Engineer</span>
      </div>

      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>2,529</span>
            <span>Followers</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>128</span>
            <span>Following</span>
          </div>
          {/* for profilepage */}
          {ProfilePage && (
            <>
            <div className="vl"></div>
            <div className="follow">
              <span>2</span>
              <span>Posts</span>
            </div>
            </>
          )}
        </div>
        <hr />
      </div>
      {ProfilePage? '' : <span>My Profile</span>}

    </div>
  );
};

export default ProfileCard;
