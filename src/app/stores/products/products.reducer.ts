import { createReducer, on } from "@ngrx/store";
import { Product } from "../../interfaces/product";
import * as ProductsActions from "../products/products.action"

export interface ProductsState {
    products: Product[];
    productLoading: boolean;
    errorMessage: string;
}

const initialState: ProductsState = {
    products: [],
    productLoading: false,
    errorMessage: ""
}

export const ProductsReducer = createReducer(
    initialState,
    on(ProductsActions.loadProducts, (state) => ({
        ...state,
        products: [],
        productLoading: true,
        errorMessage: ""
    })),
    on(ProductsActions.loadProductsSuccess, (state, { products }) => ({
        ...state,
        products: products,
        productLoading: false,
        errorMessage: ""
    })),
    on(ProductsActions.loadProductsFailure, (state, { errorMessage }) => {
        return {
            ...state,
            products: [],
            productLoading: false,
            errorMessage
        }
    })
)