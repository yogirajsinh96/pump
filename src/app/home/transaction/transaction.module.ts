import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionRoutingModule } from './transaction-routing.module';
import { TransactionComponent } from './transaction.component';
import { ListTransactionComponent } from './list-transaction/list-transaction.component';
import { CreateTransactionComponent } from './create-transaction/create-transaction.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TransactionComponent,
    ListTransactionComponent,
    CreateTransactionComponent,
  ],
  imports: [CommonModule, TransactionRoutingModule, ReactiveFormsModule],
})
export class TransactionModule {}
