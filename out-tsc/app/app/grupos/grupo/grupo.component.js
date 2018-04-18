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
import { GrupoService } from '../shared/grupo.service';
import { ToastrService } from 'ngx-toastr';
var GrupoComponent = (function () {
    function GrupoComponent(grupoService, tostr) {
        this.grupoService = grupoService;
        this.tostr = tostr;
    }
    GrupoComponent.prototype.ngOnInit = function () {
        this.resetForm();
    };
    GrupoComponent.prototype.onSubmit = function (grupoForm) {
        if (grupoForm.value.$key == null)
            this.grupoService.insertGrupo(grupoForm.value);
        else
            this.grupoService.updateGrupo(grupoForm.value);
        this.resetForm(grupoForm);
        this.tostr.success('Submitted Succcessfully', 'Employee Register');
    };
    GrupoComponent.prototype.resetForm = function (grupoForm) {
        if (grupoForm != null)
            grupoForm.reset();
        this.grupoService.selectedGrupo = {
            $key: null,
            tipo_grupo: '',
            horario: '',
            alumnos_grupo: '',
            costo: '0',
            cupo: ''
        };
    };
    GrupoComponent = __decorate([
        Component({
            selector: 'app-grupo',
            templateUrl: './grupo.component.html',
            styleUrls: ['./grupo.component.css']
        }),
        __metadata("design:paramtypes", [GrupoService, ToastrService])
    ], GrupoComponent);
    return GrupoComponent;
}());
export { GrupoComponent };
//# sourceMappingURL=grupo.component.js.map