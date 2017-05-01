import { Observable } from 'rxjs/Rx';
import { GeoLocation } from '../classes/geo-location';
import { Http, URLSearchParams, RequestOptions, Response, Jsonp } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';

const BASE_URL = 'https://api.darksky.net/forecast/';
const KEY = 'd2deeb708d6b5a2f85682a02f40a8d9d';

@Injectable()
export class WeatherService {

  constructor(private jsonp:Jsonp, private http:Http) {}

  public getWeatherInformation(location:GeoLocation):Observable<any> {
    let params = new URLSearchParams();
    let options = new RequestOptions();

    params.set('units',    'si');
    params.set('lang',     'pt');
    params.set('callback', 'JSONP_CALLBACK');
    options.search = params;

    let url = BASE_URL + KEY + '/' + location.getLatitude() + ',' + location.getLongitude();

    return this.jsonp
            .get(url, options)
            .map((resp: Response) => resp.json());
  }

}
