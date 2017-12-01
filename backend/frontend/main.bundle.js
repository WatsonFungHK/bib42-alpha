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
exports.push([module.i, ".panel{\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-ms-flex-pack: distribute;\n\t    justify-content: space-around;\n}\n\nh1, h1 {\n    font-size: 48px;\n    font-family: 'Rationale', sans-serif;\n    padding-left: 15px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>\n  BIB42\n</h1>\n<app-landing></app-landing>\n<router-outlet></router-outlet>"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__race_finder_race_finder_component__ = __webpack_require__("../../../../../src/app/race-finder/race-finder.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__race_viewer_race_viewer_component__ = __webpack_require__("../../../../../src/app/race-viewer/race-viewer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__filter_pipe__ = __webpack_require__("../../../../../src/app/filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__race_page_race_page_component__ = __webpack_require__("../../../../../src/app/race-page/race-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__server_service__ = __webpack_require__("../../../../../src/app/server.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__landing_landing_component__ = __webpack_require__("../../../../../src/app/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__google_map_google_map_component__ = __webpack_require__("../../../../../src/app/google-map/google-map.component.ts");
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
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__race_finder_race_finder_component__["a" /* RaceFinderComponent */],
                __WEBPACK_IMPORTED_MODULE_8__race_viewer_race_viewer_component__["a" /* RaceViewerComponent */],
                __WEBPACK_IMPORTED_MODULE_11__race_page_race_page_component__["a" /* RacePageComponent */],
                __WEBPACK_IMPORTED_MODULE_9__filter_pipe__["a" /* FilterPipe */],
                __WEBPACK_IMPORTED_MODULE_13__landing_landing_component__["a" /* LandingComponent */],
                __WEBPACK_IMPORTED_MODULE_14__google_map_google_map_component__["a" /* GoogleMapComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_10__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_5__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: "AIzaSyALXc0hVWCMi4MWjzVW6EcKJklI1ab4QyU"
                })
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_12__server_service__["a" /* ServerService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
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
    DataService.prototype.calculateDateInterval = function (date1, date2) {
        // Get 1 day in milliseconds
        var one_day_ms = 1000 * 60 * 60 * 24;
        // Convert both dates to milliseconds
        var date1_ms = date1.getTime();
        var date2_ms = date2.getTime();
        // Calculate the difference in milliseconds
        var difference_ms = -(date2_ms - date1_ms);
        var days = Math.floor(difference_ms / one_day_ms);
        // console.log("dataService says date interval between two holidays is " + days);
        return days;
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
        var month = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ];
        term = term.toLowerCase();
        if (term === "") {
            return races;
        }
        return races.filter(function (race) {
            // tslint:disable-next-line:radix
            var monthIdx = parseInt(race.race_date.split("-")[1]) - 1;
            var monthString = month[monthIdx];
            // console.log(`${race.race_name} ${race.race_date}: ${monthString} ${monthIdx}`);
            return race.race_name.toLowerCase().includes(term) ||
                race.city.toLowerCase().includes(term) ||
                race.country.toLowerCase().includes(term) ||
                monthString.toLowerCase().includes(term);
        });
    };
    FilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: "filter"
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "../../../../../src/app/google-map/google-map.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/google-map/google-map.component.html":
/***/ (function(module, exports) {

module.exports = "<agm-map [latitude]=\"lat\" [longitude]=\"lng\"></agm-map>"

/***/ }),

/***/ "../../../../../src/app/google-map/google-map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleMapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GoogleMapComponent = (function () {
    function GoogleMapComponent() {
        this.lat = 51.678418;
        this.lng = 7.809007;
    }
    GoogleMapComponent.prototype.ngOnInit = function () {
        console.log(this.lat);
        console.log(this.race);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])("race"),
        __metadata("design:type", Object)
    ], GoogleMapComponent.prototype, "race", void 0);
    GoogleMapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-google-map",
            template: __webpack_require__("../../../../../src/app/google-map/google-map.component.html"),
            styles: [__webpack_require__("../../../../../src/app/google-map/google-map.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GoogleMapComponent);
    return GoogleMapComponent;
}());



/***/ }),

/***/ "../../../../../src/app/landing/landing.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".hero{\n  height: 500px;\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/background.jpg") + ");\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.overlay{\n  width: 100%;\n  height: 100%;\n  background-color: #000000;\n  opacity: 0.5;\n  position: absolute;\n}\n\n.heading{\n  font: sans-serif;\n  z-index: 5;\n  width: 400px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n\n.heading h1, h2{\n  font: sans-serif;\n  color: white;\n  font-size: 40px;\n}\n\n.heading button{\n  font-size: 30px;\n  width: 170px;\n  color: white;\n  background-color: green;\n  border: none;\n  border-radius: 20px;\n}\n\n.icons{\n  width: 100vw;\n  /* background-color: #CEE7B5; */\n}\n\n.icons img {\n\twidth: 100px;\n\theight: 100px;\t\n}\n\n.icon{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin: 30px 0;\n}\n\n.icon p{\n  width: 150px;\n  min-height: 100px;\n  padding-left: 10px;\n}\n\n .textContainer {\n  text-align: center;\n} ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.html":
/***/ (function(module, exports) {

module.exports = "  <section class=\"hero\">\n      <div class=\"overlay\">\n      </div>\n      <div class=\"heading\">\n        <h2>Run Asia</h2>\n        <h2>See Diversity</h2>\n        <!-- <button>Learn More</button> -->\n      </div>\n  </section>\n    \n      <section class=\"icons container-fluid\">\n        <div class=\"icon col-lg-3 col-md-3 col-sm-6 col-xs-12\">\n          <img src=\"assets/images/lighting.png\">\n          <div class=textContainer>\n            <br>\n            <h5>Quick Query</h5>\n            <p>view races around the world without refreshing your webbrowser</p>\n          </div>\n        </div>\n        <div class=\"icon col-lg-3 col-md-3 col-sm-6 col-xs-12\">\n          <img src=\"assets/images/holiday.png\">\n          <div class=textContainer>\n          <br>\n          <h5>Run with Holiday</h5>\n          <p>plan your overseas marathon with local holidays and festivals</p>\n          </div>\n        </div>\n        <div class=\"icon col-lg-3 col-md-3 col-sm-6 col-xs-12\">\n          <img src=\"assets/images/weather.ico\">\n          <div class=textContainer>\n            <br>\n            <h5>Choose Good Weather</h5>\n            <p>know past weather to choose races you feel most comfortable with </p>\n          </div>\n        </div>\n         <div class=\"icon col-lg-3 col-md-3 col-sm-6 col-xs-12\">\n          <img src=\"assets/images/lighting.png\">\n          <div class=textContainer>\n            <br>\n            <h5>Instant</h5>\n            <p>view races around the world without refreshing your webbrowser</p>\n          </div>\n        </div> \n      </section>\n"

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LandingComponent = (function () {
    function LandingComponent() {
    }
    LandingComponent.prototype.ngOnInit = function () {
    };
    LandingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-landing",
            template: __webpack_require__("../../../../../src/app/landing/landing.component.html"),
            styles: [__webpack_require__("../../../../../src/app/landing/landing.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/race-finder/race-finder.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#race-finder {\n\twidth: 80%;\n}\n\n#race-list-box {\n\twidth: 80%;\n\tmax-height: 540px;\n\toverflow: auto;\n}\n\n .marathon-container {\n\tborder: 1px solid #dedede;\n    padding: 10px;\n\tmargin: 5px 0px;\n\tbox-shadow: 5px 2px 2px #d4d0d0;\n}\n\n.marathon-container:hover {\n\tbackground-color: #EFEFEF;\n} \n\n#tagsinput {\n\tpadding: 5px;\n    width: 100%;\n}\n\ndiv#search-container {\n    margin-left: 40px;\n    margin-right: 128px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/race-finder/race-finder.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- hHA  -->\n<!-- </div>  -->\n<div id=\"search-container\">\n<h3>\n  One more excuse to travel\n</h3> \n<input id=\"tagsinput\" data-role=\"tagsinput\" placeholder=\"type in race name, place name, or month\" type=\"text\" [(ngModel)]=\"term\" />\n<button (click)=\"surpriseUser()\">surprise me</button>\n<br>\n</div>  \n<ul id=\"race-list-box\">\n  <li *ngFor=\"let race of races | filter:term as result\" class=\"marathon-container\" style=\"list-style: none;\">\n    <!-- <div *ngIf=\"i<1\">\n     {{result? result.length : 0}} races may satisfy you\n    </div> -->\n    <div (click)=\"raceOnClicked(race)\">\n      <span>\n        <h4>{{race.race_name}}</h4>\n        <p>{{race.city}}, {{race.country}}</p>\n        <p>{{race.race_date | date: 'fullDate'}}</p>\n      </span>\n    </div>  \n  </li>\n</ul>\n"

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
            race_name: "haha New Taipei City Wan Jin Shi Marathon",
            country: "Taiwan",
            city: "Taipei City",
            official_website: "http://www.shonan-kokusai.jp/12th/",
            race_date: "2018-03-17T16:00:00.000Z"
        };
        this.term = "";
        this.termArray = [
            "Japan", "Beijing", "Taiwan", "hong kong", "Thailand", "North Korea",
            "January", "August",
            "International marathon", "Half marathon",
            "trail", "city",
            "100"
        ];
    }
    RaceFinderComponent.prototype.ngOnInit = function () {
        this.getRace_basic_info();
    };
    RaceFinderComponent.prototype.surpriseUser = function () {
        this.term = this.termArray[Math.floor(Math.random() * this.termArray.length)];
    };
    RaceFinderComponent.prototype.raceOnClicked = function (race) {
        this.raceClicked = race;
        this.dataService.sendRace(this.raceClicked);
    };
    RaceFinderComponent.prototype.getRace_basic_info = function () {
        var _this = this;
        this.serverService.retrieveBasicInfo()
            .subscribe(function (data) {
            _this.races = data;
            _this.races.forEach(function (race) {
                race.country = race.country.replace("-", " ");
                race.city = race.city.replace("-", " ");
            });
            _this.raceClicked = _this.races[Math.floor(Math.random() * _this.races.length)];
        }, function (error) { return console.log(error); });
    };
    RaceFinderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-race-finder",
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
exports.push([module.i, "h1, h1 {\n    font-size: 48px;\n    font-family: 'Rationale', sans-serif;\n    padding-left: 15px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/race-page/race-page.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container-fluid\">\n  <app-race-finder class=\"grid row col-lg-5 col-md-5 col-sm-4 col-xs-12\">\n\n  </app-race-finder>\n  <app-race-viewer class=\"grid row col-lg-7 col-md-7 col-sm-8 col-xs-12\">\n    \n  </app-race-viewer>\n</div>"

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
exports.push([module.i, "#viewer {\n\tmax-height: 680px;\n\toverflow: auto;\n    border: 1px solid #dedede ;\n    padding-left: 20px;\n    box-shadow: 2px 2px 2px #d4d0d0 ;\n}\n\nagm-map {\n      height: 200px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/race-viewer/race-viewer.component.html":
/***/ (function(module, exports) {

module.exports = " <div *ngIf=\"raceForView\" id=viewer> \n\t<h2>{{raceForView.race_name}}</h2>\n\t   <a href={{raceForView.official_website}} target=\"_blank\">Go To the official website</a>   \n\t<p>{{raceForView.city}}, {{raceForView.country}} || {{raceForView.race_date | date: 'fullDate'}}</p>\n\t<br>\n\t<!-- google map  -->\n\t<agm-map [latitude]=\"lat\" [longitude]=\"lng\"></agm-map>\n\n\t<div *ngIf=\"events\">\n\t\t<h4>Events</h4>\n\t\t<div *ngFor=\"let event of events\" class=\"container-fluid\">\n\t\t\t<div class=\"grid row col-lg-6 \">\n\t\t\t\t{{event.type}}\n\t\t\t</div>\n\t\t\t<div class=\"grid row col-lg-6\" *ngIf=\"event.start_time ; else notStartTimeBox\">\n\t\t\t\tstart at {{event.start_time}}\n\t\t\t</div>\n\t\t\t<ng-template #notStartTimeBox>not announced yet</ng-template>\n\t\t</div>\n\t</div>\n\n\t\n\n\t <br>\n\t<div *ngIf=\"holidays.length > 0\">\n\t\t<h4>Holiday near Race Day</h4>\n\t\t<div *ngFor=\"let holiday of holidays\" class=\"container-fluid\">\n\t\t\t<div class=\"grid row col-lg-6\">\n\t\t\t\t{{holiday.holiday}}\n\t\t\t</div>\n\t\t\t<div class=\"grid row col-lg-6\">\n\t\t\t\t{{holiday.date | date: 'MMM d'}}\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<br>\n\t<div *ngIf=\"pastWeather.length > 0\">\n\t\t<h4>Past Weather</h4>\n\t\t<div *ngFor=\"let year of pastWeather\" style=\"width: 100%;\" class=\"container-fluid\">\n\t\t\t<div style=\"width: 100%;\">\n\t\t\t\t<b>{{year.year}}\n\t\t\t\t{{year.date |  date: 'MMM d'}} </b>\n\t\t\t</div>\n\t\t\t<div style=\"width: 100%;\">\n\t\t\t\t<div class=\"grid row col-lg-7\">\n\t\t\t\t\t{{year.description}}\n\t\t\t\t</div>\n\t\t\t\t<div class=\"grid row col-lg-3\">\n\t\t\t\t\t{{year.lowest_temperature}}°C - {{year.highest_temperature}}°C\n\t\t\t\t</div>\n\t\t\t\t<div class=\"grid row col-lg-2\">\n\t\t\t\t\t{{year.wind_speed_mph}} mph\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div> \n\n  </div> \n<br>"

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
            race_name: "Cebu City Marathon",
            country: "Philippines",
            city: "Cebu",
            official_website: "http://www.cebumarathon.net/",
            race_date: "2018-01-13T16:00:00.000Z"
        };
        this.events = [];
        this.holidays = [];
        this.lat = 51.678418;
        this.lng = 7.809007;
        this.subsription = this.dataService.getRace().subscribe(function (data) {
            _this.raceForView = data;
            _this.getFurtherInfo(_this.raceForView.race_name);
            _this.getHolidays(_this.raceForView.country);
            _this.getPastWeather(_this.raceForView.race_name);
            _this.getLatAndLng(_this.raceForView.city, _this.raceForView.country);
        }, function (error) { return console.log(error); });
    }
    RaceViewerComponent.prototype.ngOnDestroy = function () {
        this.subsription.unsubscribe();
    };
    RaceViewerComponent.prototype.ngOnInit = function () {
        this.getFurtherInfo(this.raceForView.race_name);
        this.getHolidays(this.raceForView.country);
        this.getPastWeather(this.raceForView.race_name);
        this.getLatAndLng(this.raceForView.city, this.raceForView.country);
    };
    RaceViewerComponent.prototype.getLatAndLng = function (city, country) {
        var _this = this;
        this.serverService.queryGoogleMapLatAndLng(city, country)
            .subscribe(function (data) {
            _this.lat = data.lat;
            _this.lng = data.lng;
        }, function (error) { return console.log(error); });
    };
    RaceViewerComponent.prototype.getFurtherInfo = function (raceName) {
        var _this = this;
        this.serverService.retrieveEventAndStartTime(raceName)
            .subscribe(function (data) {
            _this.events = [];
            data.forEach(function (event) {
                var startTimeOrNotice = event.start_time ? event.start_time.substr(0, 5) : null;
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
            .subscribe(function (data) {
            _this.holidays = data;
            _this.holidays = _this.holidays.filter(function (holiday) {
                var raceDate = new Date(_this.raceForView.race_date);
                var holidayDate = new Date(holiday.date);
                var dayDiff = _this.dataService.calculateDateInterval(raceDate, holidayDate);
                return dayDiff < 30;
            });
            _this.holidays.sort(function (a, b) {
                var aDate = new Date(a.date);
                var bDate = new Date(b.date);
                return aDate.getTime() - bDate.getTime();
            });
        }, function (error) { return console.log(error); });
    };
    RaceViewerComponent.prototype.getPastWeather = function (raceName) {
        var _this = this;
        this.serverService.retrievePastWeather(raceName)
            .subscribe(function (data) {
            _this.pastWeather = data;
            _this.pastWeather.sort(function (a, b) {
                var aDate = new Date(a.date);
                var bDate = new Date(b.date);
                return -(aDate.getFullYear() - bDate.getFullYear());
            });
        }, function (error) { return console.log(error); });
    };
    RaceViewerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-race-viewer",
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
        var apiUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].url + "/api/race_basic_info";
        return this.http.get(apiUrl)
            .map(function (response) {
            var data = response.json();
            return data;
        });
    };
    ServerService.prototype.retrieveEventAndStartTime = function (raceName) {
        var apiUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].url + "/api/eventandstarttime/" + raceName.replace(/\s/g, "%20");
        console.log(apiUrl);
        return this.http.get(apiUrl)
            .map(function (response) {
            var data = response.json();
            return data;
        });
    };
    ServerService.prototype.retrievePastWeather = function (raceName) {
        var apiUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].url + "/api/pastweather/" + raceName.replace(/\s/g, "%20");
        return this.http.get(apiUrl)
            .map(function (response) {
            var data = response.json();
            return data;
        });
    };
    ServerService.prototype.retrieveHolidays = function (countryName) {
        var apiUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].url + "/api/holidays/" + countryName.replace(/\s/g, "%20").toLowerCase();
        console.log(apiUrl);
        return this.http.get(apiUrl)
            .map(function (response) {
            var data = response.json();
            return data;
        });
    };
    ServerService.prototype.queryGoogleMapLatAndLng = function (city, country) {
        // tslint:disable-next-line:max-line-length
        var apiUrl = "https://maps.googleapis.com/maps/api/geocode/json?&address=" + city.replace(" ", "%20") + "+" + country.replace(" ", "%20");
        console.log(apiUrl);
        return this.http.get(apiUrl)
            .map(function (response) {
            var data = response.json();
            var latLngObj = data.results[0].geometry.location;
            console.log(latLngObj);
            return latLngObj;
        });
    };
    ServerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], ServerService);
    return ServerService;
}());



/***/ }),

/***/ "../../../../../src/assets/images/background.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "background.6dc3cc3c8ee52637d5da.jpg";

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
    url: "http://localhost:8080"
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