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
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AlumnoService } from '../shared/alumno.service';
var AlumnoSearchComponent = (function () {
    function AlumnoSearchComponent(alumnoSVC) {
        this.alumnoSVC = alumnoSVC;
        this.startAt = new BehaviorSubject('');
    }
    AlumnoSearchComponent.prototype.ngOnInit = function () {
        this.alumno$ = this.alumnoSVC.getAlumnos(this.startAt);
    };
    AlumnoSearchComponent.prototype.search = function (searchText) {
        this.startAt.next(searchText);
    };
    AlumnoSearchComponent = __decorate([
        Component({
            selector: 'app-alumno-search',
            templateUrl: './alumno-search.component.html',
            styleUrls: ['./alumno-search.component.css']
        }),
        __metadata("design:paramtypes", [AlumnoService])
    ], AlumnoSearchComponent);
    return AlumnoSearchComponent;
}());
export { AlumnoSearchComponent };
//# sourceMappingURL=alumno-search.component.js.map