import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersComponent } from './components/customer/customers/customers.component';
import { CustomerDetailComponent } from './components/customer/customer-detail/customer-detail.component';
import { CustomerAddComponent } from './components/customer/customer-add/customer-add.component';
import { CustomerEditComponent } from './components/customer/customer-edit/customer-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgxMaskModule} from 'ngx-mask';


import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule 
} 
from "@angular/material";
import { CardEditComponent } from './components/card/card-edit/card-edit.component';
import { CardAddComponent } from './components/card/card-add/card-add.component';
import { CardDetailComponent } from './components/card/card-detail/card-detail.component';
import { CardsComponent } from './components/card/cards/cards.component';
import { ConsumesComponent } from './components/consume/consumes/consumes.component';
import { ConsumeAddComponent } from './components/consume/consume-add/consume-add.component';
import { ConsumeEditComponent } from './components/consume/consume-edit/consume-edit.component';
import { ConsumeDetailComponent } from './components/consume/consume-detail/consume-detail.component';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AdviserComponent } from './components/advisers/adviser/adviser.component';
import { AdviserAddComponent } from './components/advisers/adviser-add/adviser-add.component';
import { AdviserEditComponent } from './components/advisers/adviser-edit/adviser-edit.component';
import { AdviserDetailComponent } from './components/advisers/adviser-detail/adviser-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    CustomerDetailComponent,
    CustomerAddComponent,
    CustomerEditComponent,
    CardEditComponent,
    CardAddComponent,
    CardDetailComponent,
    CardsComponent,
    ConsumesComponent,
    ConsumeAddComponent,
    ConsumeEditComponent,
    ConsumeDetailComponent,
    NavbarComponent,
    AdviserComponent,
    AdviserAddComponent,
    AdviserEditComponent,
    AdviserDetailComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    NgxMaskModule.forRoot(null),
    DateInputsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
