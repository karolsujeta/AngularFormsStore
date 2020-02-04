import { StoreFormsApp } from "../models/store.model";
import * as StoreActions from '../actions/store.actions'

const initialState: StoreFormsApp = {
    name: "Jan",
    lastname: "Kowalski",
    address: "Piasta",
    sex: "M",
    age: 22
}

export function reducer(state: StoreFormsApp[] = [initialState], action: StoreActions.Actions) {
    switch (action.type) {
        case StoreActions.ADD_USER:
            return [...state, action.payload];
        default:
            return state;
    }
}