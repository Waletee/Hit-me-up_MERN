import React from 'react'
import './ProfilePage.css'
import LogoSearch from '../LogoSearch/LogoSearch'
import ProfileCard from '../ProfileCard/ProfileCard'
import FollowersCard from '../FollowersCard/FollowersCard'
const ProfilePage = () => {
  return (
    <div className="ProfilePage">
        <LogoSearch/>
        <ProfileCard/>
        <FollowersCard/>
    </div>
    )
}

export default ProfilePage