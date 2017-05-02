import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../../services/weather.service';

declare var $:any;

@Component({
  selector: 'cl2-forecast-info',
  templateUrl: './forecast-info.component.html',
  styleUrls: ['./forecast-info.component.scss']
})
export class ForecastInfoComponent implements OnInit {

  private forecast:Array<any> = [];
  private todos:Array<string> = [];

  constructor(private weatherService:WeatherService) {
    weatherService.weatherInformation$.subscribe(
      (data) => {
        let array:Array<any> = data.daily.data;
        array.shift(); // Removes the current day since we don't need it
        this.forecast = array;

        setTimeout(() => {
          $('[data-toggle="popover"]').popover();
        })
      }
    );
  }

  ngOnInit() {}

}
