import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
const locations = [
  { id: 1, name: "Chennai", lat: 13.0827, lng: 80.2707 },
  { id: 2, name: "Coimbatore", lat: 11.0168, lng: 76.9558 },
  { id: 3, name: "Hyderabad", lat: 17.3850, lng: 78.4867 },
  { id: 4, name: "Goa", lat: 15.2993, lng: 74.1240 },
  { id: 5, name: "Mumbai", lat: 19.0760, lng: 72.8777 },
];


const ChangeMapView = ({ coords }) => {
  const map = useMap();
  map.setView(coords, 11);
  return null;
};
const ChangeMap = ({ selectedLocation }) => {
  return (
    <div className="w-full h-[500px] rounded-xl overflow-hidden shadow-lg">
      <MapContainer
        center={[selectedLocation.lat, selectedLocation.lng]}
        zoom={11}
        scrollWheelZoom={false}
        className="h-full w-full"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        <ChangeMapView coords={[selectedLocation.lat, selectedLocation.lng]} />

        {locations.map((loc) => (
          <Marker
            key={loc.id}
            position={[loc.lat, loc.lng]}
            icon={L.icon({
              iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
              iconSize: [30, 30]
            })}
          >
            <Popup>{loc.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default ChangeMap;