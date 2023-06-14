import React from 'react'
import Hero from '../components/Home/Hero'
import { Mapbox } from '../components/Mapbox'

export const Nosotros = () => {
  return (
    <div className="noss">
        <Hero/>
        <div className="mapa">
            <h1>Mapa</h1>
            <Mapbox/>
        </div>
    </div>
  )
}
