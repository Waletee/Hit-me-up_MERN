import React from 'react'
import './ProfilePage.css'
import LogoSearch from '../LogoSearch/LogoSearch'
import ProfileCard from '../ProfileCard/ProfileCard'
const ProfilePage = () => {
  return (
    <div className="ProfilePage">
        <LogoSearch/>
        <ProfileCard/>
    </div>
    )
}

export default ProfilePage