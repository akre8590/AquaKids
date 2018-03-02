import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AlumnoService } from '../shared/alumno.service';

@Component({
  selector: 'app-alumno-search',
  templateUrl: './alumno-search.component.html',
  styleUrls: ['./alumno-search.component.css']
})
export class AlumnoSearchComponent implements OnInit {
    alumno$: Observable<any[]>;
    startAt: BehaviorSubject<string | null> = new BehaviorSubject('');
  constructor(private alumnoSVC: AlumnoService) { }

  ngOnInit() {
    this.alumno$ = this.alumnoSVC.getAlumnos(this.startAt);
  }
    search(searchText) {
        this.startAt.next(searchText);
    }
}
