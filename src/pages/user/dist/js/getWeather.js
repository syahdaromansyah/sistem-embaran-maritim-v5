import axios from 'axios';
import apiKey from '../../../../api-key';

export default async function getWeather(lat, lng) {
  const responseCuacaLokal = await axios.get(
    'http://api.weatherapi.com/v1/current.json',
    {
      params: {
        q: `${lat},${lng}`,
        key: apiKey.weatherAPI,
      },
    }
  );

  const responseCuacaLaut = await axios.get(
    'http://api.worldweatheronline.com/premium/v1/marine.ashx',
    {
      params: {
        q: `${lat},${lng}`,
        key: apiKey.marineAPI,
        format: 'json',
      },
    }
  );

  const dataCuacaLokal = responseCuacaLokal.data;
  const dataCuacaLaut = responseCuacaLaut.data.data.weather[0].hourly[7];

  return {
    dataCuacaLokal,
    dataCuacaLaut,
  };
}
