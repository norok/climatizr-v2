import { LoaderService } from '../../../services/loader.service';
import { FavoritesService } from '../../../services/favorites.service';
import { NavService } from '../../../services/nav.service';
import { WeatherService } from '../../../services/weather.service';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { City } from '../../../classes/city';
import { State } from '../../../classes/state';
import { CitiesStatesService } from '../../../services/cities-states.service';
import { LocationService } from '../../../services/location.service';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'cl2-city-selector',
  templateUrl: './city-selector.component.html',
  styleUrls: ['./city-selector.component.scss'],
  providers: [],
})
export class CitySelectorComponent implements OnInit, OnDestroy {

  citySelectorFormGroup = new FormGroup({
    federativeUnit: new FormControl(''),
    city: new FormControl(''),
  });

  public ready: Boolean = false;
  public states: State[];
  public loaderStatus: Boolean = true;

  private defaults: any = {
    state: 'SP',
    city: 'Campinas'
  }

  private favorites: Array<any> = [];
  private isFavorite: Boolean = false;
  private favSubscription: Subscription;
  private navSubscription: Subscription;
  private loaderSubscription: Subscription;

  constructor(
    private citiesStatesService: CitiesStatesService,
    private locationService: LocationService,
    private weatherService: WeatherService,
    private navService: NavService,
    private favoritesService: FavoritesService,
    private loaderService: LoaderService,
  ) {}

  ngOnInit(): void {
    this.favSubscription = this.favoritesService.favoritedItem$
      .subscribe(item => {
        this.getFavorites();
      });

    this.navSubscription = this.navService.navItem$
      .subscribe(nav => {
        const city = nav.city;
        const federativeUnit = this.getStateByAbbr(nav.state);

        this.citySelectorFormGroup.setValue({
          city,
          federativeUnit,
        });

        this.updateLocation();
      });

    this.loaderSubscription = this.loaderService.loaderItem$
      .subscribe(data => {
        this.setLoader(data)
      });

    this.citySelectorFormGroup.valueChanges
      .pipe(
        debounceTime(500)
      )
      .subscribe( changes => {
        // @TODO: reimplement city autocomplete
      });

    this.getStates();
  }

  ngOnDestroy(): void {
    this.navSubscription.unsubscribe();
    this.favSubscription.unsubscribe();
  }

  private getStates(): void {
    this.citiesStatesService.getLocations()
      .subscribe( fu => {
        this.states = fu;
        this.getFavorites();

        const fave = !!this.favorites ? this.favorites[0] : false;
        const favState = fave ? fave.state : this.defaults.state;

        this.citySelectorFormGroup.setValue({
          city: fave ? fave.city : this.defaults.city,
          federativeUnit: this.getStateByAbbr(favState)
        });

        this.updateLocation();
        this.ready = true;
      });
  }

  public onSubmit(): void {
    if (this.citySelectorFormGroup.valid) {
      this.updateLocation();
    }
  }

  public displayFederativeUnitAbbr(state: State) {
    return state && state.getAbbr() ? state.getAbbr() : '';
  }

  private updateLocation(): void {
    this.loaderService.startLoader();
    const city = this.citySelectorFormGroup.get('city').value;
    const state = this.citySelectorFormGroup.get('federativeUnit').value;

    this.getFavorites();

    this.locationService
      .getPreciseLocation(state, city)
      .subscribe(location => {
        this.weatherService.getWeatherInformation(location);
      });
  }

  private getStateByAbbr(abbr): State {
    return this.states.find((value: any) => value.getAbbr() === abbr );
  }

  public saveFavorite(): void {
    const city = this.citySelectorFormGroup.get('city').value;
    const state = this.citySelectorFormGroup.get('federativeUnit').value;

    if (this.currentCityIsFavorite()) {
      this.favoritesService.removeCity(city, state.getAbbr());
    } else {
      this.favoritesService.addCity(city, state.getAbbr());
    }
  }

  private getFavorites(): void {
    this.favorites = this.favoritesService.getFavorites();
  }

  public currentCityIsFavorite(): boolean {
    const city = this.citySelectorFormGroup.get('city').value;
    const state = this.citySelectorFormGroup.get('federativeUnit').value;

    return !!this.favorites.find( favorite => city && state && favorite.city === city && favorite.state === state.getAbbr());
  }

  private setLoader(status): void {
    this.loaderStatus = status;
  }

}
