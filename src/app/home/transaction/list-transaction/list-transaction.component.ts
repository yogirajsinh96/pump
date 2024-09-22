import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-transaction',
  templateUrl: './list-transaction.component.html',
  styleUrl: './list-transaction.component.scss',
})
export class ListTransactionComponent implements OnInit {
  transactionList: any = [];

  ngOnInit(): void {
    this.getTransactionList();
  }

  getTransactionList() {
    if (localStorage.getItem('transaction')) {
      this.transactionList = JSON.parse(localStorage.getItem('transaction')!);
    }
  }
}
