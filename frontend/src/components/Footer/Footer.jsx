import React from 'react'
import './Footer.css'
import {assets} from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="logo" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio reprehenderit exercitationem veniam voluptate quo sit nobis quidem possimus. Alias dignissimos sequi quae maiores incidunt earum ipsam optio laborum sint ex!</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="facebook_icon" />
                <img src={assets.twitter_icon} alt="twitter_icon" />
                <img src={assets.linkedin_icon} alt="linkedin_icon" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
              <li>Home</li>
              <li>About us</li>
              <li>Delivery</li>
              <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
              <li>+91-765-857-9867</li>
              <li>contact@tomato.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className='footer-copyright'>Copyright 2025 &copy; FashTown.com - All Right Reserved</p>
    </div>
  )
}

export default Footer
