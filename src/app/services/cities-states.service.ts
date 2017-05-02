import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import { State } from '../classes/state';
import { City } from '../classes/city';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CitiesStatesService {

  private statesUrl = './assets/estados-cidades.json';
  private ready = false;

  constructor(private http: Http) {}

  /**
   * Returns a promise for the Cities and States transformed data
   */
  public getLocations():Promise<State[]> {
    let that = this;

    return this.http.get(this.statesUrl)
               .toPromise()
               .then(response => that.transformData(response))
               .catch(this.handleError);
  }

  /**
   * Transform the response data from the json into a State Array
   *
   * @param data
   */
  private transformData(data):State[] {
    let states:State[] = [];

    for (let estado of data.json().estados) {
      let cities:City[] = [];

      for (let cidade of estado.cidades) {
        let city = new City(cidade);
        cities.push(city);
      }

      let state = new State(estado.nome, estado.sigla, cities);
      states.push(state);
    }

    this.ready = true;
    return states;
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
