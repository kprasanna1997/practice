import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../interfaces/product';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

  @Input() product!: Product;

  @Output() addToCartClicked$: EventEmitter<void> = new EventEmitter();
  @Output() incrementProductCartClicked$: EventEmitter<void> = new EventEmitter();
  @Output() decrementProductCartClicked$: EventEmitter<void> = new EventEmitter();
}
