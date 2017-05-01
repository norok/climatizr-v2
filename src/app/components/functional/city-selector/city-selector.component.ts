import { City } from '../../../classes/city';
import { NgForm } from '@angular/forms/src/directives';
import { State } from '../../../classes/state';
import { CitiesStatesService } from '../../../services/cities-states.service';
import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'cl2-city-selector',
  templateUrl: './city-selector.component.html',
  styleUrls: ['./city-selector.component.scss'],
  providers: [CitiesStatesService],
})
export class CitySelectorComponent implements OnInit {

  private states:State[];
  private currentState: State;
  private ready:Boolean = false;
  private formCity:string = '';

  constructor(
    private citiesStatesService: CitiesStatesService
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

  private onSubmit(f: NgForm):void {
    console.log(f.controls['form-city'].value);
    console.log(f.controls['form-state'].value.getAbbr());

    console.log(this.currentState.getName());
    console.log(this.formCity);
  }

}
