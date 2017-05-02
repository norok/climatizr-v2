import { WeatherBlock } from '../../../classes/weather-block';
import { Subscription } from 'rxjs/Rx';
import { WeatherService } from '../../../services/weather.service';
import { GeoLocation } from '../../../classes/geo-location';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'cl2-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent extends WeatherBlock implements OnInit {

  private weatherData:any = {};
  private currentWeather:any = this.weatherData;
  private todayForecast:any = {};

  constructor(private weatherService:WeatherService) {
    super();
    weatherService.weatherInformation$.subscribe(
      (data) => this.setWeatherData(data)
    );
  }

  ngOnInit() {
    super.ngOnInit();
  }

  private setWeatherData(data):void {
    this.currentWeather = data.currently;
    this.todayForecast = data.daily.data[0];

    this.setIcon('icon-current', this.currentWeather.icon);
  }

}
