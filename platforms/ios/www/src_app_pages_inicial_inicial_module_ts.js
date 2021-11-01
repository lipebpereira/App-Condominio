(self["webpackChunkacelera_app"] = self["webpackChunkacelera_app"] || []).push([["src_app_pages_inicial_inicial_module_ts"],{

/***/ 6571:
/*!*********************************************************!*\
  !*** ./src/app/pages/inicial/inicial-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InicialPageRoutingModule": () => (/* binding */ InicialPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _inicial_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inicial.page */ 3586);




const routes = [
    {
        path: '',
        component: _inicial_page__WEBPACK_IMPORTED_MODULE_0__.InicialPage
    }
];
let InicialPageRoutingModule = class InicialPageRoutingModule {
};
InicialPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], InicialPageRoutingModule);



/***/ }),

/***/ 6921:
/*!*************************************************!*\
  !*** ./src/app/pages/inicial/inicial.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InicialPageModule": () => (/* binding */ InicialPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _inicial_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inicial-routing.module */ 6571);
/* harmony import */ var _inicial_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inicial.page */ 3586);







let InicialPageModule = class InicialPageModule {
};
InicialPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _inicial_routing_module__WEBPACK_IMPORTED_MODULE_0__.InicialPageRoutingModule
        ],
        declarations: [_inicial_page__WEBPACK_IMPORTED_MODULE_1__.InicialPage]
    })
], InicialPageModule);



/***/ }),

/***/ 3586:
/*!***********************************************!*\
  !*** ./src/app/pages/inicial/inicial.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InicialPage": () => (/* binding */ InicialPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_inicial_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./inicial.page.html */ 4896);
/* harmony import */ var _inicial_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inicial.page.scss */ 788);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);





let InicialPage = class InicialPage {
    constructor(router) {
        this.router = router;
    }
    login() {
        this.router.navigate(['login']);
    }
    teste() {
        this.router.navigate(['features']);
    }
    ngOnInit() {
    }
};
InicialPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
InicialPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-inicial',
        template: _raw_loader_inicial_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_inicial_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], InicialPage);



/***/ }),

/***/ 788:
/*!*************************************************!*\
  !*** ./src/app/pages/inicial/inicial.page.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-card-title {\n  color: Black;\n}\n\np {\n  color: Black;\n}\n\nion-card {\n  width: 80%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluaWNpYWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksWUFBQTtBQUFKOztBQUdBO0VBRUksWUFBQTtBQURKOztBQUlBO0VBRUksVUFBQTtBQUZKIiwiZmlsZSI6ImluaWNpYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQtdGl0bGVcclxue1xyXG4gICAgY29sb3I6IEJsYWNrO1xyXG59XHJcblxyXG5wXHJcbntcclxuICAgIGNvbG9yOiBCbGFjaztcclxufVxyXG5cclxuaW9uLWNhcmRcclxue1xyXG4gICAgd2lkdGg6IDgwJTtcclxufSJdfQ== */");

/***/ }),

/***/ 4896:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inicial/inicial.page.html ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div class=\"flex-center\">\n    <ion-card>\n      <ion-card-header>\n        <ion-card-title>Acelera</ion-card-title>\n      </ion-card-header>\n    \n      <ion-card-content>\n        <p>Seja bem vindo ao acelera app!</p>\n        <ion-button (click)=\"login()\" expand=\"block\">Sou Morador</ion-button>\n        <ion-button (click)=\"teste()\" expand=\"block\">Quero Testar</ion-button>\n      </ion-card-content>\n    </ion-card>    \n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_inicial_inicial_module_ts.js.map