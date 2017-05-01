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

declare var $:any;

@Component({
  selector: 'cl2-city-selector',
  templateUrl: './city-selector.component.html',
  styleUrls: ['./city-selector.component.scss'],
  providers: [CitiesStatesService, LocationService],
})
export class CitySelectorComponent implements OnInit {

  private states:State[];
  private currentState: State;
  private currentCity:string = '';
  private ready:Boolean = false;
  private defaults:any = {
    state: 'SP',
    city: 'Campinas'
  }

  constructor(
    private citiesStatesService: CitiesStatesService,
    private locationService: LocationService,
    private weatherService:WeatherService
  ) {}

  ngOnInit():void {
    this.getStates();
  }

  private getStates():void {
    this.citiesStatesService
        .getLocations()
        .then(states => {
          this.states = states;

          var matcher = new RegExp( "^" + $.ui.autocomplete.escapeRegex( this.defaults.state ), "i" );
          this.currentState = this.states.filter((value:any) => {
            return matcher.test( value.getAbbr() );
          })[0];

          this.updateAutocomplete();
          this.currentCity = this.defaults.city;
          this.updateLocation(this.currentState, this.currentCity);
          this.ready = true;
        });
  }

  private stateChange(state:State):void {
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

  private onSubmit(f: NgForm, event:Event):void {
    event.preventDefault();

    if (f.valid) {
      this.updateLocation(this.currentState, this.currentCity);
    }
  }

  private updateLocation(state, city) {
    this.locationService
        .getPreciseLocation(state, city)
        .subscribe(location => {
          this.weatherService.getWeatherInformation(location);
        });
  }

}
