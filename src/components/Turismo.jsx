import React from 'react'
import salto1 from '../imgs/SaltosA1.jpg';
import salto2 from '../imgs/SaltosA2.jpg';
import terma from '../imgs/Termas.jpg';
import pucon1 from '../imgs/Pucon1.jpg';
import pucon2 from '../imgs/Pucon2.jpg';
import congelado from '../imgs/SaltoCongelado.jpg';
import '../styles/turismo.css';
export const Turismo = () => {
    return (
        <div id="turismo" className='turismo'>
            <h1 className='textS'>Sitios Turisticos</h1>
            <div className="saltoA">
                <div className="imgSal">
                    <img className="salImg" src={salto1} alt="salto1" />
                </div>
            </div>
            <div className="saltoA">
                <div className="imgSal">
                    <img className="salImg" src={terma} alt="salto1" />
                </div>
            </div>
            <div className="saltoA">
                <div className="imgSal">
                    <img className='salImg' src={pucon2} alt="salto2" />
                </div>
            </div>
        </div>
    )
}
