import React, { useState } from 'react'
import Opcion from '../assets/opcion.jpg'
import Opcion2 from '../assets/opcion2.jpg'


export const Encuesta = () => {
  const [text, setText] = useState('');
  const [puntuacion, setPuntuacion] = useState(0);
  const [opcionSeleccionada, setOpcionSeleccionada] = useState(null);

  const handleTextChange = (event) => {
    setText(event.target.value);
  };
  const handleSendMessage = () => {
    if (text.trim() && puntuacion > 0) {
      // Caso 1: Hay texto y una puntuación seleccionada
      alert('Encuesta Diaria Guardada!');
      console.log('Message sent:', text);
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
      </div>
    </div>
    
  )
  
}

export default Encuesta
