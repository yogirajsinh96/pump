import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrl: './create-transaction.component.scss',
})
export class CreateTransactionComponent implements OnInit {
  transactionForm: any = this.fb.group({
    point: [''],
    side: [''],
    employeeID: [''],
    price: [0],
    readingStart: [0],
    readingEnd: [0],
  });

  employeeList: any = [];

  totalFuel = 0;
  totalCollection = 0;

  constructor(private fb: FormBuilder, private router: Router) {}
  ngOnInit(): void {
    this.getEmployeeList();
  }

  getEmployeeList() {
    if (localStorage.getItem('employee')) {
      this.employeeList = JSON.parse(localStorage.getItem('employee')!);
    }
  }

  calculateTransaction() {
    this.totalFuel =
      +this.transactionForm.get('readingEnd').value -
      +this.transactionForm.get('readingStart').value;

    this.totalCollection =
      +this.transactionForm.get('price').value * this.totalFuel;
  }
  saveTransaction() {
    if (localStorage.getItem('transaction')) {
      let transaction = JSON.parse(localStorage.getItem('transaction')!);
      transaction.push({
        ...this.transactionForm.value,
        date: this.formatDate(new Date()),
        id: transaction.length + 1,
      });
      localStorage.setItem('transaction', JSON.stringify(transaction));
    } else {
      let transaction = [];
      transaction.push({
        ...this.transactionForm.value,
        date: this.formatDate(new Date()),
        id: 1,
      });
      localStorage.setItem('transaction', JSON.stringify(transaction));
    }
    this.router.navigateByUrl('/transaction');
  }

  formatDate(date: any) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }
}
