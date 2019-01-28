import { Component, OnInit } from '@angular/core';
import { IEmployee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee',
  templateUrl:'./employee.component.html'
})

export class EmployeeComponent implements OnInit{
  pageTitle: string = 'Employee List';
  employees: IEmployee[] = [];

  ngOnInit(): void
  {
    this.employees = this._employee.getEmployee();
  }
  constructor(private _employee: EmployeeService) {
  }
  GetData(): void {
    console.log(this.employees);
  }
}
