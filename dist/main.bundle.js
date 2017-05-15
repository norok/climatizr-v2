webpackJsonp([1,5],{

/***/ 140:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 140;


/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(175);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_weather_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_3" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(254),
        styles: [__webpack_require__(234)],
        providers: [__WEBPACK_IMPORTED_MODULE_0__services_weather_service__["a" /* WeatherService */]]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_structural_background_background_component__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_structural_header_header_component__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_structural_footer_footer_component__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_functional_city_selector_city_selector_component__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_structural_current_weather_current_weather_component__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_structural_forecast_info_forecast_info_component__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_structural_forecast_info_block_forecast_info_block_component__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_structural_forecast_graph_forecast_graph_component__ = __webpack_require__(168);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_structural_background_background_component__["a" /* BackgroundComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_structural_header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_structural_footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_functional_city_selector_city_selector_component__["a" /* CitySelectorComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_structural_current_weather_current_weather_component__["a" /* CurrentWeatherComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_structural_forecast_info_forecast_info_component__["a" /* ForecastInfoComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_structural_forecast_info_block_forecast_info_block_component__["a" /* ForecastInfoBlockComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_structural_forecast_graph_forecast_graph_component__["a" /* ForecastGraphComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* JsonpModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return City; });
var City = (function () {
    function City(name) {
        this.name = name;
    }
    City.prototype.getName = function () {
        return this.name;
    };
    return City;
}());

//# sourceMappingURL=city.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeoLocation; });
var GeoLocation = (function () {
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

//# sourceMappingURL=geo-location.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return State; });
var State = (function () {
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

//# sourceMappingURL=state.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_weather_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_cities_states_service__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_location_service__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_localstorage_service__ = __webpack_require__(173);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CitySelectorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CitySelectorComponent = (function () {
    function CitySelectorComponent(citiesStatesService, locationService, weatherService, localStorage) {
        this.citiesStatesService = citiesStatesService;
        this.locationService = locationService;
        this.weatherService = weatherService;
        this.localStorage = localStorage;
        this.currentCity = '';
        this.ready = false;
        this.defaults = {
            state: 'SP',
            city: 'Campinas'
        };
        this.favoriteCity = null;
        this.isFavorite = false;
    }
    CitySelectorComponent.prototype.ngOnInit = function () {
        this.getStates();
    };
    CitySelectorComponent.prototype.getStates = function () {
        var _this = this;
        this.citiesStatesService
            .getLocations()
            .then(function (states) {
            _this.states = states;
            _this.getFavorite();
            _this.currentCity = _this.favoriteCity == null ? _this.defaults.city : _this.favoriteCity.city;
            var favState = _this.favoriteCity == null ? _this.defaults.state : _this.favoriteCity.state;
            var matcher = new RegExp("^" + $.ui.autocomplete.escapeRegex(favState), "i");
            _this.currentState = _this.states.filter(function (value) {
                return matcher.test(value.getAbbr());
            })[0];
            _this.updateAutocomplete();
            _this.updateLocation(_this.currentState, _this.currentCity);
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
                var matcher = new RegExp("^" + $.ui.autocomplete.escapeRegex(request.term), "i");
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
            this.updateLocation(this.currentState, this.currentCity);
        }
    };
    CitySelectorComponent.prototype.updateLocation = function (state, city) {
        var _this = this;
        this.getFavorite();
        this.isFavorite = (state.abbr == this.favoriteCity.state && city == this.favoriteCity.city);
        this.locationService
            .getPreciseLocation(state, city)
            .subscribe(function (location) {
            _this.weatherService.getWeatherInformation(location);
        });
    };
    CitySelectorComponent.prototype.saveFavorite = function () {
        this.isFavorite = true;
        var object = {
            'state': this.currentState.getAbbr(),
            'city': this.currentCity
        };
        this.localStorage.setJSONData('favoriteCity', object);
    };
    CitySelectorComponent.prototype.getFavorite = function () {
        this.favoriteCity = this.localStorage.getJSONData('favoriteCity');
    };
    return CitySelectorComponent;
}());
CitySelectorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_3" /* Component */])({
        selector: 'cl2-city-selector',
        template: __webpack_require__(255),
        styles: [__webpack_require__(235)],
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_cities_states_service__["a" /* CitiesStatesService */], __WEBPACK_IMPORTED_MODULE_3__services_location_service__["a" /* LocationService */], __WEBPACK_IMPORTED_MODULE_4__services_localstorage_service__["a" /* LocalstorageService */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_cities_states_service__["a" /* CitiesStatesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_cities_states_service__["a" /* CitiesStatesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_location_service__["a" /* LocationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_location_service__["a" /* LocationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__services_weather_service__["a" /* WeatherService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_weather_service__["a" /* WeatherService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_localstorage_service__["a" /* LocalstorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_localstorage_service__["a" /* LocalstorageService */]) === "function" && _d || Object])
], CitySelectorComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=city-selector.component.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackgroundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BackgroundComponent = (function () {
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
    return BackgroundComponent;
}());
BackgroundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'cl2-background',
        template: __webpack_require__(256),
        styles: [__webpack_require__(236)]
    }),
    __metadata("design:paramtypes", [])
], BackgroundComponent);

//# sourceMappingURL=background.component.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__classes_weather_block__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_weather_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrentWeatherComponent; });
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



var CurrentWeatherComponent = (function (_super) {
    __extends(CurrentWeatherComponent, _super);
    function CurrentWeatherComponent(weatherService) {
        var _this = _super.call(this) || this;
        _this.weatherService = weatherService;
        _this.currentWeather = {};
        _this.todayForecast = {};
        weatherService.weatherInformation$.subscribe(function (data) { return _this.setWeatherData(data); });
        return _this;
    }
    CurrentWeatherComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
    };
    CurrentWeatherComponent.prototype.setWeatherData = function (data) {
        this.currentWeather = data.currently;
        this.todayForecast = data.daily.data[0];
        this.setIcon('icon-current', this.currentWeather.icon);
    };
    return CurrentWeatherComponent;
}(__WEBPACK_IMPORTED_MODULE_0__classes_weather_block__["a" /* WeatherBlock */]));
CurrentWeatherComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_3" /* Component */])({
        selector: 'cl2-current-weather',
        template: __webpack_require__(257),
        styles: [__webpack_require__(237)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_weather_service__["a" /* WeatherService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_weather_service__["a" /* WeatherService */]) === "function" && _a || Object])
], CurrentWeatherComponent);

var _a;
//# sourceMappingURL=current-weather.component.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'cl2-footer',
        template: __webpack_require__(258),
        styles: [__webpack_require__(238)]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_weather_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForecastGraphComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ForecastGraphComponent = (function () {
    function ForecastGraphComponent(weatherService, datePipe, decimalPipe) {
        var _this = this;
        this.weatherService = weatherService;
        this.datePipe = datePipe;
        this.decimalPipe = decimalPipe;
        weatherService.weatherInformation$.subscribe(function (data) { return _this.updateData(data); });
    }
    ForecastGraphComponent.prototype.ngOnInit = function () {
        var _this = this;
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
    return ForecastGraphComponent;
}());
ForecastGraphComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_3" /* Component */])({
        selector: 'cl2-forecast-graph',
        template: __webpack_require__(259),
        styles: [__webpack_require__(239)],
        providers: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["d" /* DecimalPipe */], __WEBPACK_IMPORTED_MODULE_0__angular_common__["e" /* DatePipe */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_weather_service__["a" /* WeatherService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_weather_service__["a" /* WeatherService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common__["e" /* DatePipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common__["e" /* DatePipe */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common__["d" /* DecimalPipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common__["d" /* DecimalPipe */]) === "function" && _c || Object])
], ForecastGraphComponent);

var _a, _b, _c;
//# sourceMappingURL=forecast-graph.component.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__classes_weather_block__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForecastInfoBlockComponent; });
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


var ForecastInfoBlockComponent = (function (_super) {
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
    return ForecastInfoBlockComponent;
}(__WEBPACK_IMPORTED_MODULE_0__classes_weather_block__["a" /* WeatherBlock */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* Input */])(),
    __metadata("design:type", Object)
], ForecastInfoBlockComponent.prototype, "day", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* Input */])(),
    __metadata("design:type", Number)
], ForecastInfoBlockComponent.prototype, "index", void 0);
ForecastInfoBlockComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_3" /* Component */])({
        selector: 'cl2-forecast-info-block',
        template: __webpack_require__(260),
        styles: [__webpack_require__(240)]
    }),
    __metadata("design:paramtypes", [])
], ForecastInfoBlockComponent);

//# sourceMappingURL=forecast-info-block.component.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_weather_service__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForecastInfoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ForecastInfoComponent = (function () {
    function ForecastInfoComponent(weatherService) {
        var _this = this;
        this.weatherService = weatherService;
        this.forecast = [];
        weatherService.weatherInformation$.subscribe(function (data) { return _this.updateData(data); });
    }
    ForecastInfoComponent.prototype.ngOnInit = function () { };
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
    return ForecastInfoComponent;
}());
ForecastInfoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'cl2-forecast-info',
        template: __webpack_require__(261),
        styles: [__webpack_require__(241)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_weather_service__["a" /* WeatherService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_weather_service__["a" /* WeatherService */]) === "function" && _a || Object])
], ForecastInfoComponent);

var _a;
//# sourceMappingURL=forecast-info.component.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
        this.title = "Climatizr";
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'cl2-header',
        template: __webpack_require__(262),
        styles: [__webpack_require__(242)],
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_state__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classes_city__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CitiesStatesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CitiesStatesService = (function () {
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
    return CitiesStatesService;
}());
CitiesStatesService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */]) === "function" && _a || Object])
], CitiesStatesService);

var _a;
//# sourceMappingURL=cities-states.service.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalstorageService; });
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
var LocalstorageService = (function () {
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
    return LocalstorageService;
}());
LocalstorageService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], LocalstorageService);

//# sourceMappingURL=localstorage.service.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_geo_location__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationService; });
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
var LocationService = (function () {
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
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]();
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
    return LocationService;
}());
LocationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */]) === "function" && _a || Object])
], LocationService);

var _a;
//# sourceMappingURL=location.service.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, ".main-container {\n  position: relative;\n  z-index: 2; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "form {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  min-width: 250px; }\n  form .form-group,\n  form .favorite-button {\n    vertical-align: top; }\n  @media (max-width: 575px) {\n    form .form-group {\n      width: 100%; } }\n  form .form-group:last-child {\n    margin-bottom: 0; }\n  form .favorite-button {\n    background: transparent none;\n    border: none;\n    color: #f0ad4e;\n    cursor: pointer;\n    font-size: 28px;\n    height: 34px;\n    line-height: 1;\n    outline: none; }\n\n.card .card-title {\n  font-size: 1.5rem;\n  padding-top: 0;\n  padding-bottom: 10px; }\n  @media (max-width: 575px) {\n    .card .card-title {\n      font-size: 1.4rem; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, ".bg {\n  background-position: top center;\n  background-size: cover;\n  bottom: 0;\n  left: 0;\n  position: fixed;\n  right: 0;\n  top: 0; }\n  .bg.night {\n    background-image: url(" + __webpack_require__(536) + "); }\n  .bg.day {\n    background-image: url(" + __webpack_require__(535) + "); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, ".current-weather {\n  color: #FFF;\n  text-align: center;\n  margin-bottom: 20px; }\n  .current-weather .date {\n    font-size: 20px;\n    font-family: \"Oswald\", \"Open Sans\", \"Helvetica Neue\", Helvetica, Arial, sans-serif; }\n  .current-weather .temp {\n    display: inline-block;\n    font-family: \"Oswald\", \"Open Sans\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n    font-size: 50px;\n    font-weight: 700;\n    line-height: 1;\n    margin-bottom: 15px;\n    position: relative;\n    left: -35px; }\n    .current-weather .temp .min-max {\n      -webkit-transform: translateY(-50%);\n              transform: translateY(-50%);\n      font-size: 20px;\n      left: 100%;\n      line-height: 1.7;\n      padding-left: 15px;\n      position: absolute;\n      top: 50%;\n      white-space: nowrap; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "#site-footer {\n  bottom: 10px;\n  left: 0;\n  position: absolute;\n  right: 0;\n  z-index: 3; }\n  #site-footer a {\n    color: #FFF;\n    text-shadow: 0 0 2px #000, 0 0 5px #000;\n    text-decoration: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "#forecast-chart {\n  height: 300px !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, ".weekday {\n  color: #FFF;\n  text-align: center;\n  padding: 0 10px;\n  outline: none; }\n  .weekday .date {\n    font-size: 18px;\n    font-family: \"Oswald\", \"Open Sans\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n    margin-bottom: 5px; }\n  .weekday .min-max {\n    font-size: 16px;\n    font-family: \"Oswald\", \"Open Sans\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n    font-weight: bold;\n    margin-bottom: 10px; }\n  .weekday .summary {\n    font-weight: bold; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, ".navbar {\n  background-color: rgba(0, 0, 0, 0.3);\n  border-radius: 0;\n  border: none;\n  z-index: 100;\n  margin-bottom: 20px; }\n  .navbar > .container {\n    position: relative; }\n    @media (max-width: 575px) {\n      .navbar > .container {\n        width: 100%; } }\n  .navbar .navbar-brand {\n    color: #FFF;\n    font-family: \"Oswald\", \"Open Sans\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n    cursor: default; }\n    .navbar .navbar-brand:hover {\n      color: #FFF; }\n  .navbar button.navbar-toggler {\n    border-radius: 0;\n    border: none;\n    color: #FFF;\n    font-size: 30px;\n    line-height: 40px;\n    margin: 0;\n    outline: none;\n    padding: 0 15px;\n    position: absolute;\n    right: 0;\n    top: 0; }\n    .navbar button.navbar-toggler:hover, .navbar button.navbar-toggler:focus {\n      background-color: rgba(0, 0, 0, 0.5);\n      color: #FFF; }\n  .navbar .navbar-nav {\n    text-align: right; }\n    .navbar .navbar-nav > li > span {\n      color: rgba(255, 255, 255, 0.9);\n      cursor: pointer; }\n      .navbar .navbar-nav > li > span:hover, .navbar .navbar-nav > li > span:focus {\n        color: #FFF; }\n  .navbar #navbar-collapse {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: reverse;\n        -ms-flex-direction: row-reverse;\n            flex-direction: row-reverse; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 254:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n  <cl2-header></cl2-header>\n  <main class=\"container\">\n    <cl2-city-selector></cl2-city-selector>\n    <cl2-current-weather></cl2-current-weather>\n    <cl2-forecast-info></cl2-forecast-info>\n    <cl2-forecast-graph></cl2-forecast-graph>\n  </main>\n</div>\n<cl2-footer></cl2-footer>\n<cl2-background></cl2-background>\n"

/***/ }),

/***/ 255:
/***/ (function(module, exports) {

module.exports = "<section class=\"card text-center cl2-card\" id=\"city-selector\">\n  <div class=\"card-block\">\n    <h4 class=\"card-title\">Selecione seu Estado e Cidade</h4>\n    <form class=\"form-inline\" #f=\"ngForm\" (ngSubmit)=\"onSubmit(f, $event)\">\n      <div class=\"form-group text-left\">\n        <label class=\"sr-only\" for=\"form-state\">Estado</label>\n        <select class=\"form-control\" name=\"form-state\" id=\"form-state\" [(ngModel)]=\"currentState\" required (ngModelChange)=\"stateChange($event)\" [disabled]=\"!ready\">\n          <option *ngFor=\"let state of states\" [ngValue]=\"state\">\n            {{ state.abbr }}\n          </option>\n        </select>\n      </div>\n      <div class=\"form-group text-left\">\n        <label class=\"sr-only\" for=\"form-city\">Cidade</label>\n        <input class=\"form-control\" type=\"text\" id=\"form-city\" name=\"form-city\" placeholder=\"Digite o nome da cidade\" [(ngModel)]=\"currentCity\" required [disabled]=\"!ready\"/>\n      </div>\n      <div class=\"form-group\">\n        <button type=\"submit\" class=\"btn btn-primary\" title=\"Ver clima da cidade atual\" [disabled]=\"!ready\">Ver Clima</button>\n        <button type=\"button\" class=\"favorite-button\" title=\"{{ isFavorite ? 'Esta é sua cidade favorita' : 'Favoritar cidade' }}\" [disabled]=\"!ready\" (click)=\"saveFavorite()\"><i class=\"fa\" [ngClass]=\"{'fa-star': isFavorite, 'fa-star-o': !isFavorite}\"></i></button>\n      </div>\n    </form>\n  </div>\n</section>"

/***/ }),

/***/ 256:
/***/ (function(module, exports) {

module.exports = "<div class=\"bg\" [ngClass]=\"timeClass()\"></div>"

/***/ }),

/***/ 257:
/***/ (function(module, exports) {

module.exports = "<section class=\"current-weather\">\n  <h2 class=\"sr-only\">Tempo Atual</h2>\n  <div class=\"date\">\n    {{ currentWeather.time * 1000 | date:'EEE, dd/MM'  }}\n  </div>\n  <canvas id=\"icon-current\" width=\"150\" height=\"150\"></canvas>\n  <div class=\"data\">\n    <div class=\"temp\">\n      {{ currentWeather.temperature | number:'1.0-0' }}°C\n      <div class=\"min-max\">\n        <div class=\"max\"><i class=\"fa fa-caret-up\"></i> {{ todayForecast.temperatureMax | number:'1.0-0' }}°C</div>\n        <div class=\"min\"><i class=\"fa fa-caret-down\"></i> {{ todayForecast.temperatureMin | number:'1.0-0' }}°C</div>\n      </div>\n    </div>\n    <div class=\"summary\">\n      <strong>Sensação Térmica:</strong> {{ currentWeather.apparentTemperature | number:'1.0-0' }}°C<strong> - {{ currentWeather.summary }}</strong>\n    </div>\n    <div class=\"rain\">\n      <strong>Chuva:</strong> {{ 100 * currentWeather.precipProbability | number:'1.0-0' }}% - {{ currentWeather.precipIntensity }}mm/h\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ 258:
/***/ (function(module, exports) {

module.exports = "<footer id=\"site-footer\">\n  <div class=\"container-fluid\">\n    <div class=\"text-right\"><a href=\"https://darksky.net/poweredby/\" target=\"_blank\">Powered by Dark Sky</a></div>\n  </div>\n</footer>"

/***/ }),

/***/ 259:
/***/ (function(module, exports) {

module.exports = "<section class=\"forecast card cl2-card text-center\">\n  <div class=\"card-body\">\n    <h4 class=\"card-title\">Evolução das temperaturas na próxima semana</h4>\n    <canvas id=\"forecast-chart\" width=\"100%\" height=\"300\"></canvas>\n  </div>\n</section>"

/***/ }),

/***/ 260:
/***/ (function(module, exports) {

module.exports = "<div class=\"weekday\" data-animation=\"false\" data-toggle=\"popover\" data-trigger=\"hover\" [attr.data-content]=\"todo\" data-container=\"body\" data-placement=\"top\" role=\"button\" tabindex=\"{{ index }}\">\n  <div class=\"date\">\n    {{ (day.time * 1000) | date: 'EEE, dd/MM' }}\n  </div>\n  <canvas id=\"icon-day-{{ index }}\" class=\"icon\" width=\"50\" height=\"50\"></canvas>\n  <div class=\"min-max\">\n    <div class=\"max\"><i class=\"fa fa-caret-up\"></i> {{ day.temperatureMax | number:'1.0-0' }}°C</div>\n    <div class=\"min\"><i class=\"fa fa-caret-down\"></i> {{ day.temperatureMin | number:'1.0-0' }}°C</div>\n  </div>\n  <div class=\"summary\">\n    {{ day.summary }}\n  </div>\n</div>"

/***/ }),

/***/ 261:
/***/ (function(module, exports) {

module.exports = "<section class=\"forecast card cl2-card text-center\">\n  <div class=\"card-body\">\n    <h4 class=\"card-title\">Previsão para os próximos dias</h4>\n    <ul class=\"list-unstyled owl-carousel\" id=\"forecast-carousel\">\n      <li *ngFor=\"let day of forecast index as index\" class=\"weekday\">\n        <cl2-forecast-info-block [day]=\"day\" [index]=\"index\"></cl2-forecast-info-block>\n      </li>\n    </ul>\n  </div>\n</section>"

/***/ }),

/***/ 262:
/***/ (function(module, exports) {

module.exports = "<header class=\"navbar navbar-toggleable-md\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <h1 class=\"hidden-xs-up\">{{ title }}</h1>\n      <div class=\"navbar-brand\">{{ title }}</div>\n    </div>\n    <!--<button type=\"button\" class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#navbar-collapse\"><i class=\"fa fa-bars\"></i></button>\n    <nav class=\"navbar-collapse collapse\" id=\"navbar-collapse\" role=\"navigation\">\n      <ul class=\"navbar-nav nav menu\">\n        <li class=\"nav-item\"><span class=\"nav-link\" href=\"#\" ng-click=\"viewFavorite()\">Minha Cidade Favorita</span></li>\n        <li class=\"nav-item\"><span class=\"nav-link\" href=\"#\" ng-click=\"setCityState('Blumenau','SC')\">Blumenau, SC</span></li>\n        <li class=\"nav-item\"><span class=\"nav-link\" href=\"#\" ng-click=\"setCityState('Campinas','SP')\">Campinas, SP</span></li>\n      </ul>\n    </nav>-->\n  </div>\n</header>"

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeatherService; });
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
var WeatherService = (function () {
    function WeatherService(jsonp) {
        this.jsonp = jsonp;
        this.weatherData = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["Subject"]();
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
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]();
        params.set('units', 'si');
        params.set('lang', 'pt');
        params.set('callback', 'JSONP_CALLBACK');
        options.search = params;
        var url = BASE_URL + KEY + '/' + location.getLatitude() + ',' + location.getLongitude();
        return this.jsonp
            .get(url, options)
            .map(function (resp) { return resp.json(); });
    };
    return WeatherService;
}());
WeatherService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Jsonp */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Jsonp */]) === "function" && _a || Object])
], WeatherService);

var _a;
//# sourceMappingURL=weather.service.js.map

/***/ }),

/***/ 535:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "day.25170eec2d083f5d9086.jpg";

/***/ }),

/***/ 536:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "night.2da1ec5a7869c82152cb.jpg";

/***/ }),

/***/ 539:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(141);


/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeatherBlock; });
var WeatherBlock = (function () {
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

//# sourceMappingURL=weather-block.js.map

/***/ })

},[539]);
//# sourceMappingURL=main.bundle.js.map