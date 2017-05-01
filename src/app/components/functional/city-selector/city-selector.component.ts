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
  @Input()
    compCurrentWeather:CurrentWeatherComponent;

  private states:State[];
  private currentState: State;
  private ready:Boolean = false;
  private formCity:string = '';

  constructor(
    private citiesStatesService: CitiesStatesService,
    private locationService: LocationService
  ) {}

  ngOnInit():void {
    this.getStates();
  }

  private getStates():void {
    this.citiesStatesService
        .getLocations()
        .then(states => {
          this.states = states;
          this.currentState = this.states[0];
          this.updateAutocomplete();
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
        that.formCity = ui.item.getName();
        return false;
      },
      select: function(event, ui) {
        that.formCity = ui.item.getName();
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
      this.locationService
        .getPreciseLocation(f.controls['form-state'].value, f.controls['form-city'].value)
        .subscribe(location => {
          this.compCurrentWeather.setWeatherByLocation(location);
        });
    }
  }

}
