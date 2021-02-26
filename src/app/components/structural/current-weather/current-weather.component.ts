import { LoaderService } from '../../../services/loader.service';
import { WeatherBlock } from '../../../classes/weather-block';
import { Subscription } from 'rxjs';
import { WeatherService } from '../../../services/weather.service';
import { GeoLocation } from '../../../classes/geo-location';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'cl2-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent extends WeatherBlock implements OnInit {

  private weatherSubscription:Subscription;
  private loaderSubscription:Subscription;

  public currentWeather:any = {};
  public todayForecast:any = {};
  public loaderStatus:Boolean = true;

  constructor(
    private weatherService:WeatherService,
    private loaderService:LoaderService,
  ) {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
    this.weatherSubscription = this.weatherService.weatherInformation$
      .subscribe(data => {
        this.updateData(data)
      });
    this.loaderSubscription = this.loaderService.loaderItem$
      .subscribe(data => {
        this.setLoader(data)
      });
  }

  private updateData(data):void {
    this.currentWeather = data.currently;
    this.todayForecast = data.daily.data[0];

    this.setIcon('icon-current', this.currentWeather.icon);
  }

  private setLoader(status):void {
    console.log(status);
    this.loaderStatus = status;
  }

}
