import React from 'react'
import '../styles/navbar.css';
import logo from '../imgs/logo.jpg'


export const NavBar = () => {
  return (
    <div className="navbar">
        <div className="content">
            <div className="nav">
                <div className="optionsL ">
                    <span className='border'>Inicio</span>
                    <span className='border'>Servicios</span>
                </div>
                <div className="logo">
                    <img src={logo} alt="logo" className="imgs"/>
                </div>
                <div className="optionsR ">
                    <span className="border">Nosotros</span>
                    <span className="border">Contacto</span>
                </div>
            </div>
        </div>
    </div>
  )
}
