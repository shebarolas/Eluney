import React from 'react'
import Hero from '../components/Home/Hero'
import '../styles/servicios.css'
import { FcHome, FcWiFiLogo } from "react-icons/fc";
import { FaTree, FaPaw, FaMugHot } from "react-icons/fa";

export const Servicios = () => {
  return (
    <div className='servicios'>
        <Hero/>
        <div className="ser">
            <h1 className='textS'>Servicios</h1>
            <div className="serviD">
                <div className="cardss">
                    <FcHome size={30}/>
                    <span className="textSer">
                        Cabañas para maximo 5 personas
                    </span>
                </div>
                <div className="cardss">
                    <FcWiFiLogo size={30}/>
                    <span className='textSer'>Con Wifi satelital</span>
                </div>
                <div className="cardss">
                    <FaTree size={30}/>
                    <span className='textSer'>Rodeadas de bosque nativo, ideal para descansar</span>
                </div>
                <div className="cardss">
                    <FaPaw size={30}/>
                    <span className='textSer'>Apto para mascotas</span>
                </div>
                <div className="cardss">
                    <FaMugHot size={30}/>
                    <span className='textSer'>Servicio de Cafeteria</span>
                </div>
            </div>
        </div>
    </div>
  )
}
