/* eslint-disable */
import L from 'leaflet';
import { format } from 'date-fns';
import getWeather from '../dist/js/getWeather';
import updateInformasiCuaca from '../dist/js/updateInformasiCuaca';
import bukaInformasiCuaca from '../dist/js/bukaInformasiCuaca';
import kapal from './kapal';
import zppi from './zppi';
import apiKey from '../../../api-key';

// dari sini
// Initialize leaflet
let mbAttr =
  'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
  '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
  'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';
let mbUrl =
  'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
let light = L.tileLayer(mbUrl, {
  id: 'mapbox/light-v9',
  tileSize: 512,
  zoomOffset: -1,
  attribution: mbAttr,
});
let dark = L.tileLayer(mbUrl, {
  id: 'mapbox/dark-v9',
  tileSize: 512,
  zoomOffset: -1,
  attribution: mbAttr,
});
let markersLayers = new L.LayerGroup();
let map = L.map('map', { layers: light }).setView([0, 118.9213], 5);

let baseLayers = {
  Light: light,
  Dark: dark,
};

L.control.layers(baseLayers).addTo(map);

map.locate({ setView: true, maxZoom: 6 });

markerDetectUser = null;

function onLocationFound(e) {
  markerDetectUser = L.marker(e.latlng)
    .addTo(map)
    .bindPopup('Posisi terkini Anda')
    .openPopup();
}

map.locate({ setView: true, maxZoom: 6 });

markerDetectUser = null;

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
const datakapal = document.querySelector('.posisi-kapal');

datakapal.addEventListener('click', function () {
  const kapalIcon = L.icon({
    iconUrl: '../dist/img/ship-solid.svg',
    iconSize: [27, 32],
    iconAnchor: [16, 37],
    popupAnchor: [0, -30],
  });

  L.geoJSON(kapal, {
    pointToLayer: function (feature, layer) {
      return L.marker(layer, { icon: kapalIcon });
    },
  }).addTo(map);
});

// nelayan
const ikanIcon = L.icon({
  iconUrl: '/pages/user/dist/img/fish-fins-solid.svg',
  iconSize: [27, 32],
  iconAnchor: [16, 37],
  popupAnchor: [0, -30],
});

const nelayan = document.querySelector('#nelayan');

const listTitikIkan = [
  L.marker([2, 119], { icon: ikanIcon }),
  L.marker([-5, 110], { icon: ikanIcon }),
  L.marker([-5, 95], { icon: ikanIcon }),
  L.marker([-5, 95.9213], { icon: ikanIcon }),
  L.marker([-6, 97], { icon: ikanIcon }),
  L.marker([-8, 95.9213], { icon: ikanIcon }),
  L.marker([-7, 92], { icon: ikanIcon }),
  L.marker([-7, 100], { icon: ikanIcon }),
  L.marker([-10, 110], { icon: ikanIcon }),
  L.marker([-12, 115], { icon: ikanIcon }),
  L.marker([-12, 97], { icon: ikanIcon }),
  L.marker([-12, 99], { icon: ikanIcon }),
  L.marker([-12, 105], { icon: ikanIcon }),
  L.marker([-10, 105], { icon: ikanIcon }),
  L.marker([-10, 102], { icon: ikanIcon }),
];

nelayan.addEventListener('click', function (e) {
  const isChecked = e.target.checked;
  if (isChecked === true) {
    listTitikIkan.forEach(function (titikIkan) {
      titikIkan.addTo(map);
    });
  } else {
    listTitikIkan.forEach(function (titikIkan) {
      titikIkan.removeFrom(map);
    });
  }
});

// data transportasi
const kapalIcon = L.icon({
  iconUrl: '/pages/user/dist/img/ship-solid.svg',
  iconSize: [27, 32],
  iconAnchor: [16, 37],
  popupAnchor: [0, -30],
});

const transportasi = document.querySelector('#transportasi');
const listTitikKapal = [
  L.marker([-6, 107], { icon: kapalIcon }),
  L.marker([-7, 104], { icon: kapalIcon }),
  L.marker([-8, 106], { icon: kapalIcon }),
  L.marker([-3, 98], { icon: kapalIcon }),
  L.marker([-5, 119], { icon: kapalIcon }),
  L.marker([-8, 123], { icon: kapalIcon }),
  L.marker([-10, 113], { icon: kapalIcon }),
];

transportasi.addEventListener('click', function (e) {
  const isChecked = e.target.checked;
  if (isChecked === true) {
    listTitikKapal.forEach(function (titikKapal) {
      titikKapal.addTo(map);
    });
  } else {
    listTitikKapal.forEach(function (titikKapal) {
      titikKapal.removeFrom(map);
    });
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
