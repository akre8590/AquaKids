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
import { AlumnoService } from '../shared/alumno.service';
import { ToastrService } from 'ngx-toastr';
var AlumnoComponent = (function () {
    function AlumnoComponent(alumnoService, tostr) {
        this.alumnoService = alumnoService;
        this.tostr = tostr;
    }
    AlumnoComponent.prototype.ngOnInit = function () {
        this.resetForm();
    };
    AlumnoComponent.prototype.onSubmit = function (alumnoForm) {
        if (alumnoForm.value.$key == null)
            this.alumnoService.insertAlumno(alumnoForm.value);
        else
            this.alumnoService.updateAlumno(alumnoForm.value);
        this.resetForm(alumnoForm);
        this.tostr.success('Guardado exitoso', 'Alumno Registrado');
    };
    AlumnoComponent.prototype.resetForm = function (alumnoForm) {
        if (alumnoForm != null)
            alumnoForm.reset();
        this.alumnoService.selectedAlumno = {
            $key: null,
            nombre: '',
            fecha: '',
            nombre_tutor: '',
            direccion: '',
            tel_tutor: '',
            correo: ''
        };
    };
    AlumnoComponent = __decorate([
        Component({
            selector: 'app-alumno',
            templateUrl: './alumno.component.html',
            styleUrls: ['./alumno.component.css']
        }),
        __metadata("design:paramtypes", [AlumnoService, ToastrService])
    ], AlumnoComponent);
    return AlumnoComponent;
}());
export { AlumnoComponent };
//# sourceMappingURL=alumno.component.js.map