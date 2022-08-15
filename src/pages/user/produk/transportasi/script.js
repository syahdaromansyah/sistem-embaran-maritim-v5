/* eslint-disable */

import L from 'leaflet';
import { format } from 'date-fns';
import getWeather from '../../dist/js/getWeather';
import updateInformasiCuaca from '../../dist/js/updateInformasiCuaca';
import bukaInformasiCuaca from '../../dist/js/bukaInformasiCuaca';
import apiKey from '../../../../api-key';

const options = {
  key: apiKey.windyAPI,
  verbose: true,
};

// Initialize Windy API
windyInit(options, (windyAPI) => {
  const { map } = windyAPI;

  map.locate({ setView: true, maxZoom: 16 });

  let markerDetectUser = null;

  function onLocationFound(e) {
    markerDetectUser = L.marker(e.latlng)
      .addTo(map)
      .bindPopup('Posisi terkini Anda')
      .openPopup();
  }

  map.on('locationfound', onLocationFound);

  let pinMarker = null;

  map.on('click', async (e) => {
    try {
      markerDetectUser?.remove();
      pinMarker?.remove();
      pinMarker = L.marker(e.latlng).addTo(map);

      const { dataCuacaLokal, dataCuacaLaut } = await getWeather(
        e.latlng.lat,
        e.latlng.lng
      );

      updateInformasiCuaca(dataCuacaLokal, dataCuacaLaut);
      bukaInformasiCuaca();
    } catch (error) {
      console.info(error.message);
    }
  });

  // kapal
  const kapalIcon = L.icon({
    iconUrl: '../../dist/img/ship-solid.svg',
    iconSize: [27, 32],
    iconAnchor: [16, 37],
    popupAnchor: [0, -30],
  });

  L.marker([-6, 107], { icon: kapalIcon }).addTo(map);
  L.marker([-7, 104], { icon: kapalIcon }).addTo(map);
  L.marker([-8, 106], { icon: kapalIcon }).addTo(map);
  L.marker([-3, 98], { icon: kapalIcon }).addTo(map);
  L.marker([-5, 119], { icon: kapalIcon }).addTo(map);
  L.marker([-8, 123], { icon: kapalIcon }).addTo(map);
  L.marker([-10, 113], { icon: kapalIcon }).addTo(map);
});

// Tanggal jam
document.querySelector('.tanggaljam').textContent = format(
  new Date(),
  'P, kk:mm:ss'
);

const profileName = document.querySelector('.profile-name');
const profileRole = document.querySelector('.profile-role');

profileName.textContent = window.localStorage.getItem('current-user-name');
profileRole.textContent = window.localStorage.getItem('current-user-role');

const logOutBtn = document.querySelector('.logout-btn');

logOutBtn.addEventListener('click', () => {
  window.localStorage.setItem('current-user-name', '');
  window.localStorage.setItem('current-user-role', '');
  window.localStorage.setItem('current-user-remember', 'false');

  window.location.replace('/');
});

const adminMenuOnly = document.querySelectorAll('.admin-menu-only');
const isAdmin = window.localStorage.getItem('current-user-role');
if (isAdmin.toLowerCase() !== 'admin') {
  adminMenuOnly.forEach((menu) => menu.classList.add('hidden'));
}

const isLogin = window.localStorage.getItem('current-user-name');
if (isLogin === '') {
  window.location.replace('/');
}
