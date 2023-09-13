import React from 'react'
import Hero from '../components/Home/Hero'
import '../styles/home.css'
import { Foot } from '../components/Foot'
import { Servicios } from './Servicios'
import { Galeria } from './Galeria'
import { Nosotros } from './Nosotros'
import { ServicioCaf } from '../components/ServicioCaf'
import { Turismo } from '../components/Turismo'
import { AlertConf } from '../components/Gallery/AlertConf'

export const Home = () => {
  return (
    <>
      <Hero />
      <div className="homes">
        <div className="home">
          <h1 className='textH'>Cafeteria y Cabañas Eluney</h1>
          <div className="infoHome">
            <span>
             Eluney o "regalo del cielo" es un proyecto familiar que comenzó por las propiedades medioambientales que ofrecen los terrenos de Palguin Alto,
             pero se transformó con el tiempo en una pasión por la tranquilidad y naturaleza del entorno que nos rodea, dicho esto hemos logrado como pyme familiar combinar
             la maravilla del medio ambiente con la comodidad citadina, dicho esto a disfrutar el "regalo del cielo".
            </span>
          </div>
        </div>
      </div>
      {/* <Servicios /> */}
      <ServicioCaf />
      <Turismo />
      <Galeria />
      <Nosotros />
      <Foot />
    </>
  )
}
