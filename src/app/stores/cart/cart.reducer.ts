import { createReducer, on } from "@ngrx/store";
import { Product } from "../../interfaces/product";
import * as CartActions from "../cart/cart.action"

export interface ProductCartState {
    cartItems: Product[];
}

const initialState: ProductCartState = {
    cartItems: []
}

export const productsCartReducer = createReducer(
    initialState,
    on(CartActions.addProductToCart, (state, { product }) => {
        const isProductPresent = state.cartItems?.find((cartItem: Product) => cartItem.id === product.id);
        if (isProductPresent) {
            const updatedCartProductQuantity = state.cartItems?.map((cartItem: Product) => {
                if (cartItem.id === product.id) {
                    return { ...cartItem, quantity: cartItem.quantity + 1 }
                }
                return cartItem;
            })
            return {
                ...state,
                cartItems: updatedCartProductQuantity
            }
        } else {
            const updatedCart = [...state.cartItems, { ...product, quantity: 1 }];
            return {
                ...state,
                cartItems: updatedCart
            }
        }
    }),
    on(CartActions.incrementProductCartCount, (state, { productId }) => {
        const updatedCartProductQuantity = state.cartItems?.map((cartItem: Product) => {
            if (cartItem.id === productId) {
                return { ...cartItem, quantity: cartItem.quantity + 1 }
            }
            return cartItem;
        })
        return {
            ...state,
            cartItems: updatedCartProductQuantity
        }
    }),
    on(CartActions.decrementProductCartCount, (state, { productId }) => {
        const updatedCartProductQuantity = state.cartItems?.map((cartItem: Product) => {
            if (cartItem.id === productId) {
                return { ...cartItem, quantity: cartItem.quantity - 1 }
            }
            return cartItem;
        })
        return {
            ...state,
            cartItems: updatedCartProductQuantity
        }
    }),
    on(CartActions.removeProductFromCart, (state, { productId }) => {
        const updatedCartProduct = state.cartItems?.filter((cartItem: Product) => cartItem.id !== productId)
        return {
            ...state,
            cartItems: updatedCartProduct
        }
    })
)