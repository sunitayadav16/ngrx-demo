import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { invokeCustomerAPI, invokeDeleteApi } from '../../_store/customer.actions';
import { selectAllCustomer } from '../../_store/customer.selector';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  @Output() sendCusDetails = new EventEmitter();
  error$ : any;
   
  constructor(private store : Store) { }
  
  customers$ = this.store.pipe(select(selectAllCustomer));
  
  ngOnInit(): void {
    this.store.dispatch(invokeCustomerAPI());
  }

  editCustomer(cus: any){
     this.sendCusDetails.emit(cus); 
  }

  deleteCustomer(cus: any){
    this.store.dispatch(invokeDeleteApi({id : cus.id}));
  }

}
