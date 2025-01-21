import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 41.2224746,
  lng: 69.2224292,
};

function Map() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyCcvhTtJVnh0gPoTzBOWFyg5J30nSRranE">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={16}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}

export default Map;
