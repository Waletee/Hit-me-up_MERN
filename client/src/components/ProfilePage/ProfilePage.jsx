import React from 'react'
import './ProfilePage.css'
import LogoSearch from '../LogoSearch/LogoSearch'
import ProfileCard from '../ProfileCard/ProfileCard'
import FollowersCard from '../FollowersCard/FollowersCard'
import NavBar from '../NavBar/NavBar'
import TrendCard from '../TrendCard/TrendCard'
const ProfilePage = () => {
  return (
    <div className="ProfilePage">
        <NavBar/>
        <LogoSearch/>
        <ProfileCard/>
        <FollowersCard/>
        <TrendCard/>
    </div>
    )
}

export default ProfilePage