import { environment } from './../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { GeoLocation } from '../classes/geo-location';
import { State } from '../classes/state';

const BASE_URL = environment.GeocodeAPIEndpoint;
const API_KEY = environment.GeocodeAPIKey;

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
        'query': `${city}, ${state.getAbbr()}`,
        'access_key': API_KEY
      }
    });

    return this.http
            .get(`${BASE_URL}/forward`, { params })
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
    const geomLocation = data.data[0];
    const output = new GeoLocation(geomLocation.latitude, geomLocation.longitude);

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
