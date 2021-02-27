// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  GoogleGeocodeAPIEndpoint: 'https://maps.google.com/maps/api/geocode/json',
  WeatherAPIEndpoint: 'https://api.openweathermap.org/data/2.5/onecall',
  GeocodeAPIKey: 'AIzaSyCYtCAVso06Kg23Zf6eyHvTKb7MN6jXsd0',
  WeatherApiKey: 'eb8a795d9750c67ed7fbcc96d3ecd05a',
};
