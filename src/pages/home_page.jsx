import React,{ useState} from 'react'
import { useNavigate } from 'react-router-dom'
import EncuestaDiaria from '../assets/encuesta diaria.png'
import RegistroEncuestas from '../assets/registroencuestas.png'
import Tendencias from '../assets/tendencias.png'
import PositiveP from '../assets/positivep.png'
import UnoBravo from '../assets/unobravo.png'
import Calendario from '../assets/calendario.png'

export const HomePage = () => {
  const [selectedEmoji, setSelectedEmoji] = useState('😊');
  const [text, setText] = useState('');
  const navigate = useNavigate();

  const handleEmojiChange = (event) => {
    setSelectedEmoji(event.target.value);
  };
  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleSendMessage = () => {
    if (text.trim()) {
      alert('Bitacora guardada!');
      console.log('Message sent:', text);
      window.location.reload(); // Refresh the page
      // Add your message saving logic here
    } else {
      alert('El cuadro de texto no puede estar vacio');
    }
  };

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <>
      <div className="content">
        <p className='home-page__text'>¡Hola User! <br />
          Cuentame sobre ti
        </p>

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
          <button onClick={handleSendMessage}>Guardar</button>
        </div>
        

        <img src={Calendario} alt="icon" className="calendario"/>


        <button className='home-page__button' onClick={() => handleNavigate('/encuesta-diaria')}>
          <img src={EncuestaDiaria} alt="icon" className="button-icon"/>
          Encuesta Diaria
        </button>
        
        <button className='home-page__button' onClick={() => handleNavigate('/registro-encuestas')}>
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
            <a href='https://positivepsychology.com/' target='_blank' className= 'texto' rel='noreferrer'>
            Positive Psychology
            </a>
          </p>
          <p className='texto'>
            <img src={UnoBravo} alt="icon" className="button-icon"/>
            <a href='https://www.unobravo.com/es/tema/crecimiento-personal' target='_blank' className= 'texto' rel='noreferrer'>
            Crecimiento Personal
            </a>
          </p>
        </div>

        
      </div>

      <div className='footer'>
        <p className='footer-left'> 
        <span style={{textDecoration: 'underline'}}>¿Quiénes Somos? <br /> </span>
        Benjamín Gutiérrez <br />
        Sofía Parada <br />
        Carolina Muñoz
        </p>
      </div>
    </>
  )
}

export default HomePage
