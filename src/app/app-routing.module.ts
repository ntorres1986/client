import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomersComponent } from './components/customer/customers/customers.component';
import { CustomerDetailComponent } from './components/customer/customer-detail/customer-detail.component';
import { CustomerAddComponent } from './components/customer/customer-add/customer-add.component';
import { CustomerEditComponent } from './components/customer/customer-edit/customer-edit.component';

import { CardsComponent } from './components/card/cards/cards.component';
import { CardAddComponent } from './components/card/card-add/card-add.component';
import { CardDetailComponent } from './components/card/card-detail/card-detail.component';
import { CardEditComponent } from './components/card/card-edit/card-edit.component';


const routes: Routes = [
  {
    path: 'customer',
    component: CustomersComponent,
    data: { title: 'List of Customers' }
  },
  {
    path: 'customer-details/:id',
    component: CustomerDetailComponent,
    data: { title: 'Customer Details' }
  },
  {
    path: 'customer-add',
    component: CustomerAddComponent,
    data: { title: 'Add Customer' }
  },
  {
    path: 'customer-edit/:id',
    component: CustomerEditComponent,
    data: { title: 'Edit Customer' }
  },
  { path: '',
    redirectTo: '/customer',
    pathMatch: 'full'
  },
  {
    path: 'cards/:customer_id',
    component: CardsComponent,
    data: { title: 'List of Cards' }
  },
  {
    path: 'card-add/:customer_id',
    component: CardAddComponent,
    data: { title: 'Add Card' }
  },
  {
    path: 'card-details/:id',
    component: CardDetailComponent,
    data: { title: 'Card Details' }
  },
  {
    path: 'card-edit/:id',
    component: CardEditComponent,
    data: { title: 'Edit Card' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
