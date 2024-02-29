import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import L from "leaflet"
import './App.css';


function App() {
  const position = [36.4682199927695, 10.737400504486612];
  return (
    <div className='map'>
        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
    </div>
  );
}


let DefaultIcon = L.icon({
  iconUrl:"https://unpkg.com/leaflet@1.6.0/dist/images/marker-icon.png",
  iconSize:[25,41],
});
L.Marker.prototype.options.icon = DefaultIcon;


export default App;
