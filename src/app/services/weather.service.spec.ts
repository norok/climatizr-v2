import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { GeoLocation } from './../classes/geo-location';
import { TestBed } from '@angular/core/testing';

import { WeatherService } from './weather.service';

describe('WeatherService', () => {
  let service: WeatherService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [WeatherService]
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(WeatherService);
  });

  it('should be able to retrieve data from API via GET with provided location', () => {
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
    });

    service.getWeatherInformation(location);

    const req = httpTestingController.expectOne('http://mock.com/weather?units=metric&lang=pt&lat=-22.9056&lon=-47.0678&appid=abc123');
    expect(req.request.method).toEqual('GET');
    req.flush(testData);

    httpTestingController.verify();
  });
});
