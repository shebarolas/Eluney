import React from 'react'
import cafe1 from '../imgs/Cafeteria01.jpg';
import cafe2 from '../imgs/Cafeteria02.jpg';
import cafe3 from '../imgs/Cafeteria03.jpg';
import '../styles/cafeteria.css';

export const ServicioCaf = () => {
    return (
        <div className="cafeteria">
            <h1 className='textS'>Cafeteria</h1>
            <div className="imgText">
                <span className="textCafe">
                    ¡Bienvenido a nuestra acogedora cafetería! Aquí encontrarás el lugar perfecto para relajarte y disfrutar de una deliciosa taza de café.
                    Nuestro café recién molido y nuestras exquisitas opciones de bocadillos te harán regresar una y otra vez.
                </span>
                <div className="imgCafe">
                    <div className="grid1">
                        <img className='imgsCafe' src={cafe1} alt="comida1" />
                        <img className='imgsCafe' src={cafe2} alt="comida2" />
                    </div>
                    <div className="grid2">
                        <img className='imgsCafe' src={cafe3} alt="comida3" />
                    </div>
                </div>
            </div>
        </div>
    )
}
