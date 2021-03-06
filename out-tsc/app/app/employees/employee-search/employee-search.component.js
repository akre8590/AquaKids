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
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
var EmployeeSearchComponent = (function () {
    function EmployeeSearchComponent(employeesSVC) {
        this.employeesSVC = employeesSVC;
        this.startAt = new BehaviorSubject('');
    }
    EmployeeSearchComponent.prototype.ngOnInit = function () {
        this.employees$ = this.employeesSVC.getEmployees(this.startAt);
    };
    EmployeeSearchComponent.prototype.search = function (searchText) {
        this.startAt.next(searchText);
    };
    EmployeeSearchComponent = __decorate([
        Component({
            selector: 'app-employee-search',
            templateUrl: './employee-search.component.html',
            styleUrls: ['./employee-search.component.css']
        }),
        __metadata("design:paramtypes", [EmployeeService])
    ], EmployeeSearchComponent);
    return EmployeeSearchComponent;
}());
export { EmployeeSearchComponent };
//# sourceMappingURL=employee-search.component.js.map