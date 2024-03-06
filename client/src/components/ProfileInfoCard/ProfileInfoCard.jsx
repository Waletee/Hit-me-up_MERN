import React, { useEffect, useState } from "react";
import "./ProfileInfoCard.css";
import ProfileModal from "../ProfileModal/ProfileModal";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as UserApi from "../../api/UserRequests.js";
import { logout } from "../../actions/AuthActions";

const ProfileInfoCard = () => {
  const dispatch = useDispatch()
  const params = useParams();
  const profileUserId = params.id;
  const [profileUser, setProfileUser] = useState({});
  const { user } = useSelector((state) => state.authReducer.authData);


  useEffect(() => {
    const fetchProfileUser = async () => {
      if (profileUserId === user._id) {
        setProfileUser(user);
      } else {
        const profileUser = await UserApi.getUser(profileUserId);
        setProfileUser(profileUser);
      }
    };
    fetchProfileUser();
  }, [user]);

  const handleLogout = ()=> {
    dispatch(logout())
  }

  return (
    <div className="ProfileInfoCard">
      <div className="infoHead">
        <h4>Profile Info</h4>
        {user._id === profileUserId ? (
        <div>
          <ProfileModal data = {user} />
        </div>) : ("")}
        {/*location = 'profilePage'*/}
      </div>

      <div className="info">
        <span>
          <b>Status: </b>
        </span>
        <span> {profileUser.relationship}</span>
      </div>
      <div className="info">
        <span>
          <b>Lives in: </b>
        </span>
        <span> {profileUser.livesin}</span>
      </div>
      <div className="info">
        <span>
          <b>Works at: </b>
        </span>
        <span> {profileUser.worksAt}</span>
      </div>

      <button className="button logout-button" onClick={handleLogout}>Log Out</button>
    </div>
  );
};

export default ProfileInfoCard;
