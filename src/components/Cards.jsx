import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h1>Hizmetleri Keşfet</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/hitachi1.jpg'
              text='Hitachi İş Makinalarının Yedek Parça ve Satış Hizmetleri'
              path='/services'
            />
            <CardItem
              src='images/hitachi1.jpg'
              text='Mitsubishi İş Makinalarının Yedek Parça ve Satış Hizmetleri'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/hitachi1.jpg'
              text='Kawasaki Yükleyici Yedek Parça ve Satış Hizmetleri'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/hitachi1.jpg'
              text='TCM Forklift Yedek Parça ve Satış Hizmetleri'
              label='Adventure'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
