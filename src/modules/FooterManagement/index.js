import React from 'react'
import { useState } from 'react'
import { YoutubeFilled, FacebookOutlined, InstagramOutlined  } from '@ant-design/icons'
import { Button } from 'antd'
import './style.scss'

const Footer = () => {
    const [serviceCode, setServiceCode] = useState('Service Code')
    return (
        <div className='footer-container'>
            <div className="first-footer-section">
                <ul>
                    <li className='social-media-icons'>
                        <FacebookOutlined/>
                        <InstagramOutlined/>
                        <YoutubeFilled/>
                    </li>
                    <li>Audio Description</li>
                    <li>Investor Relations</li>
                    <li>Legal Notices</li>
                    <li>
                        <Button
                            ghost
                            className='service-code-btn'
                            onClick={() => { setServiceCode('012-345') }}
                        >{serviceCode}</Button></li>
                    <li className='copyright'>© 1997-2023 Netflix, Inc</li>
                </ul>
            </div>
            <div className="second-footer-section">
                <ul>
                    <li>Help Center</li>
                    <li>Jobs</li>
                    <li>Cookie Preferences</li>
                </ul>
            </div>
            <div className="third-footer-section">
                <ul>
                    <li>Gift Cards</li>
                    <li>Terms of Use</li>
                    <li>Corporate Information</li>
                </ul>
            </div>
            <div className="fourth-footer-section">
                <ul>
                    <li>Media Center</li>
                    <li>Privacy</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;
