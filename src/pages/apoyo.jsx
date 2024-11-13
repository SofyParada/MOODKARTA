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
        <p className='apoyo-titulo'> Recursos de Apoyo
        </p>
        <p className='apoyo-descripcion-1'> Aquí tienes algunos links <br />relacionados a tus emociones <br /> <br />
        </p>
        <div className='flex-container'>
          <div className='icon-container'>
            <img src={Nube} height={50} alt='Nube' className='button-icon' />
          </div>
          <div className='text-container'>
            <p className='apoyo-descripcion-2'>
            Como lidiar con la tristeza: <br />
            <a href='https://www.cdc.gov/howrightnow/espanol/emocion/tristeza/' className='texto'> 'www.cdc.gov/emocion/tristeza/' </a>
            </p>
          </div>
        </div>

        <div className='flex-container'>
          <div className='icon-container'>
            <img src={Bandera} alt='Nube' className='button-icon' width='40px'/>
          </div>
          <div className='text-container'>
            <p className='apoyo-descripcion-2'>
            Emociones negativas se vinculan ccon el estrés <br />
            <a href='https://www.cdc.gov/howrightnow/espanol/emocion/estres/' className='texto'> 'www.cdc.gov/emocion/estres/' </a>
            </p>
          </div>
        </div>

        <p className='apoyo-descripcion-2'>Recuerda que siempre que tengas problemas, ¡Trata de comunicarte con alguien, <span style={{fontFamily:"Fraunces",fontWeight:"600"}}>no estás solo!</span> </p>
        

        <button className='bottom-left-button' onClick={() => handleNavigate('/tendencias')}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={Izquierda} height={50} alt='FlechaIzquierda' />
            <span style={{ marginLeft: '10px', fontFamily: 'Fraunces', fontWeight: '600', color: '#817365' }}>Tendencias</span>
          </div>
        </button>

    </div>

  )
}

export default Apoyo