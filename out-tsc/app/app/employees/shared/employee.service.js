var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Employee } from './employee.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
var EmployeeService = (function () {
    function EmployeeService(firebase) {
        this.firebase = firebase;
        this.selectedEmployee = new Employee();
    }
    EmployeeService.prototype.getData = function () {
        this.employeeList = this.firebase.list('employees');
        return this.employeeList;
    };
    EmployeeService.prototype.insertEmployee = function (employee) {
        this.employeeList.push({
            name: employee.name,
            address: employee.address,
            tel: employee.tel
        });
    };
    EmployeeService.prototype.updateEmployee = function (employee) {
        this.employeeList.update(employee.$key, {
            name: employee.name,
            address: employee.address,
            tel: employee.tel
        });
    };
    EmployeeService.prototype.deleteEmployee = function ($key) {
        this.employeeList.remove($key);
    };
    EmployeeService.prototype.getEmployees = function (start) {
        var _this = this;
        return start.switchMap(function (startText) {
            var endText = startText + '\uf8ff';
            return _this.firebase
                .list('/employees', function (ref) {
                return ref
                    .orderByChild('name')
                    .limitToFirst(10)
                    .startAt(startText)
                    .endAt(endText);
            })
                .snapshotChanges()
                .debounceTime(200)
                .distinctUntilChanged()
                .map(function (changes) {
                return changes.map(function (c) {
                    return __assign({ key: c.payload.key }, c.payload.val());
                });
            });
        });
    };
    EmployeeService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [AngularFireDatabase])
    ], EmployeeService);
    return EmployeeService;
}());
export { EmployeeService };
//# sourceMappingURL=employee.service.js.map