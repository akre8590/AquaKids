import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AlumnoService } from '../shared/alumno.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {

    constructor(private alumnoService: AlumnoService, private tostr: ToastrService) {
    }

    ngOnInit() {
        this.resetForm();
    }

    onSubmit(alumnoForm: NgForm) {
        if (alumnoForm.value.$key == null)
            this.alumnoService.insertAlumno(alumnoForm.value);
        else
            this.alumnoService.updateAlumno(alumnoForm.value);
        this.resetForm(alumnoForm);
        this.tostr.success('Guardado exitoso', 'Alumno Registrado');
    }

    resetForm(alumnoForm?: NgForm) {
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
    }
 }