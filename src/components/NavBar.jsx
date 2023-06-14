import React from 'react'
import '../styles/navbar.css';
import logo from '../imgs/logo.jpg'
import { DrawBar } from './Home/DrawBar';
import { Link } from 'react-router-dom';


export const NavBar = () => {
    return (
        <div className="navbar">
            <div className="content">
                <div className="nav">
                    <div className="optionsL ">
                        <Link to={'/'}><span className='border'>Inicio</span></Link>
                        <Link to={'/servicios'}><span className='border'>Servicios</span></Link>
                    </div>
                    <div className="logo">
                        <img src={logo} alt="logo" className="imgs" />
                    </div>
                    <div className="optionsR ">
                        <Link to={'/nosotros'}><span className="border">Nosotros</span></Link>
                        <span className="border">Contacto</span>
                        <div className="barra">
                            <DrawBar />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
