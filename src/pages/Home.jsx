import React from 'react'
import Hero from '../components/Home/Hero'
import nosotros from '../imgs/nosotros.jpg'
import '../styles/home.css'

export const Home = () => {
  return (
    <>
      <Hero />
      <div className="globals">
        <div className="nosotros">
          <h1 className='h1'>¿Quiénes Somos?</h1>
          <div className="infos">
            <div className="detalle">
              <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita quam error accusamus aliquam dolorum nobis rerum atque consectetur
                fugiat necessitatibus,
                deleniti ad fugit rem cum saepe, animi ducimus labore!</span>
            </div>
            <div className="imagen">
              <img src={nosotros} alt="Nosotros 1" />
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
