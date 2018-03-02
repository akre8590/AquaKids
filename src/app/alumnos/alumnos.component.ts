import { Component, OnInit } from '@angular/core';
import { AlumnoService } from './shared/alumno.service';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css'],
    providers: [AlumnoService]
})
export class AlumnosComponent implements OnInit {
  public isAdmin: boolean;

  constructor(private alumnoService: AlumnoService, private authService: AuthService) { }

  ngOnInit() {
      this.authService.getAuth().subscribe( auth => {
          if (auth && auth.email === 'casas.diego@outlook.com') {
              this.isAdmin = true;
          } else {
              this.isAdmin = false;
          }
      });
  }

}
