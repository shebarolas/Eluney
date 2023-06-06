import React, { useState } from 'react'
import '../styles/formulario.css'

export const Formulario = () => {
   
    return (
       <div className="formulario">
            <form action="https://formsubmit.co/sebapereira393@gmail.com" method="POST" className='form'>
                <input
                    type="text"
                    name="nombre"
                    placeholder="Nombre"
                    className='borderF'
                />
                <input
                    type="email"
                    name="correo"
                    placeholder="Correo electrónico"
                    className='borderF'
                />
                <input
                    type="text"
                    name="asunto"
                    placeholder="Asunto"
                    className='borderF'
                />
                <input type="radio" />
                <textarea
                    name="mensaje"
                    placeholder="Mensaje"
                    className='borderF'
                />
                <button type="submit" className="btn">Enviar</button>
            </form>
       </div>  
    )
}
