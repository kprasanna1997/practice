import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { Store } from '@ngrx/store';
import { AppStore } from '../../stores/app-store';
import { selectCount } from '../../stores/counter/conter.selector';
import { decrement, increment, reset } from '../../stores/counter/counter.action';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [AsyncPipe, ButtonComponent],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {

  count$!: Observable<number>;

  constructor(private store: Store<AppStore>) {
    this.count$ = this.store.select(selectCount)
  }

  increment() {
    this.store.dispatch(increment())
  }

  decrement() {
    this.store.dispatch(decrement())
  }

  reset() {
    this.store.dispatch(reset())
  }
}
