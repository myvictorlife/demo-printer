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

/***/ "../../../../../src/app/Communicator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Communucator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_socket_io_client__);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var Communucator = (function () {
    function Communucator() {
    }
    Communucator.prototype.connect = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.log('connectiong...');
                        _a = this;
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                var socket = __WEBPACK_IMPORTED_MODULE_0_socket_io_client__(url);
                                socket.on('connect_error', function (err) {
                                    socket.close();
                                    reject(err);
                                });
                                socket.on('connect', function () {
                                    console.log('connect');
                                    resolve(socket);
                                });
                            })];
                    case 1:
                        _a.socket = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Communucator.prototype.close = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.socket) {
                    this.socket.close();
                    this.socket = undefined;
                }
                return [2 /*return*/];
            });
        });
    };
    Communucator.prototype.sendPrintMessage = function (conf) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.socket) return [3 /*break*/, 2];
                        console.log('send');
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                _this.socket.emit('print_message', conf);
                                _this.socket.on('print_answer', function (err) {
                                    console.log('answer');
                                    if (!err || JSON.stringify(err) === '{}')
                                        resolve();
                                    else
                                        reject(err);
                                });
                                _this.socket.on('error', function (err) {
                                    reject(err);
                                });
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2: throw new Error('no socket');
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return Communucator;
}());

;


/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"margin: 22px\">\n    <print-button\n        [url]=\"'localhost:3478'\"\n        [order] = \"order\">\n        test print button\n    </print-button>\n</div>"

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
        this.order = {
            "user": {
                "id": 1,
                "img": "https://graph.facebook.com/1105150332953824/picture?type=large",
                "first_name": "Victor César",
                "last_name": "Peixoto Barbosa",
                "email": "victorc_mg@hotmail.com",
                "cpf": null,
                "country_code": "55",
                "phone": "9883838"
            },
            "restaurant": {
                "id": 1,
                "img": "https://subdominio.uaifoody.info/upload/uploads/avatarsacia3.png",
                "name": "Viva Vegê",
                "latitude": "-18.9256384",
                "longitude": "-48.2743313",
                "delivery_min": "50MIN",
                "delivery_max": "1HORA",
                "frete": 7,
                "frete_km": 1.5,
                "km_normal": "1.5KM",
                "phone": "34999029993",
                "distance": 2.396257129925098,
                "address": {
                    "street": "Avenida Rondon Pacheco",
                    "number": "2300",
                    "complement": "Loja 41 - Praça de Alimentação Griff Shopping",
                    "neighborhood": "Saraiva",
                    "city": "Uberlândia",
                    "state": "Minas Gerais",
                    "cep": "38408-404"
                }
            },
            "items": [{
                    "id": 1,
                    "name": "Burguer 01",
                    "price": 12,
                    "cuisines_id": 2,
                    "restaurants_id": 1,
                    "thumb": "https://subdominio.uaifoody.info/upload/uploads/burguer212.jpg",
                    "ingredients": "Pão, Hamburguer de Berinjela, Cheddar, Alface Americana e Tomate.",
                    "amount": "0",
                    "disponible": true,
                    "options": {
                        "required": {
                            "id": 1,
                            "name": "Vegetariano",
                            "price": 12,
                            "required": true,
                            "item_id": 1,
                            "createdBy": null,
                            "updatedBy": null,
                            "createdAt": "2017-11-01T10:06:57.000Z",
                            "updatedAt": "2017-11-01T10:06:57.000Z"
                        },
                        "optional": [{
                                "id": 3,
                                "name": "Batata Palito (200grs)",
                                "price": 4,
                                "required": false,
                                "item_id": 1,
                                "createdBy": null,
                                "updatedBy": null,
                                "createdAt": "2017-11-01T10:07:53.000Z",
                                "updatedAt": "2017-11-01T10:07:53.000Z",
                                "selected": true
                            }, {
                                "id": 12,
                                "name": "Cebola Roxa",
                                "price": 1.5,
                                "required": false,
                                "item_id": 1,
                                "createdBy": null,
                                "updatedBy": null,
                                "createdAt": "2017-11-01T10:10:16.000Z",
                                "updatedAt": "2017-11-01T10:10:41.000Z",
                                "selected": true
                            }, {
                                "id": 14,
                                "name": "Cheddar Vegano (fatia)",
                                "price": 3,
                                "required": false,
                                "item_id": 1,
                                "createdBy": null,
                                "updatedBy": null,
                                "createdAt": "2017-11-01T10:11:34.000Z",
                                "updatedAt": "2017-11-01T10:11:34.000Z",
                                "selected": true
                            }]
                    },
                    "quantity": 1,
                    "itemRequired": 1,
                    "total": 20.5
                }, {
                    "id": 16,
                    "name": "Omelete 16",
                    "price": "13.50",
                    "cuisines_id": 4,
                    "restaurants_id": 1,
                    "thumb": null,
                    "ingredients": "3 Ovos, Cheddar, Milho, Azeitona, Ervas Frescas e Salada Simples.",
                    "amount": "0",
                    "disponible": true,
                    "options": {
                        "required": {},
                        "optional": [{
                                "id": 382,
                                "name": "Milho",
                                "price": 2,
                                "required": false,
                                "item_id": 16,
                                "createdBy": null,
                                "updatedBy": null,
                                "createdAt": "2017-11-03T11:52:54.000Z",
                                "updatedAt": "2017-11-03T11:52:54.000Z",
                                "selected": true
                            }, {
                                "id": 383,
                                "name": "Palmito",
                                "price": 3,
                                "required": false,
                                "item_id": 16,
                                "createdBy": null,
                                "updatedBy": null,
                                "createdAt": "2017-11-03T11:53:01.000Z",
                                "updatedAt": "2017-11-03T11:53:01.000Z",
                                "selected": true
                            }]
                    },
                    "quantity": 1,
                    "total": 18.5
                }],
            "address": {
                "street": "Rua Niterói • 1400",
                "complement": null,
                "neighborhood": "Nossa Senhora Aparecida",
                "city": "Uberlândia",
                "state": "Minas Gerais",
                "cep": "38440-046",
                "latitude": -18.9063829,
                "longitude": -48.2641026
            },
            "payment": {
                "id": 1,
                "img": "https://subdominio.uaifoody.info/upload/uploads/money.png",
                "name": "Dinheiro",
                "card": null,
                "is_online": 0,
                "createdBy": null,
                "updatedBy": "admin@gmail.com",
                "createdAt": "2017-10-03T13:24:36.000Z",
                "updatedAt": "2017-10-29T11:22:25.000Z",
                "RestaurantsPayments": {
                    "restaurants_id": 1,
                    "payments_id": 1
                }
            },
            "money": "R$ 50,00"
        };
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app',
            template: __webpack_require__("../../../../../src/app/app.component.html")
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_print_button__ = __webpack_require__("../../../../../src/app/app.print.button.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_3__app_print_button__["a" /* PrintButtonComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.print.button.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <button type=\"button\" class=\"btn btn-primary print-button\" (click)=\"send()\">\n        <ng-content></ng-content>\n    </button>\n    <div style=\"margin-top: 12px\">{{status}}</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.print.button.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrintButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Communicator__ = __webpack_require__("../../../../../src/app/Communicator.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var PrintButtonComponent = (function () {
    function PrintButtonComponent() {
        this.status = '';
    }
    /**
     * Print method
     */
    PrintButtonComponent.prototype.send = function () {
        return __awaiter(this, void 0, void 0, function () {
            var communicator, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        communicator = new __WEBPACK_IMPORTED_MODULE_1__Communicator__["a" /* Communucator */]();
                        return [4 /*yield*/, communicator.connect(this.url)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, communicator.sendPrintMessage(this.order)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, communicator.close()];
                    case 3:
                        _a.sent();
                        this.status = 'printed';
                        return [3 /*break*/, 5];
                    case 4:
                        err_1 = _a.sent();
                        this.status = "" + err_1;
                        console.log(err_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", String)
    ], PrintButtonComponent.prototype, "url", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], PrintButtonComponent.prototype, "order", void 0);
    PrintButtonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'print-button',
            template: __webpack_require__("../../../../../src/app/app.print.button.html")
        })
    ], PrintButtonComponent);
    return PrintButtonComponent;
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map