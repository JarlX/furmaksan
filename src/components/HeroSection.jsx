import React from 'react';
import './HeroSection.css';
import '../App.css';
import { Button } from './Button';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/furmaksan.mp4' autoPlay loop muted></video>
      <h1>FURKAN MAKİNA</h1>
      <p>Hitachi,Kawasaki,Mitsubishi İş Makinalarının Çorum Yetkili Bayisi.</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          routes={'/services'}
        >
          Hizmetler
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          routes={'/contacts'}
        >
          İletişime Geç <i className='fa fa-arrow-right' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
