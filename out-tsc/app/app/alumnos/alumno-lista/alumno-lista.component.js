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
import { ToastrService } from 'ngx-toastr';
var AlumnoListaComponent = (function () {
    function AlumnoListaComponent(alumnoService, tostr) {
        this.alumnoService = alumnoService;
        this.tostr = tostr;
        this.startAt = new BehaviorSubject('');
    }
    AlumnoListaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.alumnos$ = this.alumnoService.getAlumnos(this.startAt);
        var x = this.alumnoService.getData();
        x.snapshotChanges().subscribe(function (item) {
            _this.alumnoLista = [];
            item.forEach(function (element) {
                var y = element.payload.toJSON();
                y["$key"] = element.key;
                _this.alumnoLista.push(y);
            });
        });
    };
    AlumnoListaComponent.prototype.onEdit = function (al) {
        this.alumnoService.selectedAlumno = Object.assign({}, al);
    };
    AlumnoListaComponent.prototype.onDelete = function (key) {
        if (confirm('¿Está seguro de querer borrar el elemento?') === true) {
            this.alumnoService.deleteAlumno(key);
            this.tostr.warning('Borrado exitoso', 'Registro de Alumno');
        }
    };
    AlumnoListaComponent.prototype.search = function (searchText) {
        this.startAt.next(searchText);
    };
    AlumnoListaComponent = __decorate([
        Component({
            selector: 'app-alumno-lista',
            templateUrl: './alumno-lista.component.html',
            styleUrls: ['./alumno-lista.component.css']
        }),
        __metadata("design:paramtypes", [AlumnoService, ToastrService])
    ], AlumnoListaComponent);
    return AlumnoListaComponent;
}());
export { AlumnoListaComponent };
//# sourceMappingURL=alumno-lista.component.js.map