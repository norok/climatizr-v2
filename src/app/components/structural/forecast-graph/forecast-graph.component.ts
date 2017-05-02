import { DecimalPipe, DatePipe } from '@angular/common';
import { WeatherService } from '../../../services/weather.service';
import { Component, OnInit } from '@angular/core';

declare var Chart:any;

@Component({
  selector: 'cl2-forecast-graph',
  templateUrl: './forecast-graph.component.html',
  styleUrls: ['./forecast-graph.component.scss'],
  providers: [DecimalPipe, DatePipe]
})
export class ForecastGraphComponent implements OnInit {

  private forecastChart:any;

  constructor(
    private weatherService:WeatherService,
    private datePipe:DatePipe,
    private decimalPipe:DecimalPipe) {
    weatherService.weatherInformation$.subscribe(
      (data) => this.updateData(data)
    );
  }

  ngOnInit() {
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

  private updateData(data):void {
    let days:Array<any> = [];
    let highs:Array<any> = [];
    let lows:Array<any> = [];

    for (let day of data.daily.data) {
      console.log(day);
      // Build data for building the chart
      days.push(this.datePipe.transform(day.time * 1000,'EEE, dd/MM'));
      highs.push(this.decimalPipe.transform(day.temperatureMax, '1.0-0'));
      lows.push(this.decimalPipe.transform(day.temperatureMin, '1.0-0'));

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
    }

    this.forecastChart.update();
  }

}
