import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import EncuestaDiaria from '../assets/encuesta diaria.png';
import RegistroEncuestas from '../assets/registroencuestas.png';
import Tendencias from '../assets/tendencias.png';
import PositiveP from '../assets/positivep.png';
import UnoBravo from '../assets/unobravo.png';
import Calendario from '../assets/calendario.png';


export const HomePage = () => {
  const [selectedEmoji, setSelectedEmoji] = useState('😊');
  const [text, setText] = useState('');
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleEmojiChange = (event) => {
    setSelectedEmoji(event.target.value);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleOpenModal = () => {
    if (text.trim() === '') {
      alert('El cuadro de texto no puede estar vacío'); // Muestra la alerta si el texto está vacío
    } else {
      setShowModal(true); // Muestra el modal si el texto no está vacío
    }
  };

  const handleCloseModal = () => {
    setShowModal(false); // Oculta el modal
  };

  const handleSave = () => {
    alert('Bitácora guardada!');
    setShowModal(false);
    window.location.reload();
  };

  const handleEdit = () => {
    alert('Edición activada');
    setShowModal(false);
  };

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <>
      <div className="content">
        <p className="home-page__text">¡Hola User! <br />Cuentame sobre ti</p>

        <div className="emoji-selection">
          <label htmlFor="emoji">Select an emoji: </label>
          <select id="emoji" value={selectedEmoji} onChange={handleEmojiChange}>
            <option value="😊">😊</option>
            <option value="😂">😂</option>
            <option value="😍">😍</option>
            <option value="😢">😢</option>
            <option value="😎">😎</option>
            <option value="😡">😡</option>
          </select>
        </div>

        <div className="text-box">
          <textarea
            value={text}
            onChange={handleTextChange}
            placeholder="Escribe aqui lo que piensas el dia de hoy..."
          />
        </div>

        <div className="send-button">
          <button onClick={handleOpenModal}>Guardar</button>
        </div>

        {/* Modal para confirmación */}
        {showModal && (
          <div className = "modalOverlayStyles">
            <div className = "modalStyles">
              <h3>¿Estás seguro de que quieres guardar?</h3>
              <button onClick={handleSave}>Guardar</button>
              <button onClick={handleEdit}>Editar</button>
              <button onClick={handleCloseModal} style={{ marginTop: '10px' }}>Cancelar</button>
            </div>
          </div>
        )}
        
        {/* Otros elementos de la página */}
        <button className='home-page__button' onClick={() => handleNavigate('/calendario')}>
          <img src={Calendario} alt="icon" className="calendario"/>
        </button>

        <button className='home-page__button' onClick={() => handleNavigate('/encuesta-diaria')}>
          <img src={EncuestaDiaria} alt="icon" className="button-icon"/>
          Encuesta Diaria
        </button>
        
        <button className='home-page__button' onClick={() => handleNavigate('/registro')}>
          <img src={RegistroEncuestas} alt="icon" className="button-icon"/>
          Registro de Encuestas
        </button>

        <button className='home-page__button' onClick={() => handleNavigate('/tendencias')}>
          <img src={Tendencias} alt="icon" className="button-icon"/>
          Observa tus tendencias
        </button>

        <div className='square-box'>
          <p className='titulo'>Links de interes</p>
          <p className='texto'>
            <img src={PositiveP} alt="icon" className="button-icon"/>
            <a href='https://positivepsychology.com/' target='_blank' className='texto' rel='noreferrer'>
              Positive Psychology
            </a>
          </p>
          <p className='texto'>
            <img src={UnoBravo} alt="icon" className="button-icon"/>
            <a href='https://www.unobravo.com/es/tema/crecimiento-personal' target='_blank' className='texto' rel='noreferrer'>
              Crecimiento Personal
            </a>
          </p>
        </div>
      </div>
      <div className='footer'>
        <p className='footer-left'> 
          <span style={{ textDecoration: 'underline', fontFamily: "Fraunces", fontWeight: "500" }}>¿Quiénes Somos? <br /> </span>
          Benjamín Gutiérrez <br />
          Sofía Parada <br />
          Carolina Muñoz
        </p>

        <p className='footer-right'>
          MoodKarta <br />
        </p>
      </div>
    </>
  );
};



export default HomePage;
