import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import customMarker from '../img/map-marker.png';

const CustomIcon = L.icon({
  iconUrl: customMarker,
  iconSize: [30, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const map = L.map('footer__map').setView([55.785787, 37.594917], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
L.marker([55.785787, 37.594917], {icon: CustomIcon})
  .addTo(map)
  .bindPopup('Мы туть')
  .openPopup();
