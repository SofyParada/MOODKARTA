import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Grafico from '../assets/grafico.png'
import Serio from '../assets/serio.png'
import Triste from '../assets/triste.png'
import Enojo from '../assets/enojo.png'
import Derecha from '../assets/flechaderecha.png'

export const Tendencias = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className='tendencias-page'>
        <p className='tendencias-titulo'> Tendencias
        </p>
        <p className='tendencias-descripcion-1'> ¿Como te sientes cada dia? <br />
        <img src={Grafico} height={220} alt='Grafico' style={{ marginTop: '20px', marginBottom: '-30px'}} />
        </p>
        <p className='tendencias-descripcion-2'> Segun tus evaluaciones, tus peores <br /> días fueron <span className='bold'>Lunes y Miercoles, <br />
        ¿Crees saber por qué? <br /> <br />
        </span>
        <span className='black'>Tus últimas emociones <br />
        </span>
        4/11: <img src={Serio} alt="icon" className="button-icon"/> <br /> <br />
        3/11: <img src={Triste} alt="icon" className="button-icon"/> <br /> <br />
        2/11: <img src={Enojo} alt="icon" className="button-icon"/> <br /> <br />

        Ultimamente hay una tendencia a <span className='bold'>emociones negativas</span> ¿Necesitas ayuda con algo? <br />
        </p> 

        <button className='bottom-right-button' onClick={() => handleNavigate('/apoyo')}>
          <img src={Derecha} height={50} alt='FlechaDerecha' />
        </button>


      <br />
      <br />
    </div>
  )
}

export default Tendencias
