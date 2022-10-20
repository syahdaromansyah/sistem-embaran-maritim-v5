import sixteenCompassDirID from './sixteenCompassDirID';

export default function updateInformasiCuaca(dataCuacaLokal, dataCuacaLaut) {
  // const nilaiLokasi = document.querySelector('.nilai-lokasi');  

  const nilaiTempDarat = document.querySelector('.nilai-temp-darat');

  const nilaiKSwell = document.querySelector('.nilai-k-swell');
  const nilaiAnginLaut = document.querySelector('.nilai-angin-laut');
  const nilaiCurahHujan = document.querySelector('.nilai-curah-hujan');
  const nilaiTempLaut = document.querySelector('.nilai-temp-laut');
  const arahSwell = document.querySelectorAll('.fa-location-arrow');
  
  arahSwell[0].style.transform = `rotate(${sixteenCompassDirID[dataCuacaLaut.swellDir16Point] - 45}deg)`
  arahSwell[1].style.transform = `rotate(${sixteenCompassDirID[dataCuacaLaut.winddir16Point] + 135}deg)`
  // nilaiLokasi.textContent = `${Math.round(dataCuacaLokal.lat *1e4)/1e4}°${dataCuacaLokal.lat < 0 ? "S" : "N"}, ${Math.round(dataCuacaLokal.lng *1e4)/1e4}°E`;
  
  nilaiTempDarat.textContent = dataCuacaLokal.current.temp_c;
  nilaiKSwell.textContent = dataCuacaLaut.swellHeight_m;
  nilaiAnginLaut.textContent = dataCuacaLaut.windspeedKmph;
  nilaiCurahHujan.textContent = dataCuacaLaut.precipMM;
  nilaiTempLaut.textContent = dataCuacaLaut.tempC;
}
