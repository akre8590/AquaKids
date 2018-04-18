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
var ngx_toastr_1 = require("ngx-toastr");
var auth_service_1 = require("../services/auth.service");
var UserGuard = (function () {
    function UserGuard(router, tostr, authService) {
        this.router = router;
        this.tostr = tostr;
        this.authService = authService;
    }
    UserGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.authService.afAuth.authState
            .take(1)
            .map(function (authState) { return !!authState; })
            .do(function (authenticated) {
            if (!authenticated) {
                _this.tostr.error('Inicia Sesión por favor');
                _this.router.navigate(['/login']);
            }
        });
    };
    UserGuard = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.Router, ngx_toastr_1.ToastrService, auth_service_1.AuthService])
    ], UserGuard);
    return UserGuard;
}());
exports.UserGuard = UserGuard;
//# sourceMappingURL=user.guard.js.map