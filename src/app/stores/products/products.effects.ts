import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as ProductsActions from "../products/products.action"
import { Injectable } from "@angular/core";
import { ProductsApiService } from "../../main/services/products/products-api.service";
import { catchError, map, switchMap } from "rxjs/operators";
import { of } from "rxjs";
import { HttpErrorResponse } from "@angular/common/http";

@Injectable()

export class ProductsEffects {
    constructor(
        private actions$: Actions,
        private productsApiService: ProductsApiService
    ) { }

    loadProducts$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ProductsActions.loadProducts),
            switchMap(() =>
                this.productsApiService.getProducts().pipe(
                    map(products => ProductsActions.loadProductsSuccess({ products })),
                    catchError((error: HttpErrorResponse) => {
                        const errorMessage = error.error.message;
                        return of(ProductsActions.loadProductsFailure({ errorMessage }));
                    })
                )
            )
        )
    )
} 