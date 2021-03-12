import config from './config.json';

export const environment = {
  ...config,
  production: true,
  envName: 'prod',
  GoogleGeocodeAPIEndpoint: 'https://maps.google.com/maps/api/geocode/json',
  WeatherAPIEndpoint: 'https://api.openweathermap.org/data/2.5/onecall',
};
