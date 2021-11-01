(self["webpackChunkacelera_app"] = self["webpackChunkacelera_app"] || []).push([["src_app_pages_loader_loader_module_ts"],{

/***/ 1369:
/*!*******************************************************!*\
  !*** ./src/app/pages/loader/loader-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoaderPageRoutingModule": () => (/* binding */ LoaderPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _loader_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loader.page */ 7281);




const routes = [
    {
        path: '',
        component: _loader_page__WEBPACK_IMPORTED_MODULE_0__.LoaderPage
    }
];
let LoaderPageRoutingModule = class LoaderPageRoutingModule {
};
LoaderPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoaderPageRoutingModule);



/***/ }),

/***/ 8487:
/*!***********************************************!*\
  !*** ./src/app/pages/loader/loader.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoaderPageModule": () => (/* binding */ LoaderPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _loader_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loader-routing.module */ 1369);
/* harmony import */ var _loader_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loader.page */ 7281);







let LoaderPageModule = class LoaderPageModule {
};
LoaderPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _loader_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoaderPageRoutingModule
        ],
        declarations: [_loader_page__WEBPACK_IMPORTED_MODULE_1__.LoaderPage]
    })
], LoaderPageModule);



/***/ }),

/***/ 7281:
/*!*********************************************!*\
  !*** ./src/app/pages/loader/loader.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoaderPage": () => (/* binding */ LoaderPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_loader_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./loader.page.html */ 4846);
/* harmony import */ var _loader_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loader.page.scss */ 5219);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);





let LoaderPage = class LoaderPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        setTimeout(() => {
            this.router.navigate(['inicial']);
        }, 500);
    }
};
LoaderPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
LoaderPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-loader',
        template: _raw_loader_loader_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_loader_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoaderPage);



/***/ }),

/***/ 5219:
/*!***********************************************!*\
  !*** ./src/app/pages/loader/loader.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2FkZXIucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 4846:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/loader/loader.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div class=\"flex-center\">\n    <ion-spinner name=\"crescent\" color=\"grey\"></ion-spinner>\n  </div>  \n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_loader_loader_module_ts.js.map