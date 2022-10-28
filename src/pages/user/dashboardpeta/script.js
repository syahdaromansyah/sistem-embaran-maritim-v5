/* eslint-disable */
import L from 'leaflet';
import { format } from 'date-fns';
import getWeather from '../dist/js/getWeather';
import updateInformasiCuaca from '../dist/js/updateInformasiCuaca';
import bukaInformasiCuaca from '../dist/js/bukaInformasiCuaca';
import kapal from './kapal';
import zppi from './zppi';

// Initializasi Leaflet Js
var map = L.map('map').setView([-5, 118.9213], 13);
L.tileLayer(
  'https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png',
  {
    maxZoom: 20,
    attribution:
      '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
  }
).addTo(map);

map.locate({ setView: true, maxZoom: 6 });

let markerDetectUser = null;

function onLocationFound(e) {
  markerDetectUser = L.marker(e.latlng)
    .addTo(map)
    .bindPopup('Posisi terkini Anda')
    .openPopup();
  document.querySelector('.nilai-lokasi').innerHTML =
    Math.round(e.latlng.lat * 1e4) / 1e4 +
    '&deg;' +
    (e.latlng.lat < 0 ? 'S' : 'N') +
    ', ' +
    (Math.round(e.latlng.lng * 1e4) / 1e4 + '&deg;E');
}

map.on('locationfound', onLocationFound);

let pinMarker = null;

map.on('click', async (e) => {
  try {
    markerDetectUser?.remove();
    pinMarker?.remove();
    pinMarker = L.marker(e.latlng).addTo(map);
    document.querySelector('.nilai-lokasi').innerHTML =
      Math.round(e.latlng.lat * 1e4) / 1e4 +
      '&deg;' +
      (e.latlng.lat < 0 ? 'S' : 'N') +
      ', ' +
      (Math.round(e.latlng.lng * 1e4) / 1e4 + '&deg;E');

    const { dataCuacaLokal, dataCuacaLaut } = await getWeather(
      e.latlng.lat,
      e.latlng.lng
    );

    updateInformasiCuaca(
      {
        ...dataCuacaLokal,
        lat: e.latlng.lat,
        lng: e.latlng.lng,
      },
      dataCuacaLaut
    );
    bukaInformasiCuaca();
  } catch (error) {
    console.info(error.message);
  }
});

// transportasi
const showShipCheckbox = document.querySelector('.posisi-kapal');
const shipIcon = L.icon({
  iconUrl: '../dist/img/ship-solid.svg',
  iconSize: [27, 32],
  iconAnchor: [16, 37],
  popupAnchor: [0, -30],
});
const dummyShipPosition = L.geoJSON(kapal, {
  pointToLayer: function (feature, layer) {
    return L.marker(layer, { icon: shipIcon });
  },
});

showShipCheckbox.addEventListener('click', function (e) {
  const isChecked = e.target.checked;

  if (isChecked) {
    dummyShipPosition.addTo(map);
  } else {
    dummyShipPosition.removeFrom(map);
  }
});

// nelayan
const showFishCheckbox = document.querySelector('#ZPPI');
const fishIcon = L.icon({
  iconUrl: '/pages/user/dist/img/fish-fins-solid.svg',
  iconSize: [27, 32],
  iconAnchor: [16, 37],
  popupAnchor: [0, -30],
});
const dummyFish = L.geoJSON(zppi, {
  pointToLayer: function (feature, layer) {
    return L.marker(layer, { icon: fishIcon });
  },
});

showFishCheckbox.addEventListener('click', function (e) {
  const isChecked = e.target.checked;

  if (isChecked) {
    dummyFish.addTo(map);
  } else {
    dummyFish.removeFrom(map);
  }
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
