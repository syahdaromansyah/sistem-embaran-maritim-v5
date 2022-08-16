/* eslint-disable */
import getWeather from './getWeather';
import updateInformasiCuaca from './updateInformasiCuaca';
import bukaInformasiCuaca from './bukaInformasiCuaca';

navigator.geolocation.getCurrentPosition(async (pos) => {
  try {
    const { dataCuacaLokal, dataCuacaLaut } = await getWeather(
      pos.coords.latitude,
      pos.coords.longitude
    );

    updateInformasiCuaca(dataCuacaLokal, dataCuacaLaut);
  } catch (err) {
    console.info(err);
  } finally {
    bukaInformasiCuaca();
  }
});
