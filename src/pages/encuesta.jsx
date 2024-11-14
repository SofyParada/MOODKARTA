import React, { useState } from 'react'
import Opcion from '../assets/opcion.png'
import Opcion2 from '../assets/opcion2.png'
import { useNavigate } from 'react-router-dom';


export const Encuesta = () => {
  const [text, setText] = useState('');
  const [puntuacion, setPuntuacion] = useState(0);
  const [opcionSeleccionada, setOpcionSeleccionada] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  const handleTextChange = (event) => {
    setText(event.target.value);
  };
  const handleSendMessage = () => {
    if (text.trim() && puntuacion > 0) {
      // Caso 1: Hay texto y una puntuación seleccionada
      alert('Encuesta Diaria Guardada!');
      console.log('Message sent:', text);
      setShowModal(true); // Muestra el modal tras guardar la respuesta
      window.location.reload(); // Refresh the page
    } else if (!text.trim() && puntuacion === 0) {
      // Caso 3: No hay ni texto ni puntuación
      alert('Debes completar el cuadro de texto y seleccionar una puntuación.');
    } else if (!text.trim()) {
      // Caso 2a: Falta el texto
      alert('El cuadro de texto no puede estar vacío');
    } else if (puntuacion === 0) {
      // Caso 2b: Falta la puntuación
      alert('Debes seleccionar una puntuación.');
    }
  };


  const seleccionarOpcion = (index) => {
    setOpcionSeleccionada(index);
    setPuntuacion(index + 1); // Guarda la puntuación según la opción seleccionada
  };


  const handleFinishClick = () => {
    setShowModal(true)
  }
  

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="encuesta">
      <h1 classname="titulo-encuesta">Encuesta Diaria</h1>
      <div className="pregunta">
        <h2 classname="titulo-encuesta"><center>Pregunta 1</center></h2>
        <textarea 
          value = {text}
          onChange={handleTextChange}
          placeholder="Escribe aqui tu respuesta"
        />
      </div>
      <div className="Puntuacion">
        <h3 className="titulo-puntuacion"><center>Del 1 al 10</center></h3>
        <p className="titulo-puntuacion2"><center>Como estuvo tu día?</center></p>
        <div className="Puntuacion-opciones">  
          {[...Array(10)].map((_, i) => (
            <label key={i}>
            <img
              src={opcionSeleccionada === i ? Opcion2 : Opcion}  // Muestra la imagen seleccionada solo para la opción actual
              alt={`Opción ${i + 1}`}
              onClick={() => seleccionarOpcion(i)}  // Cambia la opción seleccionada
              className="opcion-imagen"
            /> 
              <span className="numero-puntuacion">{i + 1}</span>
            </label>
          ))}

          </div>
          <p className="puntuacion-descripcion">
          1: muy malo<br />
          5: Moderado, ni bueno ni malo<br />
          10: Perfecto
        </p>
        <button className="guardar-btn" onClick={handleSendMessage}>
          Guardar respuestas
        </button>

        <p></p>
        <button className="terminar-btn" onClick={handleFinishClick}>
          Terminar
        </button>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <p>¿Qué deseas hacer?</p>
            <button onClick={() => handleNavigate('/')}>Salir</button>
            <button onClick={() => handleNavigate('/registro')}>Ver Respuestas</button>
            <button onClick={() => setShowModal(false)}>Cancelar</button>
          </div>
        </div>
      )}
      </div>
    </div>
    
  )
}

export default Encuesta
