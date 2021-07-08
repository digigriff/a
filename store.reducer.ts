import { createReducer, on } from '@ngrx/store';
import { login, err } from './store.actions';

export interface AppState {
  payload: any;
  count:number;
}

function z(state, action){
	console.log(action);
	return Object.assign({}, state, { payload: action.payload.error.message });
}

function loginFun(state, action){
	return state;
}

const initialState: any = {
  payload: ''
}
 
const _counterReducer = createReducer(
  initialState,
  on(login, (state, action) => {
	  return loginFun(state, action);
  }),
  on(err, (state, err) => {return z(state, err)})
);
 
export function counterReducer(state, action) {
  return _counterReducer(state, action);
}
