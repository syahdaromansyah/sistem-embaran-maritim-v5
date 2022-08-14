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

  // ikan
  const ikanIcon = L.icon({
    iconUrl: '/pages/user/dist/img/fish-fins-solid.svg',
    iconSize: [27, 32],
    iconAnchor: [16, 37],
    popupAnchor: [0, -30],
  });

  L.marker([2, 119], { icon: ikanIcon }).addTo(map);
  L.marker([-5, 110], { icon: ikanIcon }).addTo(map);
  L.marker([-5, 95], { icon: ikanIcon }).addTo(map);
  L.marker([-5, 95.9213], { icon: ikanIcon }).addTo(map);
  L.marker([-6, 97], { icon: ikanIcon }).addTo(map);
  L.marker([-8, 95.9213], { icon: ikanIcon }).addTo(map);
  L.marker([-7, 92], { icon: ikanIcon }).addTo(map);
  L.marker([-7, 100], { icon: ikanIcon }).addTo(map);
  L.marker([-10, 110], { icon: ikanIcon }).addTo(map);
  L.marker([-12, 115], { icon: ikanIcon }).addTo(map);
  L.marker([-12, 97], { icon: ikanIcon }).addTo(map);
  L.marker([-12, 99], { icon: ikanIcon }).addTo(map);
  L.marker([-12, 105], { icon: ikanIcon }).addTo(map);
  L.marker([-10, 105], { icon: ikanIcon }).addTo(map);
  L.marker([-10, 102], { icon: ikanIcon }).addTo(map);
});

// Tanggal jam
document.querySelector('.tanggaljam').textContent = format(
  new Date(),
  'P, kk:mm:ss'
);
