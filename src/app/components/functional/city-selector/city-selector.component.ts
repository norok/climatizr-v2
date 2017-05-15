import { WeatherService } from '../../../services/weather.service';
import { CurrentWeatherComponent } from '../../structural/current-weather/current-weather.component';
import { EventEmitter } from 'events';
import { GeoLocation } from '../../../classes/geo-location';
import { NgForm } from '@angular/forms/src/directives';
import { Component, OnInit, Input, Output } from '@angular/core';

import { City } from '../../../classes/city';
import { State } from '../../../classes/state';
import { CitiesStatesService } from '../../../services/cities-states.service';
import { LocationService } from '../../../services/location.service';
import { LocalstorageService } from '../../../services/localstorage.service';

declare var $:any;

@Component({
  selector: 'cl2-city-selector',
  templateUrl: './city-selector.component.html',
  styleUrls: ['./city-selector.component.scss'],
  providers: [CitiesStatesService, LocationService, LocalstorageService],
})
export class CitySelectorComponent implements OnInit {

  public currentState: State;
  public currentCity:string = '';
  public ready:Boolean = false;
  public states:State[];

  private defaults:any = {
    state: 'SP',
    city: 'Campinas'
  }

  private favoriteCity:any = null;
  private isFavorite:boolean = false;

  constructor(
    private citiesStatesService: CitiesStatesService,
    private locationService: LocationService,
    private weatherService:WeatherService,
    private localStorage:LocalstorageService,
  ) {}

  ngOnInit():void {
    this.getStates();
  }

  private getStates():void {
    this.citiesStatesService
        .getLocations()
        .then(states => {
          this.states = states;

          this.getFavorite();

          this.currentCity  = this.favoriteCity == null ? this.defaults.city : this.favoriteCity.city;
          let favState      = this.favoriteCity == null ? this.defaults.state : this.favoriteCity.state;

          var matcher = new RegExp( "^" + $.ui.autocomplete.escapeRegex( favState ), "i" );
          this.currentState = this.states.filter((value:any) => {
            return matcher.test( value.getAbbr() );
          })[0];

          this.updateAutocomplete();

          this.updateLocation(this.currentState, this.currentCity);
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
      this.updateLocation(this.currentState, this.currentCity);
    }
  }

  private updateLocation(state, city):void {
    this.getFavorite();
    this.isFavorite = (state.abbr == this.favoriteCity.state && city == this.favoriteCity.city);

    this.locationService
        .getPreciseLocation(state, city)
        .subscribe(location => {
          this.weatherService.getWeatherInformation(location);
        });
  }

  private saveFavorite():void {
    this.isFavorite = true;

    let object = {
      'state': this.currentState.getAbbr(),
      'city': this.currentCity
    };

    this.localStorage.setJSONData('favoriteCity', object);
  }

  private getFavorite():void {
    this.favoriteCity = this.localStorage.getJSONData('favoriteCity');
  }

}
