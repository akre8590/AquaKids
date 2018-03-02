import { Component, OnInit } from '@angular/core';

import { EmployeeService } from './shared/employee.service';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  providers :[EmployeeService]
})
export class EmployeesComponent implements OnInit {
  public isAdmin: boolean;

  constructor(private employeeService : EmployeeService, private authService: AuthService) { }

  ngOnInit() {
      this.authService.getAuth().subscribe( auth => {
          if (auth && auth.email === 'casas.diego@outlook.com') {
              this.isAdmin = true;
          } else {
              this.isAdmin = false;
          }
      });
  }

}
