import { WeatherService } from '../../../services/weather.service';
import { GeoLocation } from '../../../classes/geo-location';
import { Component, OnInit } from '@angular/core';

declare var Skycons:any;

@Component({
  selector: 'cl2-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss'],
  providers: [WeatherService]
})
export class CurrentWeatherComponent implements OnInit {

  private skycons:any;
  private currentWeather:any = {};
  private todayForecast:any = {};

  constructor(private weatherService:WeatherService) { }

  ngOnInit() {
    this.skycons = new Skycons({"color": "#FFF"});
  }

  private setIcon(id, iconId) {
    switch (iconId) {
      case 'clear-day':
        this.skycons.set(id, Skycons.CLEAR_DAY);
        break;
      case 'clear-night':
        this.skycons.set(id, Skycons.CLEAR_NIGHT);
        break;
      case 'partly-cloudy-day':
        this.skycons.set(id, Skycons.PARTLY_CLOUDY_DAY);
        break;
      case 'partly-cloudy-night':
        this.skycons.set(id, Skycons.PARTLY_CLOUDY_NIGHT);
        break;
      case 'cloudy':
        this.skycons.set(id, Skycons.CLOUDY);
        break;
      case 'rain':
        this.skycons.set(id, Skycons.RAIN);
        break;
      case 'sleet':
        this.skycons.set(id, Skycons.SLEET);
        break;
      case 'snow':
        this.skycons.set(id, Skycons.SNOW);
        break;
      case 'wind':
        this.skycons.set(id, Skycons.WIND);
        break;
      case 'fog':
        this.skycons.set(id, Skycons.FOG);
        break;
    }
    this.skycons.play();
  }

  public setWeatherByLocation(location:GeoLocation):void {
    this.weatherService
      .getWeatherInformation(location)
      .subscribe(data => {
        this.currentWeather = data.currently;
        this.todayForecast = data.daily.data[0];
        console.log(data);
        
        this.setIcon('icon-current', this.currentWeather.icon);
      });

  }

}
