import React from 'react'
import { Cards } from '../components/Cards'
import '../styles/galeria.css'
import { CardsR } from '../components/CardsR'
import { CardsH } from '../components/CardsH'

export const Galeria = () => {
    return (
        <div id='galeria' className="galeria">
            <div className="todo">
                <h1 className="textS">Cabañas</h1>
                <div className="cards">
                    <Cards />
                    <CardsR />
                    <CardsH/>
                </div>
            </div>
        </div>
    )
}
