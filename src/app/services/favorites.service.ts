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

    const alreadyExists = !!this.favorites.find( fav => fav.state === state && fav.city === city);

    if (!alreadyExists) {
      const cityState = {
        state,
        city
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
    const index = this.favorites.findIndex( fav => fav.city === city && fav.state === state);

    if (index >= 0) {
      this.favorites.splice(index , 1);
    } else {
      return;
    }

    this.localStorage.setJSONData('favoriteCities', this.favorites);
    this.favoritesChanged();
  }

  public getFavorites():any {
    const storage = this.localStorage.getJSONData('favoriteCities');
    this.favorites = storage != null ? storage : [];
    return this.favorites;
  }

}
