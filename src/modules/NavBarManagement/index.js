import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { Input } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-regular-svg-icons'
import { faArrowCircleDown, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import './style.scss'

const NavBar = ({ profileName, profileIcon }) => {
    const [rotateIcon, setRotateIcon] = useState(false);
    const [initiateSearch, setInitiateSearch] = useState(false);
    const [navbarColor, setNavbarColor] = useState("navbar-container");
    const searchRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
          if (searchRef.current && !searchRef.current.contains(event.target)) {
            setInitiateSearch(false);
          }
        };
    
        document.addEventListener("mousedown", handleClickOutside);
    
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, [searchRef]);


    useEffect(() => {
        window.addEventListener("scroll", updateNavbarColor);
        return function cleanup() {
            window.removeEventListener("scroll", updateNavbarColor);
        };
    });

    const updateNavbarColor = () => {
        if (window.pageYOffset > 50) {
            setNavbarColor("navbar-container navbar-container-bg");
        } else {
            setNavbarColor("navbar-container");
        }
    }

    return (
        <div className={navbarColor}>
            <div className="logo-navMenu">
                <div className="logo">
                    <img src="resources/images/Netflix-logo.png" alt="Netflix-logo" width={100} height={25} />
                </div>
                <div className="navMenu">
                    <ul>
                        <li>Home</li>
                        <li>TV Shows</li>
                        <li>Movies</li>
                        <li>New & Popular</li>
                        <li>My List</li>
                        <li>Browse by Languages</li>
                    </ul>
                </div>
            </div>
            <div className={initiateSearch ? "search-notif-profile-space" : "search-notif-profile"}>
                <div ref={searchRef} className='search-box-container'>
                {initiateSearch ?
                    <Input
                        className="search-box"
                        size="large"
                        placeholder="Titles, people, genres"
                        prefix={<FontAwesomeIcon
                            icon={faMagnifyingGlass}
                            style={{ fontSize: '18px', cursor: 'pointer', color: '#fff' }}
                        />}
                    />
                    :
                    <FontAwesomeIcon
                        icon={faMagnifyingGlass}
                        style={{ fontSize: '22px', cursor: 'pointer' }}
                        onClick={() => { setInitiateSearch(true) }}
                    />
                }
                </div>

                <span className="kids-corner">Kids</span>
                <FontAwesomeIcon
                    icon={faBell}
                    style={{ fontSize: '22px', cursor: 'pointer', marginLeft: "20px" }}
                    className='notification-icon'
                />
                <div className='icon-arrow'>
                    <div className="profile-icon-container"
                        onMouseOver={() => { setRotateIcon(true) }}
                        onMouseOut={() => { setRotateIcon(false) }}>
                        <img
                            src={profileIcon}
                            alt="profile-icon"
                            width={30}
                            height={30}
                        />
                    </div>
                    <FontAwesomeIcon
                        icon={faArrowCircleDown}
                        onMouseOver={() => { setRotateIcon(true) }}
                        onMouseOut={() => { setRotateIcon(false) }}
                        style={{ fontSize: '16px', marginLeft: '8px', cursor: 'pointer' }}
                        className={rotateIcon ? 'rotateIconUp' : 'rotateIconDown'}
                    />
                </div>
            </div>
        </div>
    )
}

export default NavBar;
