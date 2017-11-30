webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* unused harmony export routingComponents */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__race_page_race_page_component__ = __webpack_require__("../../../../../src/app/race-page/race-page.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// haha
var routes = [
    { path: "races", component: __WEBPACK_IMPORTED_MODULE_2__race_page_race_page_component__["a" /* RacePageComponent */] },
    { path: "", redirectTo: "/races", pathMatch: "full" },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes
                // , { enableTracing: true }
                )
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var routingComponents = [__WEBPACK_IMPORTED_MODULE_2__race_page_race_page_component__["a" /* RacePageComponent */]];


/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".panel{\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-ms-flex-pack: distribute;\n\t    justify-content: space-around;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar\">\n   <div class=\"panel panel-primary\"> \n    <a routerLink='/races' routerLinkActive=\"active\"  class=\"panel-heading\">races</a>\n    <a routerLink='/mybib' routerLinkActive=\"active\"  class=\"panel-heading\">mybib</a>  \n    </div> \n</nav>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__race_finder_race_finder_component__ = __webpack_require__("../../../../../src/app/race-finder/race-finder.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__race_viewer_race_viewer_component__ = __webpack_require__("../../../../../src/app/race-viewer/race-viewer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__filter_pipe__ = __webpack_require__("../../../../../src/app/filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__race_page_race_page_component__ = __webpack_require__("../../../../../src/app/race-page/race-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__server_service__ = __webpack_require__("../../../../../src/app/server.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__race_finder_race_finder_component__["a" /* RaceFinderComponent */],
                __WEBPACK_IMPORTED_MODULE_7__race_viewer_race_viewer_component__["a" /* RaceViewerComponent */],
                __WEBPACK_IMPORTED_MODULE_10__race_page_race_page_component__["a" /* RacePageComponent */],
                __WEBPACK_IMPORTED_MODULE_8__filter_pipe__["a" /* FilterPipe */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_9__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_11__server_service__["a" /* ServerService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = (function () {
    function DataService() {
        this.subject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["b" /* Subject */]();
    }
    DataService.prototype.sendRace = function (race) {
        this.subject.next(race);
    };
    DataService.prototype.clearRace = function () {
        this.subject.next();
    };
    DataService.prototype.getRace = function () {
        return this.subject.asObservable();
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "../../../../../src/app/filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (races, term) {
        term = term.toLowerCase();
        if (term == '')
            return races;
        return races.filter(function (race) {
            return race.race_name.toLowerCase().includes(term) ||
                race.city.toLowerCase().includes(term) ||
                race.country.toLowerCase().includes(term);
        });
    };
    FilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "../../../../../src/app/race-finder/race-finder.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input {\n\twidth: 80%\n}\n\n#race-list-box {\n\twidth: 80%;\n\tmax-height: 540px;\n\toverflow: scroll\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/race-finder/race-finder.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!-- <h3>\n  One more excuse to travel\n</h3> -->\n<input placeholder=\"find the next race\" type='text' />\n<!-- </div>  -->\n<ul id=race-list-box>\n  <li *ngFor=\"let race of races | filter:term as result; let i=index\" style=\"list-style: none;\">\n    <!-- <div *ngIf=\"i<1\">\n     {{result? result.length : 0}} races may satisfy you\n    </div> -->\n    <div (click)=\"raceOnClicked(race)\">\n      <span>\n        <h4>{{race.race_name}}</h4>\n        <p>{{race.city}}, {{race.country}} || {{race.race_date | date: 'fullDate'}}</p>\n      </span>\n    </div>  \n  </li>\n</ul>\n"

/***/ }),

/***/ "../../../../../src/app/race-finder/race-finder.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RaceFinderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__server_service__ = __webpack_require__("../../../../../src/app/server.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RaceFinderComponent = (function () {
    function RaceFinderComponent(serverService, dataService) {
        this.serverService = serverService;
        this.dataService = dataService;
        this.races = [];
        this.raceClicked = {
            id: 58,
            race_name: 'haha New Taipei City Wan Jin Shi Marathon',
            country: 'Taiwan',
            city: 'Taipei City',
            official_website: 'http://www.shonan-kokusai.jp/12th/',
            description: 'greodgnoregreignrogiowegheowig',
            race_date: '2018-03-17T16:00:00.000Z'
        };
        this.term = '';
        // this.dataService.setRaceView(this.raceClicked)
    }
    RaceFinderComponent.prototype.ngOnInit = function () {
        this.getRace_basic_info();
    };
    RaceFinderComponent.prototype.getRace_basic_info = function () {
        var _this = this;
        this.serverService.retrieveBasicInfo()
            .subscribe(function (data) {
            _this.races = data;
            _this.races.forEach(function (race) {
                race.country = race.country.replace('-', ' ');
                race.city = race.city.replace('-', ' ');
            });
            _this.raceClicked = _this.races[Math.floor(Math.random() * _this.races.length)];
        }, function (error) { return console.log(error); });
    };
    RaceFinderComponent.prototype.raceOnClicked = function (race) {
        this.raceClicked = race;
        console.log('raceOnClicked() with ' + this.raceClicked.race_name);
        // console.log(this.raceClicked )
        this.dataService.sendRace(this.raceClicked);
    };
    RaceFinderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-race-finder',
            template: __webpack_require__("../../../../../src/app/race-finder/race-finder.component.html"),
            styles: [__webpack_require__("../../../../../src/app/race-finder/race-finder.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__server_service__["a" /* ServerService */], __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]])
    ], RaceFinderComponent);
    return RaceFinderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/race-page/race-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/race-page/race-page.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>\n  bib42\n</h1>\n<h3>\n  One more excuse to travel\n</h3>\n<div class=\"container-fluid\">\n  <app-race-finder class=\"grid row col-lg-6 col-md-5 col-sm-4 col-xs-12\">\n\n  </app-race-finder>\n  <app-race-viewer class=\"grid row col-lg-6 col-md-7 col-sm-8 col-xs-12\">\n    \n  </app-race-viewer>\n</div>"

/***/ }),

/***/ "../../../../../src/app/race-page/race-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RacePageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__server_service__ = __webpack_require__("../../../../../src/app/server.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RacePageComponent = (function () {
    function RacePageComponent(serverService, http, router) {
        this.serverService = serverService;
        this.http = http;
        this.router = router;
    }
    RacePageComponent.prototype.ngOnInit = function () { };
    RacePageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-race-page",
            template: __webpack_require__("../../../../../src/app/race-page/race-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/race-page/race-page.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_4__data_service__["a" /* DataService */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__server_service__["a" /* ServerService */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], RacePageComponent);
    return RacePageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/race-viewer/race-viewer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#viewer {\n\tmax-height: 580px;\n\toverflow: scroll\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/race-viewer/race-viewer.component.html":
/***/ (function(module, exports) {

module.exports = " <div *ngIf=\"raceForView\" id=viewer> \n\t<h2>{{raceForView.race_name}}</h2>\n\t   <a href={{raceForView.official_website}} target=\"_blank\">Go To the official website</a>   \n\t<p>{{raceForView.city}}, {{raceForView.country}} || {{raceForView.race_date | date: 'fullDate'}}</p>\n\t<br>\n\t<p>{{raceForView.description}}</p>\n\t<h4>Events</h4>\n\t<div *ngFor=\"let event of events\" class=\"container-fluid\">\n\t\t<div class=\"grid row col-lg-6 \">\n\t\t\t{{event.type}}\n\t\t</div>\n\t\t<div class=\"grid row col-lg-6\">\n\t\t\t{{event.start_time}}\n\t\t</div>\n\t</div>\n\n\n\t <br>\n\t <h4>Holiday near Race Day</h4>\n\t<div *ngFor=\"let holiday of holidays; let i = index\" class=\"container-fluid\">\n\t\t<div *ngIf=\"i<5\">\n\t\t\t<div class=\"grid row col-lg-6\">\n\t\t\t\t{{holiday.holiday}}\n\t\t\t</div>\n\t\t\t<div class=\"grid row col-lg-6\">\n\t\t\t\t{{holiday.date | date: 'MMM d'}}\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<!-- <br>\n\t <h4>Past Weather</h4>\n\t<div *ngFor=\"let year of pastWeather\" style=\"width: 100%;\" class=\"container-fluid\">\n\t\t<div style=\"width: 100%;\">\n\t\t\t<b>{{year.year}}\n\t\t\t{{year.date |  date: 'MMM d'}} </b>\n\t\t</div>\n\t\t<div style=\"width: 100%;\">\n\t\t\t<div class=\"grid row col-lg-7\">\n\t\t\t\t{{year.description}}\n\t\t\t</div>\n\t\t\t<div class=\"grid row col-lg-3\">\n\t\t\t\t{{year.lowest_temperature}}°C - {{year.highest_temperature}}°C\n\t\t\t</div>\n\t\t\t<div class=\"grid row col-lg-2\">\n\t\t\t\t{{year.wind_speed_mph}} mph\n\t\t\t</div>\n\t\t</div>\n\t</div>  -->\n\n  </div>  "

/***/ }),

/***/ "../../../../../src/app/race-viewer/race-viewer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RaceViewerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__server_service__ = __webpack_require__("../../../../../src/app/server.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RaceViewerComponent = (function () {
    function RaceViewerComponent(serverService, dataService) {
        var _this = this;
        this.serverService = serverService;
        this.dataService = dataService;
        this.raceForView = {
            id: 25,
            race_name: 'Cebu City Marathon',
            country: 'Philippines',
            city: 'Cebu',
            official_website: 'http://www.cebumarathon.net/',
            description: null,
            race_date: '2018-01-13T16:00:00.000Z'
        };
        this.events = [];
        this.holidays = [];
        this.subsription = this.dataService.getRace().subscribe(function (data) {
            _this.raceForView = data;
            _this.getFurtherInfo(_this.raceForView.race_name);
            _this.getHolidays(_this.raceForView.country);
            // this.pastWeather(this.raceForView.race_name)
        }, function (error) { return console.log(error); });
    }
    RaceViewerComponent.prototype.ngOnDestroy = function () {
        this.subsription.unsubscribe();
    };
    RaceViewerComponent.prototype.updateRaceView = function () {
        console.log(this.raceForView);
        // this.getFurtherInfo(this.raceForView.race_name)
        // this.getHolidays(this.raceForView.country)
        // this.getPastWeather(this.raceForView.race_name)
    };
    RaceViewerComponent.prototype.ngOnInit = function () {
        this.getFurtherInfo(this.raceForView.race_name);
        this.getHolidays(this.raceForView.country);
        // this.getPastWeather(this.raceForView.race_name)
    };
    RaceViewerComponent.prototype.getFurtherInfo = function (raceName) {
        var _this = this;
        this.serverService.retrieveEventAndStartTime(raceName)
            .subscribe(function (data) {
            _this.events = [];
            data.forEach(function (event) {
                var startTimeOrNotice = event.start_time ? event.start_time.substr(0, 5) : 'not announced yet';
                _this.events.push({
                    type: event.event,
                    start_time: startTimeOrNotice
                });
            });
        }, function (error) { return console.log(error); });
    };
    RaceViewerComponent.prototype.getHolidays = function (country) {
        var _this = this;
        this.serverService.retrieveHolidays(country)
            .subscribe(function (data) { return _this.holidays = data; }, function (error) { return console.log(error); });
    };
    RaceViewerComponent.prototype.getPastWeather = function (raceName) {
        var _this = this;
        this.serverService.retrievePastWeather(raceName)
            .subscribe(function (data) { return _this.pastWeather = data; }, function (error) { return console.log(error); });
    };
    RaceViewerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-race-viewer',
            template: __webpack_require__("../../../../../src/app/race-viewer/race-viewer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/race-viewer/race-viewer.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__server_service__["a" /* ServerService */], __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]])
    ], RaceViewerComponent);
    return RaceViewerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/server.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ServerService = (function () {
    function ServerService(http) {
        this.http = http;
    }
    ServerService.prototype.retrieveBasicInfo = function () {
        var apiUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].url + '/api/race_basic_info';
        return this.http.get(apiUrl)
            .map(function (response) {
            var data = response.json();
            return data;
        });
    };
    ServerService.prototype.retrieveEventAndStartTime = function (raceName) {
        var apiUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].url + '/api/eventandstarttime/' + raceName.replace(/\s/g, '%20');
        return this.http.get(apiUrl)
            .map(function (response) {
            var data = response.json();
            return data;
        });
    };
    ServerService.prototype.retrievePastWeather = function (raceName) {
        var apiUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].url + '/api/pastweather/' + raceName.replace(/\s/g, '%20');
        return this.http.get(apiUrl)
            .map(function (response) {
            var data = response.json();
            return data;
        });
    };
    ServerService.prototype.retrieveHolidays = function (countryName) {
        var apiUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].url + '/api/holidays/' + countryName.replace(/\s/g, '%20').toLowerCase();
        return this.http.get(apiUrl)
            .map(function (response) {
            var data = response.json();
            return data;
        });
    };
    ServerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], ServerService);
    return ServerService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    url: 'http://locahost:8080'
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map