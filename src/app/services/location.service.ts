import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http, URLSearchParams, RequestOptions, Response } from '@angular/http';

import { GeoLocation } from '../classes/geo-location';
import { City } from '../classes/city';
import { State } from '../classes/state';

import 'rxjs/add/operator/map';

const BASE_URL = '//maps.google.com/maps/api/geocode/json';

@Injectable()
export class LocationService {

  private currentLocation: GeoLocation = null;

  constructor(private http: Http) { }

  /**
   * Returns a GeoLocation object with the latitude and longitude of the given location
   *
   * @param state State
   * @param city String
   */
  public getPreciseLocation(state: State, city: String): Observable<GeoLocation> {
    const params = new URLSearchParams();
    const options = new RequestOptions();

    params.set('address', state.getAbbr() + ',' + city);
    params.set('sensor', 'false');
    options.search = params;

    return this.http
            .get(BASE_URL, options)
            .map((resp: Response) => this.transformData(resp.json()));
  }

  /**
   * Transform the response data from the json into a State Array
   *
   * @param data
   */
  private transformData(data): GeoLocation {
    const geomLocation = data.results[0].geometry.location;
    const output = new GeoLocation(geomLocation.lat, geomLocation.lng);

    return output;
  }

  /**
   * Handles the promise errors
   *
   * @param error
   */
  private handleError(error: any): Promise<any> {
    console.error('Ocorreu um erro ao carregar os estados', error);
    return Promise.reject(error.message || error);
  }

}
