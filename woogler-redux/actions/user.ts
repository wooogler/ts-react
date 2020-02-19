import { addPost } from "./post";

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';
export const LOG_OUT = 'LOG_OUT';


export interface LogInRequestAction {
  type: typeof LOG_IN_REQUEST;
  data: {id: string, password: string}
}

export const logInRequest = (data: {id: string, password: string}): LogInRequestAction => {
  return {
    type: LOG_IN_REQUEST,
    data,
  }
}

export interface LogInSuccessAction {
  type: typeof LOG_IN_SUCCESS;
  data: {userId: number, nickname: string}
}

export const logInSuccess = (data: {userId: number, nickname: string}): LogInSuccessAction => {
  return {
    type: LOG_IN_SUCCESS,
    data,
  }
}

export interface LogInFailureAction {
  type: typeof LOG_IN_FAILURE;
  error: Error;
}

export const logInFailure = (error: Error): LogInFailureAction => {
  return {
    type: LOG_IN_FAILURE,
    error,
  }
}

export interface LogOutAction {
  type: typeof LOG_OUT;
}



export interface ThunkDispatch {
  (thunkAction: ThunkAction): void; //return 이 없는 경우
  <A>(action: A): A; //return 이 있는 경우
  <TAction>(action: TAction | ThunkAction): TAction;
}

type ThunkAction = (dispatch: ThunkDispatch) => void;

export const logIn = (data: LogInRequestAction["data"]): ThunkAction => {
  return (dispatch) => {
    dispatch(logInRequest(data));
    try {
      setTimeout(()=> {
        dispatch(logInSuccess({
          userId: 1,
          nickname: 'woogler',
        }))
        dispatch(addPost('hello'));
      }, 1000)
    } catch(e) {
      dispatch(logInFailure(e));
    }
    
  }
}

export const logOut =() => {
  return {
    type: LOG_OUT,
  }
}
