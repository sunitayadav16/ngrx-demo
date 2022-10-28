import { createFeatureSelector } from "@ngrx/store";
import { Customer } from "../_models/customer.interface";

export const selectAllCustomer = createFeatureSelector<Customer[]>('customers')