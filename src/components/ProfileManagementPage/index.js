import React from 'react'
import { Button } from 'antd'
import './style.scss'

const ProfilePage = () => {

    const profiles = [
        {
            id: 1,
            profileIcon: <img src="resources/images/squid-triangle.png" alt="profile-icon"/>,
            profileName: "Romeo"
        },
        {
            id: 2,
            profileIcon: <img src="resources/images/squid-circle.png" alt="profile-icon"/>,
            profileName: "Jessica"
        },
        {
            id: 3,
            profileIcon: <img src="resources/images/squid-square.png" alt="profile-icon"/>,
            profileName: "Kids"
        }
    ]

    
    return (
        <div className='profile-page-container'>
                <span className="header">
                    Who's watching?
                </span>
                <div className='profile-cards-container'>
                    {profiles.map((profileDetails) => {
                        return (
                            <div key={profileDetails.id} className="profile-cards">
                               <div className='profile-icon'>{profileDetails.profileIcon}</div>
                               <span className='profile-name'>{profileDetails.profileName}</span>
                            </div>
                         
                        )
                    })}
                </div>
                <Button size='large' ghost className='profiles-btn'>Manage Profiles</Button>
        </div>
    )
}

export default ProfilePage
