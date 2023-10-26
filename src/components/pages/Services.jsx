import React from 'react';
import '../../App.css';
import CardItem from '../CardItem';

export default function Products() {
  const theData = [
    {
      src: 'images/hitachi210h.jpg',
      header: 'Hitachi 210H',
      text: [
        'Çalışma Ağırlığı: 23 600 kg',
        'Kepçe Kapasitesi: 1,1 m3',
        'Motor: Isuzu 4HK1 / 4 Silindir',
        'Motor Gücü:	172 HP / 2000 devir',
        'Kol Koparma Gücü:	14 276 kgf',
        'Kova Koparma Gücü:	16 111 kgf',
      ],
    },
    {
      src: 'images/hitachi225us.jpg',
      header: 'Hitachi 225US',
      text: [
        'Çalışma Ağırlığı: 26 700 kg',
        'Kepçe Kapasitesi: 1,1 m3',
        'Motor: Isuzu 4HK1',
        'Motor Gücü:	172 HP / 2000 devir',
        'Kol Koparma Gücü:	14 276 kgf',
        'Kova Koparma Gücü:	16 111 kgf',
      ],
    },
    {
      src: 'images/hitachi490lch.jpg',
      header: 'Hitachi 490LCH',
      text: [
        'Çalışma Ağırlığı: 26 700 kg',
        'Kepçe Kapasitesi: 1,1 m3',
        'Motor: Isuzu 4HK1',
        'Motor Gücü:	172 HP / 2000 devir',
        'Kol Koparma Gücü:	14 276 kgf',
        'Kova Koparma Gücü:	16 111 kgf',
      ],
    },
    {
      src: 'images/hitachi890LCH.jpg',
      header: 'Hitachi 890LCH',
      text: [
        'Çalışma Ağırlığı: 26 700 kg',
        'Kepçe Kapasitesi: 1,1 m3',
        'Motor: Isuzu 4HK1',
        'Motor Gücü:	172 HP / 2000 devir',
        'Kol Koparma Gücü:	14 276 kgf',
        'Kova Koparma Gücü:	16 111 kgf',
      ],
    },
  ];
  return (
    <>
      <div className='cards'>
        <h1>İş Makina Yedek Parça</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              {theData.map((item, index) => {
                return (
                  <CardItem
                    key={index}
                    src={item.src}
                    header={item.header}
                    text={item.text.map((item2, index) => {
                      return (
                        <ul>
                          <li key={index}>{item2}</li>
                        </ul>
                      );
                    })}
                    path='/contacts'
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className='cards'>
        <h1>Forklift Yedek Parça</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              {theData.map((item, index) => {
                return (
                  <CardItem
                    key={index}
                    src={item.src}
                    header={item.header}
                    text={item.text.map((item2, index) => {
                      return (
                        <ul>
                          <li key={index}>{item2}</li>
                        </ul>
                      );
                    })}
                    path='/contacts'
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
