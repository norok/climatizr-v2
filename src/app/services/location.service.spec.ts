import { City } from './../classes/city';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { LocationService } from './location.service';
import { State } from 'app/classes/state';
import { GeoLocation } from 'app/classes/geo-location';

describe('LocationService', () => {
  let service: LocationService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LocationService]
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(LocationService);
  });

  it('should return the geolocation based on provided City and <State>', () => {
    const testData: any = [
      {
        country: "BR",
        lat: -22.9056,
        lon: -47.0608,
        name: "Campinas"
      }
    ];

    expect(service).toBeTruthy();

    service.getPreciseLocation(new State('São Paulo', 'SP', [new City('Campinas')]), 'Campinas')
      .subscribe(data => {
        expect(data).toEqual(new GeoLocation(-22.9056, -47.0608));
      });

    const req = httpTestingController.expectOne('http://mock.com/geo?q=Campinas,SP,BR&appid=abc123&limit=1');
    expect(req.request.method).toEqual('GET');
    req.flush(testData);

    httpTestingController.verify();
  });
});
