import React, { useState } from "react";
import { UilSetting } from '@iconscout/react-unicons'
import "./NavBar.css";
import Noti from "../../Images/notif.png";
import Home from "../../Images/home.png";
import Comment from "../../Images/comment.png";

{/*import TrendCard from "../TrendCard/TrendCard";
import ShareModal from "../ShareModal/ShareModal";
import NavIcons from "../NavIcons/NavIcons";*/}
const Trend = () => {
  const [modalOpened, setModalOpened] = useState(false);

  return (
    <div className="Trend">
      <div className="navIcons">
        <img src={Home} alt="" />
        <img src={Comment} alt="" />
        <img src={Noti} alt="" />
        <UilSetting/>
      </div>
    </div>
  );
};

export default Trend;
