import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from '../../interfaces/product';
import { HttpClient } from '@angular/common/http';
import { ProductComponent } from './product/product.component';
import { Store } from '@ngrx/store';
import { AppStore } from '../../stores/app-store';
import * as CartActions from '../../stores/cart/cart.action';
import { loadProducts } from '../../stores/products/products.action';
import { productsLoader, productsSelector } from '../../stores/products/products.selector';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit {

  products$!: Observable<Product[]>;
  loading$!: Observable<boolean>;

  http = inject(HttpClient);

  constructor(private store: Store<AppStore>) {
    this.store.dispatch(loadProducts())
  }


  ngOnInit(): void {
    this.products$ = this.store.select(productsSelector);
    this.loading$ = this.store.select(productsLoader);
  }

  addToCart(product: Product) {
    this.store.dispatch(CartActions.addProductToCart({ product }));
  }


  incrementProductCart(productId: string) {
    this.store.dispatch(CartActions.incrementProductCartCount({ productId }));
  }

  decrementProductCart(product: Product) {
    if (product.quantity === 1) {
      this.store.dispatch(CartActions.removeProductFromCart({ productId: product.id }));
    } else {
      this.store.dispatch(CartActions.decrementProductCartCount({ productId: product.id }));
    }
  }
}
