import { createReducer, on } from "@ngrx/store";
import { cartActions } from "./cart.action";
import { Cart } from "../interface/cart.interface";

export interface CartState {
    carts: Cart[],
    error: string
}

export const initialState: CartState = {
    carts: [],
    error: ''
}

export const cartReduser = createReducer(
initialState,
on(cartActions.cartSuccess, (state, action) => ({
    ...state,
    carts: action.cart,
    error: ''
})),
on(cartActions.cartFailure, (state, action) => ({
    ...state,
    carts: [],
    error: action.error
}))
);