import { NgForm } from '@angular/forms/src/directives';
import { State } from '../../../classes/state';
import { Observable, Subject } from 'rxjs/Rx';
import { CitiesStatesService } from '../../../services/cities-states.service';
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
  private ready:Boolean = false;

  constructor(
    private citiesStatesService: CitiesStatesService
  ) {}

  private getStates():void {
    this.citiesStatesService
        .getLocations()
        .then(states => {
          this.states = states;
          this.ready = true;
        });
  }

  ngOnInit():void {
    this.getStates();
  }

  private stateChange(state:State):void {
    this.currentState = state;
  }

  private onSubmit(f: NgForm):void {
    console.log(f.controls['form-city']);
    console.log(f.controls['form-state'].value.getAbbr());
  }

}
