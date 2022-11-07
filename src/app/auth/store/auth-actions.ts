import {createAction, props} from '@ngrx/store'
import { ActionTypes } from '../models/action-types'

export const loginSuccess = createAction(
  ActionTypes.LOGIN_SUCCESS,
  props<{Email: string, Password: string}>()
)
