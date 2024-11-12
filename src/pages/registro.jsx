import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import ticket from '../assets/ticket.png';
import noRegistrado from '../assets/NOregistrado.png';
import Izquierda from '../assets/flechaizquierda.png';

export const Registro = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  const encuestas = [
    { fecha: '30/10/2024', completado: true, emoji: '😀' },
    { fecha: '31/10/2024', completado: false, emoji: '-' },
    { fecha: '1/11/2024', completado: true, emoji: '😞' },
    { fecha: '2/11/2024', completado: true, emoji: '😢' },
    { fecha: '3/11/2024', completado: true, emoji: '😠' },
    { fecha: '4/11/2024', completado: false, emoji: '-' },
    { fecha: '5/11/2024', completado: true, emoji: '😎' },
    { fecha: '6/11/2024', completado: false, emoji: '-' },
  ];


  return (
    <div className="registro-container">
      <h2>Registro de Encuestas</h2>
      <h3>Encuestas respondidas</h3>
      <div className="table-container">
        <table>
          <tbody>
            {encuestas.map(({ fecha, completado, emoji }, index) => (
              <tr key={index}>
                <td>
                  <img
                    src={completado ? ticket : noRegistrado}
                    alt={completado ? 'Completado' : 'No completado'}
                    className="status-icon"
                  />
                </td>
                <td>{fecha}</td>
                <td>{emoji}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button className='arrow-left-button' onClick={() => handleNavigate('/calendario')}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={Izquierda} height={50} alt='FlechaIzquierda' />
                <span style={{ marginLeft: '10px', fontFamily: 'Fraunces', fontWeight: '600' , color: '#817365' }}> Calendario </span>
            </div>
      </button>
    </div>
  );
};

export default Registro;
