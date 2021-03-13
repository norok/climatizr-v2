import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class NavService {

  private currentCity:any = {};
  private _navItemSource = new Subject<any>();

  public navItem$ = this._navItemSource.asObservable();

  constructor() {}

  public changeCity(city, state):void {
    this.currentCity = {
      city,
      state
    };
    this._navItemSource.next(this.currentCity);
  }
}
