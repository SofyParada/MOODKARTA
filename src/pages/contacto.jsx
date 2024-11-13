import React, { useState } from 'react'
import Telefono from '../assets/telefono.jpg'
import Telefono2 from '../assets/telefono2.jpg'



export const Contacto = () => {

  return (
    <div className="contacto">
      <h1 className="titulo"><center>Contacto</center></h1>
      <p className="descripcion">
        Los contactos dentro de nuestra aplicación son psicólogos MoodKarta, 
        profesionales especializados en cuidados de la salud mental, 
        trastornos de ansiedad y depresión.
      </p>
      <div className="contacto-lista">
        <div className="contacto-item">
          <img src={Telefono} alt="Teléfono" className="icono" />
            <div>
              <p className="nombre">Psicólogo 1</p>
              <p className="contacto-info">+56 9 1234 5678</p>
            </div>
        </div>
        <div className="contacto-item">
          <img src={Telefono2} alt="Teléfono" className="icono" />
            <div>
              <p className="nombre">Psicólogo 2</p>
              <p className="contacto-info">+56 9 2020 0462</p>
            </div>
        </div>

        <div className="contacto-item">
          <img src={Telefono} alt="Correo" className="icono" />
            <div>
              <p className="nombre">Psicólogo 3</p>
              <p className="contacto-info">psicologo@mail.com</p>
            </div>
        </div>
        <div className="contacto-item">
          <img src={Telefono2} alt="Correo" className="icono" />
            <div>
              <p className="nombre">Psicólogo 4</p>
              <p className="contacto-info">psicology@mail.cl</p>
            </div>
        </div>
      </div>
    </div>
    

  )
}

export default Contacto