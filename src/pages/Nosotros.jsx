import React from 'react'
import Hero from '../components/Home/Hero'
import { Mapbox } from '../components/Mapbox'
import { Foot } from '../components/Foot'
import '../styles/nosotros.css';

export const Nosotros = () => {
  return (
    <div id='nosotros' className="noss">

      <div className="allNos">
        <div className="mapa">
          <h1 className="texUbi">Ubicación</h1>
          <Mapbox />
        </div>
      </div>
    </div>
  )
}
