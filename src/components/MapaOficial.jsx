import React from 'react';
import { GoogleMap, LoadScript, Polygon } from '@react-google-maps/api';

const MapaOficial = () => {
  const centroBairro = { lat: -23.563875, lng: -46.611894 };
  const bairroCoords = [
    { lat: -23.563531, lng: -46.611288 },
    { lat: -23.563492, lng: -46.611255 },
    { lat: -23.564588, lng: -46.611540 },
    { lat: -23.564588, lng: -46.611121 },
    { lat: -23.568055, lng: -46.609206 },
    { lat: -23.567829, lng: -46.608863 },
    { lat: -23.569864, lng: -46.608166 },
    { lat: -23.570680, lng: -46.604410 },
    { lat: -23.573188, lng: -46.603745 },
    { lat: -23.573709, lng: -46.607908 },
    { lat: -23.576976, lng: -46.609423 },
    { lat: -23.579749, lng: -46.599413 },
    { lat: -23.578471, lng: -46.611280 },
    { lat: -23.581027, lng: -46.610421 },
    { lat: -23.582542, lng: -46.610979 },
    { lat: -23.582266, lng: -46.599263 },
    { lat: -23.588520, lng: -46.610636 },
    { lat: -23.588874, lng: -46.613340 },
    { lat: -23.581696, lng: -46.597032 },
    { lat: -23.587989, lng: -46.593470 },
    { lat: -23.588579, lng: -46.595744 },
    { lat: -23.591076, lng: -46.595573 },
    { lat: -23.591765, lng: -46.595036 },
    { lat: -23.598726, lng: -46.596538 },
    { lat: -23.602049, lng: -46.592912 },
    { lat: -23.601990, lng: -46.592118 },
    { lat: -23.603287, lng: -46.591045 },
    { lat: -23.605411, lng: -46.595058 },
    { lat: -23.601577, lng: -46.598684 },
    { lat: -23.603936, lng: -46.602310 },
    { lat: -23.602363, lng: -46.604585 },
    { lat: -23.601832, lng: -46.605357 },
    { lat: -23.602235, lng: -46.606956 },
    { lat: -23.603631, lng: -46.608844 },
    { lat: -23.594173, lng: -46.610110 },
    { lat: -23.594232, lng: -46.612964 }
  ];

  return (
    <LoadScript googleMapsApiKey="AIzaSyBcCFmiLzgkxVa1n-8tFh5VuUGBt8aU25A">
      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '89.5vh' }}
        center={centroBairro}
        zoom={15}
      >
        <Polygon
          paths={bairroCoords}
          options={{
            strokeColor: "#FF0000",
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: "#FF0000",
            fillOpacity: 0.35
          }}
        />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapaOficial;