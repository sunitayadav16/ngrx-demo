import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  cusDetails : any;
  constructor() { }

  ngOnInit(): void {
  }

  fetchCustomerDetails(value: any){
     this.cusDetails = value;
  }

}
