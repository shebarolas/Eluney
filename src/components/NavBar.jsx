import React from 'react'
import '../styles/navbar.css';
import logo from '../imgs/logoE.jpg'
import { MenuRes } from './MenuRes';
// import { Select } from '@chakra-ui/react'
// import { Link } from 'react-scroll';


export const NavBar = () => {
    return (
        <div className="navbar">
            <div className="content">
                <div className="nav">
                    <MenuRes/>
                    <div className="optionsL ">
                        <a href="#"><span className='border'>Inicio</span></a>
                        <a href="#cafeteria"><span className='border'>Cafeteria</span></a>
                        <a href=""><span className='border'>Turismo</span></a>

                    </div>
                    <div className="logo">
                        <img src={logo} alt="logo" className="imgs" />
                    </div>
                    <div className="optionsR ">
                        <a href="#turismo"><span className='border' style={{width:"8rem"}}>Sitio Turisticos</span></a>
                        <a href="#galeria"><span className="border">Cabañas</span></a>
                        <a href="#nosotros"><span className="border">Ubicación</span></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
