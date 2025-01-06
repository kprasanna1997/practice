import { createAction, props } from "@ngrx/store";
import { Product } from "../../interfaces/product";


export const addProductToCart = createAction(
    '[Cart Component] AddProductToCart',
    props<{ product: Product }>()
);

export const incrementProductCartCount = createAction(
    '[Cart component] IncrementProductCartCount',
    props<{ productId: string }>()
);

export const decrementProductCartCount = createAction(
    '[Cart component] DecrementProductCartCount',
    props<{ productId: string }>()
);

export const removeProductFromCart = createAction(
    '[Cart component] RemoveProductFromCart',
    props<{ productId: string }>()
)