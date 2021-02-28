// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  GeocodeAPIEndpoint: 'http://api.positionstack.com/v1',
  WeatherAPIEndpoint: 'https://api.openweathermap.org/data/2.5/onecall',
  GeocodeAPIKey: '615860eac11857c1868fe22792cb6c3c',
  WeatherApiKey: 'eb8a795d9750c67ed7fbcc96d3ecd05a',
};
