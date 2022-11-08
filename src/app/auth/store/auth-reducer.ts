import { createReducer, on } from "@ngrx/store";
import { Action } from "rxjs/internal/scheduler/Action";
import { ActionTypes } from "../models/action-types";
import { AuthStateInterface } from "../models/authState";
import { forgotPassword, loginSuccess } from "./auth-actions";

export const initialState: AuthStateInterface = {
  isSubmitted: false,
  forgotPassword: false
}
export const authReducer = createReducer(
  initialState,
  on(loginSuccess, (state) => ({
    ...state,
    isSubmitted: true
  })),
  on(forgotPassword, (state) => ({
    ...state,
    forgotPassword: true
  }))
)
