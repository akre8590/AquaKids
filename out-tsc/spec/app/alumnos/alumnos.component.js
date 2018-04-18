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
var alumno_service_1 = require("./shared/alumno.service");
var auth_service_1 = require("../shared/services/auth.service");
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
        core_1.Component({
            selector: 'app-alumnos',
            templateUrl: './alumnos.component.html',
            styleUrls: ['./alumnos.component.css'],
            providers: [alumno_service_1.AlumnoService]
        }),
        __metadata("design:paramtypes", [alumno_service_1.AlumnoService, auth_service_1.AuthService])
    ], AlumnosComponent);
    return AlumnosComponent;
}());
exports.AlumnosComponent = AlumnosComponent;
//# sourceMappingURL=alumnos.component.js.map