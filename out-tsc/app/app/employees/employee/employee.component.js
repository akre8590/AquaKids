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
import { EmployeeService } from '../shared/employee.service';
import { ToastrService } from 'ngx-toastr';
var EmployeeComponent = (function () {
    function EmployeeComponent(employeeService, tostr) {
        this.employeeService = employeeService;
        this.tostr = tostr;
    }
    EmployeeComponent.prototype.ngOnInit = function () {
        this.resetForm();
    };
    EmployeeComponent.prototype.onSubmit = function (employeeForm) {
        if (employeeForm.value.$key == null)
            this.employeeService.insertEmployee(employeeForm.value);
        else
            this.employeeService.updateEmployee(employeeForm.value);
        this.resetForm(employeeForm);
        this.tostr.success('Agregado exitosamente', 'Registro de Instructor');
    };
    EmployeeComponent.prototype.resetForm = function (employeeForm) {
        if (employeeForm != null)
            employeeForm.reset();
        this.employeeService.selectedEmployee = {
            $key: null,
            name: '',
            address: '',
            tel: '',
        };
    };
    EmployeeComponent = __decorate([
        Component({
            selector: 'app-employee',
            templateUrl: './employee.component.html',
            styleUrls: ['./employee.component.css']
        }),
        __metadata("design:paramtypes", [EmployeeService, ToastrService])
    ], EmployeeComponent);
    return EmployeeComponent;
}());
export { EmployeeComponent };
//# sourceMappingURL=employee.component.js.map