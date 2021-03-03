import { Injectable } from '@angular/core';

import { State } from '../classes/state';
import { City } from '../classes/city';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class CitiesStatesService {

  private statesUrl = './assets/estados-cidades.json';

  constructor(private http: HttpClient) {}

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
    const states:State[] = [];

    for (let estado of data.estados) {
      const cities:City[] = [];

      for (let cidade of estado.cidades) {
        let city = new City(cidade);
        cities.push(city);
      }

      let state = new State(estado.nome, estado.sigla, cities);
      states.push(state);
    }

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
