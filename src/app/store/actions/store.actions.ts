import { Action } from '@ngrx/store'
import { StoreFormsApp } from '../models/store.model';

export const ADD_USER = '[USER] Add'

export class AddUser implements Action {
    readonly type = ADD_USER;

    constructor(public payload: StoreFormsApp) { }
}

export type Actions = AddUser