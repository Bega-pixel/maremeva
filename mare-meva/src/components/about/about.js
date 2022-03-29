import React from 'react';
import "./about.css";

const About = () => {
  return (
    <div className='about-container' id='about'>
        <div className='about-desc'>
            <h2>Mare Meva</h2>
            <p>Un espacio que te abre sus puertas para que, aunque vayas de bólido, puedas comer cada día sano y equilibrado. Nos esforzamos en ofrecerte una gran variedad de platos preparados para que te los lleves donde quieras, siguiendo la dieta mediterránea y con un precio muy asequible.
Ven y disfruta de la "Comida hecha como en casa"</p>

        </div>
        <div className='about-img'>
            <img src="https://res.cloudinary.com/dazypdtba/image/upload/v1648051351/Mare%20Meva/comida_sqtjni.jpg" className='about-img' alt="about" />
        </div>

    </div>
  )
}

export default About