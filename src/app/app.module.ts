import { IconsService } from './services/icons.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BackgroundComponent } from './components/structural/background/background.component';
import { HeaderComponent } from './components/structural/header/header.component';
import { CitySelectorComponent } from './components/functional/city-selector/city-selector.component';
import { CurrentWeatherComponent } from './components/structural/current-weather/current-weather.component';
import { ForecastInfoComponent } from './components/structural/forecast-info/forecast-info.component';
import { ForecastInfoBlockComponent } from './components/structural/forecast-info-block/forecast-info-block.component';
import { ForecastGraphComponent } from './components/structural/forecast-graph/forecast-graph.component';
import { MenuComponent } from './components/functional/menu/menu.component';

import { LocationService } from './services/location.service';
import { CitiesStatesService } from './services/cities-states.service';
import { NavService } from './services/nav.service';
import { LocalstorageService } from './services/localstorage.service';
import { FavoritesService } from './services/favorites.service';
import { WeatherService } from './services/weather.service';
import { LoaderService } from 'app/services/loader.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    HeaderComponent,
    CitySelectorComponent,
    CurrentWeatherComponent,
    ForecastInfoComponent,
    ForecastInfoBlockComponent,
    ForecastGraphComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    WeatherService,
    LocalstorageService,
    FavoritesService,
    NavService,
    CitiesStatesService,
    LocationService,
    LoaderService,
    IconsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
