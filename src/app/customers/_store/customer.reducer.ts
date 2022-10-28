import { createReducer, on } from "@ngrx/store";
import { Customer } from "../_models/customer.interface";
import { customerFetchApiFail, customerFetchApiSuccess, deleteApiSuccess, savePostApiFail, savePostApiSuccess, updatePostApiSuccess } from "./customer.actions";


export const initialState: ReadonlyArray<Customer> = [];
 
export const customerReducer = createReducer(
    initialState,

    on(customerFetchApiSuccess,(state,{allCustomers}) =>{
        return allCustomers;
    }),

    on(customerFetchApiFail, (state,action) => {
        return action.error;
    }),

    on(savePostApiSuccess, (state, {response}) => {
        let newState = [...state];
        // newState.unshift(response);
        return newState;
    }),

    on(savePostApiFail, (state,action) => {
        return action.error;
    }),

    on(updatePostApiSuccess,(state, {response}) => {
        let newState = [...state]
        // let newState = state.filter(x =>x.id != response.id);
        return newState;
    }),

    on(deleteApiSuccess,(state, {id}) => {
        let newState = [...state]
        // let newState = state.filter(x =>x.id != response.id);
        return newState;
    })
);