webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n  <cl2-header></cl2-header>\n  <main class=\"container\">\n    <cl2-city-selector></cl2-city-selector>\n    <cl2-current-weather></cl2-current-weather>\n    <cl2-forecast-info></cl2-forecast-info>\n    <cl2-forecast-graph></cl2-forecast-graph>\n  </main>\n</div>\n<cl2-footer></cl2-footer>\n<cl2-background></cl2-background>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ".main-container {\n  position: relative;\n  z-index: 2; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")],
            providers: []
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_structural_background_background_component__ = __webpack_require__("./src/app/components/structural/background/background.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_structural_header_header_component__ = __webpack_require__("./src/app/components/structural/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_structural_footer_footer_component__ = __webpack_require__("./src/app/components/structural/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_functional_city_selector_city_selector_component__ = __webpack_require__("./src/app/components/functional/city-selector/city-selector.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_structural_current_weather_current_weather_component__ = __webpack_require__("./src/app/components/structural/current-weather/current-weather.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_structural_forecast_info_forecast_info_component__ = __webpack_require__("./src/app/components/structural/forecast-info/forecast-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_structural_forecast_info_block_forecast_info_block_component__ = __webpack_require__("./src/app/components/structural/forecast-info-block/forecast-info-block.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_structural_forecast_graph_forecast_graph_component__ = __webpack_require__("./src/app/components/structural/forecast-graph/forecast-graph.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_functional_menu_menu_component__ = __webpack_require__("./src/app/components/functional/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_location_service__ = __webpack_require__("./src/app/services/location.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_cities_states_service__ = __webpack_require__("./src/app/services/cities-states.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_nav_service__ = __webpack_require__("./src/app/services/nav.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_localstorage_service__ = __webpack_require__("./src/app/services/localstorage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_favorites_service__ = __webpack_require__("./src/app/services/favorites.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_weather_service__ = __webpack_require__("./src/app/services/weather.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_app_services_loader_service__ = __webpack_require__("./src/app/services/loader.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_structural_background_background_component__["a" /* BackgroundComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_structural_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_structural_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_functional_city_selector_city_selector_component__["a" /* CitySelectorComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_structural_current_weather_current_weather_component__["a" /* CurrentWeatherComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_structural_forecast_info_forecast_info_component__["a" /* ForecastInfoComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_structural_forecast_info_block_forecast_info_block_component__["a" /* ForecastInfoBlockComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_structural_forecast_graph_forecast_graph_component__["a" /* ForecastGraphComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_functional_menu_menu_component__["a" /* MenuComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* JsonpModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_19__services_weather_service__["a" /* WeatherService */], __WEBPACK_IMPORTED_MODULE_17__services_localstorage_service__["a" /* LocalstorageService */], __WEBPACK_IMPORTED_MODULE_18__services_favorites_service__["a" /* FavoritesService */], __WEBPACK_IMPORTED_MODULE_16__services_nav_service__["a" /* NavService */], __WEBPACK_IMPORTED_MODULE_15__services_cities_states_service__["a" /* CitiesStatesService */], __WEBPACK_IMPORTED_MODULE_14__services_location_service__["a" /* LocationService */], __WEBPACK_IMPORTED_MODULE_20_app_services_loader_service__["a" /* LoaderService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/classes/city.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return City; });
var City = /** @class */ (function () {
    function City(name) {
        this.name = name;
    }
    City.prototype.getName = function () {
        return this.name;
    };
    return City;
}());



/***/ }),

/***/ "./src/app/classes/geo-location.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeoLocation; });
var GeoLocation = /** @class */ (function () {
    function GeoLocation(latitude, longitude) {
        this.latitude = latitude;
        this.longitude = longitude;
    }
    GeoLocation.prototype.get = function (param) {
        return this[param];
    };
    GeoLocation.prototype.getLatitude = function () {
        return this.get('latitude');
    };
    GeoLocation.prototype.getLongitude = function () {
        return this.get('longitude');
    };
    return GeoLocation;
}());



/***/ }),

/***/ "./src/app/classes/state.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return State; });
var State = /** @class */ (function () {
    function State(name, abbr, cities) {
        this.name = name;
        this.abbr = abbr;
        this.cities = cities;
    }
    State.prototype.getCities = function () {
        return this.cities;
    };
    State.prototype.getName = function () {
        return this.name;
    };
    State.prototype.getAbbr = function () {
        return this.abbr;
    };
    return State;
}());



/***/ }),

/***/ "./src/app/classes/weather-block.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeatherBlock; });
var WeatherBlock = /** @class */ (function () {
    function WeatherBlock() {
    }
    WeatherBlock.prototype.ngOnInit = function () {
        this.skycons = new Skycons({ "color": "#FFF" });
    };
    WeatherBlock.prototype.setIcon = function (id, iconId) {
        if (!id || !iconId)
            return;
        this.skycons.set(id, iconId);
        this.skycons.play();
    };
    return WeatherBlock;
}());



/***/ }),

/***/ "./src/app/components/functional/city-selector/city-selector.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"card text-center cl2-card base-transition\" id=\"city-selector\" [ngClass]=\"{'loading': loaderStatus}\">\n  <div class=\"card-body\">\n    <h4 class=\"card-title\">Selecione seu Estado e Cidade</h4>\n    <form class=\"form-inline\" #f=\"ngForm\" (ngSubmit)=\"onSubmit(f, $event)\">\n      <div class=\"form-group text-left\">\n        <label class=\"sr-only\" for=\"form-state\">Estado</label>\n        <select class=\"form-control\" name=\"form-state\" id=\"form-state\" [(ngModel)]=\"currentState\" required (ngModelChange)=\"stateChange($event)\" [disabled]=\"!ready\">\n          <option *ngFor=\"let state of states\" [ngValue]=\"state\">\n            {{ state.abbr }}\n          </option>\n        </select>\n      </div>\n      <div class=\"form-group text-left\">\n        <label class=\"sr-only\" for=\"form-city\">Cidade</label>\n        <input class=\"form-control\" type=\"text\" id=\"form-city\" name=\"form-city\" placeholder=\"Digite o nome da cidade\" [(ngModel)]=\"currentCity\" required [disabled]=\"!ready\"/>\n      </div>\n      <div class=\"form-group\">\n        <button type=\"submit\" class=\"btn btn-primary\" title=\"Ver clima da cidade atual\" [disabled]=\"!ready\">Ver Clima</button>\n        <button type=\"button\" class=\"favorite-button\" title=\"{{ currentCityIsFavorite() ? 'Esta é sua cidade favorita' : 'Favoritar cidade' }}\" [disabled]=\"!ready\" (click)=\"saveFavorite()\"><i class=\"fa\" [ngClass]=\"{'fa-star': currentCityIsFavorite(), 'fa-star-o': !currentCityIsFavorite()}\"></i></button>\n      </div>\n    </form>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/components/functional/city-selector/city-selector.component.scss":
/***/ (function(module, exports) {

module.exports = "form {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  min-width: 250px; }\n  form .form-group,\n  form .favorite-button {\n    vertical-align: top; }\n  @media (max-width: 575.98px) {\n    form .form-group {\n      width: 100%; } }\n  form .form-group:last-child {\n    margin-bottom: 0; }\n  form .favorite-button {\n    background: transparent none;\n    border: none;\n    color: #ffc107;\n    cursor: pointer;\n    font-size: 28px;\n    height: 34px;\n    line-height: 1;\n    outline: none; }\n  .card .card-title {\n  font-size: 1.5rem;\n  padding-top: 0;\n  padding-bottom: 10px; }\n  @media (max-width: 575.98px) {\n    .card .card-title {\n      font-size: 1.4rem; } }\n"

/***/ }),

/***/ "./src/app/components/functional/city-selector/city-selector.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CitySelectorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_loader_service__ = __webpack_require__("./src/app/services/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_favorites_service__ = __webpack_require__("./src/app/services/favorites.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_nav_service__ = __webpack_require__("./src/app/services/nav.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_weather_service__ = __webpack_require__("./src/app/services/weather.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_cities_states_service__ = __webpack_require__("./src/app/services/cities-states.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_location_service__ = __webpack_require__("./src/app/services/location.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CitySelectorComponent = /** @class */ (function () {
    function CitySelectorComponent(citiesStatesService, locationService, weatherService, navService, favoritesService, loaderService) {
        this.citiesStatesService = citiesStatesService;
        this.locationService = locationService;
        this.weatherService = weatherService;
        this.navService = navService;
        this.favoritesService = favoritesService;
        this.loaderService = loaderService;
        this.currentCity = '';
        this.ready = false;
        this.loaderStatus = true;
        this.defaults = {
            state: 'SP',
            city: 'Campinas'
        };
        this.favorites = [];
        this.isFavorite = false;
    }
    CitySelectorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.favSubscription = this.favoritesService.favoritedItem$
            .subscribe(function (item) {
            _this.getFavorites();
        });
        this.navSubscription = this.navService.navItem$
            .subscribe(function (nav) {
            _this.stateChange(_this.getStateByAbbr(nav.state));
            _this.currentCity = nav.city;
            _this.updateLocation();
        });
        this.loaderSubscription = this.loaderService.loaderItem$
            .subscribe(function (data) {
            _this.setLoader(data);
        });
        this.getStates();
    };
    CitySelectorComponent.prototype.ngOnDestroy = function () {
        this.navSubscription.unsubscribe();
        this.favSubscription.unsubscribe();
    };
    CitySelectorComponent.prototype.getStates = function () {
        var _this = this;
        this.citiesStatesService
            .getLocations()
            .then(function (states) {
            _this.states = states;
            _this.getFavorites();
            var fave = !!_this.favorites ? _this.favorites[0] : false;
            var favState;
            if (fave) {
                _this.currentCity = fave.city;
                favState = fave.state;
            }
            else {
                _this.currentCity = _this.defaults.city;
                favState = _this.defaults.state;
            }
            _this.currentState = _this.getStateByAbbr(favState);
            _this.updateAutocomplete();
            _this.updateLocation();
            _this.ready = true;
        });
    };
    CitySelectorComponent.prototype.stateChange = function (state) {
        this.currentState = state;
        this.updateAutocomplete();
    };
    CitySelectorComponent.prototype.updateAutocomplete = function () {
        var that = this;
        var citiesList = this.currentState.getCities();
        $('#form-city').autocomplete({
            source: function (request, response) {
                var matcher = new RegExp('^' + $.ui.autocomplete.escapeRegex(request.term), 'i');
                response(citiesList.filter(function (value) {
                    return matcher.test(value.getName());
                }));
            },
            minLenght: 0,
            focus: function (event, ui) {
                that.currentCity = ui.item.getName();
                return false;
            },
            select: function (event, ui) {
                that.currentCity = ui.item.getName();
                return false;
            },
        })
            .autocomplete('instance')._renderItem = function (ul, item) {
            return $('<li>')
                .append(item.getName())
                .appendTo(ul);
        };
    };
    CitySelectorComponent.prototype.onSubmit = function (f, event) {
        event.preventDefault();
        if (f.valid) {
            this.updateLocation();
        }
    };
    CitySelectorComponent.prototype.updateLocation = function () {
        var _this = this;
        this.loaderService.startLoader();
        var city = this.currentCity;
        var state = this.currentState;
        this.getFavorites();
        this.locationService
            .getPreciseLocation(state, city)
            .subscribe(function (location) {
            _this.weatherService.getWeatherInformation(location);
        });
    };
    CitySelectorComponent.prototype.getStateByAbbr = function (abbr) {
        var matcher = new RegExp('^' + $.ui.autocomplete.escapeRegex(abbr), 'i');
        return this.states.filter(function (value) {
            return matcher.test(value.getAbbr());
        })[0];
    };
    CitySelectorComponent.prototype.saveFavorite = function () {
        if (this.currentCityIsFavorite()) {
            this.favoritesService.removeCity(this.currentCity, this.currentState.getAbbr());
        }
        else {
            this.favoritesService.addCity(this.currentCity, this.currentState.getAbbr());
        }
    };
    CitySelectorComponent.prototype.getFavorites = function () {
        this.favorites = this.favoritesService.getFavorites();
    };
    CitySelectorComponent.prototype.currentCityIsFavorite = function () {
        for (var _i = 0, _a = this.favorites; _i < _a.length; _i++) {
            var favorite = _a[_i];
            if (favorite.city === this.currentCity && favorite.state === this.currentState.getAbbr()) {
                return true;
            }
        }
        return false;
    };
    CitySelectorComponent.prototype.setLoader = function (status) {
        console.log(status);
        this.loaderStatus = status;
    };
    CitySelectorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["m" /* Component */])({
            selector: 'cl2-city-selector',
            template: __webpack_require__("./src/app/components/functional/city-selector/city-selector.component.html"),
            styles: [__webpack_require__("./src/app/components/functional/city-selector/city-selector.component.scss")],
            providers: [],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__services_cities_states_service__["a" /* CitiesStatesService */],
            __WEBPACK_IMPORTED_MODULE_6__services_location_service__["a" /* LocationService */],
            __WEBPACK_IMPORTED_MODULE_3__services_weather_service__["a" /* WeatherService */],
            __WEBPACK_IMPORTED_MODULE_2__services_nav_service__["a" /* NavService */],
            __WEBPACK_IMPORTED_MODULE_1__services_favorites_service__["a" /* FavoritesService */],
            __WEBPACK_IMPORTED_MODULE_0__services_loader_service__["a" /* LoaderService */]])
    ], CitySelectorComponent);
    return CitySelectorComponent;
}());



/***/ }),

/***/ "./src/app/components/functional/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<button type=\"button\" class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#navbar-collapse\" *ngIf=\"favorites.length > 0\"><i class=\"fa fa-bars\"></i></button>\n<div class=\"navbar-collapse collapse\" id=\"navbar-collapse\" role=\"navigation\" *ngIf=\"favorites.length > 0\">\n  <h5>Cidades Favoritas</h5>\n  <nav class=\"favs-nav\">\n    <ul class=\"navbar-nav nav menu\">\n      <li *ngFor=\"let item of favorites index as i\" class=\"nav-item\"><span class=\"nav-link\" (click)=\"setCity(item.city, item.state)\">{{ item.city }}, {{ item.state }}</span> <i class=\"fa fa-times\" (click)=\"removeCity(i)\"></i></li>\n    </ul>\n  </nav>\n</div>"

/***/ }),

/***/ "./src/app/components/functional/menu/menu.component.scss":
/***/ (function(module, exports) {

module.exports = ".navbar-toggler {\n  color: #FFF;\n  cursor: pointer;\n  height: 38px;\n  line-height: 38px;\n  outline: none;\n  padding: 0 15px;\n  position: absolute;\n  right: 15px;\n  top: 0; }\n\n.navbar-collapse {\n  text-align: right;\n  color: #FFF;\n  padding: 10px 0;\n  font-size: 0.9em; }\n\n.navbar-collapse .nav-link {\n    cursor: pointer;\n    display: inline-block; }\n\n.favs-nav {\n  overflow: auto;\n  max-height: 130px; }\n\n.favs-nav li {\n    padding-right: 10px; }\n"

/***/ }),

/***/ "./src/app/components/functional/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_favorites_service__ = __webpack_require__("./src/app/services/favorites.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_nav_service__ = __webpack_require__("./src/app/services/nav.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenuComponent = /** @class */ (function () {
    function MenuComponent(navService, favoriteService) {
        this.navService = navService;
        this.favoriteService = favoriteService;
        this.favorites = [];
    }
    MenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getFavorites();
        this.subscription = this.favoriteService.favoritedItem$
            .subscribe(function (item) {
            _this.getFavorites();
        });
    };
    MenuComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    MenuComponent.prototype.getFavorites = function () {
        this.favorites = this.favoriteService.getFavorites();
    };
    MenuComponent.prototype.setCity = function (city, state) {
        this.navService.changeCity(city, state);
    };
    MenuComponent.prototype.removeCity = function (index) {
        var fave = this.favorites[index];
        this.favoriteService.removeCity(fave.city, fave.state);
    };
    MenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'cl2-menu',
            template: __webpack_require__("./src/app/components/functional/menu/menu.component.html"),
            styles: [__webpack_require__("./src/app/components/functional/menu/menu.component.scss")],
            providers: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_nav_service__["a" /* NavService */],
            __WEBPACK_IMPORTED_MODULE_0__services_favorites_service__["a" /* FavoritesService */]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/components/structural/background/background.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bg\" [ngClass]=\"timeClass()\"></div>"

/***/ }),

/***/ "./src/app/components/structural/background/background.component.scss":
/***/ (function(module, exports) {

module.exports = ".bg {\n  background-position: top center;\n  background-size: cover;\n  bottom: 0;\n  left: 0;\n  position: fixed;\n  right: 0;\n  top: 0; }\n  .bg.night {\n    background-image: url('night.2da1ec5a7869c82152cb.jpg'); }\n  .bg.day {\n    background-image: url('day.25170eec2d083f5d9086.jpg'); }\n"

/***/ }),

/***/ "./src/app/components/structural/background/background.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackgroundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BackgroundComponent = /** @class */ (function () {
    function BackgroundComponent() {
    }
    BackgroundComponent.prototype.ngOnInit = function () { };
    BackgroundComponent.prototype.getDayTimeClass = function (hour) {
        if (hour < 18 && hour > 5) {
            return 'day';
        }
        else {
            return 'night';
        }
    };
    BackgroundComponent.prototype.timeClass = function () {
        this.now = new Date(Date.now());
        var hour = this.now.getHours();
        return this.getDayTimeClass(hour);
    };
    BackgroundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'cl2-background',
            template: __webpack_require__("./src/app/components/structural/background/background.component.html"),
            styles: [__webpack_require__("./src/app/components/structural/background/background.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BackgroundComponent);
    return BackgroundComponent;
}());



/***/ }),

/***/ "./src/app/components/structural/current-weather/current-weather.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"current-weather base-transition\" [ngClass]=\"{'loading': loaderStatus}\">\n  <h2 class=\"sr-only\">Tempo Atual</h2>\n  <div class=\"date\">\n    {{ currentWeather.time * 1000 | date:'EEE, dd/MM'  }}\n  </div>\n  <canvas id=\"icon-current\" width=\"150\" height=\"150\"></canvas>\n  <div class=\"data\">\n    <div class=\"temp\">\n      {{ currentWeather.temperature | number:'1.0-0' }}°C\n      <div class=\"min-max\">\n        <div class=\"max\"><i class=\"fa fa-caret-up\"></i> {{ todayForecast.temperatureMax | number:'1.0-0' }}°C</div>\n        <div class=\"min\"><i class=\"fa fa-caret-down\"></i> {{ todayForecast.temperatureMin | number:'1.0-0' }}°C</div>\n      </div>\n    </div>\n    <div class=\"summary\">\n      <strong>Sensação Térmica:</strong> {{ currentWeather.apparentTemperature | number:'1.0-0' }}°C<strong> - {{ currentWeather.summary }}</strong>\n    </div>\n    <div class=\"rain\">\n      <strong>Chuva:</strong> {{ 100 * currentWeather.precipProbability | number:'1.0-0' }}% - {{ currentWeather.precipIntensity }}mm/h\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/components/structural/current-weather/current-weather.component.scss":
/***/ (function(module, exports) {

module.exports = ".current-weather {\n  color: #FFF;\n  text-align: center;\n  margin-bottom: 20px; }\n  .current-weather .date {\n    font-size: 20px;\n    font-family: \"Oswald\", \"Open Sans\", \"Helvetica Neue\", Helvetica, Arial, sans-serif; }\n  .current-weather .temp {\n    display: inline-block;\n    font-family: \"Oswald\", \"Open Sans\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n    font-size: 50px;\n    font-weight: 700;\n    line-height: 1;\n    margin-bottom: 15px;\n    position: relative;\n    left: -35px; }\n  .current-weather .temp .min-max {\n      -webkit-transform: translateY(-50%);\n              transform: translateY(-50%);\n      font-size: 20px;\n      left: 100%;\n      line-height: 1.7;\n      padding-left: 15px;\n      position: absolute;\n      top: 50%;\n      white-space: nowrap; }\n"

/***/ }),

/***/ "./src/app/components/structural/current-weather/current-weather.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrentWeatherComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_loader_service__ = __webpack_require__("./src/app/services/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_weather_block__ = __webpack_require__("./src/app/classes/weather-block.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_weather_service__ = __webpack_require__("./src/app/services/weather.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CurrentWeatherComponent = /** @class */ (function (_super) {
    __extends(CurrentWeatherComponent, _super);
    function CurrentWeatherComponent(weatherService, loaderService) {
        var _this = _super.call(this) || this;
        _this.weatherService = weatherService;
        _this.loaderService = loaderService;
        _this.currentWeather = {};
        _this.todayForecast = {};
        _this.loaderStatus = true;
        return _this;
    }
    CurrentWeatherComponent.prototype.ngOnInit = function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this.weatherSubscription = this.weatherService.weatherInformation$
            .subscribe(function (data) {
            _this.updateData(data);
        });
        this.loaderSubscription = this.loaderService.loaderItem$
            .subscribe(function (data) {
            _this.setLoader(data);
        });
    };
    CurrentWeatherComponent.prototype.updateData = function (data) {
        this.currentWeather = data.currently;
        this.todayForecast = data.daily.data[0];
        this.setIcon('icon-current', this.currentWeather.icon);
    };
    CurrentWeatherComponent.prototype.setLoader = function (status) {
        console.log(status);
        this.loaderStatus = status;
    };
    CurrentWeatherComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'cl2-current-weather',
            template: __webpack_require__("./src/app/components/structural/current-weather/current-weather.component.html"),
            styles: [__webpack_require__("./src/app/components/structural/current-weather/current-weather.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_weather_service__["a" /* WeatherService */],
            __WEBPACK_IMPORTED_MODULE_0__services_loader_service__["a" /* LoaderService */]])
    ], CurrentWeatherComponent);
    return CurrentWeatherComponent;
}(__WEBPACK_IMPORTED_MODULE_1__classes_weather_block__["a" /* WeatherBlock */]));



/***/ }),

/***/ "./src/app/components/structural/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer id=\"site-footer\">\n  <div class=\"container-fluid\">\n    <div class=\"text-right\"><a href=\"https://darksky.net/poweredby/\" target=\"_blank\">Powered by Dark Sky</a></div>\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/components/structural/footer/footer.component.scss":
/***/ (function(module, exports) {

module.exports = "#site-footer {\n  bottom: 10px;\n  left: 0;\n  position: absolute;\n  right: 0;\n  z-index: 3; }\n  #site-footer a {\n    color: #FFF;\n    text-shadow: 0 0 2px #000, 0 0 5px #000;\n    text-decoration: none; }\n"

/***/ }),

/***/ "./src/app/components/structural/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'cl2-footer',
            template: __webpack_require__("./src/app/components/structural/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/components/structural/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/structural/forecast-graph/forecast-graph.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"forecast card cl2-card text-center base-transition\" [ngClass]=\"{'loading': loaderStatus}\">\n  <div class=\"card-body\">\n    <h4 class=\"card-title\">Evolução das temperaturas na próxima semana</h4>\n    <canvas id=\"forecast-chart\" width=\"100%\" height=\"300\"></canvas>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/components/structural/forecast-graph/forecast-graph.component.scss":
/***/ (function(module, exports) {

module.exports = "#forecast-chart {\n  height: 300px !important; }\n"

/***/ }),

/***/ "./src/app/components/structural/forecast-graph/forecast-graph.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForecastGraphComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_weather_service__ = __webpack_require__("./src/app/services/weather.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_loader_service__ = __webpack_require__("./src/app/services/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ForecastGraphComponent = /** @class */ (function () {
    function ForecastGraphComponent(weatherService, loaderService, datePipe, decimalPipe) {
        this.weatherService = weatherService;
        this.loaderService = loaderService;
        this.datePipe = datePipe;
        this.decimalPipe = decimalPipe;
        this.loaderStatus = true;
    }
    ForecastGraphComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.weatherSubscription = this.weatherService.weatherInformation$
            .subscribe(function (data) {
            _this.updateData(data);
        });
        this.loaderSubscription = this.loaderService.loaderItem$
            .subscribe(function (data) {
            _this.setLoader(data);
        });
        setTimeout(function () {
            _this.forecastChart = new Chart('forecast-chart', {
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
            _this.forecastChart.height = 300;
        });
    };
    ForecastGraphComponent.prototype.ngOnDestroy = function () {
        this.weatherSubscription.unsubscribe();
        this.loaderSubscription.unsubscribe();
    };
    ForecastGraphComponent.prototype.updateData = function (data) {
        var days = [];
        var highs = [];
        var lows = [];
        for (var _i = 0, _a = data.daily.data; _i < _a.length; _i++) {
            var day = _a[_i];
            // Build data for building the chart
            days.push(this.datePipe.transform(day.time * 1000, 'EEE, dd/MM'));
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
    };
    ForecastGraphComponent.prototype.setLoader = function (status) {
        console.log(status);
        this.loaderStatus = status;
    };
    ForecastGraphComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'cl2-forecast-graph',
            template: __webpack_require__("./src/app/components/structural/forecast-graph/forecast-graph.component.html"),
            styles: [__webpack_require__("./src/app/components/structural/forecast-graph/forecast-graph.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["d" /* DecimalPipe */], __WEBPACK_IMPORTED_MODULE_0__angular_common__["c" /* DatePipe */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_weather_service__["a" /* WeatherService */],
            __WEBPACK_IMPORTED_MODULE_2_app_services_loader_service__["a" /* LoaderService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_common__["c" /* DatePipe */],
            __WEBPACK_IMPORTED_MODULE_0__angular_common__["d" /* DecimalPipe */]])
    ], ForecastGraphComponent);
    return ForecastGraphComponent;
}());



/***/ }),

/***/ "./src/app/components/structural/forecast-info-block/forecast-info-block.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"weekday\" data-animation=\"false\" data-toggle=\"popover\" data-trigger=\"hover\" [attr.data-content]=\"todo\" data-container=\"body\" data-placement=\"top\" role=\"button\" tabindex=\"{{ index }}\">\n  <div class=\"date\">\n    {{ (day.time * 1000) | date: 'EEE, dd/MM' }}\n  </div>\n  <canvas id=\"icon-day-{{ index }}\" class=\"icon\" width=\"50\" height=\"50\"></canvas>\n  <div class=\"min-max\">\n    <div class=\"max\"><i class=\"fa fa-caret-up\"></i> {{ day.temperatureMax | number:'1.0-0' }}°C</div>\n    <div class=\"min\"><i class=\"fa fa-caret-down\"></i> {{ day.temperatureMin | number:'1.0-0' }}°C</div>\n  </div>\n  <div class=\"summary\">\n    {{ day.summary }}\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/structural/forecast-info-block/forecast-info-block.component.scss":
/***/ (function(module, exports) {

module.exports = ".weekday {\n  color: #FFF;\n  text-align: center;\n  padding: 0 10px;\n  outline: none; }\n  .weekday .date {\n    font-size: 18px;\n    font-family: \"Oswald\", \"Open Sans\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n    margin-bottom: 5px; }\n  .weekday .min-max {\n    font-size: 16px;\n    font-family: \"Oswald\", \"Open Sans\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n    font-weight: bold;\n    margin-bottom: 10px; }\n  .weekday .summary {\n    font-weight: bold; }\n"

/***/ }),

/***/ "./src/app/components/structural/forecast-info-block/forecast-info-block.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForecastInfoBlockComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__classes_weather_block__ = __webpack_require__("./src/app/classes/weather-block.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ForecastInfoBlockComponent = /** @class */ (function (_super) {
    __extends(ForecastInfoBlockComponent, _super);
    function ForecastInfoBlockComponent() {
        var _this = _super.call(this) || this;
        _this.day = {};
        _this.index = 0;
        _this.todo = '';
        return _this;
    }
    ForecastInfoBlockComponent.prototype.ngOnInit = function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        // Used this "hack" to set the icon only after the dom is fully rendered
        setTimeout(function () {
            _this.setIcon("icon-day-" + _this.index.toString(), _this.day.icon);
            _this.whatToDo(_this.index, _this.day.icon, _this.day.time * 1000);
        });
    };
    // Gives me a hint on what to do pending on climate
    ForecastInfoBlockComponent.prototype.whatToDo = function (index, id, time) {
        var date = new Date(time);
        var day = date.getDay();
        var tipsLibrary = {
            'clear-day': {
                weekend: [
                    'O dia estará bom para um passeio ao ar livre.',
                    'Que tal visitar um parque?',
                ],
                weekday: [
                    'Não se preocupe com o guarda-chuvas, o dia estará limpo.',
                    'Já que não chove, que tal ir a pé ou de bicicleta ao trabalho?'
                ],
            },
            'clear-night': {
                weekend: [
                    'Uma noite limpa pode ser boa para sair com os amigos!',
                    'Que tal ir a um bar ou restaurante com os amigos?'
                ],
                weekday: [
                    'Uma noite limpa pode ser uma boa oportunidade para um happy hour!',
                    'Que tal um pouco de exercícios durante a noite? Aproveite o tempo limpo!'
                ],
            },
            'partly-cloudy-day': {
                weekend: [
                    'Com o dia parcialmente nublado, pode ser uma boa oportunidade para uma caminhada mais longa.',
                    'Que tal passear com a família em algum parque?'
                ],
                weekday: [
                    'Já que não chove, que tal ir a pé ou de bicicleta ao trabalho?',
                ],
            },
            'partly-cloudy-night': {
                weekend: [
                    'Com o dia parcialmente nublado, pode ser uma boa oportunidade para uma caminhada mais longa.',
                    'Que tal passear com a família em algum parque?'
                ],
                weekday: [
                    'Já que não chove, que tal ir a pé ou de bicicleta ao trabalho?',
                ],
            },
            'cloudy': {
                weekend: [
                    'Já que o sol não sai hoje, que tal aproveitar para visitar algum museu?',
                    'Que tal aproveitar para fazer as compras da semana?',
                ],
                weekday: [
                    'Com o dia nublado as temperaturas podem cair, esteja preparado!',
                    'Cuidado com as roupas no varal! Dias nublados podem trazer chuvas inesperadas.'
                ],
            },
            'rain': {
                weekend: [
                    'Com essa chuva toda, que tal ficar em casa e assistir a um filme ou seriado?',
                    'Pode ser uma boa oportunidade para ir a um shopping ou ao cinema!'
                ],
                weekday: [
                    'Tire as roupas do varal!',
                    'Leve o guarda-chuvas e cuidado com alagamentos e trânsito. Saia mais cedo para evitar atrasos.'
                ],
            },
            'sleet': {
                weekend: [
                    'Cuidado ao sair de casa! Talvez seja uma boa ficar e colocar seu seriado em dia.'
                ],
                weekday: [
                    'Tome muito cuidado ao sair de casa!'
                ],
            },
            'snow': {
                weekend: [
                    'Se for sair, se agasalhe bastante!'
                ],
                weekday: [
                    'Saia bem agasalhado e preparado para enfrentar a neve.'
                ],
            },
            'wind': {
                weekend: [
                    'Que tal aproveitar para empinar uma pipa?',
                    'Evite levar seu drone para um passeio'
                ],
                weekday: [
                    'Cuidado com as roupas no varal!',
                    'Cuidado com o vento! Ao sair fique atento a objetos que podem voar a sua direção.'
                ],
            },
            'fog': {
                weekend: [
                    'Não estrague seu fim de semana! Se sair de carro, fique atento ao trânsito.'
                ],
                weekday: [
                    'Cuidado ao sair com seu carro! Redobre a atenção no trânsito!'
                ],
            }
        };
        var libToUse = (day == 0 || day == 6) ? tipsLibrary[id].weekend : tipsLibrary[id].weekday;
        var libLength = libToUse.length;
        var rand = Math.round(Math.random() * (libLength - 1));
        this.todo = libToUse[rand];
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], ForecastInfoBlockComponent.prototype, "day", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["z" /* Input */])(),
        __metadata("design:type", Number)
    ], ForecastInfoBlockComponent.prototype, "index", void 0);
    ForecastInfoBlockComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'cl2-forecast-info-block',
            template: __webpack_require__("./src/app/components/structural/forecast-info-block/forecast-info-block.component.html"),
            styles: [__webpack_require__("./src/app/components/structural/forecast-info-block/forecast-info-block.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ForecastInfoBlockComponent);
    return ForecastInfoBlockComponent;
}(__WEBPACK_IMPORTED_MODULE_0__classes_weather_block__["a" /* WeatherBlock */]));



/***/ }),

/***/ "./src/app/components/structural/forecast-info/forecast-info.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"forecast card cl2-card text-center base-transition\" [ngClass]=\"{'loading': loaderStatus}\">\n  <div class=\"card-body\">\n    <h4 class=\"card-title\">Previsão para os próximos dias</h4>\n    <ul class=\"list-unstyled owl-carousel\" id=\"forecast-carousel\">\n      <li *ngFor=\"let day of forecast index as index\" class=\"weekday\">\n        <cl2-forecast-info-block [day]=\"day\" [index]=\"index\"></cl2-forecast-info-block>\n      </li>\n    </ul>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/components/structural/forecast-info/forecast-info.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/structural/forecast-info/forecast-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForecastInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_loader_service__ = __webpack_require__("./src/app/services/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_weather_service__ = __webpack_require__("./src/app/services/weather.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ForecastInfoComponent = /** @class */ (function () {
    function ForecastInfoComponent(weatherService, loaderService) {
        this.weatherService = weatherService;
        this.loaderService = loaderService;
        this.forecast = [];
        this.loaderStatus = true;
    }
    ForecastInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.weatherSubscription = this.weatherService.weatherInformation$
            .subscribe(function (data) {
            _this.updateData(data);
        });
        this.loaderSubscription = this.loaderService.loaderItem$
            .subscribe(function (data) {
            _this.setLoader(data);
        });
    };
    ForecastInfoComponent.prototype.ngOnDestroy = function () {
        this.weatherSubscription.unsubscribe();
        this.loaderSubscription.unsubscribe();
    };
    ForecastInfoComponent.prototype.updateData = function (data) {
        var array = data.daily.data;
        array.shift(); // Removes the current day since we don't need it
        this.forecast = array;
        setTimeout(function () {
            $('[data-toggle="popover"]').popover();
        });
        this.updateView();
    };
    ForecastInfoComponent.prototype.updateView = function () {
        var _this = this;
        if (!!this.forecastCarousel) {
            // Destroy the owl carousel to build a new one with new data
            this.forecastCarousel.trigger('destroy.owl.carousel').removeClass('owl-drag owl-loaded');
            this.forecastCarousel.find('.owl-stage-outer').children().unwrap();
        }
        setTimeout(function () {
            _this.forecastCarousel = $('#forecast-carousel').owlCarousel({
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
    };
    ForecastInfoComponent.prototype.setLoader = function (status) {
        console.log(status);
        this.loaderStatus = status;
    };
    ForecastInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'cl2-forecast-info',
            template: __webpack_require__("./src/app/components/structural/forecast-info/forecast-info.component.html"),
            styles: [__webpack_require__("./src/app/components/structural/forecast-info/forecast-info.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_weather_service__["a" /* WeatherService */],
            __WEBPACK_IMPORTED_MODULE_1__services_loader_service__["a" /* LoaderService */]])
    ], ForecastInfoComponent);
    return ForecastInfoComponent;
}());



/***/ }),

/***/ "./src/app/components/structural/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"navbar\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <h1 class=\"d-none\">{{ title }}</h1>\n      <div class=\"navbar-brand\">{{ title }}</div>\n    </div>\n    <cl2-menu></cl2-menu>\n  </div>\n</header>\n"

/***/ }),

/***/ "./src/app/components/structural/header/header.component.scss":
/***/ (function(module, exports) {

module.exports = ".navbar {\n  background-color: rgba(0, 0, 0, 0.3);\n  border-radius: 0;\n  border: none;\n  z-index: 100;\n  margin-bottom: 20px; }\n  .navbar > .container {\n    position: relative; }\n  @media (max-width: 575.98px) {\n      .navbar > .container {\n        width: 100%; } }\n  .navbar .navbar-brand {\n    color: #FFF;\n    font-family: \"Oswald\", \"Open Sans\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n    cursor: default; }\n  .navbar .navbar-brand:hover {\n      color: #FFF; }\n  .navbar button.navbar-toggler {\n    border-radius: 0;\n    border: none;\n    color: #FFF;\n    font-size: 30px;\n    line-height: 40px;\n    margin: 0;\n    outline: none;\n    padding: 0 15px;\n    position: absolute;\n    right: 0;\n    top: 0; }\n  .navbar button.navbar-toggler:hover, .navbar button.navbar-toggler:focus {\n      background-color: rgba(0, 0, 0, 0.5);\n      color: #FFF; }\n  .navbar .navbar-nav {\n    text-align: right; }\n  .navbar .navbar-nav > li > span {\n      color: rgba(255, 255, 255, 0.9);\n      cursor: pointer; }\n  .navbar .navbar-nav > li > span:hover, .navbar .navbar-nav > li > span:focus {\n        color: #FFF; }\n  .navbar #navbar-collapse {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: reverse;\n        -ms-flex-direction: row-reverse;\n            flex-direction: row-reverse; }\n"

/***/ }),

/***/ "./src/app/components/structural/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.title = "Climatizr";
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'cl2-header',
            template: __webpack_require__("./src/app/components/structural/header/header.component.html"),
            styles: [__webpack_require__("./src/app/components/structural/header/header.component.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/services/cities-states.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CitiesStatesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_state__ = __webpack_require__("./src/app/classes/state.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classes_city__ = __webpack_require__("./src/app/classes/city.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CitiesStatesService = /** @class */ (function () {
    function CitiesStatesService(http) {
        this.http = http;
        this.statesUrl = './assets/estados-cidades.json';
        this.ready = false;
    }
    /**
     * Returns a promise for the Cities and States transformed data
     */
    CitiesStatesService.prototype.getLocations = function () {
        var that = this;
        return this.http.get(this.statesUrl)
            .toPromise()
            .then(function (response) { return that.transformData(response); })
            .catch(this.handleError);
    };
    /**
     * Transform the response data from the json into a State Array
     *
     * @param data
     */
    CitiesStatesService.prototype.transformData = function (data) {
        var states = [];
        for (var _i = 0, _a = data.json().estados; _i < _a.length; _i++) {
            var estado = _a[_i];
            var cities = [];
            for (var _b = 0, _c = estado.cidades; _b < _c.length; _b++) {
                var cidade = _c[_b];
                var city = new __WEBPACK_IMPORTED_MODULE_3__classes_city__["a" /* City */](cidade);
                cities.push(city);
            }
            var state = new __WEBPACK_IMPORTED_MODULE_2__classes_state__["a" /* State */](estado.nome, estado.sigla, cities);
            states.push(state);
        }
        this.ready = true;
        return states;
    };
    /**
     * Handles the promise errors
     *
     * @param error
     */
    CitiesStatesService.prototype.handleError = function (error) {
        console.error('Ocorreu um erro ao carregar os estados', error);
        return Promise.reject(error.message || error);
    };
    CitiesStatesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], CitiesStatesService);
    return CitiesStatesService;
}());



/***/ }),

/***/ "./src/app/services/favorites.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__localstorage_service__ = __webpack_require__("./src/app/services/localstorage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FavoritesService = /** @class */ (function () {
    function FavoritesService(localStorage) {
        this.localStorage = localStorage;
        this._favoritedItemSource = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["Subject"]();
        this.favoritedItem$ = this._favoritedItemSource.asObservable();
    }
    FavoritesService.prototype.addCity = function (city, state) {
        if (this.favorites == null)
            this.favorites = [];
        var alreadyExists = false;
        for (var _i = 0, _a = this.favorites; _i < _a.length; _i++) {
            var favorite = _a[_i];
            // Adding favorite if necessary
            if (favorite.state == state && favorite.city == city) {
                alreadyExists = true;
            }
        }
        if (!alreadyExists) {
            var cityState = {
                'state': state,
                'city': city
            };
            this.favorites.push(cityState);
            this.localStorage.setJSONData('favoriteCities', this.favorites);
        }
        this.favoritesChanged();
    };
    FavoritesService.prototype.favoritesChanged = function () {
        this._favoritedItemSource.next(true);
    };
    FavoritesService.prototype.removeCity = function (city, state) {
        for (var index in this.favorites) {
            if (this.favorites[index].state == state && this.favorites[index].city == city) {
                this.favorites.splice(parseInt(index), 1);
                break;
            }
        }
        this.localStorage.setJSONData('favoriteCities', this.favorites);
        this.favoritesChanged();
    };
    FavoritesService.prototype.getFavorites = function () {
        var storage = this.localStorage.getJSONData('favoriteCities');
        this.favorites = storage != null ? storage : [];
        return this.favorites;
    };
    FavoritesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__localstorage_service__["a" /* LocalstorageService */]])
    ], FavoritesService);
    return FavoritesService;
}());



/***/ }),

/***/ "./src/app/services/loader.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__weather_service__ = __webpack_require__("./src/app/services/weather.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoaderService = /** @class */ (function () {
    function LoaderService(weatherService) {
        var _this = this;
        this.weatherService = weatherService;
        this._loaderItemSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Subject"]();
        this.loaderStatus = true;
        this.loaderItem$ = this._loaderItemSource.asObservable();
        this.weatherSubscription = this.weatherService.weatherInformation$
            .subscribe(function (data) { return _this.endLoader(); });
    }
    LoaderService.prototype.ngOnInit = function () { };
    LoaderService.prototype.trigger = function () {
        this._loaderItemSource.next(this.getStatus());
    };
    LoaderService.prototype.endLoader = function () {
        this.loaderStatus = false;
        this.trigger();
    };
    LoaderService.prototype.startLoader = function () {
        this.loaderStatus = true;
        this.trigger();
    };
    LoaderService.prototype.getStatus = function () {
        return this.loaderStatus;
    };
    LoaderService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__weather_service__["a" /* WeatherService */]])
    ], LoaderService);
    return LoaderService;
}());



/***/ }),

/***/ "./src/app/services/localstorage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalstorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var storage = window.localStorage;
var LocalstorageService = /** @class */ (function () {
    function LocalstorageService() {
    }
    LocalstorageService.prototype.setData = function (name, value) {
        storage.setItem(name, value);
    };
    LocalstorageService.prototype.getData = function (name) {
        return storage.getItem(name);
    };
    LocalstorageService.prototype.setJSONData = function (name, value) {
        var val = JSON.stringify(value);
        storage.setItem(name, val);
    };
    LocalstorageService.prototype.getJSONData = function (name) {
        var val = storage.getItem(name);
        return JSON.parse(val);
    };
    LocalstorageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], LocalstorageService);
    return LocalstorageService;
}());



/***/ }),

/***/ "./src/app/services/location.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_geo_location__ = __webpack_require__("./src/app/classes/geo-location.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BASE_URL = '//maps.google.com/maps/api/geocode/json';
var LocationService = /** @class */ (function () {
    function LocationService(http) {
        this.http = http;
        this.currentLocation = null;
    }
    /**
     * Returns a GeoLocation object with the latitude and longitude of the given location
     *
     * @param state State
     * @param city String
     */
    LocationService.prototype.getPreciseLocation = function (state, city) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* URLSearchParams */]();
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]();
        params.set('address', state.getAbbr() + ',' + city);
        params.set('sensor', 'false');
        options.search = params;
        return this.http
            .get(BASE_URL, options)
            .map(function (resp) { return _this.transformData(resp.json()); });
    };
    /**
     * Transform the response data from the json into a State Array
     *
     * @param data
     */
    LocationService.prototype.transformData = function (data) {
        var geomLocation = data.results[0].geometry.location;
        var output = new __WEBPACK_IMPORTED_MODULE_2__classes_geo_location__["a" /* GeoLocation */](geomLocation.lat, geomLocation.lng);
        return output;
    };
    /**
     * Handles the promise errors
     *
     * @param error
     */
    LocationService.prototype.handleError = function (error) {
        console.error('Ocorreu um erro ao carregar os estados', error);
        return Promise.reject(error.message || error);
    };
    LocationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], LocationService);
    return LocationService;
}());



/***/ }),

/***/ "./src/app/services/nav.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavService = /** @class */ (function () {
    function NavService() {
        this.currentCity = {};
        this._navItemSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
        this.navItem$ = this._navItemSource.asObservable();
    }
    NavService.prototype.changeCity = function (city, state) {
        this.currentCity = {
            'city': city,
            'state': state
        };
        this._navItemSource.next(this.currentCity);
    };
    NavService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], NavService);
    return NavService;
}());



/***/ }),

/***/ "./src/app/services/weather.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeatherService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BASE_URL = 'https://api.darksky.net/forecast/';
var KEY = 'd2deeb708d6b5a2f85682a02f40a8d9d';
var WeatherService = /** @class */ (function () {
    function WeatherService(jsonp) {
        this.jsonp = jsonp;
        this.weatherData = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["a" /* Subject */]();
        this.weatherInformation$ = this.weatherData.asObservable();
    }
    WeatherService.prototype.getWeatherInformation = function (location) {
        var _this = this;
        this.getInfo(location)
            .subscribe(function (data) {
            _this.weatherData.next(data);
        });
    };
    WeatherService.prototype.getInfo = function (location) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* URLSearchParams */]();
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]();
        params.set('units', 'si');
        params.set('lang', 'pt');
        params.set('callback', 'JSONP_CALLBACK');
        options.search = params;
        var url = BASE_URL + KEY + '/' + location.getLatitude() + ',' + location.getLongitude();
        return this.jsonp
            .get(url, options)
            .map(function (resp) { return resp.json(); });
    };
    WeatherService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Jsonp */]])
    ], WeatherService);
    return WeatherService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map