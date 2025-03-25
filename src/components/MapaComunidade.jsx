import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const MapaComunidade = () => {
  const centroBairro = { lat: -23.563875, lng: -46.611894 };

  return (
    <LoadScript googleMapsApiKey="AIzaSyBcCFmiLzgkxVa1n-8tFh5VuUGBt8aU25A">
      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '89.5vh' }}
        center={centroBairro}
        zoom={15}
      >
        {}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapaComunidade;