import {createAction, props} from '@ngrx/store'
import { ActionTypes, LoginUser } from '../models/action-types'

export const loginSuccess = createAction(
  ActionTypes.LOGIN_SUCCESS,
  props<LoginUser>()
)
export const forgotPassword = createAction(
  ActionTypes.FORGOT_PASSWORD,
  props<any>()
)
