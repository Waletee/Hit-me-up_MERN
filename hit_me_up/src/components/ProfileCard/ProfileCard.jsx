import React from "react";
import Cover from "../../Images/cover.jpeg";
import Profile from "../../Images/Profile_avatar1.png";

{/*import "./ProfileCard.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
*/}
  const ProfileCard = ({location}) => {
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
    </div>
  );
};

export default ProfileCard;
