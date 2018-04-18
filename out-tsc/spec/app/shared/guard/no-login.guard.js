"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var auth_1 = require("angularfire2/auth");
var auth_service_1 = require("../services/auth.service");
var ngx_toastr_1 = require("ngx-toastr");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
require("rxjs/add/operator/take");
var NoLoginGuard = (function () {
    function NoLoginGuard(router, afAuth, authService, toast) {
        this.router = router;
        this.afAuth = afAuth;
        this.authService = authService;
        this.toast = toast;
    }
    NoLoginGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.authService.afAuth.authState
            .take(1)
            .map(function (authState) { return !!authState; })
            .do(function (authenticated) {
            if (authenticated) {
                _this.toast.error('Cerrar sesión por favor');
                _this.router.navigate(['/home']);
            }
        });
    };
    NoLoginGuard = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.Router,
            auth_1.AngularFireAuth,
            auth_service_1.AuthService,
            ngx_toastr_1.ToastrService])
    ], NoLoginGuard);
    return NoLoginGuard;
}());
exports.NoLoginGuard = NoLoginGuard;
//# sourceMappingURL=no-login.guard.js.map