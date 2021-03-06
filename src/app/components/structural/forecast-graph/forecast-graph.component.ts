import { DecimalPipe, DatePipe } from '@angular/common';
import { WeatherService } from '../../../services/weather.service';
import { LoaderService } from "app/services/loader.service";
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs";
import Chart from "chart.js";


@Component({
  selector: 'cl2-forecast-graph',
  templateUrl: './forecast-graph.component.html',
  styleUrls: ['./forecast-graph.component.scss'],
  providers: [DecimalPipe, DatePipe]
})
export class ForecastGraphComponent implements OnInit, OnDestroy {

  private forecastChart:any;
  private weatherSubscription:Subscription;
  private loaderSubscription:Subscription;

  public loaderStatus:Boolean = true;

  constructor(
    private weatherService:WeatherService,
    private loaderService:LoaderService,
    private datePipe:DatePipe,
    private decimalPipe:DecimalPipe
  ) {}

  ngOnInit() {
    this.weatherSubscription = this.weatherService.weatherInformation$
      .subscribe(data => {
        this.updateData(data)
      });
    this.loaderSubscription = this.loaderService.loaderItem$
      .subscribe(data => {
        this.setLoader(data)
      });
    setTimeout(() => {
      this.forecastChart = new Chart('forecast-chart', {
        type: 'line',
        data: {},
        options: {
          responsive: true,
          maintainAspectRatio: false,
        }
      });

      Chart.defaults.global.defaultFontFamily = '"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif';
      Chart.defaults.global.defaultFontColor = '#FFF';
      Chart.defaults.global.defaultFontSize = 14;
      Chart.defaults.global.defaultFontStyle = 'bold';

      this.forecastChart.height = 300;
    });
  }

  ngOnDestroy():void {
    this.weatherSubscription.unsubscribe();
    this.loaderSubscription.unsubscribe();
  }

  private updateData(data):void {
    const days:Array<any> = [];
    const highs:Array<any> = [];
    const lows:Array<any> = [];

    data.daily.map( day => {
      days.push(this.datePipe.transform(day.dt * 1000,'EEE, dd/MM'));
      highs.push(this.decimalPipe.transform(day.temp.max, '1.0-0'));
      lows.push(this.decimalPipe.transform(day.temp.min, '1.0-0'));
    });

    // Updates the chart datasets
    this.forecastChart.data.labels = days;
    this.forecastChart.data.datasets = [
      {
        label: 'Altas',
        data: highs,
        borderColor: "rgba(192,85,83,1)",
        backgroundColor: "rgba(255,255,255,0.2)",
        borderWidth: 4,
      },
      {
        label: 'Baixas',
        data: lows,
        borderColor: "rgba(83,80,188,1)",
        backgroundColor: "rgba(255,255,255,0.2)",
        borderWidth: 4,
      }
    ];

    this.forecastChart.update();
  }

  private setLoader(status):void {
    this.loaderStatus = status;
  }

}
