import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Alumno } from './alumno.model';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
@Injectable()
export class AlumnoService {
  alumnoList: AngularFireList<any>;
  selectedAlumno: Alumno = new Alumno();
  constructor(private firebase: AngularFireDatabase) { }

  getData(){
    this.alumnoList = this.firebase.list('alumnos');
    return this.alumnoList;
  }
  insertAlumno(alumno: Alumno) {
    this.alumnoList.push ({
        nombre: alumno.nombre,
        fecha: alumno.fecha,
        nombre_tutor: alumno.nombre_tutor,
        direccion: alumno.direccion,
        tel_tutor: alumno.tel_tutor,
        correo: alumno.correo
    });
  }
  updateAlumno(alumno: Alumno) {
    this.alumnoList.update(alumno.$key,{
        nombre: alumno.nombre,
        fecha: alumno.fecha,
        nombre_tutor: alumno.nombre_tutor,
        direccion: alumno.direccion,
        tel_tutor: alumno.tel_tutor,
        correo: alumno.correo
    });
  }
  deleteAlumno($key : string){
    this.alumnoList.remove($key);
  }
    getAlumnos(start: BehaviorSubject<string>): Observable<any[]> {
        return start.switchMap(startText => {
            const endText = startText + '\uf8ff';
            return this.firebase
                .list('/alumnos', ref =>
                    ref
                        .orderByChild('nombre')
                        .limitToFirst(10)
                        .startAt(startText)
                        .endAt(endText)
                )
                .snapshotChanges()
                .debounceTime(200)
                .distinctUntilChanged()
                .map(changes => {
                    return changes.map(c => {
                        return { key: c.payload.key, ...c.payload.val() };
                    });
                });
        });
    }
}
