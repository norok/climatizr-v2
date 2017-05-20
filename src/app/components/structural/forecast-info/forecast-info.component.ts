import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoaderService } from '../../../services/loader.service';
import { WeatherService } from '../../../services/weather.service';
import { Subscription } from "rxjs";

declare var $:any;

@Component({
  selector: 'cl2-forecast-info',
  templateUrl: './forecast-info.component.html',
  styleUrls: ['./forecast-info.component.scss']
})
export class ForecastInfoComponent implements OnInit, OnDestroy {

  private forecastCarousel:any;
  private weatherSubscription:Subscription;
  private loaderSubscription:Subscription;

  public forecast:Array<any> = [];
  public loaderStatus:Boolean = true;

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

  ngOnDestroy():void {
    this.weatherSubscription.unsubscribe();
    this.loaderSubscription.unsubscribe();
  }

  private updateData(data):void {
    let array:Array<any> = data.daily.data;
    array.shift(); // Removes the current day since we don't need it
    this.forecast = array;

    setTimeout(() => {
      $('[data-toggle="popover"]').popover();
    })

    this.updateView();
  }

  private updateView():void {
    if (!!this.forecastCarousel) {
      // Destroy the owl carousel to build a new one with new data
      this.forecastCarousel.trigger('destroy.owl.carousel').removeClass('owl-drag owl-loaded');
      this.forecastCarousel.find('.owl-stage-outer').children().unwrap();
    }

    setTimeout(() => {
      this.forecastCarousel = $('#forecast-carousel').owlCarousel({
        responsive: {
          0: {
            items: 2,
          },
          600: {
            items: 4,
          },
          995: {
            items: 6,
          },
          1200: {
            items: 7,
          }
        }
      });
    });
  }

  private setLoader(status):void {
    console.log(status);
    this.loaderStatus = status;
  }

}
