import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { invokeSavePostApi, invokeUpdatePostApi } from '../../_store/customer.actions';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.scss'],
})
export class CustomerAddComponent implements OnInit {
  @Input() cusDetails: any;
  constructor(private store: Store) {}

  postForm: any = {
    userId: 0,
    title: '',
    body: '',
  };

  ngOnInit(): void {}

  ngOnChanges() {
    if (this.cusDetails) {
      this.postForm = this.cusDetails;
    }
  }

  createPost() {
    debugger
    if (!this.cusDetails) {
      this.store.dispatch(invokeSavePostApi({ payload: { ...this.postForm } }));
    } else {
      this.store.dispatch(invokeUpdatePostApi({payload: {... this.postForm}}));
    }
  }
}
