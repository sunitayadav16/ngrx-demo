import { Injectable, Pipe } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, switchMap } from "rxjs";
import { CustomerService } from "../_services/customer.service";
import { customerFetchApiFail, customerFetchApiSuccess, deleteApiSuccess, invokeCustomerAPI, invokeDeleteApi, invokeSavePostApi, invokeUpdatePostApi, savePostApiFail, savePostApiSuccess, updatePostApiFail, updatePostApiSuccess } from "./customer.actions";


@Injectable()
export class customerEffects { 
    constructor(private actions$: Actions,
        private customerService: CustomerService) {
    }
      
     loadAllCustomers$ = createEffect(()=>
      this.actions$.pipe(
        ofType(invokeCustomerAPI),
        switchMap(() => {
            return this.customerService.getCustomers()
            .pipe(
                map((data)=> customerFetchApiSuccess({allCustomers : data}))
            )
        }),catchError(async (error) => customerFetchApiFail(error))
      )
    )

    savePost$ = createEffect(()=>
     this.actions$.pipe(
        ofType(invokeSavePostApi),
        switchMap((action)=> {
            return this.customerService.savePost(action.payload)
            .pipe(
                map((data)=> savePostApiSuccess({response : data}))
            )
        }),catchError(async (error) => savePostApiFail(error))
     )
    )

    updatePost$ = createEffect(()=>
     this.actions$.pipe(
        ofType(invokeUpdatePostApi),
        switchMap((action)=>{
            return this.customerService.updatePost(action.payload)
            .pipe(
                map((data)=> updatePostApiSuccess({response : data}))
            )
        }),catchError(async(error) => updatePostApiFail(error))
     )
    )

    deletePost$ = createEffect(()=>{
        return this.actions$.pipe(
            ofType(invokeDeleteApi),
            switchMap((action) => {
                return this.customerService.deletePost(action.id)
                    .pipe(
                        map((data) => deleteApiSuccess({ id: action.id }))
                    );
            }), catchError(async (error) => deleteApiFail(error))
        );
    })
}

function deleteApiFail(error: any): any {
    throw new Error("Function not implemented.");
}
