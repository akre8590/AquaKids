import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AlumnoService } from '../shared/alumno.service';
import {Alumno} from '../shared/alumno.model';
import {element} from 'protractor';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-alumno-lista',
  templateUrl: './alumno-lista.component.html',
  styleUrls: ['./alumno-lista.component.css']
})
export class AlumnoListaComponent implements OnInit {
    alumnos$: Observable<any[]>;
    startAt: BehaviorSubject<string | null> = new BehaviorSubject('');
  alumnoLista : Alumno[];
  constructor(private alumnoService: AlumnoService, private tostr: ToastrService) { }

  ngOnInit() {
      this.alumnos$ = this.alumnoService.getAlumnos(this.startAt);
      var x = this.alumnoService.getData();
      x.snapshotChanges().subscribe(item => {
        this.alumnoLista = [];
        item.forEach(element => {
          var y = element.payload.toJSON();
          y["$key"] = element.key;
          this.alumnoLista.push(y as Alumno);
        });
      });
  }

  onEdit(al: Alumno) {
    this.alumnoService.selectedAlumno = Object.assign({}, al);
  }
    onDelete(key: string) {
    if (confirm('¿Está seguro de querer borrar el elemento?') === true) {
        this.alumnoService.deleteAlumno(key);
        this.tostr.warning('Borrado exitoso', 'Registro de Alumno');
    }
    }
    search(searchText) {
        this.startAt.next(searchText);
    }
}
