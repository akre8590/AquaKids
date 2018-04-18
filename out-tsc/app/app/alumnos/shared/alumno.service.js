var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
import { AngularFireDatabase } from 'angularfire2/database';
import { Alumno } from './alumno.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
var AlumnoService = (function () {
    function AlumnoService(firebase) {
        this.firebase = firebase;
        this.selectedAlumno = new Alumno();
    }
    AlumnoService.prototype.getData = function () {
        this.alumnoList = this.firebase.list('alumnos');
        return this.alumnoList;
    };
    AlumnoService.prototype.insertAlumno = function (alumno) {
        this.alumnoList.push({
            nombre: alumno.nombre,
            fecha: alumno.fecha,
            nombre_tutor: alumno.nombre_tutor,
            direccion: alumno.direccion,
            tel_tutor: alumno.tel_tutor,
            correo: alumno.correo
        });
    };
    AlumnoService.prototype.updateAlumno = function (alumno) {
        this.alumnoList.update(alumno.$key, {
            nombre: alumno.nombre,
            fecha: alumno.fecha,
            nombre_tutor: alumno.nombre_tutor,
            direccion: alumno.direccion,
            tel_tutor: alumno.tel_tutor,
            correo: alumno.correo
        });
    };
    AlumnoService.prototype.deleteAlumno = function ($key) {
        this.alumnoList.remove($key);
    };
    AlumnoService.prototype.getAlumnos = function (start) {
        var _this = this;
        return start.switchMap(function (startText) {
            var endText = startText + '\uf8ff';
            return _this.firebase
                .list('/alumnos', function (ref) {
                return ref
                    .orderByChild('nombre')
                    .limitToFirst(10)
                    .startAt(startText)
                    .endAt(endText);
            })
                .snapshotChanges()
                .debounceTime(200)
                .distinctUntilChanged()
                .map(function (changes) {
                return changes.map(function (c) {
                    return __assign({ key: c.payload.key }, c.payload.val());
                });
            });
        });
    };
    AlumnoService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [AngularFireDatabase])
    ], AlumnoService);
    return AlumnoService;
}());
export { AlumnoService };
//# sourceMappingURL=alumno.service.js.map