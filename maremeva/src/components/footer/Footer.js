import React from 'react';
import './Footer.css';


const Footer = () => {
  return (
    <footer className='footer' >
        
      <div className='footer-info'>
          <h2>Mare Meva</h2>
          <p>Horarios Abierto de Lunes a Viernes: 7:30-16h.</p>
          <p>Cerrado Sábados y Domingos.</p> 
      </div>

      <div className='footer-contact'>
          <h3>¡Estamos aqui!</h3>
          <p>Carrer Bolivia 31, 08018 Barcelona.</p>
      </div>

      <div className='footer-mapframe'>
          <img className='footer-maps' alt="" src="https://res.cloudinary.com/dazypdtba/image/upload/v1658250285/Mare%20Meva/imagenmapa_a5ocxg.jpg" />
      </div>

         <div className='footer-sns' >
            <div className='sns-link'> 
                <a className='' href="https://www.facebook.com/MareMeva-513857335416236/" target="_blank" rel="noreferrer">
                    <i className="fab fa-facebook"></i>
                    MareMeva
                </a>
                <a className='' href="mailto:info@maremeva.com">
                    <i className="fas fa-at" target="_blank" rel="noreferrer"></i>
                    info@maremeva.com
                </a>
                <a className='' href="tel:+34930042188"  id='contact'>
                    <i className="fas fa-phone" target="_blank" rel="noreferrer"></i>
                    +34 930 042 188
                </a>
            </div>
        </div>

    </footer>
  )
}

export default Footer
