import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Employee} from './employee.model';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Injectable()
export class EmployeeService {
  employeeList: AngularFireList<any>;
  selectedEmployee: Employee = new Employee();
  constructor(private firebase: AngularFireDatabase ) { }

  getData() {
    this.employeeList = this.firebase.list('employees');
    return this.employeeList;
  }

  insertEmployee(employee: Employee) {
    this.employeeList.push({
      name: employee.name,
      address: employee.address,
      tel: employee.tel
    });
  }

  updateEmployee(employee: Employee) {
    this.employeeList.update(employee.$key,
      {
        name: employee.name,
        address: employee.address,
        tel: employee.tel

      });
  }

  deleteEmployee($key: string) {
    this.employeeList.remove($key);
  }

    getEmployees(start: BehaviorSubject<string>): Observable<any[]> {
        return start.switchMap(startText => {
            const endText = startText + '\uf8ff';
            return this.firebase
                .list('/employees', ref =>
                    ref
                        .orderByChild('name')
                        .limitToFirst(10)
                        .startAt(startText)
                        .endAt(endText)
                )
                .snapshotChanges()
                .debounceTime(200)
                .distinctUntilChanged()
                .map(changes => {
                    return changes.map(c => {
                        return { key: c.payload.key, ...c.payload.val() };
                    });
                });
        });
    }


}
