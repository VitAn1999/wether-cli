import axios from 'axios';
import { getKeyValue } from './storage.services.js';

const getWeather = async (city) => {
  const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
  const token = process.env.TOKEN ?? (await getKeyValue('token'));
  if (!token) {
    throw new Error('Token is undefined. Define token via -t [token]');
  }
  const { lat, lon } = await getCityCoords(city, token);
  const { data } = await axios.get(baseUrl, {
    params: { lat, lon, appid: token, units: 'metric', lang: 'ru' }
  });
  return data;
};

const getCityCoords = async (city, token) => {
  const baseUrl = 'http://api.openweathermap.org/geo/1.0/direct';
  const { data } = await axios.get(baseUrl, {
    params: { q: city, appid: token }
  });
  return {
    lat: data[0].lat,
    lon: data[0].lon
  };
};

export { getWeather };
