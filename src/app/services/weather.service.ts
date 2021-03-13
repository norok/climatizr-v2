import { LoaderService } from 'app/services/loader.service';
import { environment } from './../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable, Subject } from 'rxjs';
import { GeoLocation } from '../classes/geo-location';
import { Injectable } from '@angular/core';

const BASE_URL = environment.WeatherAPIEndpoint;
const KEY = environment.WeatherApiKey;

@Injectable()
export class WeatherService {

  private weatherData:Subject<any> = new Subject<any>();

  constructor(
    private http: HttpClient,
    private loaderService: LoaderService
  ) {}

  public weatherInformation$ = this.weatherData.asObservable();

  public getWeatherInformation(location:GeoLocation):void {
    this.loaderService.startLoader();

    this.getInfo(location)
        .subscribe(data => {
          this.weatherData.next(data);
          this.loaderService.endLoader();
        });
  }

  private getInfo(location:GeoLocation):Observable<any> {
    let params = new HttpParams({
      fromObject: {
        units: 'metric',
        lang: 'pt',
        lat: location.getLatitude(),
        lon: location.getLongitude(),
        appid: KEY
      }
    });

    return this.http.get(BASE_URL, { params })
  }

}
