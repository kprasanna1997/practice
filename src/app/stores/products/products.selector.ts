import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductsState } from "./products.reducer";


const productsStateSelector = createFeatureSelector<ProductsState>("products");

export const productsSelector = createSelector(
    productsStateSelector,
    ((state: ProductsState) => state.products)
)
export const productsLoader = createSelector(
    productsStateSelector,
    ((state: ProductsState) => state.productLoading)
)
export const productsLoadError = createSelector(
    productsStateSelector,
    ((state: ProductsState) => state.errorMessage)
)