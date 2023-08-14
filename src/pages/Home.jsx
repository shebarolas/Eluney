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
              Las cabañas son acogedoras y espaciosas, diseñadas para brindar una experiencia confortable y relajante para toda la familia.
              Construidas en medio de un hermoso entorno natural, ofrecen vistas panorámicas de exuberantes bosques, montañas o un pintoresco lago,
              según su ubicación. Cada cabaña cuenta con una arquitectura rústica pero moderna,
              utilizando materiales naturales como la madera y la piedra para crear un ambiente cálido y acogedor.
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
