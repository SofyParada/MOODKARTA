import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import ticket from '../assets/ticket.png';
import noRegistrado from '../assets/NOregistrado.png';
import Izquierda from '../assets/flechaizquierda.png';
import Edit from '../assets/edit.png';

export const Registro = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  const encuestas = [
    { fecha: '6/11/2024', completado: false, emoji: '-' , ptje: 'Eval: 5'},
    { fecha: '5/11/2024', completado: true, emoji: '😎' , ptje: 'Eval: 8'},
    { fecha: '4/11/2024', completado: false, emoji: '-' , ptje: 'Eval: 4'},
    { fecha: '3/11/2024', completado: true, emoji: '😠' , ptje: 'Eval: 3'},
    { fecha: '2/11/2024', completado: true, emoji: '😢' , ptje: 'Eval: 2'},
    { fecha: '1/11/2024', completado: true, emoji: '😞' , ptje: 'Eval: 1'},
    { fecha: '31/10/2024', completado: false, emoji: '-' , ptje: 'Eval: 7'},
    { fecha: '30/10/2024', completado: true, emoji: '😀', ptje: 'Eval: 9'},
  ];


  return (
    <div className="registro-container">
      <h2>Registro de Encuestas</h2>
      <h3>Encuestas respondidas</h3>
      <div className="table-container">
        <table>
          <tbody>
            {encuestas.map(({ fecha, completado, emoji, ptje }, index) => (
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
                <td>{ptje}</td>
                <td>
                  {<button onClick={() => handleNavigate('/encuesta-diaria')} style={{border:'none', background: 'none', cursor:'pointer'}}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <img src={Edit} height={20} alt='Edit' />
                    </div>
                  </button>
                  } 
                </td>
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
