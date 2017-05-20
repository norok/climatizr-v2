import { LoaderService } from '../../../services/loader.service';
import { FavoritesService } from '../../../services/favorites.service';
import { NavService } from '../../../services/nav.service';
import { WeatherService } from '../../../services/weather.service';
import { CurrentWeatherComponent } from '../../structural/current-weather/current-weather.component';
import { EventEmitter } from 'events';
import { GeoLocation } from '../../../classes/geo-location';
import { NgForm } from '@angular/forms/src/directives';
import { Component, OnInit, OnDestroy, Input, Output } from '@angular/core';

import { City } from '../../../classes/city';
import { State } from '../../../classes/state';
import { CitiesStatesService } from '../../../services/cities-states.service';
import { LocationService } from '../../../services/location.service';
import { Subscription } from "rxjs";

declare var $:any;

@Component({
  selector: 'cl2-city-selector',
  templateUrl: './city-selector.component.html',
  styleUrls: ['./city-selector.component.scss'],
  providers: [],
})
export class CitySelectorComponent implements OnInit, OnDestroy {

  public currentState: State;
  public currentCity:string = '';
  public ready:Boolean = false;
  public states:State[];
  public loaderStatus:Boolean = true;

  private defaults:any = {
    state: 'SP',
    city: 'Campinas'
  }

  private favorites:Array<any> = [];
  private isFavorite:boolean = false;
  private favSubscription:Subscription;
  private navSubscription:Subscription;
  private loaderSubscription:Subscription;

  constructor(
    private citiesStatesService: CitiesStatesService,
    private locationService: LocationService,
    private weatherService:WeatherService,
    private navService:NavService,
    private favoritesService:FavoritesService,
    private loaderService:LoaderService,
  ) {}

  ngOnInit():void {
    this.favSubscription = this.favoritesService.favoritedItem$
      .subscribe(item => {
        this.getFavorites();
      });

    this.navSubscription = this.navService.navItem$
      .subscribe(nav => {
        this.stateChange(this.getStateByAbbr(nav.state));
        this.currentCity = nav.city;
        this.updateLocation();
      });

    this.loaderSubscription = this.loaderService.loaderItem$
      .subscribe(data => {
        this.setLoader(data)
      });

    this.getStates();
  }

  ngOnDestroy():void {
    this.navSubscription.unsubscribe();
    this.favSubscription.unsubscribe();
  }

  private getStates():void {
    this.citiesStatesService
      .getLocations()
      .then(states => {
        this.states = states;
        this.getFavorites();

        let fave = !!this.favorites ? this.favorites[0] : false;
        let favState;

        if (fave) {
          this.currentCity  = fave.city;
          favState = fave.state;
        }
        else {
          this.currentCity = this.defaults.city;
          favState = this.defaults.state;
        }

        this.currentState = this.getStateByAbbr(favState);

        this.updateAutocomplete();

        this.updateLocation();
        this.ready = true;
      });
  }

  public stateChange(state:State):void {
    this.currentState = state;

    this.updateAutocomplete();
  }

  private updateAutocomplete():void {
    let that = this;
    let citiesList = this.currentState.getCities();

    $('#form-city').autocomplete({
      source: function(request, response) {
        var matcher = new RegExp( "^" + $.ui.autocomplete.escapeRegex( request.term ), "i" );
        response(
          citiesList.filter((value:any) => {
            return matcher.test( value.getName() );
          })
        );
      },
      minLenght: 0,
      focus: function(event, ui) {
        that.currentCity = ui.item.getName();
        return false;
      },
      select: function(event, ui) {
        that.currentCity = ui.item.getName();
        return false;
      },
    })
    .autocomplete('instance')._renderItem = function(ul, item:City) {
      return $('<li>')
        .append(item.getName())
        .appendTo(ul);
    };
  }

  public onSubmit(f: NgForm, event:Event):void {
    event.preventDefault();

    if (f.valid) {
      this.updateLocation();
    }
  }

  private updateLocation():void {
    this.loaderService.startLoader();
    let city = this.currentCity;
    let state = this.currentState;

    this.getFavorites();

    this.locationService
        .getPreciseLocation(state, city)
        .subscribe(location => {
          this.weatherService.getWeatherInformation(location);
        });
  }

  private getStateByAbbr(abbr:string):State {
    var matcher = new RegExp( "^" + $.ui.autocomplete.escapeRegex( abbr ), "i" );
    return this.states.filter((value:any) => {
      return matcher.test( value.getAbbr() );
    })[0];
  }

  public saveFavorite():void {
    if (this.currentCityIsFavorite()) {
      this.favoritesService.removeCity(this.currentCity, this.currentState.getAbbr());
    }
    else {
      this.favoritesService.addCity(this.currentCity, this.currentState.getAbbr());
    }
  }

  private getFavorites():void {
    this.favorites = this.favoritesService.getFavorites();
  }

  public currentCityIsFavorite():boolean {
    for (let favorite of this.favorites) {
      if (favorite.city == this.currentCity && favorite.state == this.currentState.getAbbr()) {
        return true;
      }
    }

    return false;
  }

  private setLoader(status):void {
    console.log(status);
    this.loaderStatus = status;
  }

}
