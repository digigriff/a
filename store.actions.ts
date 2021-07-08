import { createAction, props } from '@ngrx/store';

export const err = createAction('[App Component] err', props<Error>());

export const login = createAction('[App Component] login', props<{username:string, password:string}>());
export const logout = createAction('[App Component] logout');
export const requestPassword = createAction('[App Component] requestPassword');
export const resetPassword = createAction('[App Component] resetPassword');
export const register = createAction('[App Component] register');

