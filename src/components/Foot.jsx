import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import logo from '../imgs/logoE.jpg';
import '../styles/footer.css';

export const Foot = () => {
  return (
    <div className='footer'>
         <div className="informacions">
                <img src={logo} alt="" className='fotLogo' />
                <span><a href="mailto:eluneylodge@gmail.com">@eluneylodge@gmail.com</a></span>
                <span>@ Telefono: +56995416124</span>
        </div>
        <div className="logos">
                <a href="https://www.facebook.com/profile.php?id=100093055598485"><FaFacebook size={30} /></a>
        </div>
    </div>
  )
}
