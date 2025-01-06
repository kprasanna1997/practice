import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductCartState } from "./cart.reducer";


const selectCounterState = createFeatureSelector<ProductCartState>('cart');

export const cartStateSelector = createSelector(
    selectCounterState,
    (state => state.cartItems)
)