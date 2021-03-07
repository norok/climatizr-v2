import { Component, OnInit, OnDestroy, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { LoaderService } from '../../../services/loader.service';
import { WeatherService } from '../../../services/weather.service';
import { Subscription } from "rxjs";
import Glide from "@glidejs/glide";

@Component({
  selector: 'cl2-forecast-info',
  templateUrl: './forecast-info.component.html',
  styleUrls: ['./forecast-info.component.scss']
})
export class ForecastInfoComponent implements OnInit, OnDestroy, AfterViewInit {

  private forecastCarousel:Glide;
  private weatherSubscription:Subscription;
  private loaderSubscription:Subscription;

  public forecast:Array<any> = [];
  public loaderStatus:Boolean = true;

  @ViewChildren('weekdays') weekdays: QueryList<any>;

  constructor(
    private weatherService:WeatherService,
    private loaderService:LoaderService,
  ) {}

  ngOnInit():void {
    this.weatherSubscription = this.weatherService.weatherInformation$
      .subscribe(data => {
        this.updateData(data)
      });
    this.loaderSubscription = this.loaderService.loaderItem$
      .subscribe(data => {
        this.setLoader(data)
      });
  }

  ngAfterViewInit() {
    const options = {
      type: 'slider',
      startAt: 0,
      perView: 7,
      autoplay: false,
      bound: true,
      rewind: false,
      breakpoints: {
        0: {
          perView: 2,
        },
        600: {
          perView: 2,
        },
        995: {
          perView: 4,
        },
        1200: {
          perView: 6,
        }
      }
    };

    this.weekdays.changes.subscribe( t => {
      this.forecastCarousel = new Glide('#forecast-carousel', options).mount();
    });
  }

  ngOnDestroy():void {
    this.weatherSubscription.unsubscribe();
    this.loaderSubscription.unsubscribe();
    this.forecastCarousel.destroy();
  }

  private updateData(data):void {
    let array:Array<any> = data.daily;
    array.shift(); // Removes the current day since we don't need it
    this.forecast = array;
  }

  private setLoader(status):void {
    this.loaderStatus = status;
  }

}
