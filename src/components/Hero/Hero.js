import React from 'react'
import './Hero.css'
import dark_arrow from '../../images/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero_text">
        <h1>We Ensure better education for a better world</h1>
        <p>
           Our Cutting-edge curriculum is designed to empower students
           with the knowledge, skills, and experiences needed to excel
           in the dynamic field of education 
        </p>
        <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
