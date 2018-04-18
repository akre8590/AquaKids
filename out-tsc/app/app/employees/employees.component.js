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
import { EmployeeService } from './shared/employee.service';
import { AuthService } from '../shared/services/auth.service';
var EmployeesComponent = (function () {
    function EmployeesComponent(employeeService, authService) {
        this.employeeService = employeeService;
        this.authService = authService;
    }
    EmployeesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getAuth().subscribe(function (auth) {
            if (auth && auth.email === 'casas.diego@outlook.com') {
                _this.isAdmin = true;
            }
            else {
                _this.isAdmin = false;
            }
        });
    };
    EmployeesComponent = __decorate([
        Component({
            selector: 'app-employees',
            templateUrl: './employees.component.html',
            styleUrls: ['./employees.component.css'],
            providers: [EmployeeService]
        }),
        __metadata("design:paramtypes", [EmployeeService, AuthService])
    ], EmployeesComponent);
    return EmployeesComponent;
}());
export { EmployeesComponent };
//# sourceMappingURL=employees.component.js.map