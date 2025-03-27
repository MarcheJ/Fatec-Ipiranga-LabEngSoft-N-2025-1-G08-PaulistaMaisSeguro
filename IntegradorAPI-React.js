import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px"
};

const center = {
  lat: -23.55052, // Latitude
  lng: -46.633308 // Longitude
};

function MyGoogleMap() {
  return (
    <LoadScript googleMapsApiKey="">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {/* Exemplo de marcador */}
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}

export default MyGoogleMap;
