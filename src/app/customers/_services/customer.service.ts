import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Customer } from '../_models/customer.interface';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiUrl : string = environment.baseUrl;

  constructor(private http: HttpClient) { }
 
  getCustomers(): Observable<Customer[]> {
   return this.http.get<Customer[]>(this.apiUrl+ '/posts');
  }
 
  savePost(userData : any): Observable<Customer[]> {
   return this.http.post<Customer[]>(this.apiUrl+ '/posts', userData);
  } 

  updatePost(userData : any){
    return this.http.put<Customer[]>(this.apiUrl + '/posts/'+ userData.id, userData)
  }

  deletePost(id: any){
    return this.http.delete(this.apiUrl + '/posts/'+ id)
  }
}