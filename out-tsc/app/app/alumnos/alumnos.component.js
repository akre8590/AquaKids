var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { AlumnoService } from './shared/alumno.service';
import { AuthService } from '../shared/services/auth.service';
var AlumnosComponent = (function () {
    function AlumnosComponent(alumnoService, authService) {
        this.alumnoService = alumnoService;
        this.authService = authService;
    }
    AlumnosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getAuth().subscribe(function (auth) {
            if (auth && auth.email === 'casas.diego@outlook.com') {
                _this.isAdmin = true;
            }
            else {
                _this.isAdmin = false;
            }
        });
    };
    AlumnosComponent = __decorate([
        Component({
            selector: 'app-alumnos',
            templateUrl: './alumnos.component.html',
            styleUrls: ['./alumnos.component.css'],
            providers: [AlumnoService]
        }),
        __metadata("design:paramtypes", [AlumnoService, AuthService])
    ], AlumnosComponent);
    return AlumnosComponent;
}());
export { AlumnosComponent };
//# sourceMappingURL=alumnos.component.js.map