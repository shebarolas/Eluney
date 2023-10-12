import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import logo from '../imgs/logoE.jpg';
import '../styles/footer.css';

export const Foot = () => {
  return (
    <div className='footer'>
      <div className="informacions">
        <img src={logo} alt="" className='fotLogo' />
        <span><a href="mailto:cafeteriacabanaseluney@gmail.com">@cafeteriacabanaseluney@gmail.com</a></span>
        <span>@ Whatsapp: +56995416124</span>
        <div className="logos">
          <a href="https://www.facebook.com/profile.php?id=100093055598485"><FaFacebook size={30} /></a>
        </div>
      </div>
    </div>
  )
}
