import { createAction, props } from "@ngrx/store";
import { Customer } from "../_models/customer.interface";

export const invokeCustomerAPI = createAction("[Customer Api] invoke customers fetch api")
export const customerFetchApiSuccess = createAction("[Customer Api] customer fetch api success",props<{allCustomers : Customer[]}>())
export const customerFetchApiFail = createAction("[Customer Api] customer fetch api fail",props<{error : any}>())


export const invokeSavePostApi = createAction("[Post Api] invoke save post api",props<{payload : Customer[]}>())
export const savePostApiSuccess = createAction("[Post Api] post api success",props<{response : Customer[]}>())
export const savePostApiFail = createAction("[Post Api] post api fail",props<{error : any}>())

export const invokeUpdatePostApi = createAction("[Update Api] invoke update post api", props<{payload : Customer[]}>())
export const updatePostApiSuccess = createAction("[Update Api] update post api success", props<{response : Customer[]}>())
export const updatePostApiFail = createAction("[Update Api] update api fail", props<{error : any}>())

export const invokeDeleteApi = createAction("[Delete Api] invoke delete post api", props<{id : number}>())
export const deleteApiSuccess = createAction("[Delete Api] Delete post api success", props<{id: number}>())
export const deleteApiFail = createAction("[Delete Api] Delete api fail", props<{error : any}>())