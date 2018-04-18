"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var employee_service_1 = require("../shared/employee.service");
var ngx_toastr_1 = require("ngx-toastr");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var EmployeeListComponent = (function () {
    function EmployeeListComponent(employeeService, tostr) {
        this.employeeService = employeeService;
        this.tostr = tostr;
        this.startAt = new BehaviorSubject_1.BehaviorSubject('');
    }
    EmployeeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.employees$ = this.employeeService.getEmployees(this.startAt);
        var x = this.employeeService.getData();
        x.snapshotChanges().subscribe(function (item) {
            _this.employeeList = [];
            item.forEach(function (element) {
                var y = element.payload.toJSON();
                y["$key"] = element.key;
                _this.employeeList.push(y);
            });
        });
    };
    EmployeeListComponent.prototype.onEdit = function (emp) {
        this.employeeService.selectedEmployee = Object.assign({}, emp);
    };
    EmployeeListComponent.prototype.onDelete = function (key) {
        if (confirm('¿Está seguro de querer borrar el elemento?') === true) {
            this.employeeService.deleteEmployee(key);
            this.tostr.warning('Borrado exitoso', 'Registro de Instructor');
        }
    };
    EmployeeListComponent.prototype.search = function (searchText) {
        this.startAt.next(searchText);
    };
    EmployeeListComponent = __decorate([
        core_1.Component({
            selector: 'app-employee-list',
            templateUrl: './employee-list.component.html',
            styleUrls: ['./employee-list.component.css']
        }),
        __metadata("design:paramtypes", [employee_service_1.EmployeeService, ngx_toastr_1.ToastrService])
    ], EmployeeListComponent);
    return EmployeeListComponent;
}());
exports.EmployeeListComponent = EmployeeListComponent;
//# sourceMappingURL=employee-list.component.js.map