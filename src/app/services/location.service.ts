import { GeoLocation } from '../classes/geo-location';
import { Http } from '@angular/http';

import { City } from '../classes/city';
import { State } from '../classes/state';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class LocationService {

  private baseUrl:string = '//maps.google.com/maps/api/geocode/json';

  constructor(private http:Http) { }

  public getPreciseLocation(state:State, city:City):Promise<GeoLocation> {
    let that = this;
    let params:URLSearchParams = new URLSearchParams();
    params.set('address', state.getAbbr() + ',' + city.getName());
    params.set('sensor', 'false');

    return this.http.get(this.baseUrl, {'params': params})
                    .toPromise()
                    .then(response => that.transformData(response))
                    .catch(this.handleError);
  }

  /**
   * Transform the response data from the json into a State Array
   * 
   * @param data 
   */
  private transformData(data):GeoLocation {
    let output = new GeoLocation(data.geometry.location.lat, data.geometry.location.lng);

    return output;
  }

  /**
   * Handles the promise errors
   * 
   * @param error 
   */
  private handleError(error: any):Promise<any> {
    console.error('Ocorreu um erro ao carregar os estados', error);
    return Promise.reject(error.message || error);
  }

}
