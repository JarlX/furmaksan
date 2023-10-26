import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './Contacts.css';

const storeData = {
  name: 'Furkan Makina',
  address: 'Küçük Sanayi Sitesi 85. Sk. No:2, 19100 Merkez/Çorum',
  phone: '0531 961 85 65',
  hours: 'Pazartesi-Cumartesi: 08:30-18:00',
  location: [40.522268104966074, 34.93463650855765],
};

function StorePage() {
  return (
    <div className='container'>
      <h1>{storeData.name}</h1>
      <p>Adres: {storeData.address}</p>
      <p>Telefon: {storeData.phone}</p>
      <p>Çalışma Saatleri: {storeData.hours}</p>

      <MapContainer
        center={storeData.location}
        zoom={15}
        style={{ height: '400px', width: '100%' }}
      >
        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={storeData.location}>
          <Popup>
            {storeData.name} <br /> {storeData.address}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default StorePage;
