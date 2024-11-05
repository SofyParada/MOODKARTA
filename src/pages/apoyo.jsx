import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Nube from '../assets/nube.png'
import Bandera from '../assets/bandera.png'
import Izquierda from '../assets/flechaizquierda.png'


export const Apoyo = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className='apoyo-page'>
        <p className='apoyo-titulo'> Tendencias
        </p>
        <p className='apoyo-descripcion-1'> Aqui tienes algunos links <br />relacionados a tus emociones <br />
        </p>

        <div className='apoyo-descripcion-2'>
          <img src={Nube} className="button-icon" alt='Nube' />
          Como lidiar con la tristeza: <br />
          <a href='https://www.cdc.gov/howrightnow/espanol/recursos/sobrellevando-la-tristeza/index.html' className='texto'> 'https://www.cdc.gov/howrightnow/espanol/recursos/sobrellevando-la-tristeza/index.html' </a>
          <br /> <br />
          <img src={Bandera} className="button-icon" alt='Nube' />
          Emociones negativas se vinculan con el estrés: <br />
          <a href='https://www.cdc.gov/howrightnow/espanol/emocion/estres/' className='texto'> 'https://www.cdc.gov/howrightnow/espanol/emocion/estres/' </a>

          <br /> <br /> <br /> <br />
          Recuerda que siempre que tengas problemas, ¡Trata de comunicarte con alguien, <span style={{fontFamily:"Fraunces",fontWeight:"600"}}>no estás solo!</span>
        </div>

        <button className='bottom-left-button' onClick={() => handleNavigate('/tendencias')}>
          <img src={Izquierda} height={50} alt='FlechaIzquierda' />
        </button>

    </div>

  )
}

export default Apoyo