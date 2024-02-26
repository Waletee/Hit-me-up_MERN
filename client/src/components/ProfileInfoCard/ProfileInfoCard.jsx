import React, { useEffect, useState } from "react";
import "./ProfileInfoCard.css";

import ProfileModal from "../ProfileModal/ProfileModal";
/*import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as UserApi from "../../api/UserRequests.js";
import { logout } from "../../actions/AuthActions";*/

const ProfileInfoCard = () => {
  const [modalOpened, setModalOpened] = useState(false);
  /*const dispatch = useDispatch()
  const params = useParams();
  const profileUserId = params.id;
  const [profileUser, setProfileUser] = useState({});
  const { user } = useSelector((state) => state.authReducer.authData);


  const handleLogOut = ()=> {
    dispatch(logout())
  }


  useEffect(() => {
    const fetchProfileUser = async () => {
      if (profileUserId === user._id) {
        setProfileUser(user);
      } else {
        console.log("fetching")
        const profileUser = await UserApi.getUser(profileUserId);
        setProfileUser(profileUser);
        console.log(profileUser)
      }
    };
    fetchProfileUser();
  }, [user]);*/

  return (
    <div className="ProfileInfoCard">
      <div className="infoHead">
        <h4>My Info</h4>
        <div>
          <ProfileModal />
        </div>
      </div>

      <div className="info">
        <span>
          <b>Status: </b>
        </span>
        <span> Single</span>
      </div>
      <div className="info">
        <span>
          <b>Lives in: </b>
        </span>
        <span> Lagos, Nigeria</span>
      </div>
      <div className="info">
        <span>
          <b>Works at: </b>
        </span>
        <span> TOA Technologies</span>
      </div>

      <button className="button logout-button" /*onClick={handleLogOut}*/>Log Out</button>
    </div>
  );
};

export default ProfileInfoCard;
