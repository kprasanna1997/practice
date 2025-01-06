import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './main/counter/counter.component';
import { ProductListComponent } from "./main/product-list/product-list.component";
import { Store } from '@ngrx/store';
import { AppStore } from './stores/app-store';
import { Product } from './interfaces/product';
import { cartStateSelector } from './stores/cart/cart.selector';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CounterComponent, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'practice';

  cartItems$!: Observable<Product[]>;

  constructor(private store: Store<AppStore>) {
    this.cartItems$ = this.store.select(cartStateSelector)
  }


}
