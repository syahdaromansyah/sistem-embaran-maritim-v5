import sixteenCompassDirID from './sixteenCompassDirID';

export default function updateInformasiCuaca(dataCuacaLokal, dataCuacaLaut) {
  const nilaiLokasi = document.querySelector('.nilai-lokasi');

  const nilaiAnginDarat = document.querySelector('.nilai-angin-darat');
  const nilaiTempDarat = document.querySelector('.nilai-temp-darat');

  const nilaiKSwell = document.querySelector('.nilai-k-swell');
  const nilaiASwell = document.querySelector('.nilai-a-swell');
  const nilaiAnginLaut = document.querySelector('.nilai-angin-laut');
  const nilaiAAnginLaut = document.querySelector('.nilai-a-angin-laut');
  const nilaiCurahHujan = document.querySelector('.nilai-curah-hujan');
  const nilaiTempLaut = document.querySelector('.nilai-temp-laut');

  nilaiLokasi.textContent = `${dataCuacaLokal.location.name}, ${dataCuacaLokal.location.region}`;
  nilaiAnginDarat.textContent = dataCuacaLokal.current.wind_kph;
  nilaiTempDarat.textContent = dataCuacaLokal.current.temp_c;

  nilaiKSwell.textContent = dataCuacaLaut.swellHeight_m;
  nilaiASwell.textContent = sixteenCompassDirID[dataCuacaLaut.swellDir16Point];
  nilaiAnginLaut.textContent = dataCuacaLaut.windspeedKmph;
  nilaiAAnginLaut.textContent =
    sixteenCompassDirID[dataCuacaLaut.winddir16Point];
  nilaiCurahHujan.textContent = dataCuacaLaut.precipMM;
  nilaiTempLaut.textContent = dataCuacaLaut.tempC;
}
