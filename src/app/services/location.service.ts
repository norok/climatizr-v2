import { HttpClient, HttpParams } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { GeoLocation } from '../classes/geo-location';
import { City } from '../classes/city';
import { State } from '../classes/state';


const BASE_URL = 'https://maps.google.com/maps/api/geocode/json';

@Injectable()
export class LocationService {

  private currentLocation: GeoLocation = null;

  constructor(private http: HttpClient) { }

  /**
   * Returns a GeoLocation object with the latitude and longitude of the given location
   *
   * @param state State
   * @param city String
   */
  public getPreciseLocation(state: State, city: String): Observable<GeoLocation> {
    const params = new HttpParams({
      fromObject: {
        'address': `${state.getAbbr()},${city}`,
        'key': 'AIzaSyCYtCAVso06Kg23Zf6eyHvTKb7MN6jXsd0'
      }
    });

    return this.http
            .get(BASE_URL, { params: params })
            .pipe(
              map( (resp: Response) => this.transformData(resp) )
            );
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
