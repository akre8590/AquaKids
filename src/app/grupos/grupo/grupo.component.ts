import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GrupoService } from '../shared/grupo.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-grupo',
  templateUrl: './grupo.component.html',
  styleUrls: ['./grupo.component.css']
})
export class GrupoComponent implements OnInit {

  constructor(private grupoService: GrupoService, private tostr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }
  onSubmit(grupoForm: NgForm) {
      if (grupoForm.value.$key == null)
          this.grupoService.insertGrupo(grupoForm.value);
      else
          this.grupoService.updateGrupo(grupoForm.value);
          this.resetForm(grupoForm);
      this.tostr.success('Submitted Succcessfully', 'Employee Register');
  }
  resetForm(grupoForm?: NgForm) {
      if (grupoForm != null)
          grupoForm.reset();
      this.grupoService.selectedGrupo = {
          $key: null,
          tipo_grupo: '',
          horario: '',
          alumnos_grupo: '',
          costo: '0',
          cupo: ''
      }
  }
}
