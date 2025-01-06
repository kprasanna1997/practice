import { ProductCartState } from "./cart/cart.reducer";
import { CounterState } from "./counter/counter.reducer";
import { ProductsState } from "./products/products.reducer";

export interface AppStore {
    counter: CounterState,
    cart: ProductCartState,
    products: ProductsState
}