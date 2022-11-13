export enum ActionTypes {
  LOGIN_SUCCESS = '[Auth] Login success',
  LOGIN_FAILED = '[Auth] Login failed',
  FORGOT_PASSWORD = '[Auth] Forgot password'
}
export type LoginUser = {
  Email: string,
  Password: string
}
