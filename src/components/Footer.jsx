import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              FURMAKSAN
            </Link>
          </div>
          <small className='website-rights'>FURMAKSAN © 2023</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fa fa-facebook-f'></i>
            </Link>
            <Link
              className='social-icon-link instagram'
              to='https://www.instagram.com/corumfurkanmakina/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fa fa-instagram'></i>
            </Link>
            <Link
              className='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fa fa-youtube'></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
