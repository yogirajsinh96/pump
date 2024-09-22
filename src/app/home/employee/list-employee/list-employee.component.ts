import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrl: './list-employee.component.scss',
})
export class ListEmployeeComponent implements OnInit {
  employeeList: any = [];
  ngOnInit(): void {
    if (localStorage.getItem('employee')) {
      this.employeeList = JSON.parse(localStorage.getItem('employee')!);
    }
  }
}
