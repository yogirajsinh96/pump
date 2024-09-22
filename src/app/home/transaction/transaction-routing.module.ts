import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionComponent } from './transaction.component';
import { ListTransactionComponent } from './list-transaction/list-transaction.component';
import { CreateTransactionComponent } from './create-transaction/create-transaction.component';

const routes: Routes = [
  {
    path: '',
    component: TransactionComponent,
    children: [
      {
        path: '',
        component: ListTransactionComponent,
      },
      {
        path: 'create-transaction',
        component: CreateTransactionComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransactionRoutingModule {}
