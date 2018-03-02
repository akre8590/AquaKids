import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../shared/employee.service';
import { Employee } from '../shared/employee.model';
import { ToastrService } from 'ngx-toastr';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employeeList: Employee[];
    employees$: Observable<any[]>;
    startAt: BehaviorSubject<string | null> = new BehaviorSubject('');
  constructor(private employeeService: EmployeeService, private tostr: ToastrService) { }

  ngOnInit() {
    this.employees$ = this.employeeService.getEmployees(this.startAt);
    var x = this.employeeService.getData();
    x.snapshotChanges().subscribe(item => {
      this.employeeList = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.employeeList.push(y as Employee);
      });
    });
  }

  onEdit(emp: Employee) {
    this.employeeService.selectedEmployee = Object.assign({}, emp);
  }

  onDelete(key: string) {
    if (confirm('¿Está seguro de querer borrar el elemento?') == true) {
      this.employeeService.deleteEmployee(key);
      this.tostr.warning('Borrado exitoso', 'Registro de Instructor');
    }
  }
    search(searchText) {
        this.startAt.next(searchText);
    }

}
