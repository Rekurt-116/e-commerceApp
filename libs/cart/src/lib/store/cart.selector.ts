import { createFeature, createFeatureSelector, createSelector } from "@ngrx/store";
import { cartReduser, CartState } from "./cart.reducer";

const cartFeatureKey = 'cart';

export const selectCartState = createFeatureSelector<CartState>(cartFeatureKey)
export const selectCart = createSelector(
    selectCartState,
    (state) => state.carts
);

export const cartFeature = createFeature({
    name: cartFeatureKey,
    reducer: cartReduser
});