import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import logo from '../imgs/logo.jpg';
import '../styles/footer.css';

export const Foot = () => {
  return (
    <div className='footer'>
         <div className="informacions">
                <img src={logo} alt="" className='fotLogo' />
                <span>@ Direccion Cafeteria y Cabañas Eluney</span>
                <span>@ Telefono: +5691234567</span>
        </div>
        <div className="logos">
                <a href="https://www.facebook.com/profile.php?id=100093055598485"><FaFacebook size={30} /></a>
        </div>
    </div>
  )
}
