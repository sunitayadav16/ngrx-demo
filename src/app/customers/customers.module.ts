import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerComponent } from './_components/customer/customer.component';
import { CustomerAddComponent } from './_components/customer-add/customer-add.component';
import { CustomerListComponent } from './_components/customer-list/customer-list.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { customerReducer } from './_store/customer.reducer';
import { customerEffects } from './_store/customer.effects';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CustomerComponent,
    CustomerAddComponent,
    CustomerListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    CustomersRoutingModule,
    StoreModule.forFeature('customers',customerReducer),
    EffectsModule.forFeature([customerEffects])
  ]
})
export class CustomersModule { }
