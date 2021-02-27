import { IconsService } from './../../../services/icons.service';
import { LoaderService } from '../../../services/loader.service';
import { WeatherBlock } from '../../../classes/weather-block';
import { Subscription } from 'rxjs';
import { WeatherService } from '../../../services/weather.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'cl2-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent extends WeatherBlock implements OnInit {

  public currentWeather:any = {};
  public todayForecast:any = {};
  public loaderStatus:Boolean = true;

  constructor(
    private weatherService:WeatherService,
    private loaderService:LoaderService,
    private icons:IconsService
  ) {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
    this.weatherService.weatherInformation$
      .subscribe(data => {
        this.updateData(data)
      });
    this.loaderService.loaderItem$
      .subscribe(data => {
        this.setLoader(data)
      });
  }

  private updateData(data):void {
    this.currentWeather = data.current;
    this.todayForecast = data.daily[0];

    this.setIcon('icon-current', this.icons.getIcon(this.currentWeather.weather[0].icon));
  }

  private setLoader(status):void {
    this.loaderStatus = status;
  }

}
