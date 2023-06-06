import React from 'react'
import Hero from '../components/Home/Hero'
import { Cards } from '../components/Cards'
import '../styles/galeria.css'

export const Galeria = () => {
    return (
        <div className="galeria">
            <Hero />
            <div className="todo">
                <div className="cards">
                    <Cards />
                    <Cards />
                    <Cards />
                </div>
            </div>

        </div>
    )
}
