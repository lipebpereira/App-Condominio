(self["webpackChunkacelera_app"] = self["webpackChunkacelera_app"] || []).push([["src_app_pages_features_features_module_ts"],{

/***/ 565:
/*!***********************************************************!*\
  !*** ./src/app/pages/features/features-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeaturesPageRoutingModule": () => (/* binding */ FeaturesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _features_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./features.page */ 5332);




const routes = [
    {
        path: '',
        component: _features_page__WEBPACK_IMPORTED_MODULE_0__.FeaturesPage
    }
];
let FeaturesPageRoutingModule = class FeaturesPageRoutingModule {
};
FeaturesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FeaturesPageRoutingModule);



/***/ }),

/***/ 4317:
/*!***************************************************!*\
  !*** ./src/app/pages/features/features.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeaturesPageModule": () => (/* binding */ FeaturesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _features_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./features-routing.module */ 565);
/* harmony import */ var _features_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./features.page */ 5332);







let FeaturesPageModule = class FeaturesPageModule {
};
FeaturesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _features_routing_module__WEBPACK_IMPORTED_MODULE_0__.FeaturesPageRoutingModule
        ],
        declarations: [_features_page__WEBPACK_IMPORTED_MODULE_1__.FeaturesPage]
    })
], FeaturesPageModule);



/***/ }),

/***/ 5332:
/*!*************************************************!*\
  !*** ./src/app/pages/features/features.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeaturesPage": () => (/* binding */ FeaturesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_features_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./features.page.html */ 435);
/* harmony import */ var _features_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./features.page.scss */ 5139);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);





let FeaturesPage = class FeaturesPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    reserva() {
        this.router.navigate(['feature-reserva']);
    }
};
FeaturesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
FeaturesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-features',
        template: _raw_loader_features_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_features_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FeaturesPage);



/***/ }),

/***/ 5139:
/*!***************************************************!*\
  !*** ./src/app/pages/features/features.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".full-width {\n  width: 100px;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  width: 100%;\n}\n\nion-button {\n  margin: 10%;\n}\n\np {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZlYXR1cmVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFFQSxZQUFBO0VBQ0EsV0FBQTtBQURKOztBQUlBO0VBRUksV0FBQTtBQUZKOztBQUtBO0VBRUksWUFBQTtBQUhKIiwiZmlsZSI6ImZlYXR1cmVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsLXdpZHRoXHJcbntcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDowO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgXHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuaW9uLWJ1dHRvblxyXG57XHJcbiAgICBtYXJnaW46MTAlO1xyXG59XHJcblxyXG5wXHJcbntcclxuICAgIGNvbG9yOiBibGFjaztcclxufSJdfQ== */");

/***/ }),

/***/ 435:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/features/features.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div class=\"flex-center\" class=\"full-width\" >\n    <ion-card>\n      <ion-card-header>\n        <ion-card-title>Informações do usuário:</ion-card-title>\n      </ion-card-header>\n    \n      <ion-card-content>\n        <p>Nome: Felipe</p>\n        <p>Condominio: Raizes</p>\n      </ion-card-content>\n    </ion-card>   \n    <ion-button (click)=\"reserva()\" expand=\"full\" >Reservar área de Lazer</ion-button>\n    <ion-button expand=\"full\">Encomendas</ion-button>\n    <ion-button expand=\"full\">Liberar visitantes</ion-button>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_features_features_module_ts.js.map