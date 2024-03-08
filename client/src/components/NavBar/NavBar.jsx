import React from "react";
import { UilSetting } from '@iconscout/react-unicons'
import "./NavBar.css";
import Noti from "../../Images/notif.png";
import Home from "../../Images/home.png";
import Comment from "../../Images/comment.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Trend = () => {
  const { user } = useSelector((state) => state.authReducer.authData);

  return (
    <div className="Trend">
      <div className="navIcons">
      <Link to = '../home'>
        <img src={Home} alt="" />
        </Link>
        <img src={Comment} alt="" />
        <img src={Noti} alt="" />
        <Link to={`/profile/${user._id}`}>
        <UilSetting/>
        </Link>
      </div>
    </div>
  );
};

export default Trend;
