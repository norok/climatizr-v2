import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cl2-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent implements OnInit {

  private now:Date;

  constructor() { }

  ngOnInit() {}

  private getDayTimeClass(hour:number):string {
    if (hour < 18 && hour > 5) {
      return 'night';
    }
    else {
      return 'day';
    }
  }
  
  public timeClass():string {
    this.now = new Date(Date.now());
    
    let hour:number = this.now.getHours();

    return this.getDayTimeClass(hour);
  }

}
