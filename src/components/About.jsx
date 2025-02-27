import React from 'react';
import BannerImage from '../assets/banneryeni.jpg';
import '../styles/About.css';

const About = () => {
  return (
    <div className='about'>
        <div className='aboutTop' style={{backgroundImage:`url(${BannerImage})`}}></div>
        <div className='aboutBottom'>
          <h1>Hakkımızda</h1>
          <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem natus eius blanditiis doloremque error! Voluptatibus temporibus ducimus explicabo eligendi ex autem nulla harum maiores. Rem unde placeat saepe nemo recusandae!
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem natus eius blanditiis doloremque error! Voluptatibus temporibus ducimus explicabo eligendi ex autem nulla harum maiores. Rem unde placeat saepe nemo recusandae!
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem natus eius blanditiis doloremque error! Voluptatibus temporibus ducimus explicabo eligendi ex autem nulla harum maiores. Rem unde placeat saepe nemo recusandae!
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem natus eius blanditiis doloremque error! Voluptatibus temporibus ducimus explicabo eligendi ex autem nulla harum maiores. Rem unde placeat saepe nemo recusandae!
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem natus eius blanditiis doloremque error! Voluptatibus temporibus ducimus explicabo eligendi ex autem nulla harum maiores. Rem unde placeat saepe nemo recusandae!
          </p>
        </div>
    </div>
  )
}

export default About
