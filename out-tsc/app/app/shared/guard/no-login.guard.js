var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
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
        Injectable(),
        __metadata("design:paramtypes", [Router,
            AngularFireAuth,
            AuthService,
            ToastrService])
    ], NoLoginGuard);
    return NoLoginGuard;
}());
export { NoLoginGuard };
//# sourceMappingURL=no-login.guard.js.map