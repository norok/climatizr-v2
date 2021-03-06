// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

import config from './config.json';

export const environment = {
  ...config,
  production: false,
  GeocodeAPIEndpoint: 'http://api.openweathermap.org/geo/1.0/direct',
  WeatherAPIEndpoint: 'https://api.openweathermap.org/data/2.5/onecall'
};
