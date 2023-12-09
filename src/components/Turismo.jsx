import React from 'react'
import terma from '../imgs/Termas.jpg';
import '../styles/turismo.css';
import { SliderT1 } from './SliderT1';
import { SliderT2 } from './SliderT2';
export const Turismo = () => {
   
    return (
        <div id="turismo" className='turismo'>
            <h1 className='textS'>Atractivos Turisticos</h1>
            <div className="saltoA">
                <div className="imgSal">
                    <SliderT1/>
                    <div className="textTu">
                        <span>300 metros Salto Palguin</span>
                        <span> 4 km. Salto la China</span>
                        <span>5 km. Salto el Leon </span>
                        <span>2 km. Salto los Mellizos</span>
                    </div>
                </div>
            </div>
            <div className="saltoA">
                <div className="imgSal">
                    <img className="salImg" src={terma} alt="salto1" />
                    <div className="textTu">
                        <span>6 km. Termas de Palguin</span>
                        <span>15 km. Termas de Menetue</span>
                        <span>14 km. Termas de Trancura</span>
                        <span>14 km. Termas de San Luis</span>
                        <span>27 km. Termas de Huife</span>
                        <span>24 km. Termas Quimey-co</span>
                    </div>
                </div>
            </div>
            <div className="saltoA">
                <div className="imgSal">
                    <SliderT2/>
                    <div className="textTu">
                        <span>21 km. de Pucon</span>
                        <span>25 km. de Caburgua</span>
                        <span>15 km. de Curarrehue</span>
                        <span>25 km. P. Internacional 
                            <br />
                            Mamuil Malal</span>

                    </div>
                </div>
            </div>
        </div>
    )
}
