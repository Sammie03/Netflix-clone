import React from 'react'
import { Button } from 'antd'
import './style.scss'

const ProfilePage = () => {

    const profiles = [
        {
            id: 1,
            profileIcon: "resources/images/avatar1.png",
            profileName: "Romeo"
        },
        {
            id: 2,
            profileIcon: "resources/images/avatar2.png",
            profileName: "Jessica"
        },
        {
            id: 3,
            profileIcon: "resources/images/avatar3.png",
            profileName: "Kids"
        }
    ]

    const setProfileDetails = (name, icon) => {
        let profileDetails = [name, icon]
        window.localStorage.setItem("profileDetails", JSON.stringify(profileDetails))
    }



    return (
        <div className='profile-page-container'>
            <span className="header">
                Who's watching?
            </span>
            <div className='profile-cards-container'>
                {profiles.map(({ id, profileIcon, profileName }) => {
                    return (
                        <a href="/home">
                            <div key={id} className="profile-cards" onClick={() => { setProfileDetails(profileName, profileIcon) }}>
                                <div className='profile-icon'><img src={profileIcon} alt="profile-icon" width={220} height={220}/></div>
                                <span className='profile-name'>{profileName}</span>
                            </div>
                        </a>
                    )
                })}
            </div>
            <Button size='large' ghost className='profiles-btn'>Manage Profiles</Button>
        </div>
    )
}

export default ProfilePage
