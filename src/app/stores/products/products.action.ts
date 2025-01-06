import { createAction, props } from "@ngrx/store";
import { Product } from "../../interfaces/product";

export const loadProducts = createAction(
    '[Products Components] Load Products'
);
export const loadProductsSuccess = createAction(
    '[Products Components] Load Products Success',
    props<{ products: Product[] }>()
);
export const loadProductsFailure = createAction(
    '[Products Components] Load Products Failure',
    props<{ errorMessage: string }>()
);
