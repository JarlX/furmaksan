import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/furmaksan.mp4' autoPlay loop muted>
        <h1>AAAA</h1>
        <p>asdadsdas</p>
        <div className='hero-btns'>
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
            İletişime Geç
          </Button>
          <Button
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
          >
            adsaasd <i className='far fa-play-circle' />
          </Button>
        </div>
      </video>
    </div>
  );
}

export default HeroSection;
