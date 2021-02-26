
import {map} from 'rxjs/operators';
import { LoaderService } from './loader.service';
import { Observable, Subject } from 'rxjs';
import { GeoLocation } from '../classes/geo-location';
import { Http, URLSearchParams, RequestOptions, Response, Jsonp } from '@angular/http';
import { Injectable } from '@angular/core';



const BASE_URL = 'https://api.darksky.net/forecast/';
const KEY = 'd2deeb708d6b5a2f85682a02f40a8d9d';

@Injectable()
export class WeatherService {

  private weatherData:Subject<any> = new Subject<any>();

  constructor(
    private jsonp:Jsonp,
  ) {}

  public weatherInformation$ = this.weatherData.asObservable();

  public getWeatherInformation(location:GeoLocation):void {
    this.getInfo(location)
        .subscribe(data => {
          this.weatherData.next(data);
        });
  }

  private getInfo(location:GeoLocation):Observable<any> {
    let params = new URLSearchParams();
    let options = new RequestOptions();

    params.set('units',    'si');
    params.set('lang',     'pt');
    params.set('callback', 'JSONP_CALLBACK');
    options.search = params;

    let url = BASE_URL + KEY + '/' + location.getLatitude() + ',' + location.getLongitude();

    return this.jsonp
               .get(url, options).pipe(
               map( resp => resp.json() ));
  }

}
