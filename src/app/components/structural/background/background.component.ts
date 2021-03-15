import { Component } from '@angular/core';

@Component({
  selector: 'cl2-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent {

  constructor() {}

  get timeClass():string {
    const now = new Date(Date.now());
    const hour:number = now.getHours();
    return hour < 18 && hour > 5 ? 'day' : 'night';
  }

}
