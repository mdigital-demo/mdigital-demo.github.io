webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./campaigns/campaigns.module": [
		"../../../../../src/app/campaigns/campaigns.module.ts"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reducers_index__ = __webpack_require__("../../../../../src/app/reducers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__routes__ = __webpack_require__("../../../../../src/app/routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__campaigns_campaigns_module__ = __webpack_require__("../../../../../src/app/campaigns/campaigns.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_containers_app__ = __webpack_require__("../../../../../src/app/core/containers/app.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__core_core_module__ = __webpack_require__("../../../../../src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__auth_auth_module__ = __webpack_require__("../../../../../src/app/auth/auth.module.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["b" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__routes__["a" /* routes */], { useHash: true }),
                __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["c" /* StoreModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__reducers_index__["b" /* reducers */], { metaReducers: __WEBPACK_IMPORTED_MODULE_4__reducers_index__["a" /* metaReducers */] }),
                __WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["c" /* EffectsModule */].forRoot([]),
                __WEBPACK_IMPORTED_MODULE_10__core_core_module__["a" /* CoreModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_11__auth_auth_module__["a" /* AuthModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_8__campaigns_campaigns_module__["CampaignsModule"].forRoot()
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__core_containers_app__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/auth/auth.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export COMPONENTS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reducers_index__ = __webpack_require__("../../../../../src/app/auth/reducers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__containers_login_page__ = __webpack_require__("../../../../../src/app/auth/containers/login-page.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_login_form__ = __webpack_require__("../../../../../src/app/auth/components/login-form.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_authentication_service__ = __webpack_require__("../../../../../src/app/auth/services/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var COMPONENTS = [__WEBPACK_IMPORTED_MODULE_6__containers_login_page__["a" /* LoginPageComponent */], __WEBPACK_IMPORTED_MODULE_7__components_login_form__["a" /* LoginFormComponent */]];
var AuthModule = (function () {
    function AuthModule() {
    }
    AuthModule_1 = AuthModule;
    AuthModule.forRoot = function () {
        return {
            ngModule: AuthModule_1
        };
    };
    AuthModule = AuthModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forChild([
                    {
                        path: 'login',
                        component: __WEBPACK_IMPORTED_MODULE_6__containers_login_page__["a" /* LoginPageComponent */],
                    }
                ]),
                __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["c" /* StoreModule */].forFeature('auth', __WEBPACK_IMPORTED_MODULE_5__reducers_index__["a" /* reducers */]),
            ],
            declarations: COMPONENTS,
            providers: [__WEBPACK_IMPORTED_MODULE_8__services_authentication_service__["a" /* AuthenticationService */]],
            exports: COMPONENTS
        })
    ], AuthModule);
    return AuthModule;
    var AuthModule_1;
}());



/***/ }),

/***/ "../../../../../src/app/auth/components/login-form.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul {\n\tlist-style: none;\n}\n.bg-slideshow,\n.bg-slideshow:after {\n\tposition: fixed;\n\twidth: 100%;\n\theight: 100%;\n\ttop: 0px;\n\tleft: 0px;\n\tz-index: 0; \n}\n.bg-slideshow:after {\n\tcontent: '';\n}\n.bg-slideshow li span { \n\twidth: 100%;\n\theight: 100%;\n\tposition: absolute;\n\ttop: 0px;\n\tleft: 0px;\n\tcolor: transparent;\n\tbackground-size: cover;\n\tbackground-position: 50% 50%;\n\tbackground-repeat: none;\n\topacity: 0;\n\tz-index: 0;\n\t-webkit-backface-visibility: hidden;\n\t-webkit-animation: imageAnimation 18s linear infinite 0s;\n\tanimation: imageAnimation 18s linear infinite 0s; \n}\n.bg-slideshow li div { \n\tz-index: 1000;\n\tposition: absolute;\n\tbottom: 30px;\n\tleft: 0px;\n\twidth: 100%;\n\ttext-align: center;\n\topacity: 0;\n\tcolor: #fff;\n\t-webkit-animation: titleAnimation 18s linear infinite 0s;\n\tanimation: titleAnimation 18s linear infinite 0s; \n}\n.bg-slideshow li:nth-child(1) span { \n\tbackground-image: url(/assets/images/bg1.jpg) \n}\n.bg-slideshow li:nth-child(2) span { \n\tbackground-image: url(/assets/images/bg2.jpg);\n\t-webkit-animation-delay: 6s;\n\tanimation-delay: 6s; \n}\n.bg-slideshow li:nth-child(3) span { \n\tbackground-image: url(/assets/images/bg3.jpg);\n\t-webkit-animation-delay: 12s;\n\tanimation-delay: 12s; \n}\n.bg-slideshow li:nth-child(2) div { \n\t-webkit-animation-delay: 6s;\n\tanimation-delay: 6s; \n}\n.bg-slideshow li:nth-child(3) div { \n\t-webkit-animation-delay: 12s;\n\tanimation-delay: 12s; \n}\n/* Animation for the slideshow images */\n@-webkit-keyframes imageAnimation { \n\t0% { opacity: 0;\n\t-webkit-animation-timing-function: ease-in; }\n\t8% { opacity: 1;\n\t-webkit-animation-timing-function: ease-out; }\n\t17% { opacity: 1 }\n\t40% { opacity: 0 }\n\t100% { opacity: 0 }\n}\n@keyframes imageAnimation { \n\t0% { opacity: 0;\n\t-webkit-animation-timing-function: ease-in;\n\t        animation-timing-function: ease-in; }\n\t8% { opacity: 1;\n\t-webkit-animation-timing-function: ease-out;\n\t        animation-timing-function: ease-out; }\n\t17% { opacity: 1 }\n\t40% { opacity: 0 }\n\t100% { opacity: 0 }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/components/login-form.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__("../../../../../src/app/auth/services/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginFormComponent = (function () {
    function LoginFormComponent(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.model = { username: 'admin', password: 'admin' };
    }
    LoginFormComponent.prototype.login = function () {
        if (this.authenticationService.authenticate(this.model.username, this.model.password)) {
            // FIXME: routing hack
            this.router.navigate(["campaigns"]);
        }
        else {
            this.errorMessage = "Invalid username or password (try admin/admin)";
        }
    };
    LoginFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'md-login-form',
            template: "\n\t<ul class=\"bg-slideshow\">\n\t\t<li><span>image 1</span><div>&nbsp;</div></li>\n\t\t<li><span>image 2</span><div>&nbsp;</div></li>\n\t\t<li><span>image 3</span><div>&nbsp;</div></li>\n\t</ul>\n\t<div class=\"container pt-5\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-6 mx-auto\">\n\t\t\t\t\t\t<span class=\"anchor\" id=\"formLogin\"></span>\n\t\t\t\t\t\t<div class=\"card rounded-0\">\n\t\t\t\t\t\t\t<div class=\"card-header\">\n\t\t\t\t\t\t\t\t<h3 class=\"mb-0\">Login</h3>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div *ngIf=\"errorMessage\" class=\"alert alert-danger\">\n\t\t\t\t\t\t\t\t\t{{ errorMessage }}\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<form class=\"form\" role=\"form\" autocomplete=\"off\" id=\"formLogin\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" novalidate>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<label for=\"username\">Username</label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control form-control-lg rounded-0\" name=\"username\" id=\"username\" required=\"\" [(ngModel)]=\"model.username\" #username=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && !username.valid }\" autofocus>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"f.submitted && !username.valid\" class=\"invalid-feedback\">Username is required</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<label>Password</label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"password\" class=\"form-control form-control-lg rounded-0\" name=\"password\" required=\"\" autocomplete=\"new-password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && !password.valid }\">\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"f.submitted && !password.valid\" class=\"invalid-feedback\">Password is required</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-success btn-lg float-right\" type=\"submit\">Login</button>\n\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n  ",
            styles: [__webpack_require__("../../../../../src/app/auth/components/login-form.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */]])
    ], LoginFormComponent);
    return LoginFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/auth/containers/login-page.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LoginPageComponent = (function () {
    function LoginPageComponent() {
    }
    LoginPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'md-login-page',
            template: "\n    <md-login-form></md-login-form>\n  "
        })
    ], LoginPageComponent);
    return LoginPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/auth/reducers/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return reducers; });
// FIXME: only here as a placeholder for now
var reducers = {};


/***/ }),

/***/ "../../../../../src/app/auth/services/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AuthenticationService = (function () {
    function AuthenticationService() {
    }
    AuthenticationService.prototype.authenticate = function (username, password) {
        var user = { username: username, password: password };
        if (user.username === "admin" && user.password === "admin") {
            //localStorage.setItem('user', JSON.stringify(user));
            return true;
        }
        return false;
    };
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "../../../../../src/app/campaigns/actions/ad-runs.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return SELECT_CAMPAIGN_ADRUNS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return LOAD_ADRUNS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_ADRUN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return EDIT_ADRUN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return DELETE_ADRUN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return REORDER_ADRUNS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return SelectCampaignAdRuns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return LoadAdRuns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AddAdRun; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return EditAdRun; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return DeleteAdRun; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return ReorderAdRuns; });
var SELECT_CAMPAIGN_ADRUNS = '[ADRUNS] Select Campaign';
var LOAD_ADRUNS = '[ADRUNS] Load';
var ADD_ADRUN = '[ADRUNS] Add';
var EDIT_ADRUN = '[ADRUNS] Edit';
var DELETE_ADRUN = '[ADRUNS] Delete';
var REORDER_ADRUNS = '[ADRUNS] Reorder';
var SelectCampaignAdRuns = (function () {
    function SelectCampaignAdRuns(campaign, isEditingMode) {
        this.campaign = campaign;
        this.isEditingMode = isEditingMode;
        this.type = SELECT_CAMPAIGN_ADRUNS;
    }
    return SelectCampaignAdRuns;
}());

var LoadAdRuns = (function () {
    function LoadAdRuns() {
        this.type = LOAD_ADRUNS;
    }
    return LoadAdRuns;
}());

var AddAdRun = (function () {
    function AddAdRun(payload) {
        this.payload = payload;
        this.type = ADD_ADRUN;
    }
    return AddAdRun;
}());

var EditAdRun = (function () {
    function EditAdRun(payload) {
        this.payload = payload;
        this.type = EDIT_ADRUN;
    }
    return EditAdRun;
}());

var DeleteAdRun = (function () {
    function DeleteAdRun(payload) {
        this.payload = payload;
        this.type = DELETE_ADRUN;
    }
    return DeleteAdRun;
}());

var ReorderAdRuns = (function () {
    function ReorderAdRuns(payload) {
        this.payload = payload;
        this.type = REORDER_ADRUNS;
    }
    return ReorderAdRuns;
}());



/***/ }),

/***/ "../../../../../src/app/campaigns/actions/campaigns.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return LOAD_CAMPAIGNS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_CAMPAIGN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return EDIT_CAMPAIGN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return UPDATE_CAMPAIGN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return FILTER_CAMPAIGNS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return LoadCampaigns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AddCampaign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return EditCampaign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return UpdateCampaign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return FilterCampaigns; });
var LOAD_CAMPAIGNS = '[CAMPAIGNS] Load';
var ADD_CAMPAIGN = '[CAMPAIGNS] Add';
var EDIT_CAMPAIGN = '[CAMPAIGNS] Edit';
var UPDATE_CAMPAIGN = '[CAMPAIGNS] Update';
var FILTER_CAMPAIGNS = '[CAMPAIGNS] Filter';
var LoadCampaigns = (function () {
    function LoadCampaigns() {
        this.type = LOAD_CAMPAIGNS;
    }
    return LoadCampaigns;
}());

var AddCampaign = (function () {
    function AddCampaign(payload) {
        this.payload = payload;
        this.type = ADD_CAMPAIGN;
    }
    return AddCampaign;
}());

var EditCampaign = (function () {
    function EditCampaign(payload) {
        this.payload = payload;
        this.type = EDIT_CAMPAIGN;
    }
    return EditCampaign;
}());

var UpdateCampaign = (function () {
    function UpdateCampaign(payload) {
        this.payload = payload;
        this.type = UPDATE_CAMPAIGN;
    }
    return UpdateCampaign;
}());

var FilterCampaigns = (function () {
    function FilterCampaigns(payload) {
        this.payload = payload;
        this.type = FILTER_CAMPAIGNS;
    }
    return FilterCampaigns;
}());



/***/ }),

/***/ "../../../../../src/app/campaigns/campaigns.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampaignsModule", function() { return CampaignsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_ad_runs_helper__ = __webpack_require__("../../../../../src/app/campaigns/services/ad-runs-helper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__effects_campaigns__ = __webpack_require__("../../../../../src/app/campaigns/effects/campaigns.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__reducers_index__ = __webpack_require__("../../../../../src/app/campaigns/reducers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__containers_overview__ = __webpack_require__("../../../../../src/app/campaigns/containers/overview.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_campaigns__ = __webpack_require__("../../../../../src/app/campaigns/components/campaigns.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_campaigns_search__ = __webpack_require__("../../../../../src/app/campaigns/components/campaigns-search.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__containers_new_campaign__ = __webpack_require__("../../../../../src/app/campaigns/containers/new-campaign.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_new_campaign_form__ = __webpack_require__("../../../../../src/app/campaigns/components/new-campaign-form.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__containers_ad_runs_page__ = __webpack_require__("../../../../../src/app/campaigns/containers/ad-runs-page.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_ad_runs_header__ = __webpack_require__("../../../../../src/app/campaigns/components/ad-runs-header.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_ad_runs__ = __webpack_require__("../../../../../src/app/campaigns/components/ad-runs.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_ad_runs_form__ = __webpack_require__("../../../../../src/app/campaigns/components/ad-runs-form.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_ad_runs_statistics__ = __webpack_require__("../../../../../src/app/campaigns/components/ad-runs-statistics.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ng2_dragula__ = __webpack_require__("../../../../ng2-dragula/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ng2_completer__ = __webpack_require__("../../../../ng2-completer/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_unmasking__ = __webpack_require__("../../../../../src/app/campaigns/services/unmasking.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_angular2_text_mask__ = __webpack_require__("../../../../angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_angular2_text_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_angular2_text_mask__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pipes_formatted_number_pipe__ = __webpack_require__("../../../../../src/app/campaigns/pipes/formatted-number.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_angular_2_dropdown_multiselect__ = __webpack_require__("../../../../angular-2-dropdown-multiselect/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var CampaignsModule = (function () {
    function CampaignsModule() {
    }
    CampaignsModule_1 = CampaignsModule;
    CampaignsModule.forRoot = function () {
        return {
            ngModule: CampaignsModule_1
        };
    };
    CampaignsModule = CampaignsModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* RouterModule */].forChild([
                    {
                        path: 'campaigns',
                        component: __WEBPACK_IMPORTED_MODULE_9__containers_overview__["a" /* OverviewComponent */],
                    },
                    {
                        path: 'new-campaign',
                        component: __WEBPACK_IMPORTED_MODULE_13__containers_new_campaign__["a" /* NewCampaignComponent */]
                    },
                    {
                        path: 'adRuns',
                        component: __WEBPACK_IMPORTED_MODULE_15__containers_ad_runs_page__["a" /* AdRunsPageComponent */]
                    }
                ]),
                /**
                 * StoreModule.forFeature is used for composing state from feature modules. These modules can be loaded
                 * eagerly or lazily and will be dynamically added to the existing state.
                 */
                __WEBPACK_IMPORTED_MODULE_6__ngrx_store__["c" /* StoreModule */].forFeature('campaigns', __WEBPACK_IMPORTED_MODULE_8__reducers_index__["d" /* reducers */]),
                __WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["c" /* EffectsModule */].forFeature([__WEBPACK_IMPORTED_MODULE_1__effects_campaigns__["a" /* CampaignsEffects */]]),
                __WEBPACK_IMPORTED_MODULE_10__ng_bootstrap_ng_bootstrap__["b" /* NgbModule */],
                __WEBPACK_IMPORTED_MODULE_20_ng2_dragula__["DragulaModule"],
                __WEBPACK_IMPORTED_MODULE_21_ng2_completer__["a" /* Ng2CompleterModule */],
                __WEBPACK_IMPORTED_MODULE_23_angular2_text_mask__["TextMaskModule"],
                __WEBPACK_IMPORTED_MODULE_25_angular_2_dropdown_multiselect__["a" /* MultiselectDropdownModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__containers_overview__["a" /* OverviewComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_campaigns__["a" /* CampaignsComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_campaigns_search__["a" /* CampaignsSearchComponent */],
                __WEBPACK_IMPORTED_MODULE_13__containers_new_campaign__["a" /* NewCampaignComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_new_campaign_form__["a" /* NewCampaignFormComponent */],
                __WEBPACK_IMPORTED_MODULE_15__containers_ad_runs_page__["a" /* AdRunsPageComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_ad_runs_header__["a" /* AdRunsHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_ad_runs__["a" /* AdRunsComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_ad_runs_form__["a" /* AdRunsFormComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_ad_runs_statistics__["a" /* AdRunsStatisticsComponent */],
                __WEBPACK_IMPORTED_MODULE_24__pipes_formatted_number_pipe__["a" /* FormattedNumberPipe */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_22__services_unmasking__["a" /* UnmaskingService */],
                __WEBPACK_IMPORTED_MODULE_0__services_ad_runs_helper__["a" /* AdRunsHelperService */]
            ]
        })
    ], CampaignsModule);
    return CampaignsModule;
    var CampaignsModule_1;
}());



/***/ }),

/***/ "../../../../../src/app/campaigns/components/ad-runs-form.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdRunsFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AdRunsFormComponent = (function () {
    function AdRunsFormComponent() {
    }
    AdRunsFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'md-ad-runs-form',
            template: "\n    <p>Placeholder for adding ad runs.</p>\n  ",
            styles: ["\n    p {\n      color: deeppink;\n    }\n  "]
        })
    ], AdRunsFormComponent);
    return AdRunsFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/campaigns/components/ad-runs-header.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".md-navbar-campaign {\n  padding: 0 1rem;\n  /*\tmargin-top: -4px; */\n  /* FIXME: margin-top is a huge hack for ad-runs page nav header\n   * Kill it with fire ASAP */\n  margin-top: -104px;\n  border-top: 1px solid black;\n  position: fixed;\n  left: 0;\n  width: 100%;\n  z-index: 10;\n}\n\n.md-dropdown-button {\n  background-color: #e1005d;\n  border-color: #e1005d;\n  color: #fff;\n  margin: 8px 0;\n  font-family: 'Bree Serif', serif;\n  width: 400px;\n  text-transform: uppercase;\n}\n\n.md-dropdown-button:not([href]),\n.md-dropdown-button:not([href]):focus,\n.md-dropdown-button:not([href]):hover {\n  /* Because no href is added to avoid rerouting, we have to add this */\n  color: #fff;\n}\n\n.md-dropdown-button:hover {\n  color: #fff;\n}\n\n.md-project-dropdown {\n  min-width: 330px;\n  background-color: #fff;\n  padding: 0;\n  margin-top: 10px;\n}\n\n.md-project-dropdown .drop-content > li {\n  border-bottom: 1px solid #e2e2e2;\n  padding: 10px 0px 5px 0px;\n}\n\n.md-project-dropdown .drop-content > li:nth-child(2n+0) {\n  background-color: #fafafa;\n}\n\n.md-project-dropdown .drop-content > li:after {\n  content: \"\";\n  clear: both;\n  display: block;\n}\n\n.md-project-dropdown .drop-content > li:hover {\n  background-color: #fcfcfc;\n}\n\n.md-project-dropdown .drop-content > li:last-child {\n  border-bottom: none;\n}\n\n.md-project-dropdown .drop-content > li .notify-img {\n  float: left;\n  display: inline-block;\n  width: 45px;\n  height: 45px;\n  margin: 0px 0px 8px 0px;\n}\n\n.md-project-dropdown .drop-content > li a {\n  font-size: 12px;\n  font-weight: normal;\n}\n\n.md-project-dropdown .drop-content > li {\n  font-weight: bold;\n  font-size: 11px;\n  width: 400px;\n  height: 45px;\n}\n\n.md-project-dropdown .drop-content > li hr {\n  margin: 5px 0;\n  width: 70%;\n  border-color: #e2e2e2;\n}\n\n.md-project-dropdown .drop-content .pd-l0 {\n  padding-left: 0;\n}\n\n.md-project-dropdown .drop-content > li p {\n  font-size: 11px;\n  color: #666;\n  font-weight: normal;\n  margin: 3px 0;\n}\n\n.md-project-dropdown .drop-content li.row {\n  margin-left: 0px;\n  margin-right: 0px;\n  background-color: #e1005d;\n  color: #fff;\n}\n\n.md-project-dropdown .drop-content .md-project-property-name {\n  text-transform: uppercase;\n  font-family: 'Bree Serif', serif;\n  font-size: 14px;\n}\n\n.md-project-dropdown .drop-content .md-project-property-value {\n  float: right;\n  font-family: 'Lora', serif;\n  font-size: 14px;\n}\n\n.md-budget {\n  font-family: 'Bree Serif', serif;\n  font-size: .9rem;\n  border-radius: .3rem;\n  white-space: nowrap;\n}\n\n.md-budget .budget-panel {\n  padding: .5rem;\n  margin: .5rem;\n}\n\n.md-budget .budget-panel .brief-budget {\n  color: #e1005d;\n}\n\n.md-budget .budget-panel .value {\n  border-radius: .3rem;\n  padding: .5rem;\n  color: #fff;\n}\n\n.md-budget-type {\n  font-size: 12px;\n}\n\n.md-edit-campaign-button {\n  cursor: pointer;\n}\n\n#md-edit-campaign-button-label {\n  text-transform: uppercase;\n  font-weight: normal;\n  font-size: 1.5em;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/campaigns/components/ad-runs-header.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-light bg-light md-navbar-campaign\">\n  <ul class=\"navbar-nav mr-auto\">\n    <li class=\"nav-item dropdown mr-3\" ngbDropdown placement=\"bottom-left\">\n      <a class=\"btn btn-lg md-dropdown-button\" id=\"campaign-dropdown\" ngbDropdownToggle>\n        <!-- FIXME: avoid using style hack for FF -->\n        {{ campaign.campaign }}<span class=\"fa fa-chevron-down fa-lg\"\n          style=\"position: absolute;right: 1rem;top: 1.3rem;\"></span>\n      </a>\n\n      <ul class=\"md-project-dropdown dropdown-menu\" ngbDropdownMenu aria-labelledby=\"campaign-dropdown\">\n        <!-- notify content -->\n        <div class=\"drop-content\">\n          <li class=\"row\">\n            <div class=\"col-md-1 col-sm-1 col-xs-1\">\n              <span class=\"fa fa-user fa-2x\"></span>\n            </div>\n            <div class=\"col-md-2 col-sm-2 col-xs-2\">\n              <span class=\"md-project-property-name\">client</span>\n            </div>\n            <div class=\"col-md-9 col-sm-9 col-xs-9\">\n              <span class=\"md-project-property-value\">{{ campaign.client }}</span>\n            </div>\n          </li>\n          <li class=\"row\">\n            <div class=\"col-md-1 col-sm-1 col-xs-1\">\n              <span class=\"fa fa-star fa-2x\"></span>\n            </div>\n            <div class=\"col-md-2 col-sm-2 col-xs-2\">\n              <span class=\"md-project-property-name\">brand</span>\n            </div>\n            <div class=\"col-md-9 col-sm-9 col-xs-9\">\n              <span class=\"md-project-property-value\">{{ campaign.brand }}</span>\n            </div>\n          </li>\n          <li class=\"row\">\n            <div class=\"col-md-1 col-sm-1 col-xs-1\">\n              <span class=\"fa fa-folder fa-2x\"></span>\n            </div>\n            <div class=\"col-md-2 col-sm-2 col-xs-2\">\n              <span class=\"md-project-property-name\">campaign</span>\n            </div>\n            <div class=\"col-md-9 col-sm-9 col-xs-9\">\n              <span class=\"md-project-property-value\">{{ campaign.campaign }}</span>\n            </div>\n          </li>\n          <li class=\"row\">\n            <div class=\"col-md-1 col-sm-1 col-xs-1\">\n              <span class=\"fa fa-calendar fa-2x\"></span>\n            </div>\n            <div class=\"col-md-2 col-sm-2 col-xs-2\">\n              <span class=\"md-project-property-name\">duration</span>\n            </div>\n            <div class=\"col-md-9 col-sm-9 col-xs-9\">\n              <span class=\"md-project-property-value\">{{ campaign.startDate }} - {{ campaign.endDate }}</span>\n            </div>\n          </li>\n          <li class=\"row\">\n            <div class=\"col-md-1 col-sm-1 col-xs-1\">\n              <span class=\"fa fa-bullseye fa-2x\"></span>\n            </div>\n            <div class=\"col-md-2 col-sm-2 col-xs-2\">\n              <span class=\"md-project-property-name\">target</span>\n            </div>\n            <div class=\"col-md-9 col-sm-9 col-xs-9\">\n              <span class=\"md-project-property-value\">{{ campaign.target }}</span>\n            </div>\n          </li>\n          <li class=\"row\">\n            <div class=\"col-md-1 col-sm-1 col-xs-1\">\n              <span class=\"fa fa-usd fa-2x\"></span>\n            </div>\n            <div class=\"col-md-2 col-sm-2 col-xs-2\">\n              <span class=\"md-project-property-name\">fee</span>\n            </div>\n            <div class=\"col-md-9 col-sm-9 col-xs-9\">\n              <span class=\"md-project-property-value\">{{ campaign.fee }}%</span>\n            </div>\n          </li>\n          <li class=\"row md-edit-campaign-button\"\n              (click)=\"goToCampaignEditingForm()\">\n            <div class=\"col-md-1 col-sm-1 col-xs-1\">\n              <span class=\"fa fa-wrench fa-2x\"></span>\n            </div>\n            <div class=\"col\">\n              <span id=\"md-edit-campaign-button-label\">edit campaign</span>\n            </div>\n            <div class=\"col-md-1 col-sm-1 col-xs-1\">\n              <span class=\"fa fa-2x fa-arrow-right float-right\"></span>\n            </div>\n          </li>\n        </div>\n      </ul>\n    </li>\n  </ul>\n  <ul class=\"navbar-nav mr-2 mt-md-0 navbar-right\">\n    <li class=\"nav-item\">\n      <div class=\"md-budget row\">\n        <span class=\"col budget-panel\">\n          <span>BRIEF BUDGET:</span>\n          <span class=\"md-budget-type\">({{ campaign.budgetType }})</span>\n          <span class=\"ml-2 brief-budget\">\n            {{calculatedFields.briefBudget | formattednumber}} Ft\n          </span>\n        </span>\n        <span class=\"col budget-panel\">\n          <span>PLANNED BUDGET:</span>\n          <span class=\"ml-2 value\"\n            [ngClass]=\"{\n              'bg-success': calculatedFields.plannedBudget >= 0 &&\n                calculatedFields.plannedBudget <= calculatedFields.briefBudget,\n              'bg-danger': calculatedFields.plannedBudget > calculatedFields.briefBudget\n            }\">\n            {{ calculatedFields.plannedBudget | formattednumber }} Ft\n          </span>\n        </span>\n        <span class=\"col budget-panel\">\n          <span>REMAINING:</span>\n          <span class=\"ml-2 value\"\n            [ngClass]=\"{\n              'bg-success': calculatedFields.remainingBudget >= 0 &&\n                calculatedFields.remainingBudget <= calculatedFields.briefBudget,\n              'bg-danger': calculatedFields.remainingBudget < 0\n            }\">\n            {{calculatedFields.remainingBudget | formattednumber}} Ft\n          </span>\n        </span>\n      </div>\n    </li>\n  </ul>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/campaigns/components/ad-runs-header.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdRunsHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_campaign__ = __webpack_require__("../../../../../src/app/campaigns/models/campaign.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_adrun__ = __webpack_require__("../../../../../src/app/campaigns/models/adrun.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_BudgetType__ = __webpack_require__("../../../../../src/app/campaigns/models/BudgetType.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_exchange_currency__ = __webpack_require__("../../../../../src/app/campaigns/models/exchange-currency.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdRunsHeaderComponent = (function () {
    function AdRunsHeaderComponent() {
        this.editCampaign = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"]();
    }
    AdRunsHeaderComponent.prototype.ngOnInit = function () {
        this.reCalculateFields();
    };
    AdRunsHeaderComponent.prototype.ngOnChanges = function () {
        this.reCalculateFields();
    };
    AdRunsHeaderComponent.prototype.reCalculateFields = function () {
        var bufferedBudget = Object(__WEBPACK_IMPORTED_MODULE_0__models_campaign__["b" /* calculateBufferedBudget */])(this.campaign.budget, this.campaign.buffer);
        var briefBudget = this.campaign.exchangeCurrency === __WEBPACK_IMPORTED_MODULE_4__models_exchange_currency__["a" /* ExchangeCurrency */].HUF ?
            bufferedBudget :
            Object(__WEBPACK_IMPORTED_MODULE_0__models_campaign__["a" /* calculateBriefBudget */])(bufferedBudget, this.campaign.exchangeRate);
        var plannedBudget = this.calculatePlannedBudget();
        this.calculatedFields = {
            briefBudget: briefBudget,
            plannedBudget: plannedBudget,
            remainingBudget: briefBudget - plannedBudget
        };
    };
    AdRunsHeaderComponent.prototype.calculatePlannedBudget = function () {
        var _this = this;
        return this.adRuns.reduce(function (acc, adRun) {
            var adRunCost = 0;
            switch (_this.campaign.budgetType) {
                case __WEBPACK_IMPORTED_MODULE_3__models_BudgetType__["a" /* BudgetType */].NetNet:
                    adRunCost = Object(__WEBPACK_IMPORTED_MODULE_1__models_adrun__["k" /* calculateNetNet */])(adRun);
                    break;
                default:
                    adRunCost = Object(__WEBPACK_IMPORTED_MODULE_1__models_adrun__["f" /* calculateClientNet */])(adRun, _this.campaign);
                    break;
            }
            return acc + adRunCost;
        }, 0);
    };
    AdRunsHeaderComponent.prototype.goToCampaignEditingForm = function () {
        this.editCampaign.emit(this.campaign.identifier);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], AdRunsHeaderComponent.prototype, "campaign", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], AdRunsHeaderComponent.prototype, "adRuns", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], AdRunsHeaderComponent.prototype, "editCampaign", void 0);
    AdRunsHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'md-ad-runs-header',
            template: __webpack_require__("../../../../../src/app/campaigns/components/ad-runs-header.html"),
            styles: [__webpack_require__("../../../../../src/app/campaigns/components/ad-runs-header.css")]
        })
    ], AdRunsHeaderComponent);
    return AdRunsHeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/campaigns/components/ad-runs-statistics.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdRunsStatisticsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AdRunsStatisticsComponent = (function () {
    function AdRunsStatisticsComponent() {
    }
    AdRunsStatisticsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'md-ad-runs-statistics',
            template: "\n  <!--\n  <div class=\"container\">\n\t  <div class=\"card mt-5\">\n\t\t  <div class=\"card-body\">\n\t\t\t  <h3 class=\"card-title\" style=\"text-align: center;\">Statistics</h3>\n\t\t\t  <div class=\"row\">\n\t\t\t\t  <div class=\"col\">\n\t\t\t\t\t  <table class=\"table table-bordered\">\n\t\t\t\t\t\t  <thead>\n\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t\t  <th>Month</th>\n\t\t\t\t\t\t\t\t  <th>Client Net</th>\n\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t  </thead>\n\t\t\t\t\t\t  <tbody>\n\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t\t  <td>September</td>\n\t\t\t\t\t\t\t\t  <td>4 898 177 Ft</td>\n\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t\t  <td>October</td>\n\t\t\t\t\t\t\t\t  <td>1 335 990 Ft</td>\n\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t  </tbody>\n\t\t\t\t\t  </table>\n\t\t\t\t  </div>\n\t\t\t\t  <div class=\"col\">\n\t\t\t\t\t  &nbsp;\n\t\t\t\t  </div>\n\t\t\t  </div>\n\t\t  </div>\n\t  </div>\n  </div>\n  -->\n  "
        })
    ], AdRunsStatisticsComponent);
    return AdRunsStatisticsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/campaigns/components/ad-runs.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1,h2,h3 {\n\tfont-family: 'Bree Serif', serif;\n}\n\n.md-next-button {\n\tfont-family: 'Bree Serif', serif;\n\tfont-size: 24px;\n}\n\n.md-adruns-table {\n\tfont-size: 12px;\n}\n.md-adruns-table th {\n\twhite-space: nowrap;\n}\n.md-adruns-table td {\n\twhite-space: nowrap;\n}\n.md-adruns-table td.assigned {\n\tbackground-color: #e1005d;\n\tcolor: #fff;\n}\n.md-adruns-table thead tr.date-header th {\n\tpadding: .1rem;\n\tborder: none;\n}\n.md-adruns-table thead tr.date-header th.date {\n\tborder: 1px solid #e9ecef;\n\ttext-align: center;\n\tmin-width: 60px;\n\tfont-weight: normal;\n}\n.md-adruns-table thead tr.date-header th.week {\n\tborder: 1px solid #e9ecef;\n\ttext-align: center;\n\tmin-width: 60px;\n\tfont-weight: bold;\n}\n.md-adruns-table thead tr.header-names {\n\tbackground-color: #e9ecef;\n}\n.md-adruns-table thead tr.header-names th {\n\tborder-color: #fff;\n}\n.md-adruns-table thead tr.header-names th.month {\n    text-transform: capitalize;\n}\n.md-adruns-table tbody tr td.date {\n\ttext-align: center;\n}\n.md-adruns-table tfoot tr.spacer td {\n\tborder: none;\n\tpadding: 0 0 10px 0;\n}\n.md-adruns-table tfoot tr td.form-first-part {\n\tmin-width: 50rem;\n}\n.md-adruns-table tfoot tr td.form-first-part label {\n    margin-bottom: 0.1rem;\n}\n.md-adruns-table tfoot tr td.form-first-part .form-group {\n\tmargin-bottom: 0.6rem;\n}\n.md-adruns-table tfoot tr.date-footer td {\n\tpadding: .1rem;\n\tvertical-align: middle;\n\ttext-align: center;\n}\n.md-adruns-table tfoot tr.date-footer td input[type=\"text\"] {\n\twidth: 50px;\n}\n.md-adruns-table tfoot tr.date-footer td input.has-value {\n    background-color: #ff90b5;\n}\n.md-adruns-table tfoot div.small-box {\n\tpadding: 0.5rem;\n}\n.md-adruns-table tfoot td.invisible {\n\tborder: none;\n}\n.md-adruns-table tfoot div.remaining {\n\tfont-weight: bold;\n\tfont-size: 14px;\n}\n.md-adruns-table tfoot div.summary .col {\n\ttext-align: center;\n\tfont-weight: bold;\n\tfont-size: 14px;\n}\n.md-adruns-table tfoot div.summary .col span.value {\n\tcolor: #e1005d;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/campaigns/components/ad-runs.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card md-adruns-container\">\n  <div class=\"card-body\">\n    <table #dragulaMirrorContainer class=\"table table-responsive table-bordered md-adruns-table\">\n      <thead>\n      <tr class=\"date-header\">\n        <th *ngIf=\"isEditingMode\"></th>\n        <th></th>\n        <th></th>\n        <th></th>\n        <th></th>\n        <th></th>\n        <th></th>\n        <th></th>\n        <th></th>\n        <th></th>\n        <th></th>\n        <th></th>\n        <th></th>\n        <th *ngFor=\"let week of weeks\" class=\"week\">\n          {{week}}\n        </th>\n        <th></th>\n        <th></th>\n        <th></th>\n        <th></th>\n        <th></th>\n        <th></th>\n        <th></th>\n        <th></th>\n        <th></th>\n        <th></th>\n        <th></th>\n        <th></th>\n        <th></th>\n        <th></th>\n        <th></th>\n        <th></th>\n        <th></th>\n        <th *ngIf=\"isEditingMode\"></th>\n      </tr>\n      <tr *ngFor=\"let dates of dateOfDays\" class=\"date-header\">\n        <th *ngIf=\"isEditingMode\"></th>\n        <th></th>\n        <th></th>\n        <th></th>\n        <th></th>\n        <th></th>\n        <th></th>\n        <th></th>\n        <th></th>\n        <th></th>\n        <th></th>\n        <th></th>\n        <th></th>\n        <th *ngFor=\"let date of dates\" class=\"date\">\n          {{date}}\n        </th>\n        <th></th>\n        <th></th>\n        <th></th>\n        <th></th>\n        <th></th>\n        <th></th>\n        <th></th>\n        <th></th>\n        <th></th>\n        <th></th>\n        <th></th>\n        <th></th>\n        <th></th>\n        <th></th>\n        <th></th>\n        <th></th>\n        <th></th>\n        <th *ngIf=\"isEditingMode\"></th>\n      </tr>\n      <tr class=\"header-names\">\n        <th *ngIf=\"isEditingMode\">Action</th>\n        <th>Sales house</th>\n        <th>Site</th>\n        <th>Placement</th>\n        <th>Format</th>\n        <th>Duration</th>\n        <th>Date</th>\n        <th>Size</th>\n        <th>Units</th>\n        <th>Ratecard</th>\n        <th>Volume discount</th>\n        <th>Other discount</th>\n        <th>Agency discount</th>\n        <th class=\"month\" *ngFor=\"let monthSpan of monthSpans\" [colSpan]=\"monthSpan.span\">\n          {{monthSpan.month}}\n        </th>\n        <th>Pricing type</th>\n        <th>Base of ad serving</th>\n        <th>Est. AV</th>\n        <th>Est. CT</th>\n        <th>Est. Reach UU</th>\n        <th>Est. CTR</th>\n        <th>Est. Lead</th>\n        <th>Est. Acquisition</th>\n        <th>Sum ratecard</th>\n        <th>Net</th>\n        <th>NetNet</th>\n        <th>Client Net</th>\n        <th>CPM</th>\n        <th>CPC</th>\n        <th>CPT</th>\n        <th>CPL</th>\n        <th>CPA</th>\n        <th *ngIf=\"isEditingMode\">Action</th>\n      </tr>\n      </thead>\n      <tbody [dragula]='AD_RUN_BAG' [dragulaModel]='entriesForDragula'>\n      <tr *ngFor=\"let adrun of entries\">\n        <td *ngIf=\"isEditingMode\">\n          <a (click)=\"editAdRun(adrun)\">\n            <i class=\"fa fa-wrench fa-lg text-warning\"></i>\n          </a>\n          <a (click)=\"deleteAdRun.emit(adrun)\">\n            <i class=\"fa fa-trash fa-lg text-danger ml-1\"></i>\n          </a>\n        </td>\n        <td>{{adrun.salesHouse}}</td>\n        <td>{{adrun.site}}</td>\n        <td>{{adrun.placement}}</td>\n        <td>{{adrun.format}}</td>\n        <td>{{adrun.duration}}</td>\n        <td>{{adrun.date}}</td>\n        <td>{{adrun.size}}</td>\n        <td>{{adrun.units | formattednumber}}</td>\n        <td>{{adrun.ratecard | formattednumber:4}}</td>\n        <td>{{adrun.volumeDiscount}}%</td>\n        <td>{{adrun.otherDiscount}}%</td>\n        <td>{{adrun.agencyDiscount}}%</td>\n        <td *ngFor=\"let week of weekObjectsForFormData(adrun.weeklyBreakdown)\" class=\"date\" [ngClass]=\"{ 'assigned': week.units > 0 }\">\n          {{ week.units | formattednumber}}\n        </td>\n        <td>{{adrun.pricingType}}</td>\n        <td>{{adrun.baseOfAdServing}}</td>\n        <td>{{adrun.estimatedAV | formattednumber:4}}</td>\n        <td>{{adrun.estimatedCT | formattednumber:4}}</td>\n        <td>{{adrun.estimatedReachUU | formattednumber:4}}</td>\n        <td>{{adrun.estimatedCTR | formattednumber:4}}</td>\n        <td>{{adrun.estimatedLead | formattednumber:4}}</td>\n        <td>{{adrun.estimatedAcquisition | formattednumber:4}}%</td>\n        <td>{{calculatedValuesPerAdRuns[adrun.id].sumRatecard | formattednumber:4}}</td>\n        <td>{{calculatedValuesPerAdRuns[adrun.id].net | formattednumber}}</td>\n        <td>{{calculatedValuesPerAdRuns[adrun.id].netNet | formattednumber}}</td>\n        <td>{{calculatedValuesPerAdRuns[adrun.id].clientNet | formattednumber}}</td>\n        <td>{{calculatedValuesPerAdRuns[adrun.id].cpm | formattednumber}}</td>\n        <td>{{calculatedValuesPerAdRuns[adrun.id].cpc | formattednumber}}</td>\n        <td>{{calculatedValuesPerAdRuns[adrun.id].cpt | formattednumber}}</td>\n        <td>{{calculatedValuesPerAdRuns[adrun.id].cpl | formattednumber}}</td>\n        <td>{{calculatedValuesPerAdRuns[adrun.id].cpa | formattednumber}}</td>\n        <td *ngIf=\"isEditingMode\">\n          <a (click)=\"editAdRun(adrun)\">\n            <i class=\"fa fa-wrench fa-lg text-warning\"></i>\n          </a>\n          <a (click)=\"deleteAdRun.emit(adrun)\">\n            <i class=\"fa fa-trash fa-lg text-danger ml-1\"></i>\n          </a>\n        </td>\n      </tr>\n      </tbody>\n      <tfoot *ngIf=\"formState !== NORMAL\">\n      <tr class=\"spacer\">\n        <td [colSpan]=\"31 + formData.weeklyBreakdown.length\"></td>\n      </tr>\n      <tr>\n        <td colspan=\"13\" rowspan=\"4\" class=\"form-first-part\">\n          <div class=\"row\">\n            <div class=\"col\">\n              <div class=\"card\">\n                <div class=\"card-header\">Main data</div>\n                <div class=\"card-body\">\n                  <div class=\"row\">\n                    <div class=\"col\">\n                      <div class=\"form-group\">\n                        <label for=\"saleshouse\">Sales House</label>\n                        <ng2-completer [inputId]=\"'saleshouse'\" [(ngModel)]=\"formData.salesHouse\" [datasource]=\"salesHouses\" [minSearchLength]=\"0\"\n                                       [inputClass]=\"'form-control form-control-sm'\" (selected)=\"$event ? salesHouseChange($event.title) : null;\"\n                                       [selectOnClick]=\"true\" [selectOnFocus]=\"true\">\n                        </ng2-completer>\n                      </div>\n                    </div>\n                    <div class=\"col\">\n                      <div class=\"form-group\">\n                        <label for=\"site\">Site</label>\n                        <select id=\"site\" [(ngModel)]=\"formData.site\" class=\"form-control form-control-sm\"\n                                (change)=\"siteChange($event.target.value)\">\n                          <option *ngFor=\"let site of filteredSites\" value=\"{{site.site}}\">{{ site.site }}</option>\n                        </select>\n                      </div>\n                    </div>\n                    <div class=\"col\">\n                      <div class=\"form-group\">\n                        <label for=\"placement\">Placement</label>\n                        <ng2-completer [inputId]=\"'placement'\" [(ngModel)]=\"formData.placement\" [datasource]=\"filteredPlacements\" [minSearchLength]=\"0\"\n                                       [inputClass]=\"'form-control form-control-sm'\"\n                                       [selectOnClick]=\"true\" [selectOnFocus]=\"true\">\n                        </ng2-completer>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col\">\n                      <div class=\"form-group\">\n                        <label for=\"format\">Format</label>\n                        <ng2-completer [inputId]=\"'format'\" [(ngModel)]=\"formData.format\" [datasource]=\"formats\" [minSearchLength]=\"0\"\n                                       [inputClass]=\"'form-control form-control-sm'\" (selected)=\"$event ? formatChange($event.title) : null\"\n                                       [selectOnClick]=\"true\" [selectOnFocus]=\"true\">\n                        </ng2-completer>\n                      </div>\n                    </div>\n                    <div class=\"col\">\n                      <div class=\"form-group\">\n                        <label for=\"size\">Size</label>\n                        <ss-multiselect-dropdown [options]=\"filteredSizes\" [ngModel]=\"selectedSizes\" class=\"form-control form-control-sm\"\n                                                 (ngModelChange)=\"updateSelectedSizes($event)\"\n                                                 [settings]=\"{buttonClasses: 'btn btn-primary btn-sm size-selector', dynamicTitleMaxItems: 10}\"\n                                                 style=\"padding:0.2rem;\">\n                        </ss-multiselect-dropdown>\n                      </div>\n                    </div>\n                    <div class=\"col\">\n                      <div class=\"form-group\">\n                        <label for=\"customsize\">Custom sizes</label>\n                        <input type=\"text\" id=\"customsize\" [(ngModel)]=\"customSizes\" class=\"form-control form-control-sm\" (click)=\"$event.target.select()\">\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-4\">\n                      <div class=\"form-group\">\n                        <label for=\"date\">Date</label>\n                        <input type=\"text\" [(ngModel)]=\"formData.date\" class=\"form-control form-control-sm\" id=\"date\" (click)=\"$event.target.select()\">\n                      </div>\n                    </div>\n                    <div class=\"col\">\n                      <div class=\"form-group\">\n                        <label for=\"units\">Units</label>\n                        <input type=\"text\" [textMask]=\"{mask: THOUSANDS_DELIMITED}\" id=\"units\" [(ngModel)]=\"formData.units\"\n                               (ngModelChange)=\"onUnitsModification()\" (click)=\"$event.target.select()\"\n                               class=\"form-control form-control-sm\">\n                      </div>\n                    </div>\n                    <div class=\"col\">\n                      <div class=\"form-group\">\n                        <label for=\"ratecard\">Ratecard</label>\n                        <input type=\"text\" [textMask]=\"{mask: THOUSANDS_DELIMITED}\" id=\"ratecard\" [(ngModel)]=\"formData.ratecard\"\n                               (ngModelChange)=\"emitAdRunsChangedState()\" (click)=\"$event.target.select()\" class=\"form-control form-control-sm\">\n                      </div>\n                    </div>\n                    <div class=\"col\">\n                      <div class=\"form-group\">\n                        <label for=\"pricing-type\">Pricing type</label>\n                        <select id=\"pricing-type\" [(ngModel)]=\"formData.pricingType\" class=\"form-control form-control-sm\"\n                                (change)=\"pricingTypeChange()\" (ngModelChange)=\"copyUnitsToEstimate()\">\n                          <option *ngFor=\"let pricingType of getPricingTypes()\" [value]=\"pricingType\">{{ pricingType }}</option>\n                        </select>\n                      </div>\n                    </div>\n                    <div class=\"col\">\n                      <div class=\"form-group\">\n                        <label for=\"base-of-ad-serving\">Base of ad serving</label>\n                        <select id=\"base-of-ad-serving\" [(ngModel)]=\"formData.baseOfAdServing\" class=\"form-control form-control-sm\">\n                          <option *ngFor=\"let adServingType of getAdServingTypes()\" value=\"{{adServingType}}\">{{adServingType}}</option>\n                        </select>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <!-- We'll have to use an autocomplete/typeahead component here which uses <input> instead of <select> -->\n          <div class=\"row\">\n            <div class=\"col\">\n              <div class=\"card mt-2\">\n                <div class=\"card-header\">\n                  Discounts & Estimations\n                </div>\n                <div class=\"card-body\">\n                  <div class=\"row\">\n                    <div class=\"col\">\n                      <div class=\"form-group\">\n                        <label for=\"discount-volume\">Volume discount</label>\n                        <input type=\"text\" id=\"discount-volume\" [(ngModel)]=\"formData.volumeDiscount\" (ngModelChange)=\"emitAdRunsChangedState()\" (click)=\"$event.target.select()\" class=\"form-control form-control-sm\">\n                      </div>\n                    </div>\n                    <div class=\"col\">\n                      <div class=\"form-group\">\n                        <label for=\"discount-other\">Other discount</label>\n                        <input type=\"text\" id=\"discount-other\" [(ngModel)]=\"formData.otherDiscount\" (ngModelChange)=\"emitAdRunsChangedState()\" (click)=\"$event.target.select()\" class=\"form-control form-control-sm\">\n                      </div>\n                    </div>\n                    <div class=\"col\">\n                      <div class=\"form-group\">\n                        <label for=\"discount-agent\">Agency discount</label>\n                        <input type=\"text\" id=\"discount-agent\" [(ngModel)]=\"formData.agencyDiscount\" (ngModelChange)=\"emitAdRunsChangedState()\" (click)=\"$event.target.select()\" class=\"form-control form-control-sm\">\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col\">\n                      <div class=\"form-group\">\n                        <label for=\"est-av\">Estimated AV</label>\n                        <input type=\"text\" [textMask]=\"{mask: THOUSANDS_DELIMITED}\" id=\"est-av\" [(ngModel)]=\"formData.estimatedAV\"\n                               (ngModelChange)=\"estimatedAVChanged()\" (click)=\"$event.target.select()\" class=\"form-control form-control-sm\"\n                               [disabled]=\"isEstimatedAVDisabled()\" (blur)=\"calculateThirdEstimatedFieldFromAV()\">\n                      </div>\n                    </div>\n                    <div class=\"col\">\n                      <div class=\"form-group\">\n                        <label for=\"est-ct\">Estimated CT</label>\n                        <input type=\"text\" [textMask]=\"{mask: THOUSANDS_DELIMITED}\" id=\"est-ct\" [(ngModel)]=\"formData.estimatedCT\"\n                               (ngModelChange)=\"estimatedCTChanged()\" (click)=\"$event.target.select()\" class=\"form-control form-control-sm\"\n                               [disabled]=\"isEstimatedCTDisabled()\" (blur)=\"calculateThirdEstimatedFieldFromCT()\">\n                      </div>\n                    </div>\n                    <div class=\"col\">\n                      <div class=\"form-group\">\n                        <label for=\"est-ctr\">Estimated CTR</label>\n                        <input type=\"text\" [textMask]=\"{mask: THOUSANDS_DELIMITED}\" id=\"est-ctr\" [(ngModel)]=\"formData.estimatedCTR\"\n                               (ngModelChange)=\"estimatedCTRChanged()\" (click)=\"$event.target.select()\" class=\"form-control form-control-sm\"\n                               (blur)=\"calculateThirdEstimatedFieldFromCTR()\">\n                      </div>\n                    </div>\n                    <div class=\"col\">\n                      <div class=\"form-group\">\n                        <label for=\"est-reachuu\">Estimated Reach UU</label>\n                        <input type=\"text\" [textMask]=\"{mask: THOUSANDS_DELIMITED}\" id=\"est-reachuu\" [(ngModel)]=\"formData.estimatedReachUU\" (ngModelChange)=\"emitAdRunsChangedState()\" (click)=\"$event.target.select()\" class=\"form-control form-control-sm\">\n                      </div>\n                    </div>\n                    <div class=\"col\">\n                      <div class=\"form-group\">\n                        <label for=\"est-lead\">Estimated Lead</label>\n                        <input type=\"text\" [textMask]=\"{mask: THOUSANDS_DELIMITED}\" id=\"est-lead\" [(ngModel)]=\"formData.estimatedLead\" (ngModelChange)=\"emitAdRunsChangedState()\" (click)=\"$event.target.select()\" class=\"form-control form-control-sm\">\n                      </div>\n                    </div>\n                    <div class=\"col\">\n                      <div class=\"form-group\">\n                        <label for=\"est-acq\">Estimated Acquisition</label>\n                        <input type=\"text\" [textMask]=\"{mask: THOUSANDS_DELIMITED}\" id=\"est-acq\" [(ngModel)]=\"formData.estimatedAcquisition\" (ngModelChange)=\"emitAdRunsChangedState()\" (click)=\"$event.target.select()\" class=\"form-control form-control-sm\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col\">\n              <div class=\"card mt-2\">\n                <div class=\"card-body\">\n                  <div class=\"row summary\">\n                    <div class=\"col sum-ratecard\">\n                      Sum ratecard\n                      <br />\n                      <span class=\"value\">{{ calculatedValuesPerAdRuns[formData.id].sumRatecard | formattednumber}}</span>\n                    </div>\n                    <div class=\"col net\">\n                      Net\n                      <br />\n                      <span class=\"value\">{{ calculatedValuesPerAdRuns[formData.id].net | formattednumber}}</span>\n                    </div>\n                    <div class=\"col netnet\">\n                      NetNet\n                      <br />\n                      <span class=\"value\">{{ calculatedValuesPerAdRuns[formData.id].netNet | formattednumber}}</span>\n                    </div>\n                    <div class=\"col client-net\">\n                      Client Net\n                      <br />\n                      <span class=\"value\">{{ calculatedValuesPerAdRuns[formData.id].clientNet | formattednumber}}</span>\n                    </div>\n                    <div class=\"col cpm\">\n                      CPM\n                      <br />\n                      <span class=\"value\">{{ calculatedValuesPerAdRuns[formData.id].cpm | formattednumber}}</span>\n                    </div>\n                    <div class=\"col cpc\">\n                      CPC\n                      <br />\n                      <span class=\"value\">{{ calculatedValuesPerAdRuns[formData.id].cpc | formattednumber}}</span>\n                    </div>\n                    <div class=\"col cpt\">\n                      CPT\n                      <br />\n                      <span class=\"value\">{{ calculatedValuesPerAdRuns[formData.id].cpt | formattednumber}}</span>\n                    </div>\n                    <div class=\"col cpl\">\n                      CPL\n                      <br />\n                      <span class=\"value\">{{ calculatedValuesPerAdRuns[formData.id].cpl | formattednumber}}</span>\n                    </div>\n                    <div class=\"col cpa\">\n                      CPA\n                      <br />\n                      <span class=\"value\">{{ calculatedValuesPerAdRuns[formData.id].cpa | formattednumber}}</span>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </td>\n        <td [colSpan]=\"formData.weeklyBreakdown.length\">\n          <div class=\"remaining\" *ngFor=\"let remainingUnits of [calculatedValuesPerAdRuns[formData.id].remainingUnits]\">\n            Remaining units: <span [ngClass]=\"{'text-success': remainingUnits > 0, 'text-danger': remainingUnits <= 0}\">{{ remainingUnits | formattednumber }}</span>\n          </div>\n        </td>\n        <td colspan=\"18\" rowspan=\"3\" class=\"invisible\">\n        </td>\n      </tr>\n      <tr class=\"date-footer\">\n        <td *ngFor=\"let week of formData.weeklyBreakdown\">\n          <input type=\"text\" [(ngModel)]=\"week.units\" (click)=\"$event.target.select()\" [ngClass]=\"{ 'has-value': week.units > 0 }\">\n        </td>\n      </tr>\n      <tr>\n        <td [colSpan]=\"formData.weeklyBreakdown.length\">\n          <button class=\"btn btn-default\" (click)=\"distributeUnitsEvenly()\">Distribute units evenly <i class=\"fa fa-arrows-alt ml-2\"></i></button>\n        </td>\n      </tr>\n      <tr>\n        <td [colSpan]=\"formData.weeklyBreakdown.length\" class=\"invisible\"></td>\n        <td colspan=\"8\" class=\"invisible\"></td>\n      </tr>\n      </tfoot>\n    </table>\n\n    <button *ngIf=\"formState === NORMAL && isEditingMode\" class=\"btn btn-lg btn-success\" (click)=\"addAdRun()\">\n      New Ad run\n      <i class=\"fa fa-plus-circle px-2\" aria-hidden=\"true\"></i>\n    </button>\n    <button *ngIf=\"formState !== NORMAL && isEditingMode\" class=\"btn btn-lg btn-primary\" (click)=\"submitEdit()\">\n      OK\n      <i class=\"fa fa-check px-2\"></i>\n    </button>\n    <button *ngIf=\"formState !== NORMAL && isEditingMode\" class=\"btn btn-lg btn-default ml-4\" (click)=\"cancelEdit()\">\n      Cancel\n      <i class=\"fa fa-times px-2\"></i>\n    </button>\n  </div>\n</div>\n<div class=\"row pl-4 mt-5\">\n  <div class=\"col\">\n    <button *ngIf=\"isEditingMode\" class=\"btn btn-primary btn-lg md-next-button\" (click)=\"saveCampaign()\"> Save Draft\n      <i class=\"fa fa-floppy-o px-2\"></i>\n    </button>\n\n    <button *ngIf=\"isEditingMode\" class=\"btn btn-default btn-lg ml-4 md-next-button\" (click)=\"saveCampaign()\"> Cancel\n      <i class=\"fa fa-times px-2\" aria-hidden=\"true\"></i>\n    </button>\n\n    <button *ngIf=\"!isEditingMode\" class=\"btn btn-default btn-lg md-next-button\" (click)=\"editCampaign()\">Edit\n      <i class=\"fa fa-wrench px-2\" aria-hidden=\"true\"></i></button>\n\n    <button *ngIf=\"!isEditingMode\" class=\"btn btn-primary btn-lg ml-4 md-next-button\" (click)=\"export()\"> Export\n      <i class=\"fa fa-file-excel-o px-2\" aria-hidden=\"true\"></i> </button>\n\n    <button *ngIf=\"!isEditingMode\" class=\"btn btn-default btn-lg ml-4 md-next-button\" [routerLink]=\"['../campaigns']\"> Back to Overview\n      <i class=\"fa fa-arrow-left px-2\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/campaigns/components/ad-runs.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdRunsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_ad_runs_helper__ = __webpack_require__("../../../../../src/app/campaigns/services/ad-runs-helper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_constants__ = __webpack_require__("../../../../../src/app/campaigns/shared/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_adrun__ = __webpack_require__("../../../../../src/app/campaigns/models/adrun.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_dragula__ = __webpack_require__("../../../../ng2-dragula/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_unmasking__ = __webpack_require__("../../../../../src/app/campaigns/services/unmasking.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_text_mask_addons_dist_createNumberMask__ = __webpack_require__("../../../../text-mask-addons/dist/createNumberMask.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_text_mask_addons_dist_createNumberMask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_text_mask_addons_dist_createNumberMask__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_file_saver__ = __webpack_require__("../../../../file-saver/FileSaver.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_file_saver__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_xlsx__ = __webpack_require__("../../../../xlsx/xlsx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_xlsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_xlsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__models_pricing_type__ = __webpack_require__("../../../../../src/app/campaigns/models/pricing-type.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__models_ad_serving_type__ = __webpack_require__("../../../../../src/app/campaigns/models/ad-serving-type.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var AdRunsComponent = (function () {
    function AdRunsComponent(dragulaService, unmaskingService, route, helperService) {
        this.dragulaService = dragulaService;
        this.unmaskingService = unmaskingService;
        this.route = route;
        this.helperService = helperService;
        this.add = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"]();
        this.edit = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"]();
        this.deleteAdRun = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"]();
        this.adRunsChange = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"]();
        this.orderChanged = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"]();
        this.unsubscribe = new __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__["a" /* Subject */]();
        this.THOUSANDS_DELIMITED = __WEBPACK_IMPORTED_MODULE_9_text_mask_addons_dist_createNumberMask___default()({
            prefix: '',
            thousandsSeparatorSymbol: __WEBPACK_IMPORTED_MODULE_1__shared_constants__["b" /* THOUSANDS_SEPARATOR_SYMBOL */],
            allowDecimal: true,
            decimalLimit: __WEBPACK_IMPORTED_MODULE_1__shared_constants__["a" /* DECIMAL_LIMIT */]
        });
        this.MASKED_FIELDS = {
            thousandsDelimited: [
                'ratecard',
                'units',
                'estimatedAV',
                'estimatedCT',
                'estimatedReachUU',
                'estimatedCTR',
                'estimatedLead',
                'estimatedAcquisition'
            ]
        };
        this.PRICING_TYPE_HUF_CT = 'HUF/CT';
        this.PRICING_TYPE_HUF_AV = 'HUF/AV';
        this.AD_RUN_BAG = 'ad-run-bag';
        this.NORMAL = 1;
        this.ADD = 2;
        this.EDIT = 3;
        this.formState = this.NORMAL;
        this.calculatedValuesPerAdRuns = {};
        this.weeks = [];
        this.dateOfDays = [];
        this.monthSpans = [];
        this.isEditingMode = false;
        this.updateEntriesOnDrop();
        this.salesHouses = [
            'Absolut Media',
            'Actual Media',
            'Adaptive Media',
            'Ads Interactive',
            'Amcham',
            'Arkon',
            'Axel Springer',
            'Bankráció',
            'Bitport',
            'Build Press',
            'Ccifh',
            'CEMP',
            'CM Sales',
            'Curiocity',
            'Debreceni Televízió',
            'Drukka',
            'Ebola',
            'Educatio',
            'Equator Media',
            'E-target',
            'EvoMedia',
            'Expressz',
            'Facebook',
            'Forestview',
            'Friss diplomás',
            'Galaktika',
            'GMedia',
            'Google',
            'Google ',
            'Greativity Media',
            'Habostorta',
            'Használtautó',
            'Haszon',
            'Hír TV',
            'Hírek Média',
            'Huntingpress',
            'HVG Online',
            'HWSW',
            'Infectious',
            'Infinety',
            'Inform Media',
            'IngatlanCom',
            'InMobi',
            'Jaguár',
            'LaBlond',
            'Lapcom',
            'LibriMédia',
            'Lidl',
            'Lighthouse Media',
            'Madhouse',
            'Magyar Narancs',
            'Magyarvadász',
            'Marquard',
            'Maxima',
            'Média Hatvan',
            'Mediacity',
            'MediaLife',
            'Meex',
            'Metropol',
            'MMOnline',
            'Net Média',
            'Netadclick',
            'Nimród',
            'Nosalty',
            'Open Click & Convert',
            'Optimusz',
            'Origo Network',
            'Pécsi Médiaközpont',
            'Pécsi Napilap',
            'PiacProfit',
            'PLT',
            'Pont24',
            'Proaktív',
            'Professional Publishing',
            'Prohardver',
            'Reach Media',
            'Ringier',
            'Targetmax',
            'Tarsago',
            'Thinkdigital',
            'Tradetracker',
            'TVN',
            'United publishers',
            'Videohouse',
            'Wangaru',
            'R-Time'
        ];
        this.sites = [
            { saleshouse: 'Absolut Media', site: 'BBJ' },
            { saleshouse: 'Absolut Media', site: 'Hungary AM' },
            { saleshouse: 'Actual Media', site: 'AV package-Selected sites' },
            { saleshouse: 'Actual Media', site: 'CT package-Selected sites' },
            { saleshouse: 'Adaptive Media', site: '444' },
            { saleshouse: 'Adaptive Media', site: '2fly' },
            { saleshouse: 'Adaptive Media', site: 'AV package-Business' },
            { saleshouse: 'Adaptive Media', site: 'AV package-Culture' },
            { saleshouse: 'Adaptive Media', site: 'AV package-High reach' },
            { saleshouse: 'Adaptive Media', site: 'AV package-Premium' },
            { saleshouse: 'Adaptive Media', site: 'AV package-Selected sites' },
            { saleshouse: 'Adaptive Media', site: 'AV package-Selected streams' },
            { saleshouse: 'Adaptive Media', site: 'AV package-SME sites' },
            { saleshouse: 'Adaptive Media', site: 'AV package-Travel' },
            { saleshouse: 'Adaptive Media', site: 'AV package-Women' },
            { saleshouse: 'Adaptive Media', site: 'AV package-Youth sites' },
            { saleshouse: 'Adaptive Media', site: 'Bien' },
            { saleshouse: 'Adaptive Media', site: 'Computerworld' },
            { saleshouse: 'Adaptive Media', site: 'CT package-Business' },
            { saleshouse: 'Adaptive Media', site: 'CT package-Culture' },
            { saleshouse: 'Adaptive Media', site: 'CT package-High reach' },
            { saleshouse: 'Adaptive Media', site: 'CT package-Leisure' },
            { saleshouse: 'Adaptive Media', site: 'CT package-Selected sites' },
            { saleshouse: 'Adaptive Media', site: 'CT package-Youth' },
            { saleshouse: 'Adaptive Media', site: 'Csaladinet' },
            { saleshouse: 'Adaptive Media', site: 'Femcafe' },
            { saleshouse: 'Adaptive Media', site: 'Fotóvilág' },
            { saleshouse: 'Adaptive Media', site: 'HetiVálasz' },
            { saleshouse: 'Adaptive Media', site: 'Holtankoljak' },
            { saleshouse: 'Adaptive Media', site: 'Hurrányaralunk' },
            { saleshouse: 'Adaptive Media', site: 'Jogifórum' },
            { saleshouse: 'Adaptive Media', site: 'Kreatív' },
            { saleshouse: 'Adaptive Media', site: 'Lead package-Selected sites' },
            { saleshouse: 'Adaptive Media', site: 'Mashkulture' },
            { saleshouse: 'Adaptive Media', site: 'Mese TV' },
            { saleshouse: 'Adaptive Media', site: 'Nickelodeon' },
            { saleshouse: 'Adaptive Media', site: 'PCWorld' },
            { saleshouse: 'Adaptive Media', site: 'PiacProfit' },
            { saleshouse: 'Adaptive Media', site: 'Picibaba' },
            { saleshouse: 'Adaptive Media', site: 'Port' },
            { saleshouse: 'Adaptive Media', site: 'Privátbankár' },
            { saleshouse: 'Adaptive Media', site: 'PTO' },
            { saleshouse: 'Adaptive Media', site: 'Repjegy' },
            { saleshouse: 'Adaptive Media', site: 'Repülőjegy' },
            { saleshouse: 'Adaptive Media', site: 'Skype' },
            { saleshouse: 'Adaptive Media', site: 'Szülőklapja' },
            { saleshouse: 'Adaptive Media', site: 'TeszVesz' },
            { saleshouse: 'Adaptive Media', site: 'Tőzsdefórum' },
            { saleshouse: 'Adaptive Media', site: 'TV2' },
            { saleshouse: 'Adaptive Media', site: 'Útvonalterv' },
            { saleshouse: 'Adaptive Media', site: 'Vatera' },
            { saleshouse: 'Adaptive Media', site: 'Vista' },
            { saleshouse: 'Ads Interactive', site: 'CT package-Entertainment' },
            { saleshouse: 'Ads Interactive', site: 'CT package-Men' },
            { saleshouse: 'Ads Interactive', site: 'CT package-Women' },
            { saleshouse: 'Ads Interactive', site: 'eDM' },
            { saleshouse: 'Ads Interactive', site: 'Sport365' },
            { saleshouse: 'Amcham', site: 'Amcham' },
            { saleshouse: 'Arkon', site: 'IngatlanCom' },
            { saleshouse: 'Axel Springer', site: 'AV package-Cobranded' },
            { saleshouse: 'Axel Springer', site: 'AV package-Regional sites' },
            { saleshouse: 'Axel Springer', site: 'AV package-Selected sites' },
            { saleshouse: 'Axel Springer', site: 'AV package-Women' },
            { saleshouse: 'Axel Springer', site: 'Bama' },
            { saleshouse: 'Axel Springer', site: 'Baon' },
            { saleshouse: 'Axel Springer', site: 'Beol' },
            { saleshouse: 'Axel Springer', site: 'CT package-Regional sites' },
            { saleshouse: 'Axel Springer', site: 'CT package-Selected sites' },
            { saleshouse: 'Axel Springer', site: 'CT package-Women' },
            { saleshouse: 'Axel Springer', site: 'Délmagyar' },
            { saleshouse: 'Axel Springer', site: 'Duol' },
            { saleshouse: 'Axel Springer', site: 'Feol' },
            { saleshouse: 'Axel Springer', site: 'Glamour' },
            { saleshouse: 'Axel Springer', site: 'Haon' },
            { saleshouse: 'Axel Springer', site: 'Heol' },
            { saleshouse: 'Axel Springer', site: 'Időkép' },
            { saleshouse: 'Axel Springer', site: 'Kemma' },
            { saleshouse: 'Axel Springer', site: 'Kisalföld' },
            { saleshouse: 'Axel Springer', site: 'Kiskegyed' },
            { saleshouse: 'Axel Springer', site: 'Mindmegette' },
            { saleshouse: 'Axel Springer', site: 'Sonline' },
            { saleshouse: 'Axel Springer', site: 'Szoljon' },
            { saleshouse: 'Axel Springer', site: 'Szon' },
            { saleshouse: 'Axel Springer', site: 'Teol' },
            { saleshouse: 'Axel Springer', site: 'Vaol' },
            { saleshouse: 'Axel Springer', site: 'Világgazdaság' },
            { saleshouse: 'Axel Springer', site: 'Zaol' },
            { saleshouse: 'Bankráció', site: 'Bankráció' },
            { saleshouse: 'Bitport', site: 'Bitport' },
            { saleshouse: 'Build Press', site: 'Magyarépítéstechnika' },
            { saleshouse: 'Ccifh', site: 'Ccifh' },
            { saleshouse: 'CEMP', site: 'AV package-Business' },
            { saleshouse: 'CEMP', site: 'AV package-Cobranded' },
            { saleshouse: 'CEMP', site: 'AV package-Culture' },
            { saleshouse: 'CEMP', site: 'AV package-Entertainment' },
            { saleshouse: 'CEMP', site: 'AV package-High reach' },
            { saleshouse: 'CEMP', site: 'AV package-Leisure' },
            { saleshouse: 'CEMP', site: 'AV package-Men' },
            { saleshouse: 'CEMP', site: 'AV package-Selected blogs' },
            { saleshouse: 'CEMP', site: 'AV package-Selected mobile sites' },
            { saleshouse: 'CEMP', site: 'AV package-Selected sites' },
            { saleshouse: 'CEMP', site: 'AV package-Selected tablet sites' },
            { saleshouse: 'CEMP', site: 'AV package-Travel' },
            { saleshouse: 'CEMP', site: 'AV package-Women' },
            { saleshouse: 'CEMP', site: 'Blog' },
            { saleshouse: 'CEMP', site: 'Burzsuj.blog' },
            { saleshouse: 'CEMP', site: 'Creativeads.blog' },
            { saleshouse: 'CEMP', site: 'CT package-A + B mix' },
            { saleshouse: 'CEMP', site: 'CT package-A mix' },
            { saleshouse: 'CEMP', site: 'CT package-B mix' },
            { saleshouse: 'CEMP', site: 'CT package-High reach' },
            { saleshouse: 'CEMP', site: 'CT package-Selected sites' },
            { saleshouse: 'CEMP', site: 'Cukisag.blog' },
            { saleshouse: 'CEMP', site: 'Dívány' },
            { saleshouse: 'CEMP', site: 'Femina' },
            { saleshouse: 'CEMP', site: 'FűszerLélek.blog' },
            { saleshouse: 'CEMP', site: 'Gazdagisztán.blog' },
            { saleshouse: 'CEMP', site: 'Hogyvolt.blog' },
            { saleshouse: 'CEMP', site: 'Honfoglaló' },
            { saleshouse: 'CEMP', site: 'Indavideo' },
            { saleshouse: 'CEMP', site: 'Index' },
            { saleshouse: 'CEMP', site: 'Index2' },
            { saleshouse: 'CEMP', site: 'Indexvideo' },
            { saleshouse: 'CEMP', site: 'Inforádió' },
            { saleshouse: 'CEMP', site: 'Instantlife.blog' },
            { saleshouse: 'CEMP', site: 'Kétcicakonyhája.blog' },
            { saleshouse: 'CEMP', site: 'Lángoló gitárok' },
            { saleshouse: 'CEMP', site: 'Lilafüge.blog' },
            { saleshouse: 'CEMP', site: 'm.Dívány' },
            { saleshouse: 'CEMP', site: 'm.Index' },
            { saleshouse: 'CEMP', site: 'm.Index app' },
            { saleshouse: 'CEMP', site: 'm.Travelo' },
            { saleshouse: 'CEMP', site: 'Manzardcafe.blog' },
            { saleshouse: 'CEMP', site: 'Napi' },
            { saleshouse: 'CEMP', site: 'Napidoktor' },
            { saleshouse: 'CEMP', site: 'Ongo' },
            { saleshouse: 'CEMP', site: 'Pénzcentrum' },
            { saleshouse: 'CEMP', site: 'Port' },
            { saleshouse: 'CEMP', site: 'Portfolio' },
            { saleshouse: 'CEMP', site: 'Shopline' },
            { saleshouse: 'CEMP', site: 'SportGéza' },
            { saleshouse: 'CEMP', site: 'tablet.Dívány' },
            { saleshouse: 'CEMP', site: 'tablet.Index' },
            { saleshouse: 'CEMP', site: 'Totalcar' },
            { saleshouse: 'CEMP', site: 'Travelo' },
            { saleshouse: 'CEMP', site: 'Velvet' },
            { saleshouse: 'CEMP', site: 'Világutazó.blog' },
            { saleshouse: 'CEMP', site: 'Webbeteg' },
            { saleshouse: 'CM Sales', site: 'Advent' },
            { saleshouse: 'CM Sales', site: 'Aranyer.lap' },
            { saleshouse: 'CM Sales', site: 'AV package-Business & Tech' },
            { saleshouse: 'CM Sales', site: 'AV package-Cobranded' },
            { saleshouse: 'CM Sales', site: 'AV package-Entertainment' },
            { saleshouse: 'CM Sales', site: 'AV package-Glam & Beauty' },
            { saleshouse: 'CM Sales', site: 'AV package-Selected mobile sites' },
            { saleshouse: 'CM Sales', site: 'AV package-Selected sites' },
            { saleshouse: 'CM Sales', site: 'AV package-Selected tablet sites' },
            { saleshouse: 'CM Sales', site: 'Babaszoba' },
            { saleshouse: 'CM Sales', site: 'Citromail' },
            { saleshouse: 'CM Sales', site: 'Cosmopolitan' },
            { saleshouse: 'CM Sales', site: 'CT package-Adapt' },
            { saleshouse: 'CM Sales', site: 'CT package-Business & Tech' },
            { saleshouse: 'CM Sales', site: 'CT package-Entertainment' },
            { saleshouse: 'CM Sales', site: 'CT package-Glam & Beauty' },
            { saleshouse: 'CM Sales', site: 'CT package-Selected sites' },
            { saleshouse: 'CM Sales', site: 'CT package-Teen' },
            { saleshouse: 'CM Sales', site: 'Cukorbeteg.lap' },
            { saleshouse: 'CM Sales', site: 'Elle' },
            { saleshouse: 'CM Sales', site: 'FN24' },
            { saleshouse: 'CM Sales', site: 'Házipatika' },
            { saleshouse: 'CM Sales', site: 'Hír24' },
            { saleshouse: 'CM Sales', site: 'Könyv.lap' },
            { saleshouse: 'CM Sales', site: 'Könyvajánló.lap' },
            { saleshouse: 'CM Sales', site: 'Könyvesbolt.lap' },
            { saleshouse: 'CM Sales', site: 'Lead package-Selected sites' },
            { saleshouse: 'CM Sales', site: 'm.NLCafe' },
            { saleshouse: 'CM Sales', site: 'm.NLCafe app' },
            { saleshouse: 'CM Sales', site: 'Mozi24' },
            { saleshouse: 'CM Sales', site: 'NLCafe' },
            { saleshouse: 'CM Sales', site: 'Olcsóbbat' },
            { saleshouse: 'CM Sales', site: 'Player' },
            { saleshouse: 'CM Sales', site: 'Profession' },
            { saleshouse: 'CM Sales', site: 'SegmentAd' },
            { saleshouse: 'CM Sales', site: 'Skype' },
            { saleshouse: 'CM Sales', site: 'Sport24' },
            { saleshouse: 'CM Sales', site: 'Startlap' },
            { saleshouse: 'CM Sales', site: 'Startlapjátékok' },
            { saleshouse: 'CM Sales', site: 'StoryOnline' },
            { saleshouse: 'CM Sales', site: 'tablet.Elle Man' },
            { saleshouse: 'CM Sales', site: 'tablet.Y Magazin' },
            { saleshouse: 'CM Sales', site: 'Technet' },
            { saleshouse: 'CM Sales', site: 'Thematic eDM' },
            { saleshouse: 'CM Sales', site: 'TV24' },
            { saleshouse: 'CM Sales', site: 'Vezess' },
            { saleshouse: 'CM Sales', site: 'WellnessCafe' },
            { saleshouse: 'Curiocity', site: 'Curiocity' },
            { saleshouse: 'Debreceni Televízió', site: 'Dehír' },
            { saleshouse: 'Drukka', site: 'Drukka' },
            { saleshouse: 'Ebola', site: 'Ebola' },
            { saleshouse: 'Educatio', site: 'eDM' },
            { saleshouse: 'Educatio', site: 'Felvi' },
            { saleshouse: 'Equator Media', site: 'Pécsiújság' },
            { saleshouse: 'E-target', site: 'CT package-Selected sites' },
            { saleshouse: 'EvoMedia', site: 'Adó' },
            { saleshouse: 'EvoMedia', site: 'Aegon' },
            { saleshouse: 'EvoMedia', site: 'Árukereső' },
            { saleshouse: 'EvoMedia', site: 'AV package-Selected sites' },
            { saleshouse: 'EvoMedia', site: 'BBC' },
            { saleshouse: 'EvoMedia', site: 'CT package-Cars' },
            { saleshouse: 'EvoMedia', site: 'CT package-Selected sites' },
            { saleshouse: 'EvoMedia', site: 'CT package-SME sites' },
            { saleshouse: 'EvoMedia', site: 'Deluxe' },
            { saleshouse: 'EvoMedia', site: 'Használtautó' },
            { saleshouse: 'EvoMedia', site: 'HG' },
            { saleshouse: 'EvoMedia', site: 'Hírkereső' },
            { saleshouse: 'EvoMedia', site: 'Jobbanjár' },
            { saleshouse: 'EvoMedia', site: 'Jófogás' },
            { saleshouse: 'EvoMedia', site: 'Kapu' },
            { saleshouse: 'EvoMedia', site: 'Köpönyeg' },
            { saleshouse: 'EvoMedia', site: 'Last Minute utak' },
            { saleshouse: 'EvoMedia', site: 'Mfor' },
            { saleshouse: 'EvoMedia', site: 'PCFórum' },
            { saleshouse: 'EvoMedia', site: 'Prog' },
            { saleshouse: 'EvoMedia', site: 'Spotify' },
            { saleshouse: 'EvoMedia', site: 'Startutazás' },
            { saleshouse: 'EvoMedia', site: 'Ügyvédvilág' },
            { saleshouse: 'EvoMedia', site: 'Verlag Dashöfer' },
            { saleshouse: 'EvoMedia', site: 'Viasat Play' },
            { saleshouse: 'EvoMedia', site: 'Világlátó' },
            { saleshouse: 'EvoMedia', site: 'VS' },
            { saleshouse: 'Expressz', site: 'Expressz' },
            { saleshouse: 'Facebook', site: 'ROS' },
            { saleshouse: 'Forestview', site: 'AV package-RTB' },
            { saleshouse: 'Forestview', site: 'AV package-Selected sites' },
            { saleshouse: 'Forestview', site: 'CT package-RTB' },
            { saleshouse: 'Forestview', site: 'CT package-Selected sites' },
            { saleshouse: 'Friss diplomás', site: 'Friss diplomás' },
            { saleshouse: 'Galaktika', site: 'Galaktika' },
            { saleshouse: 'Galaktika', site: 'Intergalaktika' },
            { saleshouse: 'Galaktika', site: 'SF.blog' },
            { saleshouse: 'GMedia', site: 'AV package-Selected sites' },
            { saleshouse: 'Gmedia', site: 'Babamama' },
            { saleshouse: 'GMedia', site: 'm.Met' },
            { saleshouse: 'GMedia', site: 'Met' },
            { saleshouse: 'GMedia', site: 'Nagyon Balaton mobile app' },
            { saleshouse: 'GMedia', site: 'Sound mobile app' },
            { saleshouse: 'GMedia', site: 'Utazóna' },
            { saleshouse: 'GMedia', site: 'Útisúgó' },
            { saleshouse: 'GMedia', site: 'Világvándor' },
            { saleshouse: 'GMedia', site: 'Volt' },
            { saleshouse: 'GMedia', site: 'Volt mobile app' },
            { saleshouse: 'Google', site: 'GDN' },
            { saleshouse: 'Google', site: 'GSN' },
            { saleshouse: 'Google ', site: 'GSN&GDN' },
            { saleshouse: 'Google ', site: 'Youtube' },
            { saleshouse: 'Greativity Media', site: 'Greativity' },
            { saleshouse: 'Greativity Media', site: 'Jaguár' },
            { saleshouse: 'Habostorta', site: 'CT package-Selected sites' },
            { saleshouse: 'Habostorta', site: 'eDM' },
            { saleshouse: 'Használtautó', site: 'Használtautó' },
            { saleshouse: 'Haszon', site: 'Haszon' },
            { saleshouse: 'Hír TV', site: 'MNO' },
            { saleshouse: 'Hírek Média', site: 'Maxima' },
            { saleshouse: 'Huntingpress', site: 'Vadászlap' },
            { saleshouse: 'HVG Online', site: 'Adózóna' },
            { saleshouse: 'HVG Online', site: 'AV package-Selected mobile sites' },
            { saleshouse: 'HVG Online', site: 'AV package-Selected sites' },
            { saleshouse: 'HVG Online', site: 'CT package-Selected sites' },
            { saleshouse: 'HVG Online', site: 'Eduline' },
            { saleshouse: 'HVG Online', site: 'HVG' },
            { saleshouse: 'HVG Online', site: 'Jobline' },
            { saleshouse: 'HVG Online', site: 'm.Adózona' },
            { saleshouse: 'HVG Online', site: 'm.Eduline' },
            { saleshouse: 'HVG Online', site: 'm.HVG' },
            { saleshouse: 'HVG Online', site: 'tablet.HVG' },
            { saleshouse: 'HWSW', site: 'Gamekapocs' },
            { saleshouse: 'HWSW', site: 'HUP' },
            { saleshouse: 'HWSW', site: 'HWSW' },
            { saleshouse: 'Infectious', site: 'AV package-Selected sites' },
            { saleshouse: 'Infinety', site: 'Alternativenergia' },
            { saleshouse: 'Infinety', site: 'AV package-Lifestyle' },
            { saleshouse: 'Infinety', site: 'AV package-Selected mobile sites' },
            { saleshouse: 'Infinety', site: 'AV package-Selected sites' },
            { saleshouse: 'Infinety', site: 'AV package-Travel' },
            { saleshouse: 'Infinety', site: 'AV package-Women' },
            { saleshouse: 'Infinety', site: 'AV package-Youth sites' },
            { saleshouse: 'Infinety', site: 'Bababirodalom' },
            { saleshouse: 'Infinety', site: 'Babybooz' },
            { saleshouse: 'Infinety', site: 'Bankmonitor' },
            { saleshouse: 'Infinety', site: 'Bitport' },
            { saleshouse: 'Infinety', site: 'Cartoonnetwork' },
            { saleshouse: 'Infinety', site: 'Civishir' },
            { saleshouse: 'Infinety', site: 'CT package-Business' },
            { saleshouse: 'Infinety', site: 'CT package-Men' },
            { saleshouse: 'Infinety', site: 'CT package-Selected sites' },
            { saleshouse: 'Infinety', site: 'CT package-Youth' },
            { saleshouse: 'Infinety', site: 'Disney' },
            { saleshouse: 'Infinety', site: 'Eco' },
            { saleshouse: 'Infinety', site: 'Egészségkalauz' },
            { saleshouse: 'Infinety', site: 'Évamagazin' },
            { saleshouse: 'Infinety', site: 'Fotózz' },
            { saleshouse: 'Infinety', site: 'Gyártástrend' },
            { saleshouse: 'Infinety', site: 'Hajdupress' },
            { saleshouse: 'Infinety', site: 'Háziállat' },
            { saleshouse: 'Infinety', site: 'Infomed' },
            { saleshouse: 'Infinety', site: 'Joy' },
            { saleshouse: 'Infinety', site: 'Kutyabarát' },
            { saleshouse: 'Infinety', site: 'Lead package-Selected sites' },
            { saleshouse: 'Infinety', site: 'Libri' },
            { saleshouse: 'Infinety', site: 'Maxima' },
            { saleshouse: 'Infinety', site: 'MMOnline' },
            { saleshouse: 'Infinety', site: 'Nagyutazás' },
            { saleshouse: 'Infinety', site: 'Nickelodeon' },
            { saleshouse: 'Infinety', site: 'Nőiportál' },
            { saleshouse: 'Infinety', site: 'Pafi' },
            { saleshouse: 'Infinety', site: 'Parentia' },
            { saleshouse: 'Infinety', site: 'Pecsistop' },
            { saleshouse: 'Infinety', site: 'Pixinfo' },
            { saleshouse: 'Infinety', site: 'Printscreen' },
            { saleshouse: 'Infinety', site: 'Readers Digest' },
            { saleshouse: 'Infinety', site: 'Stop' },
            { saleshouse: 'Infinety', site: 'Tőzsdefórum' },
            { saleshouse: 'Infinety', site: 'Trollfész' },
            { saleshouse: 'Infinety', site: 'Utazásiiroda' },
            { saleshouse: 'Infinety', site: 'Utazzvelünk' },
            { saleshouse: 'Infinety', site: 'UV package-Selected sites' },
            { saleshouse: 'Infinety', site: 'UV package-Youth' },
            { saleshouse: 'Infinety', site: 'Wangaru' },
            { saleshouse: 'Infinety', site: 'Webnyeremény' },
            { saleshouse: 'Infinety', site: 'Weborvos' },
            { saleshouse: 'Infinety', site: 'Zeneszöveg' },
            { saleshouse: 'Inform Media', site: 'AV package-Regional sites' },
            { saleshouse: 'Inform Media', site: 'AV package-Selected sites' },
            { saleshouse: 'Inform Media', site: 'CT package-Regional sites' },
            { saleshouse: 'Inform Media', site: 'CT package-Selected sites' },
            { saleshouse: 'Inform Media', site: 'CV Online' },
            { saleshouse: 'Inform Media', site: 'Haon' },
            { saleshouse: 'Inform Media', site: 'Inform' },
            { saleshouse: 'Inform Media', site: 'Szon' },
            { saleshouse: 'IngatlanCom', site: 'IngatlanCom' },
            { saleshouse: 'InMobi', site: 'CT package-Selected sites' },
            { saleshouse: 'Jaguár', site: 'Jaguár' },
            { saleshouse: 'LaBlond', site: 'Blans' },
            { saleshouse: 'Lapcom', site: 'AV package-Regional sites' },
            { saleshouse: 'Lapcom', site: 'AV package-Selected sites' },
            { saleshouse: 'Lapcom', site: 'CT package-Regional sites' },
            { saleshouse: 'Lapcom', site: 'CT package-Selected sites' },
            { saleshouse: 'Lapcom', site: 'Délmagyar' },
            { saleshouse: 'Lapcom', site: 'Használtautó' },
            { saleshouse: 'Lapcom', site: 'Kisalföld' },
            { saleshouse: 'LibriMédia', site: 'AV package-Selected sites' },
            { saleshouse: 'LibriMédia', site: 'Fidelio' },
            { saleshouse: 'LibriMédia', site: 'Port' },
            { saleshouse: 'LibriMédia', site: 'Színház' },
            { saleshouse: 'Lidl', site: 'Lidl' },
            { saleshouse: 'Lighthouse Media', site: 'MarkMyProfessor' },
            { saleshouse: 'Madhouse', site: 'AV package-Selected mobile sites' },
            { saleshouse: 'MadHouse', site: 'AV package-Selected tablet sites' },
            { saleshouse: 'Madhouse', site: 'm.MNO' },
            { saleshouse: 'Madhouse', site: 'm.Privátbankár' },
            { saleshouse: 'Madhouse', site: 'm.Világgazdaság' },
            { saleshouse: 'Magyar Narancs', site: 'Magyar Narancs' },
            { saleshouse: 'Magyarvadász', site: 'Magyarvadász' },
            { saleshouse: 'Marquard', site: 'Instyle' },
            { saleshouse: 'Marquard', site: 'Joy' },
            { saleshouse: 'Marquard', site: 'Playboy' },
            { saleshouse: 'Maxima', site: 'Maxima' },
            { saleshouse: 'Média Hatvan', site: 'Hatvan' },
            { saleshouse: 'Média Hatvan', site: 'Hatvanonline' },
            { saleshouse: 'Mediacity', site: 'Figyelő' },
            { saleshouse: 'Mediacity', site: 'm.Figyelő' },
            { saleshouse: 'MediaLife', site: 'Logisztikama' },
            { saleshouse: 'Meex', site: 'BCEHOK' },
            { saleshouse: 'Meex', site: 'Beachattack' },
            { saleshouse: 'Meex', site: 'Corvinusonline' },
            { saleshouse: 'Meex', site: 'Egyeteminapok' },
            { saleshouse: 'Meex', site: 'ELTE' },
            { saleshouse: 'Meex', site: 'GHK' },
            { saleshouse: 'Meex', site: 'Golya' },
            { saleshouse: 'Meex', site: 'GTKHK' },
            { saleshouse: 'Meex', site: 'Kolinet' },
            { saleshouse: 'Meex', site: 'Kozlekkar' },
            { saleshouse: 'Meex', site: 'Meex' },
            { saleshouse: 'Meex', site: 'Meexonthebeach' },
            { saleshouse: 'Meex', site: 'NYF' },
            { saleshouse: 'Meex', site: 'Partyponty' },
            { saleshouse: 'Meex', site: 'PSZFOnline' },
            { saleshouse: 'Meex', site: 'Senior KTK' },
            { saleshouse: 'Meex', site: 'Snowattack' },
            { saleshouse: 'Meex', site: 'Vegyeszhk' },
            { saleshouse: 'Metropol', site: 'Metropol' },
            { saleshouse: 'MMOnline', site: 'MMOnline' },
            { saleshouse: 'Net Média', site: 'AV package-Business' },
            { saleshouse: 'Net Média', site: 'm.Portfolio' },
            { saleshouse: 'Net Média', site: 'm.Portfolio app' },
            { saleshouse: 'Net Média', site: 'Pénzcentrum' },
            { saleshouse: 'Net Média', site: 'Portfolio' },
            { saleshouse: 'Net Média', site: 'Resource' },
            { saleshouse: 'Net Média', site: 'tablet.Portfolio' },
            { saleshouse: 'Netadclick', site: 'CT package-Selected sites' },
            { saleshouse: 'Nimród', site: 'Nimród' },
            { saleshouse: 'Nosalty', site: 'AV package-Selected sites' },
            { saleshouse: 'NoSalty', site: 'NoSalty' },
            { saleshouse: 'Open Click & Convert', site: 'CV Online' },
            { saleshouse: 'Open Click & Convert', site: 'Open Click & Convert' },
            { saleshouse: 'Open Click & Convert', site: 'Proaktív' },
            { saleshouse: 'Optimusz', site: 'Optimusz' },
            { saleshouse: 'Origo Network', site: 'AV package-Business' },
            { saleshouse: 'Origo Network', site: 'AV package-Kids' },
            { saleshouse: 'Origo Network', site: 'AV package-Lifestyle' },
            { saleshouse: 'Origo Network', site: 'AV package-Men' },
            { saleshouse: 'Origo Network', site: 'AV package-Selected blogs' },
            { saleshouse: 'Origo Network', site: 'AV package-Selected mobile apps' },
            { saleshouse: 'Origo Network', site: 'AV package-Selected mobile sites' },
            { saleshouse: 'Origo Network', site: 'AV package-Selected sites' },
            { saleshouse: 'Origo Network', site: 'AV package-Selected tablet sites' },
            { saleshouse: 'Origo Network', site: 'AV package-Youth sites' },
            { saleshouse: 'Origo Network', site: 'Bezzeganya.postr' },
            { saleshouse: 'Origo Network', site: 'CT package-Business' },
            { saleshouse: 'Origo Network', site: 'CT package-Entertainment' },
            { saleshouse: 'Origo Network', site: 'CT package-Lifestyle' },
            { saleshouse: 'Origo Network', site: 'CT package-News' },
            { saleshouse: 'Origo Network', site: 'CT package-Selected sites' },
            { saleshouse: 'Origo Network', site: 'CT package-Women' },
            { saleshouse: 'Origo Network', site: 'CT package-Youth' },
            { saleshouse: 'Origo Network', site: 'CT package-Youth Hostel' },
            { saleshouse: 'Origo Network', site: 'Ebgondolat.postr' },
            { saleshouse: 'Origo Network', site: 'Egyszervolt' },
            { saleshouse: 'Origo Network', site: 'Freemail' },
            { saleshouse: 'Origo Network', site: 'Gadgets.postr' },
            { saleshouse: 'Origo Network', site: 'Investor' },
            { saleshouse: 'Origo Network', site: 'Life' },
            { saleshouse: 'Origo Network', site: 'm.Origo' },
            { saleshouse: 'Origo Network', site: 'Mese' },
            { saleshouse: 'Origo Network', site: 'Nagyonallat.postr' },
            { saleshouse: 'Origo Network', site: 'Optimail' },
            { saleshouse: 'Origo Network', site: 'Optimusz' },
            { saleshouse: 'Origo Network', site: 'Origo' },
            { saleshouse: 'Origo Network', site: 'Postr' },
            { saleshouse: 'Origo Network', site: 'Quart' },
            { saleshouse: 'Origo Network', site: 'RCKO' },
            { saleshouse: 'Origo Network', site: 'Sorozatjunkie' },
            { saleshouse: 'Origo Network', site: 'Sztaki' },
            { saleshouse: 'Origo Network', site: 'tablet.Origo' },
            { saleshouse: 'Origo Network', site: 'Üzletrész' },
            { saleshouse: 'Origo Network', site: 'Videa' },
            { saleshouse: 'Origo Network', site: 'Videakid' },
            { saleshouse: 'Origo Network', site: 'Wangaru' },
            { saleshouse: 'Pécsi Médiaközpont', site: 'Pécsma' },
            { saleshouse: 'Pécsi Napilap', site: 'Pécsinapilap' },
            { saleshouse: 'PiacProfit', site: 'PiacProfit' },
            { saleshouse: 'PLT', site: 'AV package-Regional sites' },
            { saleshouse: 'PLT', site: 'CT package-Regional sites' },
            { saleshouse: 'PLT', site: 'Feol' },
            { saleshouse: 'PLT', site: 'Vaol' },
            { saleshouse: 'Pont24', site: 'CT package-Selected sites' },
            { saleshouse: 'Pont24', site: 'Pont24' },
            { saleshouse: 'Proaktív', site: 'Lead package-Selected sites' },
            { saleshouse: 'Proaktív', site: 'Proaktív' },
            { saleshouse: 'Professional Publishing', site: 'Élelmiszer' },
            { saleshouse: 'Professional Publishing', site: 'Gyártástrend' },
            { saleshouse: 'Professional Publishing', site: 'Kreatív' },
            { saleshouse: 'Professional Publishing', site: 'Medical' },
            { saleshouse: 'Professional Publishing', site: 'Turizmus' },
            { saleshouse: 'Prohardver', site: 'AV package-Selected sites' },
            { saleshouse: 'Prohardver', site: 'CT package-Selected sites' },
            { saleshouse: 'Prohardver', site: 'Gamepod' },
            { saleshouse: 'Prohardver', site: 'IT Cafe' },
            { saleshouse: 'Prohardver', site: 'Mobilaréna' },
            { saleshouse: 'Prohardver', site: 'Prohardver' },
            { saleshouse: 'Reach Media', site: 'Maxima' },
            { saleshouse: 'Ringier', site: 'Blikk' },
            { saleshouse: 'Ringier', site: 'CT package-Selected sites' },
            { saleshouse: 'Ringier', site: 'm.NOL' },
            { saleshouse: 'Ringier', site: 'm.NSO' },
            { saleshouse: 'Ringier', site: 'Neon' },
            { saleshouse: 'Ringier', site: 'NOL' },
            { saleshouse: 'Ringier', site: 'NSO' },
            { saleshouse: 'R-time', site: 'AV package-Selected sites' },
            { saleshouse: 'R-time', site: 'AV package-Selected streams' },
            { saleshouse: 'R-Time', site: 'RTLMost' },
            { saleshouse: 'Targetmax', site: 'Targetmax' },
            { saleshouse: 'Tarsago', site: 'Readers Digest' },
            { saleshouse: 'Thinkdigital', site: 'CT package-Selected mobile sites' },
            { saleshouse: 'Thinkdigital', site: 'CT package-Selected sites' },
            { saleshouse: 'Thinkdigital', site: 'Facebook' },
            { saleshouse: 'Thinkdigital', site: 'LinkedIn' },
            { saleshouse: 'Tradetracker', site: 'CT package-Selected sites' },
            { saleshouse: 'Tradetracker', site: 'Tradetracker' },
            { saleshouse: 'TVN', site: 'AV package-Selected sites' },
            { saleshouse: 'TVN', site: 'TVN' },
            { saleshouse: 'TVN', site: 'UV package-Selected sites' },
            { saleshouse: 'United publishers', site: 'Babanet' },
            { saleshouse: 'United Publishers', site: 'Kölöknet' },
            { saleshouse: 'Videohouse', site: 'AV package-Selected streams' },
            { saleshouse: 'Videohouse', site: 'Indavideo' },
            { saleshouse: 'Videohouse', site: 'TV2' },
            { saleshouse: 'Videohouse', site: 'Ustream' },
            { saleshouse: 'Wangaru', site: 'Wangaru' }
        ];
        this.filteredSites = [];
        /* TODO: Get additional site-placement pairs because customer didn't
          provide any
         */
        this.placements = [
            { site: 'BBJ', placement: 'ROM' },
            { site: 'TVN', placement: 'RON' }
        ];
        this.filteredPlacements = [];
        this.formats = [
            'Ablakos',
            'Android banner',
            'App Banner',
            'Banner',
            'Banner+',
            'Banner mix',
            'Billboard',
            'Bridge',
            'Brutus',
            'Cikk szponzoráció ',
            'Collapsing billboard',
            'Corner Peel',
            'Diagramba integrált logó',
            'Doboz átszínezése (szabályozásnak megfelelően)',
            'Double Banner',
            'Double Billboard',
            'Drapes',
            'Draw bridge',
            'Dupla billboard',
            'E-DM',
            'Expandable superbanner',
            'Extra Rectangle',
            'Extra tripla banner',
            'Felső banner billboarddal és layerrel',
            'Felső kinyíló',
            'Filmstrip',
            'Flip',
            'Flipside',
            'Floorad',
            'Footer',
            'Full Page Flex',
            'Full page layer',
            'Full screen',
            'Gate',
            'George',
            'Giga Layer',
            'Half Page',
            'Hírlevél',
            'Hírlevél banner',
            'Integrált banner',
            'Interstitial',
            'Interstitial ',
            'iPad alkalmazás',
            'iPad magazin banner',
            'iPad mini banner',
            'iPad teljes oldalas banner',
            'iPadre optimalizált banner',
            'iPhone banner',
            'Just-One',
            'Kapu',
            'Kategória* szponzoráció',
            'Képes boksz',
            'Képes linkes megjelenés',
            'Kiemelt doboz',
            'Kinyíló banner',
            'Kis Hasáb Boksz',
            'Kis színes ajánló',
            'Kis színes ajánló ',
            'Kreatív mix',
            'L forma megjelenés',
            'Layer',
            'Leaderboard',
            'Leporello',
            'Levélvégi hirdetés',
            'Link',
            'Logout Experience (LOX)',
            'Magic',
            'Magnet',
            'Medium Rectangle',
            'Middle Superbanner',
            'Mid-roll video',
            'Mini banner',
            'Nagy Hasáb Boksz',
            'Overlay',
            'Page Post Ad',
            'Peel Off',
            'Picture offer',
            'Postroll',
            'Preroll',
            'Pushdown',
            'Reach Block',
            'Rectangle',
            'Roadblock',
            'Roll band video',
            'Shaped pop up (layer)',
            'Sidekick',
            'Sidekick ',
            'Single Player',
            'Skyscraper',
            'Slider',
            'Startlap átszínezés (oldal átszínezés felső 980x100 és 300x250 px méretű bannerrel)',
            'Super leaderboard',
            'Szponzoráció',
            'Take over',
            'Tapéta',
            'Target Block',
            'Térkép szponzoráció',
            'Text link',
            'Triple Banner',
            'Twister',
            'Videó megjelenés',
            'Video Wallpaper',
            'Wall paper',
            'Wallpaper',
            'Wallpaper Maxi',
            'Wide Skyscraper',
            'Wideboard',
            'WideSky Large',
            'XL Layer'
        ];
        this.sizes = [
            { format: 'Ablakos', size: '480x240 + 480x654' },
            { format: 'Android banner', size: '300x75' },
            { format: 'Android banner', size: '468x120' },
            { format: 'Android banner', size: '480x70' },
            { format: 'Android banner', size: '640x480' },
            { format: 'Android banner', size: 'Kártya 239x307 és 300x75 (nézetfüggő)' },
            { format: 'App Banner', size: '600x100' },
            { format: 'Banner', size: '1024x170' },
            { format: 'Banner', size: '120x20' },
            { format: 'Banner', size: '168x28' },
            { format: 'Banner', size: '215x145' },
            { format: 'Banner', size: '216x36' },
            { format: 'Banner', size: '300x50' },
            { format: 'Banner', size: '320x210' },
            { format: 'Banner', size: '320x50' },
            { format: 'Banner', size: '468x60' },
            { format: 'Banner', size: '480x120' },
            { format: 'Banner', size: '480x240' },
            { format: 'Banner', size: '600x500' },
            { format: 'Banner mix', size: '160x600' },
            { format: 'Banner mix', size: '250x250' },
            { format: 'Banner mix', size: '300x250' },
            { format: 'Banner mix', size: '300x600' },
            { format: 'Banner mix', size: '728x90' },
            { format: 'Banner mix', size: '970x250' },
            { format: 'Banner mix', size: '970x90' },
            { format: 'Banner+', size: '' },
            { format: 'Billboard', size: '970x250' },
            { format: 'Bridge', size: 'Egyedi' },
            { format: 'Brutus', size: '1160x773 statikus kép' },
            { format: 'Cikk szponzoráció ', size: 'Kép + Szöveg (max. 2500 karakter)' },
            { format: 'Collapsing billboard', size: '970x250 → 970x31' },
            { format: 'Corner Peel', size: '180x180→500x500' },
            { format: 'Diagramba integrált logó', size: '38x38' },
            { format: 'Doboz átszínezése (szabályozásnak megfelelően)', size: 'Egyedi' },
            { format: 'Double Banner', size: '468x120' },
            { format: 'Double Billboard', size: '750x250' },
            { format: 'Drapes', size: '500x400' },
            { format: 'Draw bridge', size: '2 sky + layer' },
            { format: 'Dupla billboard', size: '640x360' },
            { format: 'E-DM', size: 'Html' },
            { format: 'Expandable superbanner', size: '728x90 → 728x200' },
            { format: 'Extra Rectangle', size: '500x200' },
            { format: 'Extra tripla banner', size: '610x180' },
            { format: 'Felső banner billboarddal és layerrel', size: '970x90+300x250+layer' },
            { format: 'Felső kinyíló', size: '970x90→970x250' },
            { format: 'Filmstrip', size: '300x600' },
            { format: 'Flip', size: '155x120' },
            { format: 'Flipside', size: '300x250/300x600 → 640 width' },
            { format: 'Flipside', size: '"970x90 → 1008/1140 width,  580/560 height"' },
            { format: 'Flipside', size: 'Egyedi' },
            { format: 'Floorad', size: '1024x300' },
            { format: 'Footer', size: '960x120' },
            { format: 'Footer', size: '980x120' },
            { format: 'Full Page Flex', size: '768x768' },
            { format: 'Full page layer', size: '800x600' },
            { format: 'Full page Layer', size: '990x600' },
            { format: 'Full screen', size: '480x654' },
            { format: 'Gate', size: '160x600+980x120/960x120+160x600' },
            { format: 'George', size: '748x560' },
            { format: 'Giga Layer', size: '800x600' },
            { format: 'Half Page', size: '300x600' },
            { format: 'Hírlevél', size: 'Szöveg (max 200 karakter) + kép (280x60 pixel méretű)' },
            { format: 'Hírlevél banner', size: '320x60' },
            { format: 'Integrált banner', size: '970x90/728x90' },
            { format: 'Interstitial', size: '480x654' },
            { format: 'Interstitial', size: '600x450' },
            { format: 'Interstitial', size: '970x550' },
            { format: 'Interstitial ', size: '600x500' },
            { format: 'iPad alkalmazás', size: '1024x66 ' },
            { format: 'iPad alkalmazás', size: '468x60 ' },
            { format: 'iPad magazin banner', size: '"Dinamikus 1/1 oldal (képgalériával, videóval)"' },
            { format: 'iPad magazin banner', size: '"Dinamikus 1/1 PR oldal (képgalériával, videóval)"' },
            { format: 'iPad magazin banner', size: 'Interaktív 1/1 oldal ' },
            { format: 'iPad magazin banner', size: 'Statikus 1/1 oldal' },
            { format: 'iPad magazin banner', size: 'Statikus 1/1 PR oldal' },
            { format: 'iPad mini banner', size: '216x36' },
            { format: 'iPad teljes oldalas banner', size: '768x896' },
            { format: 'iPadre optimalizált banner', size: '722x90 ' },
            { format: 'iPadre optimalizált banner', size: '770x90' },
            { format: 'iPhone banner', size: '320x47 ' },
            { format: 'iPhone banner', size: '580x440' },
            { format: 'iPhone banner', size: '640x100 ' },
            { format: 'iPhone banner', size: 'Kártya 239x307' },
            { format: 'iPhone banner', size: 'Kártya 239x307 és 640x100 (nézetfüggő)' },
            { format: 'Just-One', size: '1138x640' },
            { format: 'Kapu', size: '970x90 +2*100x600 ' },
            { format: 'Kapu', size: '980x100 px + 2x 120x600 px' },
            { format: 'Kategória* szponzoráció', size: '300x250 + háttér' },
            { format: 'Képes boksz', size: '130x130 kép+140 karakter szöveg' },
            { format: 'Képes linkes megjelenés', size: '70x70 + max. 75 karakter szöveg' },
            { format: 'Kiemelt doboz', size: '320x250' },
            { format: 'Kinyíló banner', size: '300x250 → 700x410' },
            { format: 'Kinyíló banner', size: '728x90 → 728x300' },
            { format: 'Kis Hasáb Boksz', size: '245x100' },
            { format: 'Kis színes ajánló', size: '320x145px kép + 90 karakter szöveg' },
            { format: 'Kis színes ajánló', size: '76x50 kép +100karakter szöveg' },
            { format: 'Kis színes ajánló ', size: 'Kép + Szöveg (max. 120 karakter)' },
            { format: 'Kreatív mix', size: '160x600' },
            { format: 'Kreatív mix', size: '250x250' },
            { format: 'Kreatív mix', size: '300x250' },
            { format: 'Kreatív mix', size: '300x600' },
            { format: 'Kreatív mix', size: '728x90' },
            { format: 'Kreatív mix', size: '970x250' },
            { format: 'Kreatív mix', size: '970x90' },
            { format: 'Kreatív mix', size: 'Text link' },
            { format: 'L forma megjelenés', size: '970x90 + 100×600 ' },
            { format: 'Layer', size: '300x300' },
            { format: 'Layer', size: '400x400' },
            { format: 'Leaderboard', size: '728x90' },
            { format: 'Leaderboard', size: '970x90' },
            { format: 'Leporello', size: '970x250→750' },
            { format: 'Levélvégi hirdetés', size: '200 karakter ' },
            { format: 'Link', size: '40 karakter szöveg' },
            { format: 'Link', size: 'max. 33 karakter' },
            { format: 'Logout Experience (LOX)', size: '' },
            { format: 'Magic', size: '480x480' },
            { format: 'Magnet', size: '480x480' },
            { format: 'Medium Rectangle', size: '300x250' },
            { format: 'Middle Superbanner', size: '960x120' },
            { format: 'Middle Superbanner', size: '980x120' },
            { format: 'Mid-roll video', size: 'max 30 sec' },
            { format: 'Mini banner', size: '210x83' },
            { format: 'Nagy Hasáb Boksz', size: '390x100' },
            { format: 'Overlay', size: '400x60' },
            { format: 'Page Post Ad', size: '' },
            { format: 'Peel Off', size: '90x90 → 515x515' },
            { format: 'Peel off', size: 'Egyedi + 300x250 banner + aktuális link' },
            { format: 'Picture offer', size: '250x140' },
            { format: 'Postroll', size: 'max 10 sec' },
            { format: 'Postroll', size: 'max 30 sec' },
            { format: 'Preroll', size: 'max 10 sec' },
            { format: 'Preroll', size: 'max 30 sec' },
            { format: 'Pushdown', size: '970x90 →970x415' },
            { format: 'Pushdown', size: '970x90→970x415' },
            { format: 'Reach Block', size: '' },
            { format: 'Rectangle', size: '250x250' },
            { format: 'Roadblock', size: '600x360' },
            { format: 'Roadblock', size: '640x360' },
            { format: 'Roll band video', size: 'Egyedi' },
            { format: 'Shaped pop up (layer)', size: '216x380' },
            { format: 'Shaped pop up (layer)', size: '300x300' },
            { format: 'Shaped pop up (layer)', size: '450x250' },
            { format: 'Sidekick', size: '300x250 → 850x700' },
            { format: 'Sidekick', size: '300x250/300x600 → 970x600' },
            { format: 'Sidekick ', size: '300x600→970x550' },
            { format: 'Single Player', size: '' },
            { format: 'Skyscraper', size: '120x240' },
            { format: 'Skyscraper', size: '120x400' },
            { format: 'Skyscraper', size: '120x600' },
            { format: 'Slider', size: '970x90 → 990x600' },
            { format: 'Slider', size: 'Egyedi' },
            { format: 'Startlap átszínezés (oldal átszínezés felső 980x100 és 300x250 px méretű bannerrel)', size: 'Egyedi' },
            { format: 'Super leaderboard', size: '970x90' },
            { format: 'Szponzoráció', size: '970*100 + 2x100*600 + háttér' },
            { format: 'Take over', size: '500x500' },
            { format: 'Take over', size: '970x250' },
            { format: 'Take over', size: '97x90 → 970x180' },
            { format: 'Tapéta', size: '970x90+2x100x600' },
            { format: 'Target Block', size: '' },
            { format: 'Térkép szponzoráció', size: 'színkód+300x300' },
            { format: 'Text link', size: 'Text link' },
            { format: 'Triple Banner', size: '468x180' },
            { format: 'Twister', size: '970x600' },
            { format: 'Twister', size: 'Egyedi' },
            { format: 'Videó megjelenés', size: '320x150' },
            { format: 'Video Wallpaper', size: '970x600' },
            { format: 'Wall paper', size: '1920x1200' },
            { format: 'Wallpaper', size: '140x600' },
            { format: 'Wallpaper', size: '728x90+160x600' },
            { format: 'Wallpaper Maxi', size: '1193x90+200x600' },
            { format: 'Wide Skyscraper', size: '160x600' },
            { format: 'Wideboard', size: '850x700' },
            { format: 'WideSky Large', size: '200x600' },
            { format: 'XL Layer', size: '970x550' }
        ];
        this.filteredSizes = [];
        this.salesHouseChange(this.salesHouses[0]);
        this.formatChange(this.formats[0]);
    }
    AdRunsComponent.prototype.ngOnInit = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_10_moment__["locale"]('hu');
        this.route.paramMap
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_8_rxjs_operators__["j" /* takeUntil */])(this.unsubscribe))
            .subscribe(function (params) {
            _this.isEditingMode = !!params.get('isEditingMode');
        });
        this.weeks = this.helperService.calculateWeeksForHeader(this.campaign);
        this.dateOfDays = this.helperService.calculateDatesForHeader(this.campaign);
        this.monthSpans = this.helperService.calculateMonthsForHeader(this.campaign);
        this.dragulaService.setOptions(this.AD_RUN_BAG, {
            mirrorContainer: this.mirrorContainer.nativeElement
        });
        this.selectedSizes = [];
        window.scrollTo(0, 0);
    };
    AdRunsComponent.prototype.ngOnChanges = function (changes) {
        this.copyEntriesForDragula(changes);
        this.calculateFields();
    };
    AdRunsComponent.prototype.ngOnDestroy = function () {
        if (this.dragulaService.find(this.AD_RUN_BAG)) {
            this.dragulaService.destroy(this.AD_RUN_BAG);
        }
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    AdRunsComponent.prototype.copyEntriesForDragula = function (changes) {
        var entries = changes.entries;
        var isEntriesChanged = entries && !(entries.previousValue === entries.currentValue);
        if (entries && (entries.firstChange || isEntriesChanged)) {
            this.entriesForDragula = this.entries.slice();
        }
    };
    AdRunsComponent.prototype.calculateFields = function () {
        this.calculatedValuesPerAdRuns = __WEBPACK_IMPORTED_MODULE_13_lodash__["chain"](this.entriesPlusForm)
            .keyBy('id')
            .mapValues(this.createCalculatedFieldsObject.bind(this))
            .value();
    };
    AdRunsComponent.prototype.createCalculatedFieldsObject = function (adrun) {
        return {
            sumRatecard: Object(__WEBPACK_IMPORTED_MODULE_4__models_adrun__["m" /* calculateSumRatecard */])(adrun),
            net: Object(__WEBPACK_IMPORTED_MODULE_4__models_adrun__["j" /* calculateNet */])(adrun),
            netNet: Object(__WEBPACK_IMPORTED_MODULE_4__models_adrun__["k" /* calculateNetNet */])(adrun),
            clientNet: Object(__WEBPACK_IMPORTED_MODULE_4__models_adrun__["f" /* calculateClientNet */])(adrun, this.campaign),
            cpm: Object(__WEBPACK_IMPORTED_MODULE_4__models_adrun__["d" /* calculateCPM */])(adrun),
            cpc: Object(__WEBPACK_IMPORTED_MODULE_4__models_adrun__["b" /* calculateCPC */])(adrun),
            cpt: Object(__WEBPACK_IMPORTED_MODULE_4__models_adrun__["e" /* calculateCPT */])(adrun),
            cpl: Object(__WEBPACK_IMPORTED_MODULE_4__models_adrun__["c" /* calculateCPL */])(adrun),
            cpa: Object(__WEBPACK_IMPORTED_MODULE_4__models_adrun__["a" /* calculateCPA */])(adrun),
            remainingUnits: Object(__WEBPACK_IMPORTED_MODULE_4__models_adrun__["l" /* calculateRemainingUnits */])(adrun)
        };
    };
    AdRunsComponent.prototype.updateEntriesOnDrop = function () {
        var _this = this;
        this.dragulaService.dropModel.subscribe(function (dropArguments) {
            if (_this.entries.length === _this.entriesForDragula.length) {
                _this.orderChanged.emit(_this.entriesForDragula);
            }
        });
    };
    AdRunsComponent.prototype.salesHouseChange = function (salesHouse) {
        this.filteredSites = this.sites.filter(function (site) { return site.saleshouse === salesHouse; });
    };
    AdRunsComponent.prototype.formatChange = function (format) {
        this.filteredSizes = this.sizes
            .filter(function (size) { return size.format === format; })
            .map(function (size) {
            return { id: size.size, name: size.size };
        });
        this.selectedSizes = [];
    };
    AdRunsComponent.prototype.siteChange = function (site) {
        this.filteredPlacements = this.placements
            .filter(function (placement) { return placement.site === site; })
            .map(function (placement) {
            return placement.placement;
        });
    };
    AdRunsComponent.prototype.distributeUnitsEvenly = function () {
        this.formData.weeklyBreakdown = Object(__WEBPACK_IMPORTED_MODULE_4__models_adrun__["n" /* distributeUnitsEvenly */])(this.formData);
        this.emitAdRunsChangedState();
    };
    AdRunsComponent.prototype.weekObjectsForFormData = function (weeklyBreakdown) {
        var zeroedWeeks = this.weeks.map(function (week) {
            var weekBreakdown = weeklyBreakdown.find(function (item) { return item.week === week; });
            return { week: week, units: (weekBreakdown ? weekBreakdown.units : 0) };
        });
        return zeroedWeeks;
    };
    AdRunsComponent.prototype.initializeFormData = function () {
        return {
            id: -1,
            salesHouse: '',
            site: '',
            placement: '',
            format: '',
            size: [],
            duration: '',
            date: '',
            weeklyBreakdown: this.weeks.map(function (week) {
                return { week: week, units: 0 };
            }),
            pricingType: null,
            units: 0,
            baseOfAdServing: null,
            ratecard: 0,
            volumeDiscount: 0,
            otherDiscount: 0,
            agencyDiscount: 0,
            estimatedAV: 0,
            estimatedCT: 0,
            estimatedReachUU: 0,
            estimatedCTR: 0,
            estimatedLead: 0,
            estimatedAcquisition: 0
        };
    };
    AdRunsComponent.prototype.extendCalculatedValues = function () {
        this.calculatedValuesPerAdRuns[this.formData.id] = this.createCalculatedFieldsObject(this.formData);
    };
    AdRunsComponent.prototype.addAdRun = function () {
        this.formState = this.ADD;
        this.formData = this.initializeFormData();
        this.extendCalculatedValues();
        this.filteredSizes = [];
        this.filteredSites = [];
        this.selectedSizes = [];
        this.customSizes = '';
    };
    AdRunsComponent.prototype.editAdRun = function (adRun) {
        var _this = this;
        this.formState = this.EDIT;
        this.salesHouseChange(adRun.salesHouse);
        this.formatChange(adRun.format);
        // FIXME: horrible solution
        var adRunCopy = {
            id: adRun.id,
            salesHouse: adRun.salesHouse,
            site: adRun.site,
            placement: adRun.placement,
            format: adRun.format,
            size: adRun.size.slice(),
            duration: adRun.duration,
            date: adRun.date,
            weeklyBreakdown: this.weekObjectsForFormData(adRun.weeklyBreakdown),
            pricingType: adRun.pricingType,
            units: adRun.units,
            baseOfAdServing: adRun.baseOfAdServing,
            ratecard: adRun.ratecard,
            volumeDiscount: adRun.volumeDiscount,
            otherDiscount: adRun.otherDiscount,
            agencyDiscount: adRun.agencyDiscount,
            estimatedAV: adRun.estimatedAV,
            estimatedCT: adRun.estimatedCT,
            estimatedReachUU: adRun.estimatedReachUU,
            estimatedCTR: adRun.estimatedCTR,
            estimatedLead: adRun.estimatedLead,
            estimatedAcquisition: adRun.estimatedAcquisition
        };
        this.formData = adRunCopy;
        // FIXME: should be done differently
        this.selectedSizes = adRun.size.slice();
        this.customSizes = adRun.size
            .filter(function (size) {
            return !_this.filteredSizes.map(function (sizeObject) { return sizeObject.name; }).includes(size);
        })
            .join(';');
    };
    AdRunsComponent.prototype.cancelEdit = function () {
        this.formData = this.initializeFormData();
        this.formState = this.NORMAL;
        this.customSizes = '';
    };
    AdRunsComponent.prototype.onUnitsModification = function () {
        this.copyUnitsToEstimate();
        this.emitAdRunsChangedState();
    };
    // FIXME: refactor hardcoded pricing type
    AdRunsComponent.prototype.copyUnitsToEstimate = function () {
        if (this.formData.pricingType === __WEBPACK_IMPORTED_MODULE_14__models_pricing_type__["a" /* PricingType */].ByCT) {
            this.formData.estimatedCT = this.formData.units;
            this.estimatedCTChanged();
        }
        else if (this.formData.pricingType === __WEBPACK_IMPORTED_MODULE_14__models_pricing_type__["a" /* PricingType */].ByAV) {
            this.formData.estimatedAV = this.formData.units;
            this.estimatedAVChanged();
        }
    };
    AdRunsComponent.prototype.emitAdRunsChangedState = function () {
        var modifiedAdRun = this.parseFormToAdRun();
        var index = this.entries.findIndex(function (adRun) { return adRun.id === modifiedAdRun.id; });
        var isNewAdRun = index === -1; // we are in the process of adding a new AdRun, hence the missing id
        if (isNewAdRun) {
            this.adRunsChange.next(this.entries.concat([modifiedAdRun]));
        }
        else {
            this.adRunsChange.next(this.entries.slice(0, index).concat([modifiedAdRun], this.entries.slice(index + 1)));
        }
    };
    AdRunsComponent.prototype.submitEdit = function () {
        var adRun = this.parseFormToAdRun();
        switch (this.formState) {
            case this.ADD:
                this.add.emit(adRun);
                break;
            case this.EDIT:
                this.edit.emit(adRun);
                break;
        }
        this.formState = this.NORMAL;
    };
    AdRunsComponent.prototype.editCampaign = function () {
        this.isEditingMode = true;
    };
    AdRunsComponent.prototype.export = function () {
        if (!this.entries.length) {
            alert('There are no Ad runs in this campaign!');
            return;
        }
        var fileName = this.campaign.client + "_" + this.campaign.campaign;
        var adRuns = this.helperService.formatAdRunsForExport(this.entries);
        var worksheet = __WEBPACK_IMPORTED_MODULE_12_xlsx__["utils"].json_to_sheet(adRuns);
        var workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        var excelBuffer = __WEBPACK_IMPORTED_MODULE_12_xlsx__["write"](workbook, { bookType: 'xlsx', type: 'buffer' });
        var data = new Blob([excelBuffer], {
            type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'
        });
        __WEBPACK_IMPORTED_MODULE_11_file_saver__["saveAs"](data, fileName + '_' + __WEBPACK_IMPORTED_MODULE_10_moment__().format('YYYY-MM-DD_hh-mm-ss') + '.xlsx');
    };
    AdRunsComponent.prototype.saveCampaign = function () {
        this.isEditingMode = false;
    };
    AdRunsComponent.prototype.parseFormToAdRun = function () {
        var _this = this;
        var adRun = this.formData;
        this.MASKED_FIELDS.thousandsDelimited.forEach(function (field) {
            adRun[field] = _this.unmaskingService.unmask(adRun[field]);
        });
        var customSizes = this.customSizes.split(/[;,]/);
        adRun.size = __WEBPACK_IMPORTED_MODULE_13_lodash__["union"](adRun.size, customSizes)
            .filter(function (size) { return size !== ''; });
        return adRun;
    };
    AdRunsComponent.prototype.updateSelectedSizes = function (selected) {
        this.formData.size = selected;
        this.selectedSizes = selected;
    };
    AdRunsComponent.prototype.pricingTypeChange = function () {
        switch (this.formData.pricingType) {
            case __WEBPACK_IMPORTED_MODULE_14__models_pricing_type__["a" /* PricingType */].ByCT:
                this.formData.baseOfAdServing = __WEBPACK_IMPORTED_MODULE_15__models_ad_serving_type__["a" /* AdServingType */].CT;
                break;
            case __WEBPACK_IMPORTED_MODULE_14__models_pricing_type__["a" /* PricingType */].ByAV:
                this.formData.baseOfAdServing = __WEBPACK_IMPORTED_MODULE_15__models_ad_serving_type__["a" /* AdServingType */].AV;
                break;
            default:
                break;
        }
    };
    AdRunsComponent.prototype.getPricingTypes = function () {
        return Object.keys(__WEBPACK_IMPORTED_MODULE_14__models_pricing_type__["a" /* PricingType */]).map(function (pricingType) { return __WEBPACK_IMPORTED_MODULE_14__models_pricing_type__["a" /* PricingType */][pricingType]; });
    };
    AdRunsComponent.prototype.getAdServingTypes = function () {
        return Object.keys(__WEBPACK_IMPORTED_MODULE_15__models_ad_serving_type__["a" /* AdServingType */]).map(function (adServingType) { return __WEBPACK_IMPORTED_MODULE_15__models_ad_serving_type__["a" /* AdServingType */][adServingType]; });
    };
    // FIXME: refactor hardcoded pricing types
    AdRunsComponent.prototype.estimatedAVChanged = function () {
        var estimatedAV = this.formData.estimatedAV && this.unmaskingService.unmask(this.formData.estimatedAV);
        var estimatedCT = this.formData.estimatedCT && this.unmaskingService.unmask(this.formData.estimatedCT);
        var estimatedCTR = this.formData.estimatedCTR && this.unmaskingService.unmask(this.formData.estimatedCTR);
        if (this.formData.pricingType === __WEBPACK_IMPORTED_MODULE_14__models_pricing_type__["a" /* PricingType */].ByCT) {
            this.formData.estimatedCTR = Object(__WEBPACK_IMPORTED_MODULE_4__models_adrun__["i" /* calculateEstimatedCTR */])(estimatedCT, estimatedAV);
        }
        else if (estimatedAV && estimatedCT && estimatedCTR) {
            this.formData.estimatedCT = null;
            this.formData.estimatedCTR = null;
        }
    };
    // FIXME: refactor hardcoded pricing types
    AdRunsComponent.prototype.estimatedCTChanged = function () {
        var estimatedAV = this.formData.estimatedAV && this.unmaskingService.unmask(this.formData.estimatedAV);
        var estimatedCT = this.formData.estimatedCT && this.unmaskingService.unmask(this.formData.estimatedCT);
        var estimatedCTR = this.formData.estimatedCTR && this.unmaskingService.unmask(this.formData.estimatedCTR);
        if (this.formData.pricingType === __WEBPACK_IMPORTED_MODULE_14__models_pricing_type__["a" /* PricingType */].ByAV) {
            this.formData.estimatedCTR = Object(__WEBPACK_IMPORTED_MODULE_4__models_adrun__["i" /* calculateEstimatedCTR */])(estimatedCT, estimatedAV);
        }
        else if (estimatedAV && estimatedCT && estimatedCTR) {
            this.formData.estimatedAV = null;
            this.formData.estimatedCTR = null;
        }
    };
    // FIXME: refactor hardcoded pricing types
    AdRunsComponent.prototype.estimatedCTRChanged = function () {
        var estimatedAV = this.formData.estimatedAV && this.unmaskingService.unmask(this.formData.estimatedAV);
        var estimatedCT = this.formData.estimatedCT && this.unmaskingService.unmask(this.formData.estimatedCT);
        var estimatedCTR = this.formData.estimatedCTR && this.unmaskingService.unmask(this.formData.estimatedCTR);
        if (this.formData.pricingType === __WEBPACK_IMPORTED_MODULE_14__models_pricing_type__["a" /* PricingType */].ByCT) {
            this.formData.estimatedAV = Object(__WEBPACK_IMPORTED_MODULE_4__models_adrun__["g" /* calculateEstimatedAV */])(estimatedCT, estimatedCTR);
        }
        else if (this.formData.pricingType === __WEBPACK_IMPORTED_MODULE_14__models_pricing_type__["a" /* PricingType */].ByAV) {
            this.formData.estimatedCT = Object(__WEBPACK_IMPORTED_MODULE_4__models_adrun__["h" /* calculateEstimatedCT */])(estimatedCTR, estimatedAV);
        }
        else if (estimatedAV && estimatedCT && estimatedCTR) {
            this.formData.estimatedAV = null;
            this.formData.estimatedCT = null;
        }
    };
    AdRunsComponent.prototype.calculateThirdEstimatedFieldFromAV = function () {
        var estimatedAV = this.formData.estimatedAV && this.unmaskingService.unmask(this.formData.estimatedAV);
        var estimatedCT = this.formData.estimatedCT && this.unmaskingService.unmask(this.formData.estimatedCT);
        var estimatedCTR = this.formData.estimatedCTR && this.unmaskingService.unmask(this.formData.estimatedCTR);
        if (estimatedCT && estimatedAV) {
            this.formData.estimatedCTR = Object(__WEBPACK_IMPORTED_MODULE_4__models_adrun__["i" /* calculateEstimatedCTR */])(estimatedCT, estimatedAV);
        }
        else if (estimatedCTR && estimatedAV) {
            this.formData.estimatedCT = Object(__WEBPACK_IMPORTED_MODULE_4__models_adrun__["h" /* calculateEstimatedCT */])(estimatedCTR, estimatedAV);
        }
    };
    AdRunsComponent.prototype.calculateThirdEstimatedFieldFromCT = function () {
        var estimatedAV = this.formData.estimatedAV && this.unmaskingService.unmask(this.formData.estimatedAV);
        var estimatedCT = this.formData.estimatedCT && this.unmaskingService.unmask(this.formData.estimatedCT);
        var estimatedCTR = this.formData.estimatedCTR && this.unmaskingService.unmask(this.formData.estimatedCTR);
        if (estimatedCTR && estimatedCT) {
            this.formData.estimatedAV = Object(__WEBPACK_IMPORTED_MODULE_4__models_adrun__["g" /* calculateEstimatedAV */])(estimatedCT, estimatedCTR);
        }
        else if (estimatedAV && estimatedCT) {
            this.formData.estimatedCTR = Object(__WEBPACK_IMPORTED_MODULE_4__models_adrun__["i" /* calculateEstimatedCTR */])(estimatedCT, estimatedAV);
        }
    };
    AdRunsComponent.prototype.calculateThirdEstimatedFieldFromCTR = function () {
        var estimatedAV = this.formData.estimatedAV && this.unmaskingService.unmask(this.formData.estimatedAV);
        var estimatedCT = this.formData.estimatedCT && this.unmaskingService.unmask(this.formData.estimatedCT);
        var estimatedCTR = this.formData.estimatedCTR && this.unmaskingService.unmask(this.formData.estimatedCTR);
        if (estimatedAV && estimatedCTR) {
            this.formData.estimatedCT = Object(__WEBPACK_IMPORTED_MODULE_4__models_adrun__["h" /* calculateEstimatedCT */])(estimatedCTR, estimatedAV);
        }
        else if (estimatedCT && estimatedCTR) {
            this.formData.estimatedAV = Object(__WEBPACK_IMPORTED_MODULE_4__models_adrun__["g" /* calculateEstimatedAV */])(estimatedCT, estimatedCTR);
        }
    };
    AdRunsComponent.prototype.isEstimatedAVDisabled = function () {
        return this.formData.pricingType === __WEBPACK_IMPORTED_MODULE_14__models_pricing_type__["a" /* PricingType */].ByAV;
    };
    AdRunsComponent.prototype.isEstimatedCTDisabled = function () {
        return this.formData.pricingType === __WEBPACK_IMPORTED_MODULE_14__models_pricing_type__["a" /* PricingType */].ByCT;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], AdRunsComponent.prototype, "entries", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], AdRunsComponent.prototype, "entriesPlusForm", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], AdRunsComponent.prototype, "campaign", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"])
    ], AdRunsComponent.prototype, "add", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"])
    ], AdRunsComponent.prototype, "edit", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"])
    ], AdRunsComponent.prototype, "deleteAdRun", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"])
    ], AdRunsComponent.prototype, "adRunsChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"])
    ], AdRunsComponent.prototype, "orderChanged", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])('dragulaMirrorContainer'),
        __metadata("design:type", Object)
    ], AdRunsComponent.prototype, "mirrorContainer", void 0);
    AdRunsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'md-ad-runs',
            template: __webpack_require__("../../../../../src/app/campaigns/components/ad-runs.html"),
            styles: [__webpack_require__("../../../../../src/app/campaigns/components/ad-runs.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ng2_dragula__["DragulaService"],
            __WEBPACK_IMPORTED_MODULE_6__services_unmasking__["a" /* UnmaskingService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_0__services_ad_runs_helper__["a" /* AdRunsHelperService */]])
    ], AdRunsComponent);
    return AdRunsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/campaigns/components/campaigns-search.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".md-search button.fa-search {\n\t/* class `.fa` inherits its size and for some reason it became 0 */\n\tfont-size: 24px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/campaigns/components/campaigns-search.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CampaignsSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CampaignsSearchComponent = (function () {
    function CampaignsSearchComponent() {
        var _this = this;
        this.DEBOUNCE_TIME = 300;
        this.keyUp$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.search = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.subscription = this.keyUp$.pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["f" /* map */])(function (event) { return event.target.value; }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* debounceTime */])(this.DEBOUNCE_TIME), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["c" /* distinctUntilChanged */])(), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["e" /* flatMap */])(function (search) { return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(search).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["b" /* delay */])(_this.DEBOUNCE_TIME)); })).subscribe(function (item) {
            _this.search.emit(item);
        });
    }
    CampaignsSearchComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], CampaignsSearchComponent.prototype, "search", void 0);
    CampaignsSearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'md-campaigns-search',
            template: "\n    <div class=\"input-group md-search\">\n\t\t\t\t\t\t\t<span class=\"input-group-btn\">\n\t\t\t\t\t\t\t\t<button class=\"fa fa-search md-main-color\" type=\"button\"></button>\n\t\t\t\t\t\t\t</span>\n      <input type=\"text\" class=\"form-control\"\n             placeholder=\"Type a campaign name to search for...\"\n             aria-label=\"Search for...\"\n             autofocus\n             (keyup)=\"keyUp$.next($event)\"\n      >\n    </div>\n  ",
            styles: [__webpack_require__("../../../../../src/app/campaigns/components/campaigns-search.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CampaignsSearchComponent);
    return CampaignsSearchComponent;
}());



/***/ }),

/***/ "../../../../../src/app/campaigns/components/campaigns.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "main {\n  min-height: 700px;\n}\n.md-main-color {\n  color: #e1005d;\n}\n\n.md-recent-campaigns {\n  border: 2px solid;\n  border-radius: 5px;\n  box-shadow: 5px 5px 5px black;\n  width: 100%;\n}\n\n.md-recent-campaigns tr {\n  border-bottom: solid;\n}\n\n.md-recent-campaigns tbody tr {\n  cursor: pointer;\n}\n\n.md-recent-campaigns td {\n  color: #e1005d;\n  vertical-align: middle;\n  text-align: left;\n  /*width: 1%;*/\n  /*white-space: nowrap;*/\n}\n\n.md-recent-campaigns tr > td:last-of-type {\n  text-align: right;\n}\n\n.md-recent-campaigns span {\n  font-size: 1.5rem;\n  font-weight: bold;\n}\n\n.md-recent-campaign {\n  font-size: 2.5rem;\n  font-family: 'Bree Serif', serif;\n}\n\n.table-hover tbody tr:hover td, .table-hover tbody tr:hover th {\n  background-color: #e1005d;\n  color: white;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/campaigns/components/campaigns.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CampaignsComponent; });
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

var CampaignsComponent = (function () {
    function CampaignsComponent() {
        this.selected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.search = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], CampaignsComponent.prototype, "campaigns", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], CampaignsComponent.prototype, "selected", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], CampaignsComponent.prototype, "search", void 0);
    CampaignsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'md-campaigns',
            template: "\n    <div class=\"row justify-content-center p-2\">\n      <h1>\n        Campaigns\n      </h1>\n    </div>\n\n    <div class=\"row justify-content-center p-2\">\n      <table class=\"table table-hover md-recent-campaigns \">\n        <thead class=\"thead-light\">\n        <tr>\n          <th colspan=\"3\">\n            <md-campaigns-search (search)=\"search.emit($event)\"></md-campaigns-search>\n          </th>\n        </tr>\n        </thead>\n        <tbody>\n\n          <tr *ngFor=\"let campaign of campaigns\" (click)=\"selected.emit(campaign)\">\n            <td class=\"text-uppercase\">\n              {{campaign.client}} - {{campaign.campaign}}\n            </td>\n            <td>\n              {{campaign.identifier}}\n            </td>\n            <td>\n              {{campaign.startDate}} - {{campaign.endDate}}\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <a>\n      <div class=\"row justify-content-center p-1\">\n        <button type=\"button\" class=\"btn btn-primary btn-lg btn-block md-recent-campaign\"\n\t\t\t[routerLink]=\"['new-campaign/']\">\n          New Campaign\n        </button>\n      </div>\n    </a>\n  ",
            styles: [__webpack_require__("../../../../../src/app/campaigns/components/campaigns.css")]
        })
    ], CampaignsComponent);
    return CampaignsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/campaigns/components/clients.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return clients; });
// FIXME: get the list of clients (for typeahead) from a proper source
var clients = [
    'Sony',
    'Lexus',
    'Bayer',
    'Libri',
    'MOL'
];


/***/ }),

/***/ "../../../../../src/app/campaigns/components/new-campaign-form.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"text-center p-3\">{{headerText}}</h1>\n\n<form [formGroup]=\"newCampaignForm\" (ngSubmit)=\"validateAndSubmitForm()\">\n  <div class=\"card col p-2 m-2\">\n    <div class=\"card-block p-2\">\n      <div class=\"form-group row\">\n        <label for=\"client\" class=\"col-sm-3 col-form-label\">Client:</label>\n        <div class=\"col\">\n          <!-- We need to set the initial value even though we have ngModel set,\n          because the ng2-completer input is initialized after ngOnInit is ran -->\n          <ng2-completer [(ngModel)]=\"client\" [datasource]=\"clients\" [inputClass]=\"clientInputClass\"\n              inputId=\"client\" formControlName=\"client\" selectOnClick=\"true\" selectOnFocus=\"true\"\n              [minSearchLength]=\"0\" (blur)=\"validateClient()\" [initialValue]=\"newCampaignForm.controls.client.value\">\n          </ng2-completer>\n          <div class=\"text-danger\"\n              *ngIf=\"newCampaignForm.controls.client.errors && newCampaignForm.controls.client.errors.required &&\n                newCampaignForm.controls.client.touched\">\n            This field is required.\n          </div>\n          <div class=\"text-warning\"\n              *ngIf=\"hasUnknownClient && newCampaignForm.controls.client.dirty\">\n            Do you really want to enter an unknown client?\n          </div>\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label for=\"brand\" class=\"col-sm-3 col-form-label\">Brand:</label>\n        <div class=\"col\">\n          <input class=\"form-control\" id=\"brand\" formControlName=\"brand\"\n              [ngClass]=\"{ 'is-invalid': !newCampaignForm.controls.brand.valid &&\n                newCampaignForm.controls.brand.touched}\">\n          <div class=\"text-danger\"\n              *ngIf=\"newCampaignForm.controls.brand.errors && newCampaignForm.controls.brand.errors.required &&\n                newCampaignForm.controls.brand.touched\">\n            This field is required.\n          </div>\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label for=\"campaign\" class=\"col-sm-3 col-form-label\">Campaign:</label>\n        <div class=\"col\">\n          <input class=\"form-control\" id=\"campaign\" formControlName=\"campaign\"\n              [ngClass]=\"{ 'is-invalid': !newCampaignForm.controls.campaign.valid &&\n                newCampaignForm.controls.campaign.touched}\">\n          <div class=\"text-danger\"\n              *ngIf=\"newCampaignForm.controls.campaign.errors && newCampaignForm.controls.campaign.errors.required &&\n                newCampaignForm.controls.campaign.touched\">\n            This field is required.\n          </div>\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label for=\"start-date\" class=\"col-sm-3 col-form-label\">Start date:</label>\n        <div class=\"col-sm-3\">\n          <div class=\"input-group\">\n            <input class=\"form-control\" id=\"start-date\" formControlName=\"startDate\" placeholder=\"yyyy-mm-dd\"\n                ngbDatepicker #startDatePicker=\"ngbDatepicker\" (ngModelChange)=\"validateStartDate($event)\"\n                [ngClass]=\"{\n                  'is-invalid': !newCampaignForm.controls.startDate.valid &&\n                    newCampaignForm.controls.startDate.touched,\n                  'border-warning': hasOldStartDate && newCampaignForm.controls.startDate.dirty\n                }\"\n                (click)=\"startDatePicker.toggle()\">\n            <button class=\"input-group-addon\" (click)=\"startDatePicker.toggle()\" type=\"button\" role=\"button\">\n              <i class=\"fa fa-calendar\"></i>\n            </button>\n          </div>\n          <div class=\"text-danger\"\n              *ngIf=\"newCampaignForm.controls.startDate.errors && newCampaignForm.controls.startDate.errors.required &&\n                newCampaignForm.controls.startDate.touched\">\n            This field is required.\n          </div>\n          <div class=\"text-warning\"\n              *ngIf=\"hasOldStartDate && newCampaignForm.controls.startDate.dirty\">\n            The campaign's start date precedes the current date.\n          </div>\n        </div>\n        <label for=\"end-date\" class=\"col-sm-3 col-form-label text-right\">End date:</label>\n        <div class=\"col-sm-3\">\n          <div class=\"input-group\">\n            <input class=\"form-control\" id=\"end-date\" formControlName=\"endDate\" placeholder=\"yyyy-mm-dd\"\n                   ngbDatepicker #endDatePicker=\"ngbDatepicker\"\n                   [ngClass]=\"{ 'is-invalid': (!newCampaignForm.controls.endDate.valid ||\n                  newCampaignForm.errors && newCampaignForm.errors.dates) &&\n                  newCampaignForm.controls.endDate.touched}\" (click)=\"endDatePicker.toggle()\">\n            <button class=\"input-group-addon\" (click)=\"endDatePicker.toggle()\" type=\"button\" role=\"button\">\n              <i class=\"fa fa-calendar\"></i>\n            </button>\n          </div>\n          <div class=\"text-danger\"\n               *ngIf=\"newCampaignForm.controls.endDate.errors && newCampaignForm.controls.endDate.errors.required &&\n                newCampaignForm.controls.endDate.touched\">\n            This field is required.\n          </div>\n          <div class=\"text-danger\"\n               *ngIf=\"newCampaignForm.errors && newCampaignForm.errors.dates &&\n                newCampaignForm.controls.startDate.dirty && newCampaignForm.controls.endDate.dirty\">\n            {{newCampaignForm.errors.dates}}\n          </div>\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label for=\"target\" class=\"col-sm-3 col-form-label\">Target group:</label>\n        <div class=\"col\">\n          <input class=\"form-control\" id=\"target\" formControlName=\"target\"\n              [ngClass]=\"{ 'is-invalid': !newCampaignForm.controls.target.valid &&\n                newCampaignForm.controls.target.touched}\">\n          <div class=\"text-danger\"\n              *ngIf=\"newCampaignForm.controls.target.errors && newCampaignForm.controls.target.errors.required &&\n                newCampaignForm.controls.target.touched\">\n            This field is required.\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"card col p-2 m-2\">\n    <div class=\"card-block p-2\">\n      <div class=\"form-group row\">\n        <label for=\"planner\" class=\"col-sm-3 col-form-label\">Planner:</label>\n        <div class=\"col\">\n          <input class=\"form-control\" id=\"planner\" formControlName=\"planner\"\n              [ngClass]=\"{ 'is-invalid': !newCampaignForm.controls.planner.valid &&\n                newCampaignForm.controls.planner.touched}\">\n          <div class=\"text-danger\"\n              *ngIf=\"newCampaignForm.controls.planner.errors && newCampaignForm.controls.planner.errors.required &&\n                newCampaignForm.controls.planner.touched\">\n            This field is required.\n          </div>\n        </div>\n        <label for=\"fee\" class=\"col-sm-2 col-form-label text-right\">Fee (NetNet):</label>\n        <div class=\"col\">\n          <div class=\"input-group\">\n            <input type=\"number\" class=\"form-control\" id=\"fee\" formControlName=\"fee\"\n                   [ngClass]=\"{ 'is-invalid': !newCampaignForm.controls.fee.valid && newCampaignForm.controls.fee.touched}\">\n            <span class=\"input-group-addon\">%</span>\n          </div>\n          <div class=\"text-danger\"\n               *ngIf=\"newCampaignForm.controls.fee.errors && newCampaignForm.controls.fee.errors.required &&\n                newCampaignForm.controls.fee.touched\">\n            This field is required.\n          </div>\n          <div class=\"text-danger\"\n               *ngIf=\"newCampaignForm.controls.fee.errors &&\n                (newCampaignForm.controls.fee.errors.min || newCampaignForm.controls.fee.errors.max) &&\n                newCampaignForm.controls.fee.dirty\">\n            The fee should be between 0% and 100%.\n          </div>\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label for=\"currency\" class=\"col-sm-3 col-form-label\">Currency:</label>\n        <div class=\"col-sm-2\">\n          <select class=\"form-control\" id=\"currency\" formControlName=\"exchangeCurrency\">\n            <option [value]=\"exchangeCurrencies.HUF\">{{exchangeCurrencies.HUF}}</option>\n            <option [value]=\"exchangeCurrencies.USD\">{{exchangeCurrencies.USD}}</option>\n            <option [value]=\"exchangeCurrencies.EUR\">{{exchangeCurrencies.EUR}}</option>\n          </select>\n        </div>\n        <div class=\"col-sm-7\" *ngIf=\"!currencyIsLocal(newCampaignForm.controls.exchangeCurrency.value)\">\n          <div class=\"row\">\n            <label for=\"exchange-rate\" class=\"col-sm-3 col-form-label text-right\">Exchange rate:</label>\n            <div class=\"col-sm-3\">\n              <input type=\"number\" class=\"form-control\" id=\"exchange-rate\" formControlName=\"exchangeRate\"\n                     [ngClass]=\"{ 'is-invalid': !newCampaignForm.controls.exchangeRate.valid &&\n              newCampaignForm.controls.exchangeRate.touched}\">\n              <div class=\"text-danger\"\n                   *ngIf=\"newCampaignForm.controls.exchangeRate.errors &&\n              newCampaignForm.controls.exchangeRate.errors.required && newCampaignForm.controls.exchangeRate.touched\">\n                This field is required.\n              </div>\n            </div>\n            <label for=\"buffer\" class=\"col-sm-2 col-form-label text-right\">Buffer:</label>\n            <div class=\"col-sm-4\">\n              <div class=\"input-group\">\n                <input type=\"number\" class=\"form-control\" id=\"buffer\" formControlName=\"buffer\"\n                       [ngClass]=\"{ 'is-invalid': !newCampaignForm.controls.buffer.valid &&\n                newCampaignForm.controls.buffer.touched}\">\n                <span class=\"input-group-addon\">%</span>\n              </div>\n              <div class=\"text-danger\"\n                   *ngIf=\"newCampaignForm.controls.buffer.errors && newCampaignForm.controls.buffer.errors.required &&\n              newCampaignForm.controls.buffer.touched\">\n                This field is required.\n              </div>\n              <div class=\"text-danger\"\n                   *ngIf=\"newCampaignForm.controls.buffer.errors &&\n              (newCampaignForm.controls.buffer.errors.min || newCampaignForm.controls.buffer.errors.max) &&\n              newCampaignForm.controls.buffer.dirty\">\n                The buffer should be between 0% and 100%.\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label for=\"budget\" class=\"col-sm-3 col-form-label\">Budget:</label>\n        <div class=\"col\">\n          <input [textMask]=\"{mask: BUDGET_MASK}\" class=\"form-control\" id=\"budget\" formControlName=\"budget\"\n                 [ngClass]=\"{ 'is-invalid': !newCampaignForm.controls.budget.valid &&\n                newCampaignForm.controls.budget.touched}\">\n          <div class=\"text-danger\"\n              *ngIf=\"newCampaignForm.controls.budget.errors && newCampaignForm.controls.budget.errors.required &&\n                newCampaignForm.controls.budget.touched\">\n            This field is required.\n          </div>\n        </div>\n        <div class=\"col-3\">\n          <select class=\"form-control\" id=\"budget-type\" formControlName=\"budgetType\"\n              [ngClass]=\"{ 'is-invalid': !newCampaignForm.controls.budgetType.valid &&\n                newCampaignForm.controls.budgetType.touched}\">\n            <option [value]=\"budgetTypes.ClientNet\">{{budgetTypes.ClientNet}}</option>\n            <option [value]=\"budgetTypes.NetNet\">{{budgetTypes.NetNet}}</option>\n          </select>\n          <div class=\"text-danger\"\n               *ngIf=\"newCampaignForm.controls.budgetType.errors &&\n                newCampaignForm.controls.budgetType.errors.required && newCampaignForm.controls.budgetType.touched\">\n            This field is required.\n          </div>\n        </div>\n      </div>\n\n      <div *ngIf=\"!currencyIsLocal(newCampaignForm.controls.exchangeCurrency.value)\"\n          class=\"form-group row\">\n        <label for=\"briefBudget\" class=\"col-sm-3 col-form-label\">Brief budget:</label>\n        <div class=\"col\">\n          <input readonly class=\"form-control-plaintext form-control-lg\" id=\"briefBudget\"\n                 *ngIf=\"calculatedFields.briefBudget\"\n              value=\"{{calculatedFields.briefBudget | formattednumber:4}} {{ localCurrency }}\">\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- Extra columns is not in the scope for the next release -->\n  <!-- <div class=\"card col p-2 m-2\">\n    <div class=\"card-block p-2\">\n      <h4 class=\"card-title text-center\">Extra columns</h4>\n\n      <div class=\"p-2 row\">\n        <div class=\"col-sm-5 pb-2 pt-0 px-2\">\n          <div class=\"form-group row\">\n            <label for=\"extra-column-name\" class=\"col-sm-4 col-form-label\">Name:</label>\n            <div class=\"col\">\n              <input class=\"form-control\" id=\"extra-column-name\">\n            </div>\n          </div>\n\n          <div class=\"form-group row\">\n            <label for=\"extra-column-type\" class=\"col-sm-4 col-form-label\">Type:</label>\n            <div class=\"col\">\n              <select id=\"extra-column-type\" class=\"form-control\">\n                <option>Text</option>\n                <option>Gross value</option>\n              </select>\n            </div>\n          </div>\n\n          <div class=\"col\">\n            <div class=\"row p-2 pb-3\">\n              <button type=\"button\" class=\"btn btn-block btn-success mx-3\">\n                Add column\n                <i class=\"fa fa-plus-circle px-2\"></i>\n              </button>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col ml-3 mr-1 px-0\">\n          <table class=\"table table-bordered\">\n            <thead class=\"thead-light\">\n              <tr>\n                <th>\n                  Name\n                </th>\n                <th>\n                  Type\n                </th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td>\n                  Comment\n                </td>\n                <td>\n                  <div class=\"d-flex\">\n                    <span>\n                      Text\n                    </span>\n                    <span class=\"text-danger ml-auto\" role=\"button\">\n                      <i class=\"fa fa-trash-o\"></i>\n                    </span>\n                  </div>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div> -->\n\n  <div class=\"row justify-content-end p-2 pb-3\">\n    <button class=\"btn btn-primary md-next-button px-5 py-2\">\n      Next\n      <i class=\"fa fa-arrow-right px-2\"></i>\n    </button>\n  </div>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/campaigns/components/new-campaign-form.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewCampaignFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_constants__ = __webpack_require__("../../../../../src/app/campaigns/shared/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_campaign__ = __webpack_require__("../../../../../src/app/campaigns/models/campaign.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_unmasking__ = __webpack_require__("../../../../../src/app/campaigns/services/unmasking.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_text_mask_addons_dist_createNumberMask__ = __webpack_require__("../../../../text-mask-addons/dist/createNumberMask.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_text_mask_addons_dist_createNumberMask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_text_mask_addons_dist_createNumberMask__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_BudgetType__ = __webpack_require__("../../../../../src/app/campaigns/models/BudgetType.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_exchange_currency__ = __webpack_require__("../../../../../src/app/campaigns/models/exchange-currency.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_observable_combineLatest__ = __webpack_require__("../../../../rxjs/_esm5/observable/combineLatest.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_uuid__ = __webpack_require__("../../../../uuid/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_uuid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_uuid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__clients__ = __webpack_require__("../../../../../src/app/campaigns/components/clients.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_lodash__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var NewCampaignFormComponent = (function () {
    function NewCampaignFormComponent(formBuilder, dateFormatter, unmaskingService) {
        this.formBuilder = formBuilder;
        this.dateFormatter = dateFormatter;
        this.unmaskingService = unmaskingService;
        this.formSubmission = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"]();
        this.exchangeCurrencies = __WEBPACK_IMPORTED_MODULE_8__models_exchange_currency__["a" /* ExchangeCurrency */];
        this.budgetTypes = __WEBPACK_IMPORTED_MODULE_7__models_BudgetType__["a" /* BudgetType */];
        this.clients = __WEBPACK_IMPORTED_MODULE_13__clients__["a" /* clients */];
        this.DEFAULT_BUFFER = 10;
        this.NEW_CAMPAIGN_HEADER = 'New Campaign';
        this.EDIT_CAMPAIGN_HEADER = 'Edit Campaign';
        this.BUDGET_MASK = __WEBPACK_IMPORTED_MODULE_6_text_mask_addons_dist_createNumberMask___default()({
            prefix: '',
            thousandsSeparatorSymbol: __WEBPACK_IMPORTED_MODULE_0__shared_constants__["b" /* THOUSANDS_SEPARATOR_SYMBOL */],
            allowDecimal: true,
            decimalLimit: __WEBPACK_IMPORTED_MODULE_0__shared_constants__["a" /* DECIMAL_LIMIT */]
        });
        this.headerText = this.NEW_CAMPAIGN_HEADER;
        this.clientClasses = {
            basic: 'form-control',
            warning: 'form-control border-warning',
            danger: 'form-control border-danger'
        };
        this.clientInputClass = this.clientClasses.basic;
        this.calculatedFields = {};
        // FIXME: this will be set from a configuration variable instead of a fixed constant
        this.localCurrency = __WEBPACK_IMPORTED_MODULE_8__models_exchange_currency__["a" /* ExchangeCurrency */].HUF;
        this.unsubscribe = new __WEBPACK_IMPORTED_MODULE_9_rxjs_Subject__["a" /* Subject */]();
    }
    NewCampaignFormComponent.prototype.ngOnInit = function () {
        this.headerText = this.campaign ? this.EDIT_CAMPAIGN_HEADER : this.NEW_CAMPAIGN_HEADER;
        this.createForm(this.campaign);
        this.disableExchangeRateForDomicileCurrency();
        this.recalculateBriefBudget();
    };
    NewCampaignFormComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    NewCampaignFormComponent.prototype.createForm = function (campaign) {
        this.newCampaignForm = this.formBuilder.group({
            identifier: campaign && campaign.identifier || Object(__WEBPACK_IMPORTED_MODULE_12_uuid__["v4"])(),
            client: [campaign && campaign.client || '', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
            brand: [campaign && campaign.brand || null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
            campaign: [campaign && campaign.campaign || null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
            startDate: [campaign && this.dateFormatter.parse(campaign.startDate) || null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
            endDate: [campaign && this.dateFormatter.parse(campaign.endDate) || null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
            target: [campaign && campaign.target || null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
            planner: [campaign && campaign.planner || null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
            fee: [campaign && campaign.fee || null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].min(0), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].max(100)]],
            exchangeCurrency: campaign && campaign.exchangeCurrency || this.localCurrency,
            exchangeRate: [campaign && campaign.exchangeRate || null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
            buffer: [campaign && campaign.buffer || this.DEFAULT_BUFFER, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
            budget: [campaign && campaign.budget || null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
            budgetType: [campaign && campaign.budgetType || '', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required]
        }, {
            validator: this.dateValidator('startDate', 'endDate')
        });
    };
    NewCampaignFormComponent.prototype.disableExchangeRateForDomicileCurrency = function () {
        var _this = this;
        this.newCampaignForm.get('exchangeCurrency').valueChanges
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_11_rxjs_operators__["h" /* startWith */])(this.newCampaignForm.get('exchangeCurrency').value), Object(__WEBPACK_IMPORTED_MODULE_11_rxjs_operators__["j" /* takeUntil */])(this.unsubscribe))
            .subscribe(function (currency) {
            // FIXME: exchangeCurrency and exchangeRate should not be specifically linked to HUF
            currency === __WEBPACK_IMPORTED_MODULE_8__models_exchange_currency__["a" /* ExchangeCurrency */].HUF ?
                _this.newCampaignForm.get('exchangeRate').disable() :
                _this.newCampaignForm.get('exchangeRate').enable();
        });
    };
    NewCampaignFormComponent.prototype.recalculateBriefBudget = function () {
        var _this = this;
        Object(__WEBPACK_IMPORTED_MODULE_10_rxjs_observable_combineLatest__["a" /* combineLatest */])(this.newCampaignForm.get('budget').valueChanges, this.newCampaignForm.get('buffer').valueChanges.pipe(Object(__WEBPACK_IMPORTED_MODULE_11_rxjs_operators__["h" /* startWith */])(this.DEFAULT_BUFFER)), this.newCampaignForm.get('exchangeRate').valueChanges).pipe(Object(__WEBPACK_IMPORTED_MODULE_11_rxjs_operators__["j" /* takeUntil */])(this.unsubscribe))
            .subscribe(function (_a) {
            var budget = _a[0], buffer = _a[1], exchangeRate = _a[2];
            budget = _this.unmaskingService.unmask(budget);
            if (__WEBPACK_IMPORTED_MODULE_14_lodash__["isNil"](budget) || __WEBPACK_IMPORTED_MODULE_14_lodash__["isNil"](buffer) || __WEBPACK_IMPORTED_MODULE_14_lodash__["isNil"](exchangeRate)) {
                _this.calculatedFields = __assign({}, _this.calculatedFields, { briefBudget: 0 });
                return;
            }
            var bufferedBudget = Object(__WEBPACK_IMPORTED_MODULE_1__models_campaign__["b" /* calculateBufferedBudget */])(budget, buffer);
            _this.calculatedFields = __assign({}, _this.calculatedFields, { briefBudget: Object(__WEBPACK_IMPORTED_MODULE_1__models_campaign__["a" /* calculateBriefBudget */])(bufferedBudget, exchangeRate) });
        });
    };
    NewCampaignFormComponent.prototype.validateAndSubmitForm = function () {
        if (this.newCampaignForm.valid) {
            var campaign = this.newCampaignForm.value;
            campaign.startDate = this.dateFormatter.format(campaign.startDate);
            campaign.endDate = this.dateFormatter.format(campaign.endDate);
            campaign.budget = this.unmaskingService.unmask(campaign.budget);
            campaign.exchangeRate = campaign.exchangeCurrency === __WEBPACK_IMPORTED_MODULE_8__models_exchange_currency__["a" /* ExchangeCurrency */].HUF ? 1 : campaign.exchangeRate;
            campaign.buffer = campaign.exchangeCurrency === __WEBPACK_IMPORTED_MODULE_8__models_exchange_currency__["a" /* ExchangeCurrency */].HUF ? 0 : campaign.buffer;
            this.formSubmission.emit(campaign);
        }
        else {
            this.validateAllFields(this.newCampaignForm);
        }
    };
    NewCampaignFormComponent.prototype.validateAllFields = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field);
            if (control instanceof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormGroup"]) {
                _this.validateAllFields(control);
            }
        });
    };
    NewCampaignFormComponent.prototype.validateStartDate = function (date) {
        var startDate = new Date(date.year, date.month - 1, date.day);
        var today = new Date();
        today.setHours(0, 0, 0, 0);
        this.hasOldStartDate = startDate < today;
    };
    NewCampaignFormComponent.prototype.validateClient = function () {
        var client = this.newCampaignForm.get('client').value;
        if (__WEBPACK_IMPORTED_MODULE_14_lodash__["isNil"](client)) {
            this.clientInputClass = this.clientClasses.danger;
            return;
        }
        this.hasUnknownClient = !this.clients.includes(client);
        this.clientInputClass = this.hasUnknownClient ? this.clientClasses.warning : this.clientClasses.basic;
    };
    NewCampaignFormComponent.prototype.dateValidator = function (start, end) {
        var _this = this;
        return function (group) {
            var startDateNgb = group.controls[start].value;
            var endDateNgb = group.controls[end].value;
            var startDate = _this.dateFormatter.format(startDateNgb);
            var endDate = _this.dateFormatter.format(endDateNgb);
            if (startDate > endDate) {
                return {
                    dates: 'End date should be later than start date.'
                };
            }
            return {};
        };
    };
    NewCampaignFormComponent.prototype.currencyIsLocal = function (currency) {
        return currency === this.localCurrency.toString();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], NewCampaignFormComponent.prototype, "campaign", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], NewCampaignFormComponent.prototype, "formSubmission", void 0);
    NewCampaignFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'md-new-campaign-form',
            template: __webpack_require__("../../../../../src/app/campaigns/components/new-campaign-form.html"),
            styles: ["\n    .md-next-button {\n      font-size: 24px;\n    }\n\n    .table th,\n    .table td {\n      padding: 0.25rem 0.75rem;\n    }\n\n    [role=button] {\n      cursor:pointer;\n    }\n  "]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["a" /* NgbDateParserFormatter */],
            __WEBPACK_IMPORTED_MODULE_5__services_unmasking__["a" /* UnmaskingService */]])
    ], NewCampaignFormComponent);
    return NewCampaignFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/campaigns/containers/ad-runs-page.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdRunsPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_ad_runs__ = __webpack_require__("../../../../../src/app/campaigns/actions/ad-runs.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducers__ = __webpack_require__("../../../../../src/app/campaigns/reducers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actions_campaigns__ = __webpack_require__("../../../../../src/app/campaigns/actions/campaigns.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AdRunsPageComponent = (function () {
    function AdRunsPageComponent(store) {
        this.store = store;
        this.adRunChange$ = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["a" /* Subject */]();
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_0__actions_ad_runs__["h" /* LoadAdRuns */]());
        this.selectedCampaign = this.store.select(__WEBPACK_IMPORTED_MODULE_3__reducers__["c" /* getSelectedCampaign */]);
        this.adRunEntries = this.store.select(__WEBPACK_IMPORTED_MODULE_3__reducers__["a" /* getAdRuns */]);
        this.adRunsStateChange = this.adRunEntries.pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["g" /* merge */])(this.adRunChange$));
    }
    AdRunsPageComponent.prototype.addAdRun = function (adRun) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_0__actions_ad_runs__["b" /* AddAdRun */](adRun));
    };
    AdRunsPageComponent.prototype.deleteAdRun = function (adRun) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_0__actions_ad_runs__["d" /* DeleteAdRun */](adRun));
    };
    AdRunsPageComponent.prototype.editAdRun = function (adRun) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_0__actions_ad_runs__["f" /* EditAdRun */](adRun));
    };
    AdRunsPageComponent.prototype.adRunsChange = function (adRuns) {
        this.adRunChange$.next(adRuns);
    };
    AdRunsPageComponent.prototype.reorderAdRuns = function (adRuns) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_0__actions_ad_runs__["j" /* ReorderAdRuns */](adRuns));
    };
    AdRunsPageComponent.prototype.editCampaign = function (campaignId) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__actions_campaigns__["d" /* EditCampaign */](campaignId));
    };
    AdRunsPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'md-ad-runs-page',
            template: "\n    <md-ad-runs-header\n      [campaign]=\"selectedCampaign | async\"\n      [adRuns]=\"adRunsStateChange | async\"\n      (editCampaign)=\"editCampaign($event)\">\n    </md-ad-runs-header>\n    <md-ad-runs [entries]=\"adRunEntries | async\"\n                [entriesPlusForm]=\"adRunsStateChange | async\"\n                [campaign]=\"selectedCampaign | async\"\n                (deleteAdRun)=\"deleteAdRun($event)\"\n                (add)=\"addAdRun($event)\"\n                (edit)=\"editAdRun($event)\"\n                (adRunsChange)=\"adRunsChange($event)\"\n                (orderChanged)=\"reorderAdRuns($event)\">\n    </md-ad-runs>\n    <md-ad-runs-statistics></md-ad-runs-statistics>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */]])
    ], AdRunsPageComponent);
    return AdRunsPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/campaigns/containers/new-campaign.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewCampaignComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_campaigns__ = __webpack_require__("../../../../../src/app/campaigns/actions/campaigns.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reducers_index__ = __webpack_require__("../../../../../src/app/campaigns/reducers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_observable_combineLatest__ = __webpack_require__("../../../../rxjs/_esm5/observable/combineLatest.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var NewCampaignComponent = (function () {
    function NewCampaignComponent(store, route) {
        var _this = this;
        this.store = store;
        this.route = route;
        this.unsubscribe = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__["a" /* Subject */]();
        Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_observable_combineLatest__["a" /* combineLatest */])(this.route.paramMap, this.store.select(__WEBPACK_IMPORTED_MODULE_4__reducers_index__["b" /* getCampaigns */]))
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["d" /* first */])())
            .subscribe(function (_a) {
            var params = _a[0], campaigns = _a[1];
            var campaignId = params.get('campaignId');
            _this.campaignToEdit = campaigns.find(function (campaign) { return campaign.identifier === campaignId; });
        });
    }
    NewCampaignComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    NewCampaignComponent.prototype.formSubmission = function (submittedCampaign) {
        var _this = this;
        this.store.select(__WEBPACK_IMPORTED_MODULE_4__reducers_index__["b" /* getCampaigns */])
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["d" /* first */])())
            .subscribe(function (campaigns) {
            campaigns.find(function (campaign) { return campaign.identifier === submittedCampaign.identifier; }) ?
                _this.updateCampaign(submittedCampaign) :
                _this.newCampaign(submittedCampaign);
        });
    };
    NewCampaignComponent.prototype.newCampaign = function (campaign) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__actions_campaigns__["b" /* AddCampaign */](campaign));
    };
    NewCampaignComponent.prototype.updateCampaign = function (campaign) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__actions_campaigns__["j" /* UpdateCampaign */](campaign));
    };
    NewCampaignComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'md-new-campaign',
            template: "\n    <md-new-campaign-form\n        [campaign]=\"campaignToEdit\"\n        (formSubmission)=\"formSubmission($event)\"\n    >\n    </md-new-campaign-form>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["b" /* Store */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */]])
    ], NewCampaignComponent);
    return NewCampaignComponent;
}());



/***/ }),

/***/ "../../../../../src/app/campaigns/containers/overview.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducers__ = __webpack_require__("../../../../../src/app/campaigns/reducers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_campaigns__ = __webpack_require__("../../../../../src/app/campaigns/actions/campaigns.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_ad_runs__ = __webpack_require__("../../../../../src/app/campaigns/actions/ad-runs.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OverviewComponent = (function () {
    function OverviewComponent(store) {
        this.store = store;
        // FIXME (we have this here temporarily, to load the initial data)
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__actions_campaigns__["h" /* LoadCampaigns */]());
        this.campaigns = store.select(__WEBPACK_IMPORTED_MODULE_2__reducers__["b" /* getCampaigns */]);
    }
    OverviewComponent.prototype.selectCampaign = function (campaign) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__actions_ad_runs__["l" /* SelectCampaignAdRuns */](campaign));
    };
    OverviewComponent.prototype.searchCampaigns = function (searchQuery) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__actions_campaigns__["f" /* FilterCampaigns */](searchQuery));
    };
    OverviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'md-overview',
            template: "\n    <md-campaigns [campaigns]=\"campaigns | async\"\n                  (selected)=\"selectCampaign($event)\"\n                  (search)=\"searchCampaigns($event)\">\n    </md-campaigns>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */]])
    ], OverviewComponent);
    return OverviewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/campaigns/effects/campaigns.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CampaignsEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_ad_runs__ = __webpack_require__("../../../../../src/app/campaigns/actions/ad-runs.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__actions_campaigns__ = __webpack_require__("../../../../../src/app/campaigns/actions/campaigns.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









// FIXME: use some general error handling for the effects
var CampaignsEffects = (function () {
    function CampaignsEffects(actions, router) {
        var _this = this;
        this.actions = actions;
        this.router = router;
        this.redirectOnNewCampaign = this.actions.ofType(__WEBPACK_IMPORTED_MODULE_7__actions_campaigns__["a" /* ADD_CAMPAIGN */]).pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["f" /* map */])(function (action) {
            return {
                campaign: action.payload,
                isEditingMode: true
            };
        }), Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["i" /* switchMap */])(function (payload) {
            return Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__["a" /* of */])(new __WEBPACK_IMPORTED_MODULE_0__actions_ad_runs__["l" /* SelectCampaignAdRuns */](payload.campaign, payload.isEditingMode));
        }));
        this.redirectOnCampaignSelection = this.actions.ofType(__WEBPACK_IMPORTED_MODULE_0__actions_ad_runs__["k" /* SELECT_CAMPAIGN_ADRUNS */]).pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["i" /* switchMap */])(function (action) {
            var isEditingMode = action.isEditingMode;
            var navigationParams = isEditingMode ? { isEditingMode: isEditingMode } : {};
            _this.router.navigate(['adRuns', navigationParams]);
            return Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__["a" /* of */])({ type: 'NO_ACTION' });
        }));
        this.redirectToCampaignEditingForm = this.actions.ofType(__WEBPACK_IMPORTED_MODULE_7__actions_campaigns__["c" /* EDIT_CAMPAIGN */]).pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["i" /* switchMap */])(function (action) {
            var campaignId = action.payload;
            var navigationParams = campaignId ? { campaignId: campaignId } : {};
            _this.router.navigate(['new-campaign', navigationParams]);
            return Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__["a" /* of */])({ type: 'NO_ACTION' });
        }));
        this.redirectOnEditedCampaign = this.actions.ofType(__WEBPACK_IMPORTED_MODULE_7__actions_campaigns__["i" /* UPDATE_CAMPAIGN */]).pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["f" /* map */])(function (action) { return action.payload; }), Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["i" /* switchMap */])(function (payload) {
            return Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__["a" /* of */])(new __WEBPACK_IMPORTED_MODULE_0__actions_ad_runs__["l" /* SelectCampaignAdRuns */](payload));
        }));
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */])
    ], CampaignsEffects.prototype, "redirectOnNewCampaign", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__ngrx_effects__["b" /* Effect */])({ dispatch: false }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */])
    ], CampaignsEffects.prototype, "redirectOnCampaignSelection", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__ngrx_effects__["b" /* Effect */])({ dispatch: false }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */])
    ], CampaignsEffects.prototype, "redirectToCampaignEditingForm", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */])
    ], CampaignsEffects.prototype, "redirectOnEditedCampaign", void 0);
    CampaignsEffects = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ngrx_effects__["a" /* Actions */],
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */]])
    ], CampaignsEffects);
    return CampaignsEffects;
}());



/***/ }),

/***/ "../../../../../src/app/campaigns/models/BudgetType.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BudgetType; });
var BudgetType;
(function (BudgetType) {
    BudgetType["NetNet"] = "NetNet";
    BudgetType["ClientNet"] = "Client Net";
})(BudgetType || (BudgetType = {}));


/***/ }),

/***/ "../../../../../src/app/campaigns/models/ad-serving-type.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdServingType; });
var AdServingType;
(function (AdServingType) {
    /* FIXME: This might be dynamically created in the future since because
      other types might be necessary */
    AdServingType["CT"] = "CT";
    AdServingType["AV"] = "AV";
    AdServingType["Pixel"] = "Pixel";
    AdServingType["NoAdservingCost"] = "No adserving cost";
})(AdServingType || (AdServingType = {}));


/***/ }),

/***/ "../../../../../src/app/campaigns/models/adrun.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["m"] = calculateSumRatecard;
/* harmony export (immutable) */ __webpack_exports__["j"] = calculateNet;
/* harmony export (immutable) */ __webpack_exports__["k"] = calculateNetNet;
/* harmony export (immutable) */ __webpack_exports__["f"] = calculateClientNet;
/* harmony export (immutable) */ __webpack_exports__["d"] = calculateCPM;
/* harmony export (immutable) */ __webpack_exports__["b"] = calculateCPC;
/* harmony export (immutable) */ __webpack_exports__["e"] = calculateCPT;
/* harmony export (immutable) */ __webpack_exports__["c"] = calculateCPL;
/* harmony export (immutable) */ __webpack_exports__["a"] = calculateCPA;
/* harmony export (immutable) */ __webpack_exports__["i"] = calculateEstimatedCTR;
/* harmony export (immutable) */ __webpack_exports__["g"] = calculateEstimatedAV;
/* harmony export (immutable) */ __webpack_exports__["h"] = calculateEstimatedCT;
/* harmony export (immutable) */ __webpack_exports__["n"] = distributeUnitsEvenly;
/* harmony export (immutable) */ __webpack_exports__["l"] = calculateRemainingUnits;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bignumber_js__ = __webpack_require__("../../../../bignumber.js/bignumber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bignumber_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_bignumber_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_math_utils__ = __webpack_require__("../../../../../src/app/campaigns/shared/math-utils.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};



var AV_MULTIPLIER = 1000;
var REACH_UU_MULTIPLIER = 1000;
/**
   * Total ratecard
   *
   * An AdRun's ratecard multiplied by its units
   */
function calculateSumRatecard(adrun) {
    if (__WEBPACK_IMPORTED_MODULE_1_lodash__["isNil"](adrun)) {
        throw new Error("Invalid value for 'adrun', got: " + adrun);
    }
    var ratecard = new __WEBPACK_IMPORTED_MODULE_0_bignumber_js___default.a(adrun.ratecard);
    var units = new __WEBPACK_IMPORTED_MODULE_0_bignumber_js___default.a(adrun.units);
    return ratecard.mul(units).toNumber();
}
/**
   * Net price
   *
   * An AdRun's total ratecard reduced by the volume discount and other discounts
   */
function calculateNet(adrun) {
    if (__WEBPACK_IMPORTED_MODULE_1_lodash__["isNil"](adrun)) {
        throw new Error("Invalid value for 'adrun', got: " + adrun);
    }
    var sumRatecard = new __WEBPACK_IMPORTED_MODULE_0_bignumber_js___default.a(calculateSumRatecard(adrun));
    var volumeDiscountMultiplier = Object(__WEBPACK_IMPORTED_MODULE_2__shared_math_utils__["b" /* convertPercentageToReducingMultiplier */])(adrun.volumeDiscount);
    var otherDiscountsMultiplier = Object(__WEBPACK_IMPORTED_MODULE_2__shared_math_utils__["b" /* convertPercentageToReducingMultiplier */])(adrun.otherDiscount);
    return sumRatecard.mul(volumeDiscountMultiplier).mul(otherDiscountsMultiplier).toNumber();
}
/**
 * NetNet
 *
 * An AdRun's net price reduced by the agency discount
 */
function calculateNetNet(adrun) {
    if (__WEBPACK_IMPORTED_MODULE_1_lodash__["isNil"](adrun)) {
        throw new Error("Invalid value for 'adrun', got: " + adrun);
    }
    var net = new __WEBPACK_IMPORTED_MODULE_0_bignumber_js___default.a(calculateNet(adrun));
    var agencyDiscountMultiplier = Object(__WEBPACK_IMPORTED_MODULE_2__shared_math_utils__["b" /* convertPercentageToReducingMultiplier */])(adrun.agencyDiscount);
    return net.mul(agencyDiscountMultiplier).toNumber();
}
/**
 * Client net
 *
 * An AdRun's NetNet increased by the campaign fee
 */
function calculateClientNet(adrun, campaign) {
    if (__WEBPACK_IMPORTED_MODULE_1_lodash__["isNil"](adrun)) {
        throw new Error("Invalid value for 'adrun', got: " + adrun);
    }
    if (__WEBPACK_IMPORTED_MODULE_1_lodash__["isNil"](campaign)) {
        throw new Error("Invalid value for 'campaign', got: " + campaign);
    }
    var netNet = new __WEBPACK_IMPORTED_MODULE_0_bignumber_js___default.a(calculateNetNet(adrun));
    var campaignFeeMultiplier = Object(__WEBPACK_IMPORTED_MODULE_2__shared_math_utils__["a" /* convertPercentageToIncreasingMultiplier */])(campaign.fee);
    return netNet.mul(campaignFeeMultiplier).toNumber();
}
/**
 * CPM
 *
 * An AdRun's NetNet divided by its estimated AV * AV_MULTIPLIER
 */
function calculateCPM(adrun) {
    if (__WEBPACK_IMPORTED_MODULE_1_lodash__["isNil"](adrun)) {
        throw new Error("Invalid value for 'adrun', got: " + adrun);
    }
    var estimatedAV = new __WEBPACK_IMPORTED_MODULE_0_bignumber_js___default.a(adrun.estimatedAV);
    if (estimatedAV.equals(0)) {
        return 0;
    }
    var netNet = new __WEBPACK_IMPORTED_MODULE_0_bignumber_js___default.a(calculateNetNet(adrun));
    return netNet.dividedBy(estimatedAV).mul(AV_MULTIPLIER).toNumber();
}
/**
 * CPC
 *
 * An AdRun's NetNet divided by its estimated CT
 */
function calculateCPC(adrun) {
    if (__WEBPACK_IMPORTED_MODULE_1_lodash__["isNil"](adrun)) {
        throw new Error("Invalid value for 'adrun', got: " + adrun);
    }
    var estimatedCT = new __WEBPACK_IMPORTED_MODULE_0_bignumber_js___default.a(adrun.estimatedCT);
    if (estimatedCT.equals(0)) {
        return 0;
    }
    var netNet = new __WEBPACK_IMPORTED_MODULE_0_bignumber_js___default.a(calculateNetNet(adrun));
    return netNet.dividedBy(estimatedCT).toNumber();
}
/**
 * CPT
 *
 * An AdRun's NetNet divided by its estimated reach UU * REACH_UU_MULTIPLIER
 */
function calculateCPT(adrun) {
    if (__WEBPACK_IMPORTED_MODULE_1_lodash__["isNil"](adrun)) {
        throw new Error("Invalid value for 'adrun', got: " + adrun);
    }
    var estimatedReachUU = new __WEBPACK_IMPORTED_MODULE_0_bignumber_js___default.a(adrun.estimatedReachUU);
    if (estimatedReachUU.equals(0)) {
        return 0;
    }
    var netNet = new __WEBPACK_IMPORTED_MODULE_0_bignumber_js___default.a(calculateNetNet(adrun));
    return netNet.dividedBy(estimatedReachUU).mul(REACH_UU_MULTIPLIER).toNumber();
}
/**
 * CPL
 *
 * An AdRun's NetNet divided by its estimated lead
 */
function calculateCPL(adrun) {
    if (__WEBPACK_IMPORTED_MODULE_1_lodash__["isNil"](adrun)) {
        throw new Error("Invalid value for 'adrun', got: " + adrun);
    }
    var estimatedLead = new __WEBPACK_IMPORTED_MODULE_0_bignumber_js___default.a(adrun.estimatedLead);
    if (estimatedLead.equals(0)) {
        return 0;
    }
    var netNet = new __WEBPACK_IMPORTED_MODULE_0_bignumber_js___default.a(calculateNetNet(adrun));
    return netNet.dividedBy(estimatedLead).toNumber();
}
/**
 * CPA
 *
 * An AdRun's NetNet divided by its estimated acquisition
 */
function calculateCPA(adrun) {
    if (__WEBPACK_IMPORTED_MODULE_1_lodash__["isNil"](adrun)) {
        throw new Error("Invalid value for 'adrun', got: " + adrun);
    }
    var estimatedAcquisition = new __WEBPACK_IMPORTED_MODULE_0_bignumber_js___default.a(adrun.estimatedAcquisition);
    if (estimatedAcquisition.equals(0)) {
        return 0;
    }
    var netNet = new __WEBPACK_IMPORTED_MODULE_0_bignumber_js___default.a(calculateNetNet(adrun));
    return netNet.dividedBy(estimatedAcquisition).toNumber();
}
/**
 * Estimated CTR
 * An AdRun's estimated CT divided by its estimated AV
 */
function calculateEstimatedCTR(estimatedCT, estimatedAV) {
    if (__WEBPACK_IMPORTED_MODULE_1_lodash__["isNil"](estimatedCT)) {
        throw new Error("Invalid value for 'estimatedCT', got: " + estimatedCT);
    }
    if (__WEBPACK_IMPORTED_MODULE_1_lodash__["isNil"](estimatedAV)) {
        throw new Error("Invalid value for 'estimatedAV', got: " + estimatedAV);
    }
    var bigEstimatedCT = new __WEBPACK_IMPORTED_MODULE_0_bignumber_js___default.a(estimatedCT);
    var bigEstimatedAV = new __WEBPACK_IMPORTED_MODULE_0_bignumber_js___default.a(estimatedAV);
    return bigEstimatedCT.dividedBy(bigEstimatedAV).toNumber();
}
/**
 * Estimated AV
 * An AdRun's estimated CT divided by its estimated CTR
 */
function calculateEstimatedAV(estimatedCT, estimatedCTR) {
    if (__WEBPACK_IMPORTED_MODULE_1_lodash__["isNil"](estimatedCT)) {
        throw new Error("Invalid value for 'estimatedCT', got: " + estimatedCT);
    }
    if (__WEBPACK_IMPORTED_MODULE_1_lodash__["isNil"](estimatedCTR)) {
        throw new Error("Invalid value for 'estimatedCTR', got: " + estimatedCTR);
    }
    var bigEstimatedCT = new __WEBPACK_IMPORTED_MODULE_0_bignumber_js___default.a(estimatedCT);
    var bigEstimatedCTR = new __WEBPACK_IMPORTED_MODULE_0_bignumber_js___default.a(estimatedCTR);
    return bigEstimatedCT.dividedBy(bigEstimatedCTR).toNumber();
}
/**
 * Estimated CT
 * An AdRun's estimated CTR multiplied by its estimated AV
 */
function calculateEstimatedCT(estimatedCTR, estimatedAV) {
    if (__WEBPACK_IMPORTED_MODULE_1_lodash__["isNil"](estimatedCTR)) {
        throw new Error("Invalid value for 'estimatedCTR', got: " + estimatedCTR);
    }
    if (__WEBPACK_IMPORTED_MODULE_1_lodash__["isNil"](estimatedAV)) {
        throw new Error("Invalid value for 'estimatedAV', got: " + estimatedAV);
    }
    var bigEstimatedCTR = new __WEBPACK_IMPORTED_MODULE_0_bignumber_js___default.a(estimatedCTR);
    var bigEstimatedAV = new __WEBPACK_IMPORTED_MODULE_0_bignumber_js___default.a(estimatedAV);
    return bigEstimatedCTR.mul(bigEstimatedAV).toNumber();
}
/**
   * Distributes units evenly across the weeks of an AdRun
   */
function distributeUnitsEvenly(adrun) {
    if (__WEBPACK_IMPORTED_MODULE_1_lodash__["isNil"](adrun)) {
        throw new Error("Invalid value for 'adrun', got: " + adrun);
    }
    var allReceive = Math.floor(adrun.units / adrun.weeklyBreakdown.length);
    var remain = adrun.units - (allReceive * adrun.weeklyBreakdown.length);
    return adrun.weeklyBreakdown.map(function (week) {
        var newWeek = __assign({}, week);
        remain -= 1;
        newWeek.units = allReceive + (remain < 0 ? 0 : 1);
        return newWeek;
    });
}
/**
   * Calculates an AdRun's remaining units (all units - allocated units)
   */
function calculateRemainingUnits(adrun) {
    if (__WEBPACK_IMPORTED_MODULE_1_lodash__["isNil"](adrun)) {
        throw new Error("Invalid value for 'adrun', got: " + adrun);
    }
    var allUnits = new __WEBPACK_IMPORTED_MODULE_0_bignumber_js___default.a(adrun.units);
    var unitsAllocated = new __WEBPACK_IMPORTED_MODULE_0_bignumber_js___default.a(adrun.weeklyBreakdown.reduce(function (accumulator, week) {
        return accumulator + week.units;
    }, 0));
    return allUnits.minus(unitsAllocated).toNumber();
}


/***/ }),

/***/ "../../../../../src/app/campaigns/models/campaign.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = calculateBufferedBudget;
/* harmony export (immutable) */ __webpack_exports__["a"] = calculateBriefBudget;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_math_utils__ = __webpack_require__("../../../../../src/app/campaigns/shared/math-utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bignumber_js__ = __webpack_require__("../../../../bignumber.js/bignumber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bignumber_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_bignumber_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);



/**
 * Buffered budget
 *
 * A campaign's budget extended with a buffer (in case a foreign currency's exchange rate gets higher)
 */
function calculateBufferedBudget(budget, buffer) {
    if (__WEBPACK_IMPORTED_MODULE_2_lodash__["isNil"](budget)) {
        throw new Error("Invalid value for 'budget', got: " + budget);
    }
    if (__WEBPACK_IMPORTED_MODULE_2_lodash__["isNil"](buffer)) {
        throw new Error("Invalid value for 'buffer', got: " + buffer);
    }
    var actualBudget = new __WEBPACK_IMPORTED_MODULE_1_bignumber_js___default.a(budget);
    var bufferMultiplier = Object(__WEBPACK_IMPORTED_MODULE_0__shared_math_utils__["a" /* convertPercentageToIncreasingMultiplier */])(buffer);
    return actualBudget.mul(bufferMultiplier).toNumber();
}
/**
 * Brief budget
 *
 * A campaign's buffered budget multiplied by the currency's exchange rate
 */
function calculateBriefBudget(bufferedBudget, exchangeRate) {
    if (__WEBPACK_IMPORTED_MODULE_2_lodash__["isNil"](bufferedBudget)) {
        throw new Error("Invalid value for 'bufferedBudget', got: " + bufferedBudget);
    }
    if (__WEBPACK_IMPORTED_MODULE_2_lodash__["isNil"](exchangeRate)) {
        throw new Error("Invalid value for 'exchangeRate', got: " + exchangeRate);
    }
    var budget = new __WEBPACK_IMPORTED_MODULE_1_bignumber_js___default.a(bufferedBudget);
    var rate = new __WEBPACK_IMPORTED_MODULE_1_bignumber_js___default.a(exchangeRate);
    return budget.mul(rate).toNumber();
}


/***/ }),

/***/ "../../../../../src/app/campaigns/models/exchange-currency.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExchangeCurrency; });
var ExchangeCurrency;
(function (ExchangeCurrency) {
    ExchangeCurrency["HUF"] = "HUF";
    ExchangeCurrency["USD"] = "USD";
    ExchangeCurrency["EUR"] = "EUR";
})(ExchangeCurrency || (ExchangeCurrency = {}));


/***/ }),

/***/ "../../../../../src/app/campaigns/models/pricing-type.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PricingType; });
var PricingType;
(function (PricingType) {
    /* FIXME: This might be dynamically created in the future since HUF is baked
      in right now. This will probably change */
    PricingType["ByCT"] = "HUF/CT";
    PricingType["ByAV"] = "HUF/AV";
    PricingType["ByWeek"] = "HUF/Week";
    PricingType["ByDay"] = "HUF/Day";
    PricingType["ByLead"] = "HUF/Lead";
    PricingType["ByView"] = "HUF/View";
    PricingType["ByMonth"] = "HUF/Month";
})(PricingType || (PricingType = {}));


/***/ }),

/***/ "../../../../../src/app/campaigns/pipes/formatted-number.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormattedNumberPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FormattedNumberPipe = (function () {
    function FormattedNumberPipe() {
    }
    FormattedNumberPipe.prototype.transform = function (val, precision) {
        if (precision === void 0) { precision = 2; }
        // Format the output to display any way you want here.
        // For instance:
        if (val !== undefined && val !== null) {
            return Number(val).toLocaleString('hu', { maximumFractionDigits: precision });
        }
        else {
            return '';
        }
    };
    FormattedNumberPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'formattednumber'
        })
    ], FormattedNumberPipe);
    return FormattedNumberPipe;
}());



/***/ }),

/***/ "../../../../../src/app/campaigns/reducers/ad-runs.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = reducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_ad_runs__ = __webpack_require__("../../../../../src/app/campaigns/actions/ad-runs.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_pricing_type__ = __webpack_require__("../../../../../src/app/campaigns/models/pricing-type.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_ad_serving_type__ = __webpack_require__("../../../../../src/app/campaigns/models/ad-serving-type.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};



var initialState = {
    campaign: null,
    campaignAdRuns: []
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_ad_runs__["k" /* SELECT_CAMPAIGN_ADRUNS */]:
            return __assign({}, state, { campaign: action.campaign });
        case __WEBPACK_IMPORTED_MODULE_0__actions_ad_runs__["g" /* LOAD_ADRUNS */]:
            var campaignAdRuns = loadAdRuns(state.campaign.identifier);
            return __assign({}, state, { campaignAdRuns: campaignAdRuns });
        case __WEBPACK_IMPORTED_MODULE_0__actions_ad_runs__["a" /* ADD_ADRUN */]:
            saveAdRun(state.campaign.identifier, action.payload);
            return __assign({}, state, { campaignAdRuns: loadAdRuns(state.campaign.identifier) });
        case __WEBPACK_IMPORTED_MODULE_0__actions_ad_runs__["e" /* EDIT_ADRUN */]:
            updateAdRun(state.campaign.identifier, action.payload);
            return __assign({}, state, { campaignAdRuns: loadAdRuns(state.campaign.identifier) });
        case __WEBPACK_IMPORTED_MODULE_0__actions_ad_runs__["c" /* DELETE_ADRUN */]:
            deleteAdRun(state.campaign.identifier, action.payload);
            return __assign({}, state, { campaignAdRuns: loadAdRuns(state.campaign.identifier) });
        case __WEBPACK_IMPORTED_MODULE_0__actions_ad_runs__["i" /* REORDER_ADRUNS */]:
            mockDB[0].campaignAdRuns = action.payload;
            return __assign({}, state, { campaignAdRuns: action.payload });
        default:
            return state;
    }
}
// ---- MOCK SECTION ----
var mockID = 0;
function generateId() {
    var id = mockID;
    mockID = id + 1;
    return id;
}
function findCampaginEntry(campaignIdentifier) {
    var result = mockDB.filter(function (entry) { return entry.identifier === campaignIdentifier; });
    if (!result || result.length === 0) {
        return null;
    }
    // make sure that there is only a single entry in the mockDB
    return result[0];
}
function loadAdRuns(campaignIdentifier) {
    if (!campaignIdentifier) {
        console.warn("Invalid campaign identifier: " + campaignIdentifier);
        return [];
    }
    var result = mockDB.filter(function (entry) { return entry.identifier === campaignIdentifier; });
    if (!result || result.length === 0) {
        return [];
    }
    // make sure that there is only a single entry in the mockDB
    return result[0].campaignAdRuns;
}
function saveAdRun(campaignIdentifier, adRun) {
    var entry = findCampaginEntry(campaignIdentifier);
    if (!entry) {
        mockDB = mockDB.concat([{
                identifier: campaignIdentifier,
                campaignAdRuns: []
            }]);
        entry = findCampaginEntry(campaignIdentifier);
    }
    var adRunWithId = __assign({}, adRun, { id: generateId() });
    entry.campaignAdRuns = entry.campaignAdRuns.concat([adRunWithId]);
}
function updateAdRun(identifier, editedAdRun) {
    var entry = findCampaginEntry(identifier);
    // we do the update this way to ensure that the order is preserved
    var newAdRunEntries = entry.campaignAdRuns.map(function (adRun) {
        if (adRun.id === editedAdRun.id) {
            return editedAdRun;
        }
        else {
            return __assign({}, adRun);
        }
    });
    entry.campaignAdRuns = newAdRunEntries;
}
function deleteAdRun(identifier, editedAdRun) {
    var entry = findCampaginEntry(identifier);
    // we do the update this way to ensure that the order is preserved
    var newAdRunEntries = entry.campaignAdRuns.filter(function (adRun) { return adRun.id !== editedAdRun.id; });
    entry.campaignAdRuns = newAdRunEntries;
}
// THIS IS WERE WE STORE THE MOCK DATA
var mockDB = [{
        identifier: '(son-day-1)',
        campaignAdRuns: [
            {
                id: generateId(),
                salesHouse: 'CEMP',
                site: 'Index',
                placement: 'Index cover page',
                format: 'Half Page',
                duration: 'Sep-Oct',
                date: '2017-09-20 - 2017-10-05',
                size: ['300x600'],
                weeklyBreakdown: [
                    {
                        week: 25,
                        units: 3500
                    },
                    {
                        week: 26,
                        units: 3500
                    },
                    {
                        week: 27,
                        units: 3500
                    }
                ],
                pricingType: __WEBPACK_IMPORTED_MODULE_1__models_pricing_type__["a" /* PricingType */].ByCT,
                units: 9500,
                baseOfAdServing: __WEBPACK_IMPORTED_MODULE_2__models_ad_serving_type__["a" /* AdServingType */].CT,
                estimatedAV: 10000000,
                estimatedCT: 4000,
                estimatedReachUU: 74000,
                estimatedCTR: 1,
                estimatedLead: 2,
                estimatedAcquisition: 0.04,
                ratecard: 20,
                volumeDiscount: 50,
                otherDiscount: 0,
                agencyDiscount: 15
            },
            {
                id: generateId(),
                salesHouse: 'Origo Network',
                site: 'Life',
                placement: 'banner mix',
                format: 'Footer',
                duration: 'Sep',
                date: '2017-09-07; 2017-09-14',
                size: ['960x120'],
                weeklyBreakdown: [
                    {
                        week: 24,
                        units: 10
                    },
                    {
                        week: 25,
                        units: 10
                    }
                ],
                pricingType: __WEBPACK_IMPORTED_MODULE_1__models_pricing_type__["a" /* PricingType */].ByDay,
                units: 20,
                baseOfAdServing: __WEBPACK_IMPORTED_MODULE_2__models_ad_serving_type__["a" /* AdServingType */].NoAdservingCost,
                estimatedAV: 900000,
                estimatedCT: 800,
                estimatedReachUU: 130000,
                estimatedCTR: 3,
                estimatedLead: 4,
                estimatedAcquisition: 0.9,
                ratecard: 120000,
                volumeDiscount: 20,
                otherDiscount: 5,
                agencyDiscount: 10
            },
        ]
    }];


/***/ }),

/***/ "../../../../../src/app/campaigns/reducers/campaigns.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = reducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_campaigns__ = __webpack_require__("../../../../../src/app/campaigns/actions/campaigns.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_BudgetType__ = __webpack_require__("../../../../../src/app/campaigns/models/BudgetType.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_exchange_currency__ = __webpack_require__("../../../../../src/app/campaigns/models/exchange-currency.ts");



var initialState = [];
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_campaigns__["g" /* LOAD_CAMPAIGNS */]:
            return loadData();
        case __WEBPACK_IMPORTED_MODULE_0__actions_campaigns__["a" /* ADD_CAMPAIGN */]:
            addNewCampaign(action.payload);
            return loadData();
        case __WEBPACK_IMPORTED_MODULE_0__actions_campaigns__["i" /* UPDATE_CAMPAIGN */]:
            updateCampaign(action.payload);
            return loadData();
        case __WEBPACK_IMPORTED_MODULE_0__actions_campaigns__["e" /* FILTER_CAMPAIGNS */]:
            if (!action.payload) {
                return loadData();
            }
            return searchCampaigns(action.payload);
        default:
            return state;
    }
}
// MOCK STUFF
var someMockData = [
    {
        client: 'Sony',
        campaign: 'Days of play',
        identifier: '(son-day-1)',
        startDate: '2017-06-01',
        endDate: '2017-07-30',
        budget: 5934300,
        budgetType: __WEBPACK_IMPORTED_MODULE_1__models_BudgetType__["a" /* BudgetType */].ClientNet,
        brand: 'Sony',
        target: 'All 18+',
        fee: 16,
        exchangeCurrency: __WEBPACK_IMPORTED_MODULE_2__models_exchange_currency__["a" /* ExchangeCurrency */].USD,
        exchangeRate: 250,
        buffer: 10
    },
    {
        client: 'Lexus',
        campaign: 'Traffic & pricelist download',
        identifier: '(lex-tra-1)',
        startDate: '2017-04-01',
        endDate: '2017-12-31',
        budget: 6869280,
        budgetType: __WEBPACK_IMPORTED_MODULE_1__models_BudgetType__["a" /* BudgetType */].NetNet,
        brand: 'Lexus',
        target: '35-54 ppAB',
        fee: 13,
        exchangeCurrency: __WEBPACK_IMPORTED_MODULE_2__models_exchange_currency__["a" /* ExchangeCurrency */].USD,
        exchangeRate: 250,
        buffer: 10
    },
    {
        client: 'Bayer',
        campaign: 'Foresto',
        identifier: '(bay-for-4)',
        startDate: '2017-01-01',
        endDate: '2017-10-31',
        budget: 4300000,
        brand: 'Foresto',
        budgetType: __WEBPACK_IMPORTED_MODULE_1__models_BudgetType__["a" /* BudgetType */].NetNet,
        target: '25-59 Dog owners',
        fee: 15,
        exchangeCurrency: __WEBPACK_IMPORTED_MODULE_2__models_exchange_currency__["a" /* ExchangeCurrency */].EUR,
        exchangeRate: 310,
        buffer: 15
    },
    {
        client: 'Libri',
        campaign: 'Increased engagement',
        identifier: '(lib-inc-6)',
        startDate: '2017-04-21',
        endDate: '2017-09-12',
        budget: 2347490,
        brand: 'Libri',
        budgetType: __WEBPACK_IMPORTED_MODULE_1__models_BudgetType__["a" /* BudgetType */].NetNet,
        target: '18-49 readers',
        fee: 12,
        exchangeCurrency: __WEBPACK_IMPORTED_MODULE_2__models_exchange_currency__["a" /* ExchangeCurrency */].HUF,
        exchangeRate: 1,
        buffer: 0
    },
    {
        client: 'MOL',
        campaign: 'Summer campaign',
        identifier: '(mol-sum-1)',
        startDate: '2017-08-15',
        endDate: '2017-10-15',
        budget: 11450000,
        budgetType: __WEBPACK_IMPORTED_MODULE_1__models_BudgetType__["a" /* BudgetType */].ClientNet,
        brand: 'MOL',
        target: '18-65 Car owners',
        fee: 10,
        exchangeCurrency: __WEBPACK_IMPORTED_MODULE_2__models_exchange_currency__["a" /* ExchangeCurrency */].HUF,
        exchangeRate: 1,
        buffer: 0
    }
];
var mockDB = someMockData.slice();
function loadData() {
    return mockDB;
}
function addNewCampaign(campaign) {
    mockDB = mockDB.concat([campaign]);
}
function updateCampaign(editedCampaign) {
    var otherCampaigns = mockDB.filter(function (campaign) { return campaign.identifier !== editedCampaign.identifier; });
    mockDB = [editedCampaign].concat(otherCampaigns);
}
function searchCampaigns(searchTerm) {
    var snippet = searchTerm.toLowerCase();
    return mockDB.filter(function (campaign) {
        return campaign.campaign.toLowerCase().startsWith(snippet) ||
            campaign.client.toLowerCase().startsWith(snippet);
    });
}


/***/ }),

/***/ "../../../../../src/app/campaigns/reducers/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return reducers; });
/* unused harmony export getCampaignsState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getCampaigns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getSelectedCampaign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getAdRuns; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__campaigns__ = __webpack_require__("../../../../../src/app/campaigns/reducers/campaigns.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ad_runs__ = __webpack_require__("../../../../../src/app/campaigns/reducers/ad-runs.ts");



var reducers = {
    entries: __WEBPACK_IMPORTED_MODULE_1__campaigns__["a" /* reducer */],
    adRuns: __WEBPACK_IMPORTED_MODULE_2__ad_runs__["a" /* reducer */]
};
var getCampaignsState = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["e" /* createFeatureSelector */])('campaigns');
var getCampaigns = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["f" /* createSelector */])(getCampaignsState, function (state) { return state.entries; });
var getSelectedCampaign = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["f" /* createSelector */])(getCampaignsState, function (state) { return state.adRuns.campaign; });
var getAdRuns = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["f" /* createSelector */])(getCampaignsState, function (state) { return state.adRuns.campaignAdRuns; });


/***/ }),

/***/ "../../../../../src/app/campaigns/services/ad-runs-helper.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdRunsHelperService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bignumber_js__ = __webpack_require__("../../../../bignumber.js/bignumber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bignumber_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_bignumber_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdRunsHelperService = (function () {
    function AdRunsHelperService() {
        // FIXME: the momentJS locale should be injected globally instead of set in individual places
        __WEBPACK_IMPORTED_MODULE_2_moment__["locale"]('hu');
        /* Needed to suppress this kind of warning: "number type has more than 15 significant digits",
        which is OK to suppress because it's a hardware limitation, we can't work around it.
        (e.g. console.log(9.543245345454127) will print 9.543245345454126) */
        __WEBPACK_IMPORTED_MODULE_1_bignumber_js___default.a.config({ ERRORS: false });
    }
    /**
     * Returns the list of weeks for the campaign's duration
     */
    AdRunsHelperService.prototype.calculateWeeksForHeader = function (campaign) {
        if (__WEBPACK_IMPORTED_MODULE_3_lodash__["isNil"](campaign)) {
            throw new Error("Invalid value for 'campaign', got: " + campaign);
        }
        var weeks = [];
        var tempWeek = __WEBPACK_IMPORTED_MODULE_2_moment__(campaign.startDate).startOf('week');
        while (tempWeek.isSameOrBefore(__WEBPACK_IMPORTED_MODULE_2_moment__(campaign.endDate).startOf('week'))) {
            weeks.push(tempWeek.week());
            tempWeek.add(1, 'weeks');
        }
        return weeks;
    };
    /**
     * Returns the list of dates for each day in each weeks of a campaign
     */
    AdRunsHelperService.prototype.calculateDatesForHeader = function (campaign) {
        if (__WEBPACK_IMPORTED_MODULE_3_lodash__["isNil"](campaign)) {
            throw new Error("Invalid value for 'campaign', got: " + campaign);
        }
        var daysOfWeeks = [];
        var dayIterator = __WEBPACK_IMPORTED_MODULE_2_moment__(campaign.startDate).startOf('week');
        var lastWeek = -1;
        while (dayIterator.isSameOrBefore(__WEBPACK_IMPORTED_MODULE_2_moment__(campaign.endDate).endOf('week'))) {
            var currentWeek = dayIterator.week();
            if (currentWeek === lastWeek) {
                daysOfWeeks[daysOfWeeks.length - 1].push(dayIterator.date());
            }
            else {
                daysOfWeeks.push([dayIterator.date()]);
            }
            dayIterator.add(1, 'days');
            lastWeek = currentWeek;
        }
        // We got a list of days(1-31) for each week. We have to pivot this for the UI
        var dateOfDays = [];
        var _loop_1 = function (i) {
            var weekdays = daysOfWeeks.map(function (week) {
                return week[i];
            });
            dateOfDays.push(weekdays);
        };
        for (var i = 0; i < 7; i++) {
            _loop_1(i);
        }
        return dateOfDays;
    };
    /**
     * Returns which months are included in the campaign's duration
     */
    AdRunsHelperService.prototype.calculateMonthsForHeader = function (campaign) {
        if (__WEBPACK_IMPORTED_MODULE_3_lodash__["isNil"](campaign)) {
            throw new Error("Invalid value for 'campaign', got: " + campaign);
        }
        var weekIterator = __WEBPACK_IMPORTED_MODULE_2_moment__(campaign.startDate).endOf('week');
        var lastMonth = -1;
        var monthSpans = [];
        while (weekIterator.isSameOrBefore(__WEBPACK_IMPORTED_MODULE_2_moment__(campaign.endDate).endOf('week'))) {
            var currentMonth = weekIterator.month();
            if (monthSpans.length !== 0 && currentMonth === lastMonth) {
                monthSpans[monthSpans.length - 1].span = monthSpans[monthSpans.length - 1].span + 1;
            }
            else {
                monthSpans.push({ month: __WEBPACK_IMPORTED_MODULE_2_moment__().month(currentMonth).format('MMMM'), span: 1 });
            }
            weekIterator.add(1, 'weeks');
            lastMonth = currentMonth;
        }
        return monthSpans;
    };
    /**
     * Maps an ad run's fields into excel columns, filtering out the ones without data
     */
    AdRunsHelperService.prototype.formatAdRunsForExport = function (adRuns) {
        return adRuns.map(function (adRun) {
            var formattedAdRun = {
                'Sales House': adRun.salesHouse,
                'Site': adRun.site,
                'Placement': adRun.placement,
                'Format': adRun.format,
                'Size': adRun.size.join('; '),
                'Duration': adRun.duration,
                'Date': adRun.date,
                // 'weeklyBreakdown': // FIXME: flatten this!
                'Pricing type': adRun.pricingType,
                'Units': adRun.units,
                'Ratecard': adRun.ratecard,
                'Base of ad serving': adRun.baseOfAdServing,
                'Estimated AV': adRun.estimatedAV,
                'Estimated CT': adRun.estimatedCT,
                'Estimated Reach UU': adRun.estimatedReachUU,
                'Estimated CTR': adRun.estimatedCTR,
                'Estimated Lead': adRun.estimatedLead,
                'Estimated Acquisition': adRun.estimatedAcquisition,
                'Volume Discount': adRun.volumeDiscount,
                'Other Discount': adRun.otherDiscount,
                'Agency Discount': adRun.agencyDiscount
            };
            return __WEBPACK_IMPORTED_MODULE_3_lodash__["pickBy"](formattedAdRun);
        });
    };
    AdRunsHelperService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AdRunsHelperService);
    return AdRunsHelperService;
}());



/***/ }),

/***/ "../../../../../src/app/campaigns/services/unmasking.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnmaskingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_constants__ = __webpack_require__("../../../../../src/app/campaigns/shared/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UnmaskingService = (function () {
    function UnmaskingService() {
    }
    UnmaskingService.prototype.unmask = function (toBeUnmasked, delimiter) {
        if (delimiter === void 0) { delimiter = __WEBPACK_IMPORTED_MODULE_0__shared_constants__["b" /* THOUSANDS_SEPARATOR_SYMBOL */]; }
        if (__WEBPACK_IMPORTED_MODULE_2_lodash__["isNumber"](toBeUnmasked)) {
            return toBeUnmasked;
        }
        if (__WEBPACK_IMPORTED_MODULE_2_lodash__["isNil"](toBeUnmasked) || !__WEBPACK_IMPORTED_MODULE_2_lodash__["isString"](toBeUnmasked)) {
            throw new Error("Invalid value for 'toBeUnmasked', got: " + toBeUnmasked);
        }
        /* When an input[type="number] is emptied, it's value is null, I mimic its behaviour for input[type="text"],
        without this, empty string would be parsed to NaN instead of getting null for the empty input */
        if (__WEBPACK_IMPORTED_MODULE_2_lodash__["isEmpty"](toBeUnmasked.replace(/\s/g, ''))) {
            return null;
        }
        return Number.parseFloat(toBeUnmasked.split(delimiter).join(''));
    };
    UnmaskingService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])()
    ], UnmaskingService);
    return UnmaskingService;
}());



/***/ }),

/***/ "../../../../../src/app/campaigns/shared/constants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return THOUSANDS_SEPARATOR_SYMBOL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DECIMAL_LIMIT; });
var THOUSANDS_SEPARATOR_SYMBOL = ' ';
var DECIMAL_LIMIT = 4;


/***/ }),

/***/ "../../../../../src/app/campaigns/shared/math-utils.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = convertPercentageToReducingMultiplier;
/* harmony export (immutable) */ __webpack_exports__["a"] = convertPercentageToIncreasingMultiplier;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bignumber_js__ = __webpack_require__("../../../../bignumber.js/bignumber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bignumber_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_bignumber_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);


var PERCENTAGE_TOTAL = 1;
var PERCENTAGE_DIVISOR = 100;
/**
 * Converts a percentage into a multiplier that's supposed to reduce an amount (e.g. 15% => 0.85)
 */
function convertPercentageToReducingMultiplier(percentage) {
    if (__WEBPACK_IMPORTED_MODULE_1_lodash__["isNil"](percentage)) {
        throw new Error("Invalid value for 'percentage', got: " + percentage);
    }
    var actualPercentage = new __WEBPACK_IMPORTED_MODULE_0_bignumber_js___default.a(percentage);
    var percentageTotal = new __WEBPACK_IMPORTED_MODULE_0_bignumber_js___default.a(PERCENTAGE_TOTAL);
    var percentageDivisor = new __WEBPACK_IMPORTED_MODULE_0_bignumber_js___default.a(PERCENTAGE_DIVISOR);
    var percentageNormalized = actualPercentage.dividedBy(percentageDivisor);
    return percentageTotal.minus(percentageNormalized);
}
/**
 * Converts a percentage into a multiplier that's supposed to increase an amount (e.g. 15% => 1.15)
 */
function convertPercentageToIncreasingMultiplier(percentage) {
    if (__WEBPACK_IMPORTED_MODULE_1_lodash__["isNil"](percentage)) {
        throw new Error("Invalid value for 'percentage', got: " + percentage);
    }
    var actualPercentage = new __WEBPACK_IMPORTED_MODULE_0_bignumber_js___default.a(percentage);
    var percentageTotal = new __WEBPACK_IMPORTED_MODULE_0_bignumber_js___default.a(PERCENTAGE_TOTAL);
    var percentageDivisor = new __WEBPACK_IMPORTED_MODULE_0_bignumber_js___default.a(PERCENTAGE_DIVISOR);
    var percentageNormalized = actualPercentage.dividedBy(percentageDivisor);
    return percentageTotal.plus(percentageNormalized);
}


/***/ }),

/***/ "../../../../../src/app/core/components/header.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".md-header-title,\n.md-header-title:hover {\n  color: #e1005d;\n  font-family: 'Bree Serif', serif;\n  font-size: 30px;\n  text-decoration: none;\n}\n.navbar .dropdown-menu.notify-drop {\n  min-width: 330px;\n  background-color: #fff;\n  min-height: 360px;\n  max-height: 360px;\n}\n.navbar .dropdown-menu.notify-drop .notify-drop-title {\n  border-bottom: 1px solid #e2e2e2;\n  padding: 5px 15px 10px 15px;\n}\n.navbar .dropdown-menu.notify-drop .drop-content {\n  min-height: 280px;\n  max-height: 280px;\n  overflow-y: scroll;\n}\n.navbar .dropdown-menu.notify-drop .drop-content::-webkit-scrollbar-track\n{\n  background-color: #F5F5F5;\n}\n\n.navbar .dropdown-menu.notify-drop .drop-content::-webkit-scrollbar\n{\n  width: 8px;\n  background-color: #F5F5F5;\n}\n\n.navbar .dropdown-menu.notify-drop .drop-content::-webkit-scrollbar-thumb\n{\n  background-color: #ccc;\n}\n.navbar .dropdown-menu.notify-drop .drop-content > li {\n  border-bottom: 1px solid #e2e2e2;\n  padding: 10px 0px 5px 0px;\n}\n.navbar .dropdown-menu.notify-drop .drop-content > li:nth-child(2n+0) {\n  background-color: #fafafa;\n}\n.navbar .dropdown-menu.notify-drop .drop-content > li:after {\n  content: \"\";\n  clear: both;\n  display: block;\n}\n.navbar .dropdown-menu.notify-drop .drop-content > li:hover {\n  background-color: #fcfcfc;\n}\n.navbar .dropdown-menu.notify-drop .drop-content > li:last-child {\n  border-bottom: none;\n}\n.navbar .dropdown-menu.notify-drop .drop-content > li .notify-img {\n  float: left;\n  display: inline-block;\n  width: 45px;\n  height: 45px;\n  margin: 0px 0px 8px 0px;\n}\n.navbar .dropdown-menu.notify-drop .allRead {\n  margin-right: 7px;\n}\n.navbar .dropdown-menu.notify-drop .rIcon {\n  float: right;\n  color: #999;\n}\n.navbar .dropdown-menu.notify-drop .rIcon:hover {\n  color: #333;\n}\n.navbar .dropdown-menu.notify-drop .drop-content > li a {\n  font-size: 12px;\n  font-weight: normal;\n}\n.navbar .dropdown-menu.notify-drop .drop-content > li {\n  font-weight: bold;\n  font-size: 11px;\n}\n.navbar .dropdown-menu.notify-drop .drop-content > li hr {\n  margin: 5px 0;\n  width: 70%;\n  border-color: #e2e2e2;\n}\n.navbar .dropdown-menu.notify-drop .drop-content .pd-l0 {\n  padding-left: 0;\n}\n.navbar .dropdown-menu.notify-drop .drop-content > li p {\n  font-size: 11px;\n  color: #666;\n  font-weight: normal;\n  margin: 3px 0;\n}\n.navbar .dropdown-menu.notify-drop .drop-content > li p.time {\n  font-size: 10px;\n  font-weight: 600;\n  top: -6px;\n  margin: 8px 0px 0px 0px;\n  padding: 0px 3px;\n  border: 1px solid #e2e2e2;\n  position: relative;\n  background-image: linear-gradient(#fff,#f2f2f2);\n  display: inline-block;\n  border-radius: 2px;\n  color: #B97745;\n}\n.navbar .dropdown-menu.notify-drop .drop-content > li p.time:hover {\n  background-image: linear-gradient(#fff,#fff);\n}\n.navbar .dropdown-menu.notify-drop .notify-drop-footer {\n  border-top: 1px solid #e2e2e2;\n  bottom: 0;\n  position: relative;\n  padding-top: 5px;\n}\n.navbar .dropdown-menu.notify-drop .notify-drop-footer a {\n  color: #777;\n  text-decoration: none;\n}\n.navbar .dropdown-menu.notify-drop .notify-drop-footer a:hover {\n  color: #333;\n}\n.navbar .dropdown-menu.notify-drop .drop-content li.row {\n  margin-left: 0px;\n  margin-right: 0px;\n}\n\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n.md-mdigital-logo {\n  height: 50px;\n  content: url(/assets/mediacom-logo.svg);\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/components/header.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'md-header',
            template: "\n    <nav class=\"navbar navbar-expand-md navbar-light fixed-top bg-light\">\n      <!-- FIXME: routing hack -->\n      <div class=\"navbar-brand\" [routerLink]=\"['campaigns']\" role=\"button\">\n        <img src=\"https://www.mediacom.no/content/themes/mediacom/assets/build/images/mediacom-logo.svg\"\n             style=\"height: 50px;\"/>\n      </div>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\"\n              data-target=\"#navbarCollapse\" aria-controls=\"navbarCollapse\"\n              aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\n        <ul class=\"navbar-nav mr-auto ml-2\">\n          <li class=\"nav-item\">\n            <!-- FIXME: routing hack -->\n            <div class=\"md-header-title\" [routerLink]=\"['campaigns']\" role=\"button\">mDigital</div>\n          </li>\n        </ul>\n        <ul class=\"navbar-nav mr-2 mt-md-0 navbar-right\">\n          <li class=\"nav-item mr-3\">\n            <a class=\"nav-link\" role=\"button\">\n              <span class=\"fa fa-wrench fa-lg md-main-color\"></span>\n            </a>\n          </li>\n          <!-- Commented out notifications placeholder, as the user can't use it yet\n          <li class=\"nav-item dropdown mr-3\" ngbDropdown placement=\"bottom-right\">\n            <a class=\"nav-link\" id=\"bell-dropdown\" role=\"button\"\n               ngbDropdownToggle aria-haspopup=\"true\" aria-expanded=\"true\">\n              <span class=\"fa fa-bell fa-lg md-main-color\"></span>\n            </a>\n\n            <ul class=\"notify-drop\" ngbDropdownMenu aria-labelledby=\"bell-dropdown\">\n              <div class=\"notify-drop-title\">\n                <div class=\"row\">\n                  <div class=\"col-md-9 col-sm-9 col-xs-9\">Mark all as read (<b>4</b>)</div>\n                  <div class=\"col-md-3 col-sm-3 col-xs-3 text-right\">\n                    <a class=\"rIcon allRead\" data-tooltip=\"tooltip\"\n                       data-placement=\"bottom\" title=\"t\u00FCm\u00FC okundu.\">\n                      <i class=\"fa fa-dot-circle-o\"></i>\n                    </a>\n                  </div>\n                </div>\n              </div>\n              &lt;!&ndash; end notify title &ndash;&gt;\n              &lt;!&ndash; notify content &ndash;&gt;\n              <div class=\"drop-content\">\n                <li class=\"row\">\n                  <div class=\"col-md-3 col-sm-3 col-xs-3\">\n                    <div class=\"notify-img\"><img src=\"http://placehold.it/45x45\" alt=\"\"></div>\n                  </div>\n                  <div class=\"col-md-9 col-sm-9 col-xs-9 pd-l0\">\n                    <span class=\"fa fa-plus-circle fa-lg\"></span>&nbsp;<a class=\"text-primary\">mol-sum-1</a> campaign\n                    created <a class=\"rIcon\"><i class=\"fa fa-dot-circle-o\"></i></a>\n                    <hr>\n                    <p class=\"time\">2017-11-03 14:51</p>\n                  </div>\n                </li>\n                <li class=\"row\">\n                  <div class=\"col-md-3 col-sm-3 col-xs-3\">\n                    <div class=\"notify-img\"><img src=\"http://placehold.it/45x45\" alt=\"\"></div>\n                  </div>\n                  <div class=\"col-md-9 col-sm-9 col-xs-9 pd-l0\"><span class=\"fa fa-edit fa-lg\"></span>&nbsp;<a\n                      class=\"text-primary\">bay-for-2</a> campaign modified <a class=\"rIcon\"><i\n                      class=\"fa fa-dot-circle-o\"></i></a>\n                    <hr>\n                    <p class=\"time\">2017-11-01 09:13</p>\n                  </div>\n                </li>\n                <li class=\"row\">\n                  <div class=\"col-md-3 col-sm-3 col-xs-3\">\n                    <div class=\"notify-img\"><img src=\"http://placehold.it/45x45\" alt=\"\"></div>\n                  </div>\n                  <div class=\"col-md-9 col-sm-9 col-xs-9 pd-l0\"><span class=\"fa fa-check fa-lg\"></span>&nbsp;<a\n                      class=\"text-primary\">son-day-2</a> campaign approved <a class=\"rIcon\"><i\n                      class=\"fa fa-dot-circle-o\"></i></a>\n                    <p>Client finally approved. New budget is 9 000 000 Ft</p>\n                    <p class=\"time\">2017-10-30 16:24</p>\n                  </div>\n                </li>\n                <li class=\"row\">\n                  <div class=\"col-md-3 col-sm-3 col-xs-3\">\n                    <div class=\"notify-img\"><img src=\"http://placehold.it/45x45\" alt=\"\"></div>\n                  </div>\n                  <div class=\"col-md-9 col-sm-9 col-xs-9 pd-l0\"><span class=\"fa fa-edit fa-lg\"></span>&nbsp;<a\n                      class=\"text-primary\">son-day-2</a> campaign modified <a class=\"rIcon\"><i\n                      class=\"fa fa-dot-circle-o\"></i></a>\n                    <p>The campaign time was extended with 1 month</p>\n                    <p class=\"time\">2017-10-29 12:48</p>\n                  </div>\n                </li>\n              </div>\n              <div class=\"notify-drop-footer text-center\">\n                <a><i class=\"fa fa-eye\"></i> See all notifications</a>\n              </div>\n            </ul>\n          </li>\n          End of notifications part -->\n          <li class=\"nav-item mr-3 dropdown\" ngbDropdown placement=\"bottom-right\">\n            <a class=\"nav-link\" role=\"button\" id=\"user-dropdown\" ngbDropdownToggle aria-haspopup=\"true\"\n               aria-expanded=\"true\">\n              <span class=\"fa fa-user fa-lg md-main-color\"></span>\n            </a>\n            <div ngbDropdownMenu aria-labelledby=\"user-dropdown\">\n              <a class=\"dropdown-item\" role=\"button\"><span class=\"fa fa-wrench fa-lg mr-3\"></span>Account</a>\n              <a class=\"dropdown-item\" role=\"button\"><span class=\"fa fa-sign-out fa-lg mr-3\"></span>Logout</a>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </nav>\n  ",
            styles: [__webpack_require__("../../../../../src/app/core/components/header.css")]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/core/components/layout.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LayoutComponent = (function () {
    function LayoutComponent(router) {
        this.router = router;
    }
    /* FIXME: This is used for the <main> tag's class. This should be removed
     * as soon as another way is found make the adruns table wider */
    LayoutComponent.prototype.notOnAdRuns = function () {
        return !this.router.url.includes('/adRuns');
    };
    // FIXME: used to hide the header on the login page, find a nicer solution
    LayoutComponent.prototype.notOnLogin = function () {
        return this.router.url !== '/login';
    };
    LayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'md-layout',
            /* FIXME: margin-top is a huge hack for ad-runs page nav header
             * Kill it with fire ASAP */
            /* FIXME: the ngClass distinction is vital for the wide adruns table display.
             * It's admittedly very hackinsh so kill it if there's a better way.. */
            template: "\n    <md-header *ngIf=\"notOnLogin()\"></md-header>\n    <main role=\"main\" [ngClass]=\"{ 'container': notOnAdRuns() }\" style=\"margin-top:100px;\">\n      <ng-content></ng-content>\n    </main>\n    <footer class=\"md-footer\">\n      Created by&nbsp;<a href=\"http://goodgrind.tech\">GoodGrind</a>\n    </footer>\n  ",
            styles: ["\n    .md-footer {\n      margin-top: 5rem;\n      bottom: 0;\n      width: 100%;\n      border-top: 1px solid #f9f9f9;\n      color: #fff;\n      padding: 10px 0;\n      background-color: #e1005d;\n      text-align: center;\n    }\n\n    .md-footer a {\n      color: #fff;\n      text-decoration: underline;\n    }\n\n    .md-footer a:hover {\n      color: #f988af;\n      text-decoration: none;\n    }\n  "]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/core/containers/app.ts":
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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'md-app',
            template: "\n    <md-layout>\n      <router-outlet></router-outlet>\n    </md-layout>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export COMPONENTS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__containers_app__ = __webpack_require__("../../../../../src/app/core/containers/app.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_layout__ = __webpack_require__("../../../../../src/app/core/components/layout.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_header__ = __webpack_require__("../../../../../src/app/core/components/header.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_2__containers_app__["a" /* AppComponent */],
    __WEBPACK_IMPORTED_MODULE_5__components_layout__["a" /* LayoutComponent */],
    __WEBPACK_IMPORTED_MODULE_6__components_header__["a" /* HeaderComponent */]
];
var CoreModule = (function () {
    function CoreModule() {
    }
    CoreModule_1 = CoreModule;
    CoreModule.forRoot = function () {
        return {
            ngModule: CoreModule_1
        };
    };
    CoreModule = CoreModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["b" /* NgbModule */]
            ],
            declarations: COMPONENTS,
            exports: COMPONENTS,
        })
    ], CoreModule);
    return CoreModule;
    var CoreModule_1;
}());



/***/ }),

/***/ "../../../../../src/app/reducers/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return reducers; });
/* unused harmony export logger */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return metaReducers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngrx_store_freeze__ = __webpack_require__("../../../../ngrx-store-freeze/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngrx_store_freeze___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ngrx_store_freeze__);

/**
 * storeFreeze prevents state from being mutated. When mutation occurs, an
 * exception will be thrown. This is useful during development mode to
 * ensure that none of the reducers accidentally mutates the state.
 */

/**
 * Our state is composed of a map of action reducer functions.
 * These reducer functions are called with each dispatched action
 * and the current or initial state and return a new immutable state.
 */
var reducers = {};
// console.log all actions
function logger(reducer) {
    return function (state, action) {
        console.groupCollapsed("Dispatched: " + action.type);
        console.log('Current state:', state);
        console.log('Action:', action);
        var newState = reducer(state, action);
        console.log('New state:', newState);
        console.groupEnd();
        return newState;
    };
}
/**
 * By default, @ngrx/store uses combineReducers with the reducer map to compose
 * the root meta-reducer. To add more meta-reducers, provide an array of meta-reducers
 * that will be composed to form the root meta-reducer.
 */
var metaReducers = !__WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].production ? [logger, __WEBPACK_IMPORTED_MODULE_1_ngrx_store_freeze__["storeFreeze"]] : [];


/***/ }),

/***/ "../../../../../src/app/routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
var routes = [
    // FIXME: routing hack
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    {
        path: 'campaigns',
        loadChildren: './campaigns/campaigns.module#CampaignsModule'
    }
];


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
    production: false
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map