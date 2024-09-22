import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.scss',
})
export class CreateEmployeeComponent implements OnInit {
  employeeForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    email: [''],
    phoneNumber: [''],
    address: [''],
  });

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {}

  saveEmployee() {
    if (localStorage.getItem('employee')) {
      let employee = JSON.parse(localStorage.getItem('employee')!);
      employee.push({
        ...this.employeeForm.value,
        date: this.formatDate(new Date()),
        id: employee.length + 1,
      });
      localStorage.setItem('employee', JSON.stringify(employee));
    } else {
      let employee = [];
      employee.push({
        ...this.employeeForm.value,
        date: this.formatDate(new Date()),
        id: 1,
      });
      localStorage.setItem('employee', JSON.stringify(employee));
    }
    this.router.navigateByUrl('/employee');
  }

  formatDate(date: any) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }
}
