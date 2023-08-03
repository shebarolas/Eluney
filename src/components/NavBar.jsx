import React from 'react'
import '../styles/navbar.css';
import logo from '../imgs/logo.jpg'
import { Select } from '@chakra-ui/react'
import { Link } from 'react-scroll';


export const NavBar = () => {
    return (
        <div className="navbar">
            <div className="content">
                <div className="nav">
                    <div className="optionsL ">
                        <a href=""><span className='border'>Inicio</span></a>
                        <select className="border" placeholder='Servicios' 
                        // onchange={window.location.href = this.value}
                        >
                            <option value="#turismo">Servicio Cabañas</option>
                            <option >Servicio Cafeteria</option>
                            <option>Servicio Turismo</option>
                        </select>
                    </div>
                    <div className="logo">
                        <img src={logo} alt="logo" className="imgs" />
                    </div>
                    <div className="optionsR ">
                        <a href="#turismo"><span className='border' style={{width:"8rem"}}>Sitio Turisticos</span></a>
                        <a href="#galeria"><span className="border">Cabañas</span></a>
                        <a href="#nosotros"><span className="border">Nosotros</span></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
