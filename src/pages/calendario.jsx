import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Serio from '../assets/serio.png'
import Triste from '../assets/triste.png'
import Enojo from '../assets/enojo.png'
import Feliz from '../assets/feliz.png'
import Izquierda from '../assets/flechaizquierda.png'


export const Calendario = () => {
    const navigate = useNavigate();

    const handleNavigate = (path) => {
      navigate(path);
    };

    return (
    <div>
        <p className='calendario-titulo'> Calendario
        </p>
        <p className='calendario-descripcion-1'> Lunes 4 de Noviembre: <br />
            <div className='calendario-descripcion-2'>
                <img src={Serio} height={50} alt='Serio' className='button-icon' />
                <p className='texto'>  
                Hoy día no me sentía muy bien, de ánimos y no me levante de la cama. 
                </p>
            </div>   
        </p>
        <br /> <br />
        <p className='calendario-descripcion-1'> Domingo 3 de Noviembre: <br />
            <div className='calendario-descripcion-2'>
                <img src={Triste} height={50} alt='Serio' className='button-icon' />
                <p className='texto'>  
                Hoy también me sentí un poco deprimida, llore un poquito luego de ver un tiktok de perritos.
                </p>
            </div>   
        </p>
        <br /> <br />
        <p className='calendario-descripcion-1'> Sabado 2 de Noviembre: <br />
            <div className='calendario-descripcion-2'>
                <img src={Enojo} height={50} alt='Serio' className='button-icon' />
                <p className='texto'>  
                Hoy me enojé con un compañero porque me empujó y me caí.
                </p>
            </div>   
        </p>
        <br /> <br />
        <p className='calendario-descripcion-1'> Viernes 1 de Noviembre: <br />
            <div className='calendario-descripcion-2'>
                <img src={Serio} height={50} alt='Serio' className='button-icon' />
                <p className='texto'>  
                Estuve un poco cansada despues de halloween por lo que no hice mucho en el día.
                </p>
            </div>   
        </p>
        <br /> <br />
        <p className='calendario-descripcion-1'> Jueves 31 de Octubre: <br />
            <div className='calendario-descripcion-2'>
                <img src={Feliz} height={50} alt='Serio' className='button-icon' />
                <p className='texto'>  
                Hoy fue Halloween y me divertí mucho con mis amigos.
                </p>
            </div>   
        </p>
        <br /> <br />



        <button className='bottom-left-button' onClick={() => handleNavigate('/')}>
          <img src={Izquierda} height={50} alt='FlechaIzquierda' />
        </button>

    </div>

  )
}

export default Calendario