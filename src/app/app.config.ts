import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { counterReducer } from './stores/counter/counter.reducer';
import { productsCartReducer } from './stores/cart/cart.reducer';
import { provideHttpClient } from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';
import { ProductsEffects } from './stores/products/products.effects';
import { ProductsReducer } from './stores/products/products.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideStore(),
    provideState({ name: 'counter', reducer: counterReducer }),
    provideState({ name: 'cart', reducer: productsCartReducer }),
    provideState({ name: 'products', reducer: ProductsReducer }),
    provideEffects(ProductsEffects)
  ]
};
