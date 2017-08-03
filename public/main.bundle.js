webpackJsonp([1,5],{

/***/ 104:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 104;


/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(130);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(214),
        styles: [__webpack_require__(195)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_toasty__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_font_awesome_angular2_font_awesome__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_pagination__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngui_datetime_picker__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngui_datetime_picker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__ngui_datetime_picker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_navbar_navbar_component__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_home_home_component__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_login_login_component__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_register_register_component__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_regional_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_auth_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_validate_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_sparing_board_service__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_spar_yuk_service__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_sparring_offer_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_sparring_schedule_service__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_profile_profile_component__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_sparing_board_sparing_board_component__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__guards_auth_guard__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_spar_yuk_spar_yuk_component__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_dashboard_dashboard_component__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__filters_teams_filter_pipe__ = __webpack_require__(128);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















// Import Services













var AppRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_12__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_13__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_14__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_22__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_24__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_26__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_24__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'spar-yuk', component: __WEBPACK_IMPORTED_MODULE_25__components_spar_yuk_spar_yuk_component__["a" /* SparYukComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_24__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'sparing-board', component: __WEBPACK_IMPORTED_MODULE_23__components_sparing_board_sparing_board_component__["a" /* SparingBoardComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_sparing_board_sparing_board_component__["a" /* SparingBoardComponent */],
            __WEBPACK_IMPORTED_MODULE_25__components_spar_yuk_spar_yuk_component__["a" /* SparYukComponent */],
            __WEBPACK_IMPORTED_MODULE_26__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_27__filters_teams_filter_pipe__["a" /* TeamsFilterPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(AppRoutes),
            __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesModule"],
            __WEBPACK_IMPORTED_MODULE_6_ng2_toasty__["a" /* ToastyModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_7_angular2_font_awesome_angular2_font_awesome__["a" /* Angular2FontAwesomeModule */],
            __WEBPACK_IMPORTED_MODULE_8_ngx_pagination__["a" /* NgxPaginationModule */],
            __WEBPACK_IMPORTED_MODULE_9__ngui_datetime_picker__["NguiDatetimePickerModule"]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_15__services_regional_service__["a" /* RegionalService */], __WEBPACK_IMPORTED_MODULE_16__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_17__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_18__services_sparing_board_service__["a" /* SparingBoardService */], __WEBPACK_IMPORTED_MODULE_19__services_spar_yuk_service__["a" /* SparYukService */], __WEBPACK_IMPORTED_MODULE_20__services_sparring_offer_service__["a" /* SparringOfferService */], __WEBPACK_IMPORTED_MODULE_21__services_sparring_schedule_service__["a" /* SparringScheduleService */], __WEBPACK_IMPORTED_MODULE_24__guards_auth_guard__["a" /* AuthGuard */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_sparring_offer_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_sparring_schedule_service__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toasty__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardComponent = (function () {
    function DashboardComponent(sparrOffer, jadwalSparr, toastMsg, toastConf, router) {
        this.sparrOffer = sparrOffer;
        this.jadwalSparr = jadwalSparr;
        this.toastMsg = toastMsg;
        this.toastConf = toastConf;
        this.router = router;
        // paginasi property
        this.p1 = 1;
        this.p2 = 1;
        this.toastConf.theme = 'default';
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.loadData().then(function (res) {
            console.log(res);
        }, function (err) {
            console.log(err);
        });
        this.userData = this.getUserData();
        // return new Promise((resolve, reject) => {
        //   this.loadOffers();
        //   this.loadBids();
        //   this.getJadwalSparring();
        //   this.getJadwalAwayTeam();
        //   setTimeout(() => {
        //        this.hasOffers = this.offers.length > 0 ? true : false;
        //        this.homeHasSchedules = this.homeTeam_schedules.length > 0 ? true : false;
        //   }, 1000);
        //   setTimeout(() => {
        //        this.hasBids = this.bids.length > 0 ? true : false;
        //        this.awayHasSchedules = this.awayTeam_schedules.length > 0 ? true : false;
        //   }, 1000);
        //   setTimeout(() => {
        //       this.userLog = JSON.parse(localStorage.getItem('user'))
        //       this.autoDelete();
        //   }, 900);
        // })
    };
    DashboardComponent.prototype.getUserData = function () {
        return JSON.parse(localStorage.getItem('user'));
    };
    DashboardComponent.prototype.loadData = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            setTimeout(function () {
                _this.loadOffers();
                _this.loadBids();
                _this.getJadwalSparring();
                _this.getJadwalAwayTeam();
                setTimeout(function () {
                    _this.hasOffers = _this.offers.length > 0 ? true : false;
                    _this.homeHasSchedules = _this.homeTeam_schedules.length > 0 ? true : false;
                    _this.hasBids = _this.bids.length > 0 ? true : false;
                    _this.awayHasSchedules = _this.awayTeam_schedules.length > 0 ? true : false;
                    _this.userLog = JSON.parse(localStorage.getItem('user'));
                    _this.autoDelete();
                }, 1000);
            }, 1000);
        });
        return promise;
    };
    DashboardComponent.prototype.autoDelete = function () {
        var _this = this;
        for (var i = 0; i < this.offers.length; i++) {
            if (this.offers[i].status === 'Diproses') {
                this.sparrOffer.deleteOffer(this.offers[i]._id).subscribe(function (data) {
                    if (data.success) {
                        _this.loadOffers();
                        _this.loadBids();
                    }
                    else {
                        _this.router.navigate(['/dashboard']);
                    }
                });
            }
        }
    };
    DashboardComponent.prototype.loadOffers = function () {
        var _this = this;
        this.sparrOffer.getOffers().subscribe(function (data) {
            if (data.success) {
                _this.offers = data.offers;
                console.log(data);
            }
        });
    };
    DashboardComponent.prototype.loadBids = function () {
        var _this = this;
        this.sparrOffer.getBids().subscribe(function (data) {
            if (data.success) {
                _this.bids = data.bids;
                console.log(data);
            }
        });
    };
    // Untuk Penawaran Sparring
    DashboardComponent.prototype.batalkanSparring = function () {
        var _this = this;
        var respon = {
            responTawaran: 'Dibatalkan'
        };
        this.sparrOffer.responPenawaran(this.offer_id, respon).subscribe(function (data) {
            if (data.success) {
                _this.toastMsg.success({
                    title: "Berhasil",
                    msg: data.msg,
                    showClose: true,
                    timeout: 2500
                });
                _this.loadOffers();
                _this.loadData().then(function (res) {
                    return;
                }, function (err) {
                    console.log(err);
                });
            }
            else {
                _this.toastMsg.error({
                    title: "Oops..!",
                    msg: data.msg,
                    showClose: true,
                    timeout: 2500
                });
                _this.router.navigate(['/dashboard']);
            }
        });
    };
    DashboardComponent.prototype.konfirmPembatalan = function (offerId, offerTeam) {
        this.offer_id = offerId;
        this.offer_team = offerTeam;
    };
    DashboardComponent.prototype.batalkanPenawaran = function () {
        var _this = this;
        var id = this.offer_id;
        this.sparrOffer.deleteOffer(id).subscribe(function (data) {
            if (data.success) {
                _this.toastMsg.success({
                    title: "Berhasil",
                    msg: data.msg,
                    showClose: true,
                    timeout: 2500
                });
                _this.loadOffers();
                _this.loadData().then(function (res) {
                    console.log(res);
                }, function (err) {
                    console.log(err);
                });
            }
            else {
                _this.toastMsg.error({
                    title: "Oops..!",
                    msg: data.msg,
                    showClose: true,
                    timeout: 2500
                });
                _this.router.navigate(['/dashboard']);
            }
        });
    };
    DashboardComponent.prototype.hapusPenawaran = function (offerId) {
        var _this = this;
        this.sparrOffer.deleteOffer(offerId).subscribe(function (data) {
            if (data.success) {
                _this.toastMsg.success({
                    title: "Berhasil",
                    msg: data.msg,
                    showClose: true,
                    timeout: 2500
                });
                _this.loadOffers();
                _this.loadData().then(function (res) {
                    console.log(res);
                }, function (err) {
                    console.log(err);
                });
            }
            else {
                _this.toastMsg.error({
                    title: "Oops..!",
                    msg: data.msg,
                    showClose: true,
                    timeout: 2500
                });
                _this.router.navigate(['/dashboard']);
            }
        });
    };
    // Untuk Tawaran Sparring
    DashboardComponent.prototype.konfirmTerima = function (bidId, bidTeam) {
        this.bid_id = bidId;
        this.bid_team = bidTeam;
    };
    DashboardComponent.prototype.terimaTawaran = function () {
        var _this = this;
        var respon = {
            responTawaran: 'Diterima'
        };
        this.sparrOffer.responTawaran(this.bid_id, respon).subscribe(function (data) {
            if (data.success) {
                _this.toastMsg.success({
                    title: "Berhasil",
                    msg: data.msg,
                    showClose: true,
                    timeout: 2500
                });
                _this.loadBids();
            }
            else {
                _this.toastMsg.error({
                    title: "Oops..!",
                    msg: data.msg,
                    showClose: true,
                    timeout: 2500
                });
                _this.router.navigate(['/dashboard']);
            }
        });
    };
    DashboardComponent.prototype.konfirmTolak = function (bidId, bidTeam) {
        this.bid_id = bidId;
        this.bid_team = bidTeam;
    };
    DashboardComponent.prototype.tolakTawaran = function () {
        var _this = this;
        var respon = {
            responTawaran: 'Ditolak'
        };
        this.sparrOffer.responTawaran(this.bid_id, respon).subscribe(function (data) {
            if (data.success) {
                _this.toastMsg.success({
                    title: "Berhasil",
                    msg: data.msg,
                    showClose: true,
                    timeout: 2500
                });
                _this.loadBids();
            }
            else {
                _this.toastMsg.error({
                    title: "Oops..!",
                    msg: data.msg,
                    showClose: true,
                    timeout: 2500
                });
                _this.router.navigate(['/dashboard']);
            }
        });
    };
    // Penjadwalan Sparring
    DashboardComponent.prototype.getJadwalSparring = function () {
        var _this = this;
        this.jadwalSparr.getAllSchedule().subscribe(function (data) {
            if (data.success) {
                _this.homeTeam_schedules = data.schedules;
                //console.log(data)
            }
        });
    };
    DashboardComponent.prototype.getJadwalAwayTeam = function () {
        var _this = this;
        this.jadwalSparr.getJadwalAway().subscribe(function (data) {
            if (data.success) {
                _this.awayTeam_schedules = data.schedules;
                console.log(data);
            }
            else {
                console.log(data.err);
            }
        });
    };
    DashboardComponent.prototype.openModalPenjadwalan = function (offer) {
        this.away_team = offer.away_team;
        this.id_away_team = offer.id_away_team;
        this.offer_id = offer._id;
        this.away_email = offer.away_email;
    };
    DashboardComponent.prototype.sendJadwal = function () {
        var _this = this;
        var jadwal = {
            away_team: this.away_team,
            id_away_team: this.id_away_team,
            waktu_pertandingan: this.myDate,
            lokasi_pertandingan: {
                nama_tempat: this.nama_tempat,
                alamat: this.alamat
            },
            away_email: this.away_email
        };
        this.mailData = {
            home: {
                receiver: this.userData.email,
                subject: 'Jadwal Sparring Diterima',
                text: 'Kamu Berhasil Membuat Jadwal Sparring'
            },
            away: {
                receiver: this.away_email,
                subject: 'Pertandingan Telah Dijadwalkan',
                text: 'Kamu Telah Mendapatkan Tawaran Jadwal Sparring'
            }
        };
        this.jadwalSparr.sendJadwal(jadwal).subscribe(function (data) {
            if (data.success) {
                _this.toastMsg.success({
                    title: "Berhasil",
                    msg: data.msg,
                    showClose: true,
                    timeout: 2500
                });
                _this.loadOffers();
                _this.getJadwalSparring();
                _this.getJadwalAwayTeam();
                _this.sendEmail(_this.mailData.home, _this.mailData.away, 1);
                setTimeout(function () {
                    var respon = {
                        responTawaran: 'Diproses'
                    };
                    _this.sparrOffer.responPenawaran(_this.offer_id, respon).subscribe(function (data) {
                        if (data.success) {
                            setTimeout(function () {
                                _this.loadOffers();
                                _this.getJadwalSparring();
                                _this.getJadwalAwayTeam();
                            }, 500);
                            _this.router.navigate(['/dashboard']);
                        }
                        else {
                            console.log(data);
                        }
                    });
                }, 1000);
            }
            else {
                _this.toastMsg.error({
                    title: "Oops..!",
                    msg: data.msg,
                    showClose: true,
                    timeout: 2500
                });
                console.log(data);
                _this.router.navigate(['/dashboard']);
            }
        });
    };
    DashboardComponent.prototype.konfirmasiJadwal = function (jadwalNya) {
        this.idJadwal = jadwalNya._id;
        this.j_away = jadwalNya.away_team;
        this.j_home = jadwalNya.home_team;
        this.j_waktu = jadwalNya.waktu_pertandingan;
        this.l_nama_tempat = jadwalNya.lokasi_pertandingan.nama_tempat;
        this.l_alamat = jadwalNya.lokasi_pertandingan.alamat;
        this.j_email = jadwalNya.away_email;
        this.d_jadwal = jadwalNya;
    };
    DashboardComponent.prototype.sendEmail = function (mailHome, mailAway, state) {
        switch (state) {
            case 1:
                this.jadwalSparr.sendMail(mailHome).subscribe(function (data) {
                    if (data.success) {
                        console.log(data);
                    }
                    else {
                        console.log(data);
                    }
                });
                this.jadwalSparr.sendMail(mailAway).subscribe(function (data) {
                    if (data.success) {
                        console.log(data);
                    }
                    else {
                        console.log(data);
                    }
                });
                break;
        }
    };
    DashboardComponent.prototype.terimaJadwal = function () {
        var _this = this;
        var respon = {
            respon: 'Diterima'
        };
        var newMatch = {
            home_team: this.j_home,
            away_team: this.j_away,
            waktu_pertandingan: this.j_waktu,
            lokasi_pertandingan: {
                nama_tempat: this.l_nama_tempat,
                alamat_tempat: this.l_alamat
            }
        };
        var team = {
            home: this.j_home,
            away: this.j_away
        };
        this.mailData = {
            home: {
                receiver: this.userData.email,
                subject: 'Pertandingan Telah Dijadwalkan',
                text: '<h2>Pertandingan Telah Dijadwalkan<h2><hr>' + team.home + ' VS ' + team.away + '  Detail Pertandingan: <br>' + new Date(this.d_jadwal.waktu_pertandingan) + '<br> at ' + this.d_jadwal.lokasi_pertandingan.nama_tempat + ', ' + this.d_jadwal.lokasi_pertandingan.alamat
            },
            away: {
                receiver: this.j_email,
                subject: 'Pertandingan Telah Dijadwalkan',
                text: '<h2>Pertandingan Telah Dijadwalkan<h2><hr>' + team.home + ' VS ' + team.away + '  Detail Pertandingan: <br>' + this.d_jadwal.waktu_pertandingan + '<br> at ' + this.d_jadwal.lokasi_pertandingan.nama_tempat + ', ' + this.d_jadwal.lokasi_pertandingan.alamat
            }
        };
        this.jadwalSparr.terimaJadwal(this.idJadwal, respon).subscribe(function (data) {
            if (data.success) {
                _this.toastMsg.success({
                    title: "Berhasil",
                    msg: data.msg,
                    showClose: true,
                    timeout: 2500
                });
                _this.jadwalSparr.storeSparrBoard(newMatch).subscribe(function (data) {
                    if (data.success) {
                        _this.toastMsg.info({
                            title: "Berhasil",
                            msg: "Pertandingan Telah di masukan ke Sparring Board",
                            showClose: true,
                            timeout: 3500
                        });
                        _this.sendEmail(_this.mailData.home, _this.mailData.away, 1);
                    }
                    else {
                        _this.toastMsg.error({
                            title: "Oops..!",
                            msg: data.msg,
                            showClose: true,
                            timeout: 2700
                        });
                        _this.router.navigate(['/dashboard']);
                    }
                });
                _this.getJadwalAwayTeam();
            }
            else {
                _this.toastMsg.error({
                    title: "Oops..!",
                    msg: data.msg,
                    showClose: true,
                    timeout: 2500
                });
                _this.router.navigate(['/dashboard']);
            }
        });
    };
    DashboardComponent.prototype.tolakJadwal = function () {
        var _this = this;
        var respon = {
            respon: 'Ditolak'
        };
        this.jadwalSparr.terimaJadwal(this.idJadwal, respon).subscribe(function (data) {
            if (data.success) {
                _this.toastMsg.success({
                    title: "Berhasil",
                    msg: data.msg,
                    showClose: true,
                    timeout: 2500
                });
                _this.getJadwalAwayTeam();
            }
            else {
                _this.toastMsg.error({
                    title: "Oops..!",
                    msg: data.msg,
                    showClose: true,
                    timeout: 2500
                });
                _this.router.navigate(['/dashboard']);
            }
        });
    };
    DashboardComponent.prototype.openRescheduler = function (jadwalSebelumnya) {
        this.myDate_res = jadwalSebelumnya.waktu_pertandingan;
        this.nama_tempat_res = jadwalSebelumnya.lokasi_pertandingan.nama_tempat;
        this.alamat_res = jadwalSebelumnya.lokasi_pertandingan.alamat;
        this.idJadwal_res = jadwalSebelumnya._id;
        this.teamRespond = jadwalSebelumnya.team_respond;
    };
    DashboardComponent.prototype.rescheduling = function () {
        var _this = this;
        var newJadwal = {
            waktu_pertandingan: this.myDate_res,
            lokasi_pertandingan: {
                nama_tempat: this.nama_tempat_res,
                alamat: this.alamat_res
            },
            team_respond: this.teamRespond === false ? true : false
        };
        this.jadwalSparr.reschedule(this.idJadwal_res, newJadwal).subscribe(function (data) {
            if (data.success) {
                _this.toastMsg.success({
                    title: "Berhasil",
                    msg: data.msg,
                    showClose: true,
                    timeout: 2500
                });
                _this.getJadwalAwayTeam();
                _this.getJadwalSparring();
            }
            else {
                _this.toastMsg.error({
                    title: "Oops..!",
                    msg: data.msg,
                    showClose: true,
                    timeout: 2500
                });
                console.log(data.err);
                _this.router.navigate(['/dashboard']);
            }
        });
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(215),
        styles: [__webpack_require__(196)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_sparring_offer_service__["a" /* SparringOfferService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_sparring_offer_service__["a" /* SparringOfferService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_sparring_schedule_service__["a" /* SparringScheduleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_sparring_schedule_service__["a" /* SparringScheduleService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_toasty__["b" /* ToastyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_toasty__["b" /* ToastyService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_toasty__["c" /* ToastyConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_toasty__["c" /* ToastyConfig */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _e || Object])
], DashboardComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(authService) {
        this.authService = authService;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(216),
        styles: [__webpack_require__(197)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toasty__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authService, router, toastMsg, toastConf) {
        this.authService = authService;
        this.router = router;
        this.toastMsg = toastMsg;
        this.toastConf = toastConf;
        this.toastConf.theme = "default";
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLogin = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeData(data.token, data.user);
                _this.toastMsg.success({
                    title: "Success",
                    msg: "Sekarang kamu telah Login",
                    showClose: true,
                    timeout: 3000
                });
                _this.router.navigate(['/']);
            }
            else {
                _this.toastMsg.error({
                    title: "Oopss..!",
                    msg: data.msg,
                    showClose: true,
                    timeout: 3000
                });
                _this.router.navigate(['login']);
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(217),
        styles: [__webpack_require__(198)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_toasty__["b" /* ToastyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_toasty__["b" /* ToastyService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_toasty__["c" /* ToastyConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_toasty__["c" /* ToastyConfig */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toasty__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(authService, router, toastMsg, toastConf) {
        this.authService = authService;
        this.router = router;
        this.toastMsg = toastMsg;
        this.toastConf = toastConf;
        this.toastConf.theme = "default";
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogout = function () {
        this.authService.logout();
        this.toastMsg.info({
            title: "Success",
            msg: "Kamu Sudah Logout!",
            showClose: true,
            timeout: 3000
        });
        this.router.navigate(['/login']);
        return false;
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__(218),
        styles: [__webpack_require__(199)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_toasty__["b" /* ToastyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_toasty__["b" /* ToastyService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_toasty__["c" /* ToastyConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_toasty__["c" /* ToastyConfig */]) === "function" && _d || Object])
], NavbarComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toasty__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_regional_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_validate_service__ = __webpack_require__(42);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProfileComponent = (function () {
    function ProfileComponent(authService, router, toastMsg, toastConf, regionalService, validateService) {
        this.authService = authService;
        this.router = router;
        this.toastMsg = toastMsg;
        this.toastConf = toastConf;
        this.regionalService = regionalService;
        this.validateService = validateService;
        this.toastConf.theme = "default";
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.LoadRegional();
        this.loadProfile();
    };
    ProfileComponent.prototype.loadProfile = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            _this.toastMsg.warning({
                title: "Oops..!",
                msg: "Kamu Belum Login!",
                showClose: true,
                timeout: 3000
            });
            _this.router.navigate(['/login']);
            return false;
        });
    };
    ProfileComponent.prototype.LoadRegional = function () {
        var _this = this;
        this.regionalService.loadRegional().subscribe(function (data) {
            _this.region = data.regional;
        });
    };
    ProfileComponent.prototype.onEditProfile = function (user) {
        this.name = user.name;
        this.email = user.email;
        this.contact = user.contact;
        this.usia_pemain = user.usia_pemain;
        this.team_agent = user.team_agent;
        this.regional = user.regional;
    };
    ProfileComponent.prototype.updateProfile = function () {
        var _this = this;
        var newData = {
            name: this.name,
            email: this.email,
            contact: this.contact,
            usia_pemain: this.usia_pemain,
            team_agent: this.team_agent,
            regional: this.regional
        };
        if (!this.validateService.validateEditForm(newData)) {
            this.toastMsg.error({
                title: "Oops..!",
                msg: "Lengkapi semua Formulir",
                showClose: true,
                timeout: 3500
            });
            return false;
        }
        if (!this.validateService.validateEmail(newData.email)) {
            this.toastMsg.error({
                title: "Oops..!",
                msg: "Masukan Email yang Valid!",
                showClose: true,
                timeout: 3500
            });
            return false;
        }
        this.authService.updateDataUser(newData).subscribe(function (data) {
            if (data.success) {
                _this.toastMsg.success({
                    title: "Success",
                    msg: data.msg,
                    showClose: true,
                    timeout: 3000
                });
                setTimeout(function () {
                    _this.loadProfile();
                }, 500);
            }
            else {
                _this.toastMsg.error({
                    title: "Oops..!",
                    msg: data.msg,
                    showClose: true,
                    timeout: 3000
                });
                _this.router.navigate(['/profile']);
            }
        });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__(219),
        styles: [__webpack_require__(200)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_toasty__["b" /* ToastyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_toasty__["b" /* ToastyService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_toasty__["c" /* ToastyConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_toasty__["c" /* ToastyConfig */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_regional_service__["a" /* RegionalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_regional_service__["a" /* RegionalService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_validate_service__["a" /* ValidateService */]) === "function" && _f || Object])
], ProfileComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_regional_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_validate_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_toasty__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterComponent = (function () {
    function RegisterComponent(regionalService, validateService, authService, router, toastMsg, toastConf) {
        this.regionalService = regionalService;
        this.validateService = validateService;
        this.authService = authService;
        this.router = router;
        this.toastMsg = toastMsg;
        this.toastConf = toastConf;
        this.toastConf.theme = "default";
    }
    RegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.regionalService.loadRegional().subscribe(function (data) {
            _this.region = data.regional;
        });
    };
    RegisterComponent.prototype.onRegister = function () {
        var _this = this;
        var user = {
            name: this.name,
            contact: this.contact,
            usia_pemain: this.usia_pemain,
            team_agent: this.team_agent,
            regional: this.regional,
            email: this.email,
            username: this.username,
            password: this.password,
        };
        // Cek Jika Field ada yang kosong!
        if (!this.validateService.validateRegister(user)) {
            this.toastMsg.error({
                title: "Pengisian Belum Lengkap",
                msg: "Lengkapi Seluruh Field",
                showClose: true,
                timeout: 5000,
            });
            return false;
        }
        if (!this.validateService.validateEmail(user.email)) {
            this.toastMsg.error({
                title: "Email not Valid",
                msg: "Masukan Email yang Valid!",
                showClose: true,
                timeout: 5000,
            });
            return false;
        }
        // registering user
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.toastMsg.success({
                    title: "Berhasil",
                    msg: data.msg,
                    showClose: true,
                    timeout: 3000
                });
                _this.router.navigate(["/login"]);
            }
            else {
                _this.toastMsg.error({
                    title: "Gagal",
                    msg: data.msg,
                    showClose: true,
                    timeout: 3000
                });
                _this.router.navigate(["/register"]);
            }
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(220),
        styles: [__webpack_require__(201)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_regional_service__["a" /* RegionalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_regional_service__["a" /* RegionalService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_validate_service__["a" /* ValidateService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5_ng2_toasty__["b" /* ToastyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ng2_toasty__["b" /* ToastyService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5_ng2_toasty__["c" /* ToastyConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ng2_toasty__["c" /* ToastyConfig */]) === "function" && _f || Object])
], RegisterComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_regional_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_spar_yuk_service__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toasty__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SparYukComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SparYukComponent = (function () {
    function SparYukComponent(router, regionalService, sparYukService, toastMsg, toastConf) {
        this.router = router;
        this.regionalService = regionalService;
        this.sparYukService = sparYukService;
        this.toastMsg = toastMsg;
        this.toastConf = toastConf;
        this.regional = "Semua";
        this.p = 1;
        this.toastConf.theme = 'default';
    }
    SparYukComponent.prototype.ngOnInit = function () {
        this.loadRegional();
        this.getTeams();
    };
    SparYukComponent.prototype.loadRegional = function () {
        var _this = this;
        this.regionalService.loadRegional().subscribe(function (data) {
            _this.region = data.regional;
        });
    };
    SparYukComponent.prototype.onChange = function (newValue) {
        this.regional = newValue;
    };
    SparYukComponent.prototype.getTeams = function () {
        var _this = this;
        this.sparYukService.getAllTeam().subscribe(function (data) {
            _this.teams = data.teams;
            console.log(data);
        });
    };
    SparYukComponent.prototype.konfirmasi = function (teamId, teamName, teamRegional, teamEmail) {
        this.id_away_team = teamId;
        this.away_team = teamName;
        this.away_regional = teamRegional;
        this.away_email = teamEmail;
    };
    SparYukComponent.prototype.sparKuy = function () {
        var _this = this;
        var offer = {
            away_team: this.away_team,
            id_away_team: this.id_away_team,
            away_regional: this.away_regional,
            away_email: this.away_email
        };
        this.sparYukService.sparYuk(offer).subscribe(function (data) {
            if (data.success) {
                _this.toastMsg.success({
                    title: 'Berhasil',
                    msg: data.msg,
                    showClose: true,
                    timeout: 3000
                });
                _this.router.navigate(['/dashboard']);
            }
            else {
                _this.toastMsg.error({
                    title: 'Oopss..!',
                    msg: data.msg,
                    showClose: true,
                    timeout: 3000
                });
            }
        });
    };
    return SparYukComponent;
}());
SparYukComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-spar-yuk',
        template: __webpack_require__(221),
        styles: [__webpack_require__(202)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_regional_service__["a" /* RegionalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_regional_service__["a" /* RegionalService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_spar_yuk_service__["a" /* SparYukService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_spar_yuk_service__["a" /* SparYukService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_toasty__["b" /* ToastyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_toasty__["b" /* ToastyService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_toasty__["c" /* ToastyConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_toasty__["c" /* ToastyConfig */]) === "function" && _e || Object])
], SparYukComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=spar-yuk.component.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_sparing_board_service__ = __webpack_require__(76);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SparingBoardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SparingBoardComponent = (function () {
    function SparingBoardComponent(sparingBoard) {
        this.sparingBoard = sparingBoard;
    }
    SparingBoardComponent.prototype.ngOnInit = function () {
        this.loadMatches();
    };
    SparingBoardComponent.prototype.loadMatches = function () {
        var _this = this;
        this.sparingBoard.loadAllMatch().subscribe(function (data) {
            _this.matches = data.match;
        });
    };
    return SparingBoardComponent;
}());
SparingBoardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-sparing-board',
        template: __webpack_require__(222),
        styles: [__webpack_require__(203)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_sparing_board_service__["a" /* SparingBoardService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_sparing_board_service__["a" /* SparingBoardService */]) === "function" && _a || Object])
], SparingBoardComponent);

var _a;
//# sourceMappingURL=sparing-board.component.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamsFilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TeamsFilterPipe = (function () {
    function TeamsFilterPipe() {
    }
    TeamsFilterPipe.prototype.transform = function (teams, regional) {
        // Cek Jika Regional adalah Semua
        if (regional === 'Semua')
            return teams;
        // Return data yg di filter
        return teams.filter(function (team) {
            return team.regional.toLowerCase().includes(regional.toLowerCase());
        });
    };
    return TeamsFilterPipe;
}());
TeamsFilterPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'teamsFilter'
    })
], TeamsFilterPipe);

//# sourceMappingURL=teams-filter.pipe.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toasty__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = (function () {
    function AuthGuard(authService, router, toastMsg, toastConf) {
        this.authService = authService;
        this.router = router;
        this.toastMsg = toastMsg;
        this.toastConf = toastConf;
        this.toastConf.theme = "default";
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.toastMsg.warning({
                title: "Oops..!",
                msg: "Kamu Belum Login!",
                showClose: true,
                timeout: 3000
            });
            this.router.navigate(['/login']);
            return false;
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_toasty__["b" /* ToastyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_toasty__["b" /* ToastyService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_toasty__["c" /* ToastyConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_toasty__["c" /* ToastyConfig */]) === "function" && _d || Object])
], AuthGuard);

var _a, _b, _c, _d;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ 130:
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

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "h1, h2 {\r\n    color: royalblue;\r\n    text-shadow: 1px 1px 1px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "form {\r\n    margin-bottom: 80px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, ".thumbnails {\r\n    font-weight: bold;\r\n    font-family: Verdana, Geneva, sans-serif;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "li {\r\n    color: royalblue;\r\n}\r\n\r\n.logo_home {\r\n   margin-right: 30px;\r\n   color: #15c601;\r\n}\r\n\r\n.away_logo {\r\n    margin-left: 30px;\r\n    color: #ea1212;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 214:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"container\">\r\n    <flash-messages></flash-messages>\r\n    <ng2-toasty [position]=\"'top-right'\"></ng2-toasty>\r\n    <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ 215:
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header\">Dashboard</h1>\n\n<div class=\"sparring-offers\">\n    <div class=\"panel panel-primary\">\n      <div class=\"panel-heading\">\n        <h2 class=\"panel-title\"><a role=\"button\" data-toggle=\"collapse\" href=\"#bodyPenawaran\" aria-expanded=\"false\" aria-controls=\"bodyPenawaran\">Penawaran Sparing <span *ngIf=\"offers; else return false\" class=\"badge\">{{offers.length}}</span></a> <button class=\"btn btn-primary btn-xs pull-right\" data-toggle=\"collapse\" data-target=\"#bodyPenawaran\" aria-expanded=\"false\" aria-controls=\"bodyPenawaran\"><span class=\"caret\"></span></button></h2>\n      </div>\n      <div class=\"panel-body collapse\" id=\"bodyPenawaran\">\n        <div class=\"row\">\n            <div class=\"col-sm-4 col-md-4\" *ngFor=\"let offer of offers | paginate: {itemsPerPage: 6, currentPage: p1, id: 'penawaran'}\">\n                <div class=\"thumbnail\">\n                  <div class=\"caption\">\n                    <h3><fa name=\"id-badge\"></fa> {{offer.away_team}}</h3>\n                    <p>Team Regional : {{offer.away_regional}}</p>\n                    <p>Status : <span *ngIf=\"offer.status === 'Diajukan'\" class=\"label label-success\">{{offer.status}}</span><span *ngIf=\"offer.status === 'Diterima'\" class=\"label label-primary\">{{offer.status}}</span><span *ngIf=\"offer.status === 'Ditolak'\" class=\"label label-warning\">{{offer.status}}</span><span *ngIf=\"offer.status === 'Dibatalkan'\" class=\"label label-danger\">Dibatalkan</span><span *ngIf=\"offer.status === 'Diproses'\" class=\"label label-primary\">Diproses</span>\n                    </p>\n\n                    <p *ngIf=\"offer.status === 'Diajukan'\"><button class=\"btn btn-danger btn-xs\" data-toggle=\"modal\" data-target=\"#modalPembatalanPenawaran\" (click)=\"konfirmPembatalan(offer._id, offer.away_team)\">Batalkan</button></p>\n\n                    <p *ngIf=\"offer.status === 'Diterima'\"><button class=\"btn btn-warning btn-xs\" data-toggle=\"modal\" data-target=\"#modalKonfirmasiPembatalan\" (click)=\"konfirmPembatalan(offer._id, offer.away_team)\">Batalkan</button> | <button class=\"btn btn-success btn-xs\" data-toggle=\"modal\" data-target=\"#modalPenjadwalan\" (click)=\"openModalPenjadwalan(offer)\">Atur Jadwal</button></p>\n\n                    <p *ngIf=\"offer.status === 'Ditolak' || offer.status === 'Dibatalkan'\"><button class=\"btn btn-danger btn-xs\" (click)=\"hapusPenawaran(offer._id)\">Hapus</button></p>\n\n                  </div>\n                </div>\n              </div>\n              <div *ngIf=\"!hasOffers\"><p class=\"text-center text-muted\"><strong>Belum ada Penawaran</strong></p></div>\n        </div>\n        <pagination-controls *ngIf=\"offers\" autoHide=\"true\" (pageChange)=\"p = $event\" id=\"penawaran\" class=\"text-center\"></pagination-controls>\n      </div>\n    </div>\n</div>\n\n<div class=\"sparring-bids\">\n    <div class=\"panel panel-primary\">\n      <div class=\"panel-heading\">\n        <h2 class=\"panel-title\"><a role=\"button\" data-toggle=\"collapse\" href=\"#bodyTawaran\" aria-expanded=\"false\" aria-controls=\"bodyTawaran\">Tawaran Sparing <span *ngIf=\"bids; else return false\" class=\"badge\">{{bids.length}}</span></a> <button class=\"btn btn-primary btn-xs pull-right\" data-toggle=\"collapse\" data-target=\"#bodyTawaran\" aria-expanded=\"false\" aria-controls=\"bodyTawaran\"><span class=\"caret\"></span></button></h2>\n      </div>\n      <div class=\"panel-body collapse in\" id=\"bodyTawaran\">\n        <div class=\"row\">\n            <div class=\"col-sm-5 col-md-4\" *ngFor=\"let bid of bids | paginate: {itemsPerPage: 6, currentPage: p1, id: 'tawaran'}\">\n                <div class=\"thumbnail\">\n                  <div class=\"caption\">\n                    <h3><fa name=\"id-badge\"></fa> {{bid.home_team}}</h3>\n                    <p>Team Regional : {{bid.home_regional}}</p>\n                    <p *ngIf=\"bid.status === 'Diterima'\"><span class=\"label label-primary\">Kamu Sudah Menerima Tawaran ini</span></p>\n\n                    <p *ngIf=\"bid.status === 'Ditolak'\"><span class=\"label label-warning\">Kamu sudah menolak tawaran ini</span></p>\n\n                    <p *ngIf=\"bid.status === 'Dibatalkan'\"><span class=\"label label-danger\">{{bid.home_team}} telah membatalkan Penawaran Sparring</span></p>\n\n                    <p *ngIf=\"bid.status === 'Diproses'\"><span class=\"label label-primary\">{{bid.home_team}} telah mengajukan Penjadwalan Sparring</span></p>\n\n                    <p *ngIf=\"bid.status === 'Diajukan'\" class=\"text-center\">\n                        <button class=\"btn btn-xs btn-primary\" data-toggle=\"modal\" data-target=\"#modalTerimaTawaran\" (click)=\"konfirmTerima(bid._id, bid.home_team)\">Terima</button>\n                        <button class=\"btn btn-xs btn-danger\" data-toggle=\"modal\" data-target=\"#modalKonfirmasiPenolakan\" (click)=\"konfirmTolak(bid._id, bid.home_team)\">Tolak</button>\n                    </p>\n                  </div>\n                </div>\n              </div>\n              <div *ngIf=\"!hasBids\"><p class=\"text-center text-muted\"><strong>Belum ada Tawaran</strong></p></div>\n        </div>\n        <pagination-controls *ngIf=\"bids\" autoHide=\"true\" (pageChange)=\"p = $event\" id=\"tawaran\" class=\"text-center\"></pagination-controls>\n      </div>\n    </div>\n</div>\n\n<div class=\"sparring-schedules\">\n    <div class=\"panel panel-primary\">\n      <div class=\"panel-heading\">\n        <h2 class=\"panel-title\"><a role=\"button\" data-toggle=\"collapse\" href=\"#bodyJadwal\" aria-expanded=\"false\" aria-controls=\"bodyJadwal\">Jadwal Sparring</a> <button class=\"btn btn-primary btn-xs pull-right\" data-toggle=\"collapse\" data-target=\"#bodyJadwal\" aria-expanded=\"false\" aria-controls=\"bodyJadwal\"><span class=\"caret\"></span></button></h2>\n      </div>\n      <div class=\"panel-body collapse in\" id=\"bodyJadwal\">\n      <!-- Untuk team yang diajak -->\n        <div class=\"row\" *ngIf=\"awayHasSchedules\">\n            <h4 class=\"text-muted text-center\">Tawaran Jadwal Sparring</h4>\n            <div class=\"col-sm-5 col-md-6\" *ngFor=\"let jadwalAway of awayTeam_schedules\">\n                <div class=\"thumbnail\">\n                  <div class=\"caption\">\n                    <h3><fa name=\"id-badge\"></fa>{{jadwalAway.home_team}}</h3>\n                    <p>Waktu Pertandingan : {{jadwalAway.waktu_pertandingan | date:'EEEE dd/MM/y'}}, Pukul {{jadwalAway.waktu_pertandingan | date:'HH:mm'}}</p>\n                    <p>Lokasi Pertandingan : <em><strong>{{jadwalAway.lokasi_pertandingan.nama_tempat}}</strong></em> , <strong>{{jadwalAway.lokasi_pertandingan.alamat}}</strong> <a href=\"http://maps.google.com/?q={{jadwalAway.lokasi_pertandingan.alamat}}\" target=\"_blank\" class=\"btn btn-primary btn-xs\"><fa name=\"map-marker\"></fa>Cek di Google Maps</a></p>\n\n                    <p *ngIf=\"jadwalAway.status === 'Diajukan'\" class=\"text-center\">\n                        <button class=\"btn btn-primary btn-xs\" data-toggle=\"modal\" data-target=\"#modalTerimaJadwal\" (click)=\"konfirmasiJadwal(jadwalAway)\">Terima</button>\n                        <button class=\"btn btn-success btn-xs\" data-toggle=\"modal\" data-target=\"#modalReschedule\" (click)=\"openRescheduler(jadwalAway)\">Reschedule</button>\n                        <button class=\"btn btn-danger btn-xs\" data-toggle=\"modal\" data-target=\"#modalTolakJadwal\" (click)=\"konfirmasiJadwal(jadwalAway)\">Tolak</button>\n                    </p>\n\n                    <p>\n                        <span *ngIf=\"jadwalAway.status === 'Diterima'\" class=\"label label-primary\">Sparring Telah dijadwalkan,cek SparringBoard!</span>\n                        <span *ngIf=\"jadwalAway.status === 'Ditolak'\" class=\"label label-danger\">Jadwal telah kamu tolak, sparring dibatalkan!</span>\n                        <span *ngIf=\"jadwalAway.rescheduled\" class=\"label label-info\">Jadwal Direschedule</span>\n                    </p>\n                  </div>\n                </div>\n              </div>\n        </div>\n        <hr *ngIf=\"homeHasSchedules && awayHasSchedules\">\n        <!-- Untuk Team yang mengajak  -->\n        <div class=\"row\" *ngIf=\"homeHasSchedules\">\n            <h4 class=\"text-muted text-center\">Pengajuan Jadwal Sparring</h4>\n            <div class=\"col-sm-5 col-md-6\" *ngFor=\"let jadwal of homeTeam_schedules\">\n                <div class=\"thumbnail\">\n                  <div class=\"caption\">\n                    <h3><fa name=\"id-badge\"></fa>{{jadwal.away_team}}</h3>\n                    <p>Waktu Pertandingan : {{jadwal.waktu_pertandingan | date:'EEEE dd/MM/y'}}, Pukul {{jadwal.waktu_pertandingan | date:'HH:mm'}}</p>\n                    <p>Lokasi Pertandingan : <em><strong>{{jadwal.lokasi_pertandingan.nama_tempat}}</strong></em> , <strong>{{jadwal.lokasi_pertandingan.alamat}}</strong></p>\n                    <p>Status : <span *ngIf=\"jadwal.status === 'Diajukan'\" class=\"label label-success\">{{jadwal.status}}</span>\n\n                    <span *ngIf=\"jadwal.status === 'Diterima'\" class=\"label label-primary\">{{jadwal.status}}</span>\n\n                    <span *ngIf=\"jadwal.status === 'Ditolak'\" class=\"label label-danger\">{{jadwal.status}}</span>\n\n                    <span *ngIf=\"jadwal.status === 'Dibatalkan'\" class=\"label label-warning\">{{jadwal.status}}</span>\n                    <span *ngIf=\"jadwal.rescheduled\" class=\"label label-info\">Jadwal Di rescheduled</span>\n                    </p>\n                    <p>Tanggal Pengajuan : {{jadwal.tanggal_penjadwalan | date : 'EEEE dd/MM/y'}}, Pukul {{jadwal.tanggal_penjadwalan | date : 'HH:mm'}}</p>\n                    <p *ngIf=\"jadwal.rescheduled\" class=\"text-center\">\n                        <button class=\"btn btn-primary btn-xs\" data-toggle=\"modal\" data-target=\"#modalTerimaJadwal\" (click)=\"konfirmasiJadwal(jadwal)\">Terima</button>\n                        <button class=\"btn btn-success btn-xs\" data-toggle=\"modal\" data-target=\"#modalReschedule\" (click)=\"openRescheduler(jadwal)\">Reschedule</button>\n                        <button class=\"btn btn-danger btn-xs\" data-toggle=\"modal\" data-target=\"#modalTolakJadwal\" (click)=\"konfirmasiJadwal(jadwal)\">Tolak</button>\n                    </p>\n                  </div>\n                </div>\n              </div>\n        </div>\n      </div>\n    </div>\n</div>\n\n\n<!-- Modal Area -->\n\n<!-- Untuk Penawaran Sparring -->\n<!-- Modal Konfirmasi Penghapusan Tawaran -->\n<div class=\"modal fade\" id=\"modalPembatalanPenawaran\" tabindex=\"-1\" role=\"dialog\">\n  <div class=\"modal-dialog modal-sm\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title\">Konfirmasi Pembatalan</h4>\n      </div>\n      <div class=\"modal-body\">\n        Kamu Yakin akan<strong> Menarik Penawaran Sparring </strong> dengan <strong>{{offer_team}}</strong> ?\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Batalkan</button>\n        <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\" (click)=\"batalkanPenawaran()\">Konfirmasi</button>\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n\n<!-- Modal Konfirmasi Pembatalan Sparring (setelah status = Diterima) -->\n<div class=\"modal fade\" id=\"modalKonfirmasiPembatalan\" tabindex=\"-1\" role=\"dialog\">\n  <div class=\"modal-dialog modal-sm\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title\">Konfirmasi Pembatalan</h4>\n      </div>\n      <div class=\"modal-body\">\n        Kamu Yakin akan<strong> MEMBATALKAN Sparring </strong> dengan <strong>{{offer_team}}</strong> ?\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Batalkan</button>\n        <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\" (click)=\"batalkanSparring()\">Konfirmasi</button>\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n\n<!-- Untuk Tawaran Sparring -->\n<!-- Modal Konfirmasi Penolakan tawaran sparring -->\n<div class=\"modal fade\" id=\"modalKonfirmasiPenolakan\" tabindex=\"-1\" role=\"dialog\">\n  <div class=\"modal-dialog modal-sm\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title\">Konfirmasi Penolakan Tawaran</h4>\n      </div>\n      <div class=\"modal-body\">\n        Kamu yakin akan <strong>Menolak</strong> tawaran sparring dari team <strong>{{bid_team}}</strong> ?\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Batalkan</button>\n        <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\" (click)=\"tolakTawaran()\">Konfirmasi</button>\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n\n<!-- Modal Konfirmasi Penerimaan Tawaran Sparring -->\n<div class=\"modal fade\" id=\"modalTerimaTawaran\" tabindex=\"-1\" role=\"dialog\">\n  <div class=\"modal-dialog modal-sm\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title\">Konfirmasi Penerimaan Tawaran</h4>\n      </div>\n      <div class=\"modal-body\">\n        Kamu yakin akan <strong>Menerima</strong> tawaran sparring dari team <strong>{{bid_team}}</strong> ?\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Batalkan</button>\n        <button type=\"button\" class=\"btn btn-info\" data-dismiss=\"modal\" (click)=\"terimaTawaran()\">Konfirmasi</button>\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n\n\n<!-- Pengaturan Jadwal Sparring -->\n<!-- Modal Mengatur Jadwal Sparring -->\n<div class=\"modal fade\" id=\"modalPenjadwalan\" tabindex=\"-1\" role=\"dialog\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title\">Jadwalkan Sparring</h4>\n      </div>\n      <div class=\"modal-body\">\n            <label for=\"waktu_pertandingan\">Waktu Pertandingan <fa name=\"calendar\"></fa></label>\n                <input\n                  [(ngModel)]=\"myDate\"\n                  ngui-datetime-picker [close-on-select]=\"false\"\n                />\n            <div class=\"form-group\">\n                <label for=\"lokasi\">Lokasi Pertandingan</label>\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"nama_tempat\" name=\"nama_tempat\">\n                <label for=\"alamat\">Alamat Lengkap</label>\n                <textarea name=\"alamat\" [(ngModel)]=\"alamat\" rows=\"10\" class=\"form-control\"></textarea>\n            </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Batalkan</button>\n        <button type=\"button\" class=\"btn btn-info\" data-dismiss=\"modal\" (click)=\"sendJadwal()\">Kirim</button>\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n\n<!-- Konfirmasi penerimaan Jadwal Sparring -->\n<div class=\"modal fade\" id=\"modalTerimaJadwal\" tabindex=\"-1\" role=\"dialog\">\n  <div class=\"modal-dialog modal-sm\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title\">Konfirmasi Penerimaan Jadwal Sparring</h4>\n      </div>\n      <div class=\"modal-body\">\n        Kamu setuju untuk Sparring pada <strong>{{j_waktu | date: 'EEEE dd/MM/y'}}, {{j_waktu | date: 'HH:mm'}}</strong> dengan <strong>{{j_home}}</strong> ?\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Batalkan</button>\n        <button type=\"button\" class=\"btn btn-info\" data-dismiss=\"modal\" (click)=\"terimaJadwal()\">Setuju</button>\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n\n<!-- Konfirmasi Penolakan Jadwal Sparring -->\n<div class=\"modal fade\" id=\"modalTolakJadwal\" tabindex=\"-1\" role=\"dialog\">\n  <div class=\"modal-dialog modal-sm\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title\">Konfirmasi Penerimaan Jadwal Sparring</h4>\n      </div>\n      <div class=\"modal-body\">\n        Kamu Akan Menolak  Sparring dengan <strong>{{j_home}}</strong>, <strong>{{j_waktu | date: 'EEEE dd/MM/y'}}, {{j_waktu | date: 'HH:mm'}}</strong>  ?\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Batalkan</button>\n        <button type=\"button\" class=\"btn btn-info\" data-dismiss=\"modal\" (click)=\"tolakJadwal()\">Tolak</button>\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n\n<!-- Modal Reschedule Sparring -->\n<div class=\"modal fade\" id=\"modalReschedule\" tabindex=\"-1\" role=\"dialog\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title\">Reschedule Sparring</h4>\n      </div>\n      <div class=\"modal-body\">\n            <label for=\"waktu_pertandingan\">Waktu Pertandingan <fa name=\"calendar\"></fa></label>\n                <input\n                  [(ngModel)]=\"myDate_res\"\n                  ngui-datetime-picker [close-on-select]=\"false\"\n                />\n            <div class=\"form-group\">\n                <label for=\"lokasi\">Lokasi Pertandingan</label>\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"nama_tempat_res\" name=\"nama_tempat\">\n                <label for=\"alamat\">Alamat Lengkap</label>\n                <textarea name=\"alamat\" [(ngModel)]=\"alamat_res\" rows=\"10\" class=\"form-control\"></textarea>\n            </div>\n            <small>*Kamu hanya memiliki 3x kesempatan untuk melakukan Reschedule</small>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Batalkan</button>\n        <button type=\"button\" class=\"btn btn-info\" data-dismiss=\"modal\" (click)=\"rescheduling()\">Kirim</button>\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n"

/***/ }),

/***/ 216:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n    <h2>Welcome to SparingKuy</h2>\n    <p>Portal Mencari Lawan Sparing</p>\n    <small>Cari Lawan Sparingmu di sini!</small>\n    <br>\n    <span *ngIf=\"!authService.loggedIn()\"><a class=\"btn btn-primary\" [routerLink]=\"['/login']\">Login</a>\n    <a class=\"btn btn-success\" [routerLink]=\"['/register']\">Register</a></span>\n    <span *ngIf=\"authService.loggedIn()\"><a class=\"btn btn-info\" [routerLink]=\"['/spar-yuk']\"><fa name=\"futbol-o\"></fa> Spar Yuk!</a> <a class=\"btn btn-success\" [routerLink]=\"['/dashboard']\"><fa name=\"podcast\"></fa> Dashboard</a> <a class=\"btn btn-primary\" [routerLink]=\"['/profile']\"><fa name=\"user-circle\"></fa> Profile</a></span>\n</div>\n\n<div class=\"row\">\n        <div class=\"col-md-4\">\n            <h3>Penawaran Sparing</h3>\n            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci cum eligendi, rem, expedita doloremque similique, laudantium quia quae officia nam voluptatum mollitia dolor non reiciendis dignissimos accusantium recusandae maxime inventore.</p>\n        </div>\n        <div class=\"col-md-4\">\n            <h3>Tawaran Sparing</h3>\n            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus delectus provident hic perferendis alias quia assumenda cum beatae, quod quasi autem quisquam optio nostrum eaque! Ea ipsum consequuntur, aspernatur voluptate.</p>\n        </div>\n        <div class=\"col-md-4\">\n            <h3>Jadwal Sparing</h3>\n            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis natus, earum fuga sint assumenda quis provident consectetur voluptates quos aspernatur velit, repellendus aperiam excepturi, corporis deleniti odio eum vitae magnam.</p>\n        </div>\n    </div>"

/***/ }),

/***/ 217:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-4 col-md-offset-4\">\n        <h3 class=\"page-header\">Login</h3>\n        <form>\n            <div class=\"form-group\">\n                <label for=\"username\">Username</label>\n                <input type=\"text\" name=\"username\" [(ngModel)]=\"username\" class=\"form-control\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"password\">Password</label>\n                <input type=\"password\" name=\"password\" [(ngModel)]=\"password\" class=\"form-control\">\n            </div>\n            <button class=\"btn btn-primary btn-block\" (click)=\"onLogin()\"><fa name=\"sign-in\"></fa> Login</button>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ 218:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n      <div class=\"container\">\n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n          <a class=\"navbar-brand\" href=\"/\"><fa name=\"slack\"></fa> SparingKuy</a>\n        </div>\n        <div id=\"navbar\" class=\"collapse navbar-collapse\">\n          <ul class=\"nav navbar-nav navbar-left\">\n            <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/']\"><fa name=\"home\"></fa> Home</a></li>\n            <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/sparing-board']\"><fa name=\"sitemap\"></fa> Sparing Board</a></li>\n          </ul>\n\n          <ul class=\"nav navbar-nav navbar-right\">\n          <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/spar-yuk']\"><fa name=\"futbol-o\"></fa> Spar Yuk!</a></li>\n          <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/dashboard']\"><fa name=\"podcast\"></fa> Dashboard</a></li>\n            <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/profile']\"><fa name=\"user-circle\"></fa> Profile</a></li>\n\n            <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/login']\"><fa name=\"sign-in\"></fa> Login</a></li>\n            <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/register']\"><fa name=\"user-plus\"></fa> Register</a></li>\n            <li *ngIf=\"authService.loggedIn()\"><a href=\"#\" (click)=\"onLogout()\"><fa name=\"sign-out\"></fa> Logout</a></li>\n          </ul>\n        </div><!--/.nav-collapse -->\n      </div>\n    </nav>"

/***/ }),

/***/ 219:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6 col-md-offset-3\">\n      <div *ngIf=\"user\">\n      <h1 class=\"text-center\"><fa name=\"grav\" size=\"4x\"></fa></h1>\n        <h2 class=\"page-header text-center\">{{user.name}}</h2>\n        <div class=\"panel panel-primary\">\n          <div class=\"panel-heading\">\n            <h3 class=\"panel-title\">{{user.name}}'s Profile</h3>\n          </div>\n          <div class=\"panel-body\">\n            <ul class=\"list-group\">\n                <li class=\"list-group-item\">Nama Team : <strong class=\"text-primary\">{{user.name}}</strong></li>\n                <li class=\"list-group-item\">Regional : <strong class=\"text-primary\">{{user.regional}}</strong></li>\n                <li class=\"list-group-item\">Email : <strong class=\"text-primary\">{{user.email}}</strong></li>\n                <li class=\"list-group-item\">Username : <strong class=\"text-primary\">{{user.username}}</strong></li>\n                <li class=\"list-group-item\">Contact : <strong class=\"text-primary\">{{user.contact}}</strong></li>\n                <li class=\"list-group-item\">Agen Team : <strong class=\"text-primary\">{{user.team_agent}}</strong></li>\n                <li class=\"list-group-item\">Usia rata-rata : <strong class=\"text-primary\">{{user.usia_pemain}}  tahun</strong></li>\n            </ul>\n            <button class=\"btn btn-success btn-block\" (click)=\"onEditProfile(user)\" data-toggle=\"modal\" data-target=\"#modalEdit\">Edit</button>\n          </div>\n        </div>\n      </div>\n  </div>\n</div>\n\n<!-- Modal Edit Profile -->\n<div class=\"modal fade\" id=\"modalEdit\" tabindex=\"-1\" role=\"dialog\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title\">Edit Profile</h4>\n      </div>\n      <div class=\"modal-body\">\n            <form novalidate>\n                <div class=\"form-group\">\n                    <label for=\"name\">Nama</label>\n                    <input type=\"text\" name=\"name\" [(ngModel)]=\"name\" class=\"form-control\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"email\">Email</label>\n                    <input type=\"text\" name=\"email\" [(ngModel)]=\"email\" class=\"form-control\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"contact\">Contact</label>\n                    <input type=\"text\" name=\"contact\" [(ngModel)]=\"contact\" class=\"form-control\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"usia_pemain\">Usia Pemain(rata-rata)</label>\n                    <input type=\"text\" name=\"usia_pemain\" [(ngModel)]=\"usia_pemain\" class=\"form-control\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"team_agent\">Team Agent</label>\n                    <input type=\"text\" name=\"team_agent\" [(ngModel)]=\"team_agent\" class=\"form-control\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"regional\">Regional</label>\n                    <select name=\"regional\" [(ngModel)]=\"regional\" class=\"form-control\">\n                        <option disabled selected value>-- Pilih Regional --</option>\n                        <option *ngFor=\"let region of region\" value=\"{{region}}\">{{region}}</option>\n                    </select>\n                </div>\n            </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"updateProfile()\">Save changes</button>\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n"

/***/ }),

/***/ 220:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-4 col-md-offset-4\">\n    <h3 class=\"page-header\">Register</h3>\n        <form>\n            <div class=\"form-group\">\n                <label for=\"username\">Username</label>\n                <input type=\"text\" name=\"username\" [(ngModel)]=\"username\" class=\"form-control\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"password\">Password</label>\n                <input type=\"password\" name=\"password\" [(ngModel)]=\"password\" class=\"form-control\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"email\">Email</label>\n                <input type=\"text\" name=\"email\" [(ngModel)]=\"email\" class=\"form-control\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"name\">Nama</label>\n                <input type=\"text\" name=\"name\" [(ngModel)]=\"name\" class=\"form-control\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"contact\">Contact</label>\n                <input type=\"text\" name=\"contact\" [(ngModel)]=\"contact\" class=\"form-control\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"usia_pemain\">Usia Pemain(rata-rata)</label>\n                <input type=\"text\" name=\"usia_pemain\" [(ngModel)]=\"usia_pemain\" class=\"form-control\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"team_agent\">Team Agent</label>\n                <input type=\"text\" name=\"team_agent\" [(ngModel)]=\"team_agent\" class=\"form-control\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"regional\">Regional</label>\n                <!-- <input type=\"text\" name=\"regional\" [(ngModel)]=\"regional\"class=\"form-control\"> -->\n                <select name=\"regional\" [(ngModel)]=\"regional\" class=\"form-control\">\n                    <option disabled selected value>-- Pilih Regional --</option>\n                    <option *ngFor=\"let region of region\" value=\"{{region}}\">{{region}}</option>\n                </select>\n            </div>\n            <button class=\"btn btn-primary btn-block\" (click)=\"onRegister()\"><fa name=\"user-plus\"></fa> Register</button>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ 221:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"text-primary\">Spar Yuk!</h2><small class=\"text-muted\">Ayo Cari Lawanmu!</small>\n<hr>\n<div class=\"row\">\n    <div class=\"col-md-5\">\n        <div class=\"form-group\">\n            <label for=\"regional\">Cari Berdasarkan</label>\n            <select name=\"regional\" [(ngModel)]=\"regional\" (ngModelChange)=\"onChange($event)\" class=\"form-control\">\n                <option value disabled> >-- Cari Berdasarkan Regional --< </option>\n                <option value=\"Semua\" selected>Semua Regional</option>\n                <option *ngFor=\"let reg of region\" value=\"{{reg}}\">{{reg}}</option>\n            </select>\n        </div>\n    </div>\n</div>\n\n<div class=\"row\" *ngIf=\"teams\">\n  <div class=\"col-sm-6 col-md-4\" *ngFor=\"let team of teams | teamsFilter:regional | paginate: {itemsPerPage: 6, currentPage:p }\">\n    <div class=\"thumbnail\">\n      <div class=\"caption\">\n        <h3><fa name=\"id-badge\"></fa> {{team.name}}</h3>\n        <p>Regional : {{team.regional}}</p>\n        <p>Usia Rata-rata: {{team.usia_pemain}}</p>\n        <p>Team Agent : {{team.team_agent}}</p>\n        <p>Contact: {{team.contact}}</p>\n        <p><button class=\"btn btn-info btn-block\" data-toggle=\"modal\" data-target=\"#modalKonfirmasi\" (click)=\"konfirmasi(team._id, team.name, team.regional, team.email)\"><fa name=\"handshake-o\"></fa> Spar Kuy!</button></p>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"paginasi text-center\"><pagination-controls (pageChange)=\"p = $event\"></pagination-controls></div>\n\n<!-- Modal Konfirmasi -->\n<div class=\"modal fade\" id=\"modalKonfirmasi\" tabindex=\"-1\" role=\"dialog\">\n  <div class=\"modal-dialog modal-sm\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title\">Konfirmasi Penawaran</h4>\n      </div>\n      <div class=\"modal-body\">\n        Kamu Yakin akan Mengajak <strong>{{away_team}}</strong> untuk Sparring ?\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Batalkan</button>\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"sparKuy()\">Kirim Penawaran</button>\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->"

/***/ }),

/***/ 222:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <h2 class=\"page-header\">Sparring Board</h2>\n    <div class=\"col-md-6 col-md-offset-3\">\n        <div *ngIf=\"matches\">\n            <ul class=\"list-group\" *ngFor=\"let match of matches\">\n                <li class=\"list-group-item\">\n                    <p class=\"text-uppercase text-center\"><strong><fa name=\"github\" class=\"logo_home\" size=\"2x\"></fa> {{match.home_team}} VS {{match.away_team}} <fa name=\"gitlab\" class=\"away_logo\"size=\"2x\"></fa></strong></p>\n                    <p class=\"text-center text-primary\">On -> {{match.waktu_pertandingan | date: 'EEEE dd/MM/y'}}, Pukul {{match.waktu_pertandingan | date: 'HH:mm'}}</p>\n                    <p class=\"text-center text-primary\">At {{match.lokasi_pertandingan.nama_tempat}}, {{match.lokasi_pertandingan.alamat}}</p>\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 263:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(105);


/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegionalService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegionalService = (function () {
    function RegionalService(http) {
        this.http = http;
    }
    RegionalService.prototype.loadRegional = function () {
        return this.http.get('http://localhost:8080/regional')
            .map(function (res) { return res.json(); });
    };
    return RegionalService;
}());
RegionalService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], RegionalService);

var _a;
//# sourceMappingURL=regional.service.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.contact == undefined || user.usia_pemain == undefined || user.team_agent == undefined || user.regional == undefined || user.email == undefined || user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService.prototype.validateEditForm = function (user) {
        if (user.name == undefined || user.contact == undefined || user.usia_pemain == undefined || user.team_agent == undefined || user.regional == undefined || user.email == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    return ValidateService;
}());
ValidateService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ValidateService);

//# sourceMappingURL=validate.service.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SparYukService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SparYukService = (function () {
    function SparYukService(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    SparYukService.prototype.getAllTeam = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"];
        this.authService.loadToken();
        headers.append('Authorization', this.authService.authToken);
        return this.http.get('http://localhost:8080/users/teams', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    SparYukService.prototype.getTeamsByRegional = function (regional) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"];
        this.authService.loadToken();
        headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:8080/users/' + regional + '/teams+', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    SparYukService.prototype.sparYuk = function (offer) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"];
        this.authService.loadToken();
        headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:8080/dashboard/penawaran-sparing', offer, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    return SparYukService;
}());
SparYukService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], SparYukService);

var _a, _b;
//# sourceMappingURL=spar-yuk.service.js.map

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SparingBoardService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SparingBoardService = (function () {
    function SparingBoardService(http) {
        this.http = http;
    }
    SparingBoardService.prototype.loadAllMatch = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:8080/sparing-board', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    return SparingBoardService;
}());
SparingBoardService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], SparingBoardService);

var _a;
//# sourceMappingURL=sparing-board.service.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SparringOfferService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SparringOfferService = (function () {
    function SparringOfferService(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    // Untuk Penawaran sparring
    SparringOfferService.prototype.getOffers = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.authService.loadToken();
        headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:8080/dashboard/penawaran-sparing', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    SparringOfferService.prototype.responPenawaran = function (offerId, respon) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.authService.loadToken();
        headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.put('http://localhost:8080/dashboard/tawaran-sparing/' + offerId, respon, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // Untuk Tawaran Sparring
    SparringOfferService.prototype.getBids = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.authService.loadToken();
        headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:8080/dashboard/tawaran-sparing', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    SparringOfferService.prototype.responTawaran = function (bidId, respon) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.authService.loadToken();
        headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.put('http://localhost:8080/dashboard/tawaran-sparing/' + bidId, respon, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    SparringOfferService.prototype.deleteOffer = function (offerId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.authService.loadToken();
        headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.delete('http://localhost:8080/dashboard/penawaran-sparing/' + offerId, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    return SparringOfferService;
}());
SparringOfferService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], SparringOfferService);

var _a, _b;
//# sourceMappingURL=sparring-offer.service.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SparringScheduleService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SparringScheduleService = (function () {
    function SparringScheduleService(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    SparringScheduleService.prototype.getAllSchedule = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.authService.loadToken();
        headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:8080/schedule', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    SparringScheduleService.prototype.getJadwalAway = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.authService.loadToken();
        headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:8080/schedule/penawaran-jadwal', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    SparringScheduleService.prototype.sendJadwal = function (jadwal) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.authService.loadToken();
        headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:8080/schedule/new-sparring-schedule', jadwal, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    SparringScheduleService.prototype.terimaJadwal = function (id_jadwal, responTerima) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.authService.loadToken();
        headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.put('http://localhost:8080/schedule/penawaran-jadwal/response/' + id_jadwal, responTerima, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    SparringScheduleService.prototype.reschedule = function (idJadwal, newJadwal) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.authService.loadToken();
        headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.put('http://localhost:8080/schedule/penawaran-jadwal/' + idJadwal, newJadwal, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    SparringScheduleService.prototype.storeSparrBoard = function (jadwalData) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.authService.loadToken();
        headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:8080/sparing-board', jadwalData, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    SparringScheduleService.prototype.sendMail = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        //this.authService.loadToken();
        //headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:8080/api/mailer/transporter', data, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    return SparringScheduleService;
}());
SparringScheduleService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], SparringScheduleService);

var _a, _b;
//# sourceMappingURL=sparring-schedule.service.js.map

/***/ }),

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:8080/users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:8080/users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:8080/users/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.updateDataUser = function (newData) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.put('http://localhost:8080/users/profile', newData, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ })

},[263]);
//# sourceMappingURL=main.bundle.js.map