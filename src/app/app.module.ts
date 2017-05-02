import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BackgroundComponent } from './components/structural/background/background.component';
import { HeaderComponent } from './components/structural/header/header.component';
import { FooterComponent } from './components/structural/footer/footer.component';
import { CitySelectorComponent } from './components/functional/city-selector/city-selector.component';
import { CurrentWeatherComponent } from './components/structural/current-weather/current-weather.component';
import { ForecastInfoComponent } from './components/structural/forecast-info/forecast-info.component';
import { ForecastInfoBlockComponent } from './components/structural/forecast-info-block/forecast-info-block.component';
import { ForecastGraphComponent } from './components/structural/forecast-graph/forecast-graph.component';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    HeaderComponent,
    FooterComponent,
    CitySelectorComponent,
    CurrentWeatherComponent,
    ForecastInfoComponent,
    ForecastInfoBlockComponent,
    ForecastGraphComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
