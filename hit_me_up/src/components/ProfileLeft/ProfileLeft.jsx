import React from 'react'
import FollowersCard from '../FollowersCard/FollowersCard'
import ProfileInfoCard from '../ProfileInfoCard/ProfileInfoCard'
import TrendCard from '../TrendCard/TrendCard'
import LogoSearch from '../LogoSearch/LogoSearch'
import NavBar from '../NavBar/NavBar'
import "./ProfileLeft.css";

const ProfileLeft = () => {
  return (
    <div className="ProfileLeft">
      <NavBar/>
      <LogoSearch/>
      <ProfileInfoCard/>
      <FollowersCard/>
      <TrendCard/>
    </div>
  )
}

export default ProfileLeft