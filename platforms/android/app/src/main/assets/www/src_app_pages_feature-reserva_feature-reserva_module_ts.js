(self["webpackChunkacelera_app"] = self["webpackChunkacelera_app"] || []).push([["src_app_pages_feature-reserva_feature-reserva_module_ts"],{

/***/ 8321:
/*!*************************************************************************!*\
  !*** ./src/app/pages/feature-reserva/feature-reserva-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeatureReservaPageRoutingModule": () => (/* binding */ FeatureReservaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _feature_reserva_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feature-reserva.page */ 4819);




const routes = [
    {
        path: '',
        component: _feature_reserva_page__WEBPACK_IMPORTED_MODULE_0__.FeatureReservaPage
    }
];
let FeatureReservaPageRoutingModule = class FeatureReservaPageRoutingModule {
};
FeatureReservaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FeatureReservaPageRoutingModule);



/***/ }),

/***/ 2041:
/*!*****************************************************************!*\
  !*** ./src/app/pages/feature-reserva/feature-reserva.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeatureReservaPageModule": () => (/* binding */ FeatureReservaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _feature_reserva_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feature-reserva-routing.module */ 8321);
/* harmony import */ var _feature_reserva_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feature-reserva.page */ 4819);







let FeatureReservaPageModule = class FeatureReservaPageModule {
};
FeatureReservaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _feature_reserva_routing_module__WEBPACK_IMPORTED_MODULE_0__.FeatureReservaPageRoutingModule
        ],
        declarations: [_feature_reserva_page__WEBPACK_IMPORTED_MODULE_1__.FeatureReservaPage]
    })
], FeatureReservaPageModule);



/***/ }),

/***/ 4819:
/*!***************************************************************!*\
  !*** ./src/app/pages/feature-reserva/feature-reserva.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeatureReservaPage": () => (/* binding */ FeatureReservaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_feature_reserva_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./feature-reserva.page.html */ 1567);
/* harmony import */ var _feature_reserva_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feature-reserva.page.scss */ 1056);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);





let FeatureReservaPage = class FeatureReservaPage {
    constructor(router) {
        this.router = router;
    }
    churrasqueira() {
        this.router.navigate(['feature-reserva-churrasqueira']);
    }
    ngOnInit() {
    }
};
FeatureReservaPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
FeatureReservaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-feature-reserva',
        template: _raw_loader_feature_reserva_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_feature_reserva_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FeatureReservaPage);



/***/ }),

/***/ 1056:
/*!*****************************************************************!*\
  !*** ./src/app/pages/feature-reserva/feature-reserva.page.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".full-width {\n  width: 100px;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  width: 100%;\n}\n\nion-button {\n  margin: 10%;\n}\n\np {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZlYXR1cmUtcmVzZXJ2YS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBRUEsWUFBQTtFQUNBLFdBQUE7QUFESjs7QUFJQTtFQUVJLFdBQUE7QUFGSjs7QUFLQTtFQUVJLFlBQUE7QUFISiIsImZpbGUiOiJmZWF0dXJlLXJlc2VydmEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1bGwtd2lkdGhcclxue1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOjA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5pb24tYnV0dG9uXHJcbntcclxuICAgIG1hcmdpbjoxMCU7XHJcbn1cclxuXHJcbnBcclxue1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59Il19 */");

/***/ }),

/***/ 1567:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/feature-reserva/feature-reserva.page.html ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div class=\"flex-center\" class=\"full-width\" >\n    <ion-card>\n      <ion-card-header>\n        <ion-card-title>Áreas de lazer disponíveis:</ion-card-title>\n      </ion-card-header>\n    </ion-card>   \n    <ion-button expand=\"full\" (click)=\"churrasqueira()\">Churrasqueira</ion-button>\n    <ion-button expand=\"full\">Salão de Festas</ion-button>\n    <ion-button expand=\"full\">Quadra de Futebol</ion-button>\n  </div>\n</ion-content>\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_feature-reserva_feature-reserva_module_ts.js.map