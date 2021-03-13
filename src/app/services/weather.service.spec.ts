import { LoaderService } from 'app/services/loader.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { GeoLocation } from './../classes/geo-location';
import { TestBed } from '@angular/core/testing';

import { WeatherService } from './weather.service';

describe('WeatherService', () => {
  let service: WeatherService;
  let loader: LoaderService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [WeatherService, LoaderService]
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(WeatherService);
    loader = TestBed.inject(LoaderService);
  });

  it('should be able to retrieve data from API via GET with provided location', done => {
    const testData: any = {
      current: {},
      daily: {},
      hourly: {},
      lat: -22.9056,
      lon: -47.0608,
      minutely: {},
      timezone: "America/Sao_Paulo",
      timezone_offset: -10800
    };
    const location: GeoLocation = new GeoLocation(-22.9056, -47.0678);

    const observed = service.weatherInformation$;

    expect(service).toBeTruthy();
    observed.subscribe(data => {
      expect(data).toEqual(testData);

      done();
    });

    service.getWeatherInformation(location);
    expect(loader.getStatus()).toBeTrue();

    const req = httpTestingController.expectOne('http://mock.com/weather?units=metric&lang=pt&lat=-22.9056&lon=-47.0678&appid=abc123');
    expect(req.request.method).toEqual('GET');
    req.flush(testData);

    httpTestingController.verify();
  });
});
