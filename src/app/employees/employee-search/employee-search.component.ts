import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-employee-search',
  templateUrl: './employee-search.component.html',
  styleUrls: ['./employee-search.component.css']
})
export class EmployeeSearchComponent implements OnInit {
    employees$: Observable<any[]>;
    startAt: BehaviorSubject<string | null> = new BehaviorSubject('');
  constructor(private employeesSVC: EmployeeService) { }

  ngOnInit() {
      this.employees$ = this.employeesSVC.getEmployees(this.startAt);
  }

    search(searchText) {
        this.startAt.next(searchText);
    }

}
