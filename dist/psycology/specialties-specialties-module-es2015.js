(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["specialties-specialties-module"],{

/***/ "./src/app/pages/specialties/detail/detail.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/specialties/detail/detail.component.ts ***!
  \**************************************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class DetailComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
DetailComponent.ɵfac = function DetailComponent_Factory(t) { return new (t || DetailComponent)(); };
DetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetailComponent, selectors: [["app-detail"]], decls: 3, vars: 0, consts: [[1, "container", "mt-5"]], template: function DetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "adicionar titulo, resumo, imagens...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NwZWNpYWx0aWVzL2RldGFpbC9kZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-detail',
                templateUrl: './detail.component.html',
                styleUrls: ['./detail.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/specialties/specialties-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/specialties/specialties-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: SpecialtiesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecialtiesRoutingModule", function() { return SpecialtiesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _specialties_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./specialties.component */ "./src/app/pages/specialties/specialties.component.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/pages/specialties/detail/detail.component.ts");
/* harmony import */ var src_app_shared_resolvers_specialties_resolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/resolvers/specialties-resolver */ "./src/app/shared/resolvers/specialties-resolver.ts");







const routes = [
    {
        path: 'intervencoes',
        component: _specialties_component__WEBPACK_IMPORTED_MODULE_2__["SpecialtiesComponent"],
    },
    {
        path: '',
        component: _specialties_component__WEBPACK_IMPORTED_MODULE_2__["SpecialtiesComponent"],
    },
    {
        path: ':id',
        component: _detail_detail_component__WEBPACK_IMPORTED_MODULE_3__["DetailComponent"],
        resolve: {
            specialty: src_app_shared_resolvers_specialties_resolver__WEBPACK_IMPORTED_MODULE_4__["SpecialtiesResolver"]
        }
    },
];
class SpecialtiesRoutingModule {
}
SpecialtiesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SpecialtiesRoutingModule });
SpecialtiesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SpecialtiesRoutingModule_Factory(t) { return new (t || SpecialtiesRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SpecialtiesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpecialtiesRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/specialties/specialties.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/specialties/specialties.module.ts ***!
  \*********************************************************/
/*! exports provided: SpecialtiesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecialtiesModule", function() { return SpecialtiesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _specialties_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./specialties-routing.module */ "./src/app/pages/specialties/specialties-routing.module.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/pages/specialties/detail/detail.component.ts");
/* harmony import */ var src_app_shared_resolvers_specialties_resolver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/resolvers/specialties-resolver */ "./src/app/shared/resolvers/specialties-resolver.ts");







class SpecialtiesModule {
}
SpecialtiesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SpecialtiesModule });
SpecialtiesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SpecialtiesModule_Factory(t) { return new (t || SpecialtiesModule)(); }, providers: [
        src_app_shared_resolvers_specialties_resolver__WEBPACK_IMPORTED_MODULE_5__["SpecialtiesResolver"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _specialties_routing_module__WEBPACK_IMPORTED_MODULE_3__["SpecialtiesRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SpecialtiesModule, { declarations: [
        // SpecialtiesComponent,
        _detail_detail_component__WEBPACK_IMPORTED_MODULE_4__["DetailComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _specialties_routing_module__WEBPACK_IMPORTED_MODULE_3__["SpecialtiesRoutingModule"],
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpecialtiesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    // SpecialtiesComponent,
                    _detail_detail_component__WEBPACK_IMPORTED_MODULE_4__["DetailComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _specialties_routing_module__WEBPACK_IMPORTED_MODULE_3__["SpecialtiesRoutingModule"],
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]
                ],
                providers: [
                    src_app_shared_resolvers_specialties_resolver__WEBPACK_IMPORTED_MODULE_5__["SpecialtiesResolver"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/resolvers/specialties-resolver.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/resolvers/specialties-resolver.ts ***!
  \**********************************************************/
/*! exports provided: SpecialtiesResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecialtiesResolver", function() { return SpecialtiesResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_general_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/general.service */ "./src/app/shared/services/general.service.ts");



class SpecialtiesResolver {
    constructor(generalService) {
        this.generalService = generalService;
    }
    resolve(route, state) {
        const id = route.params.id;
        return this.generalService.getSpecialtiesDetails(id);
    }
}
SpecialtiesResolver.ɵfac = function SpecialtiesResolver_Factory(t) { return new (t || SpecialtiesResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_general_service__WEBPACK_IMPORTED_MODULE_1__["GeneralService"])); };
SpecialtiesResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SpecialtiesResolver, factory: SpecialtiesResolver.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpecialtiesResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _services_general_service__WEBPACK_IMPORTED_MODULE_1__["GeneralService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=specialties-specialties-module-es2015.js.map