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
  private forecastCarousel:any;

  constructor(private weatherService:WeatherService) {
    weatherService.weatherInformation$.subscribe(
      (data) => this.updateData(data)
    );
  }

  ngOnInit() {}

  private updateData(data) {
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

}
