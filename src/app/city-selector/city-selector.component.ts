import { NgForm } from '@angular/forms/src/directives';
import { State } from '../state';
import { Observable, Subject } from 'rxjs/Rx';
import { CitiesStatesService } from '../cities-states.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cl2-city-selector',
  templateUrl: './city-selector.component.html',
  styleUrls: ['./city-selector.component.scss'],
  providers: [CitiesStatesService],
})
export class CitySelectorComponent implements OnInit {

  private states:State[];
  private currentState: State;

  constructor(
    private citiesStatesService: CitiesStatesService
  ) {}

  private getStates():void {
    this.citiesStatesService
        .getLocations()
        .then(states => this.states = states);
  }

  ngOnInit():void {
    this.getStates();
  }

  private stateChange(state:State):void {
    this.currentState = state;
  }

  onSubmit(f: NgForm):void {
    console.log(f.controls['form-city']);
    console.log(f.controls['form-state'].value.getAbbr());
  }

}
