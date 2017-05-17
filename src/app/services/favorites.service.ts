import { Subject } from 'rxjs';
import { LocalstorageService } from './localstorage.service';
import { Injectable } from '@angular/core';

@Injectable()
export class FavoritesService {

  private favorites:Array<any>;
  private _favoritedItemSource = new Subject<Boolean>();

  public favoritedItem$ = this._favoritedItemSource.asObservable();

  constructor(
    private localStorage:LocalstorageService,
  ) {}

  public addCity(city:string, state:string):void {
    if (this.favorites == null) this.favorites = [];
    let alreadyExists = false;

    for (let favorite of this.favorites) {
      // Adding favorite if necessary
      if (favorite.state == state && favorite.city == city) {
        alreadyExists = true;
      }
    }

    if (!alreadyExists) {
      let cityState = {
        'state': state,
        'city': city
      };

      this.favorites.push(cityState);
      this.localStorage.setJSONData('favoriteCities', this.favorites);
    }

    this.favoritesChanged();
  }

  private favoritesChanged():void {
    this._favoritedItemSource.next(true);
  }

  public removeCity(city:string, state:string):void {
    for (let index in this.favorites) {
      if (this.favorites[index].state == state && this.favorites[index].city == city) {
        this.favorites.splice(parseInt(index) , 1);
        break;
      }
    }
    this.localStorage.setJSONData('favoriteCities', this.favorites);
    this.favoritesChanged();
  }

  public getFavorites():any {
    this.favorites = this.localStorage.getJSONData('favoriteCities');
    return this.favorites;
  }

}
