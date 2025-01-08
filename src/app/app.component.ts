import { CommonModule } from '@angular/common';
import { Component, computed, effect, EffectRef, OnDestroy, Signal, signal, WritableSignal } from '@angular/core';

interface Person {
  name: string;
  age: number;
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnDestroy {
  title = 'practice';

  multiplier = 1;

  counter: WritableSignal<number> = signal(0);

  effectRef: EffectRef;

  /* Without equal function derived signal name() execute everytime when button is clicked */
  person: WritableSignal<Person> = signal({ name: "Prasanna Kumar", age: 27 }, { equal: (a, b) => a.name === b.name });

  /*  1. This need to executed at least once to know the dependencies 
  of computed signal and as we bind derivedCounter() signal it is executed.
  2. Computed signal value updated when it's dependency signal value updates and if not want so use untracked example return untracked(this.counter) * 10;
  3. Also the computed signal value is cached */
  derivedCounter: Signal<number> = computed(() => {
    return this.counter() * this.multiplier;
  });

  /* This is wrong because when derivedCounter() signal called at first the multiplier value is zero
  and it will not enter if block and know that derivedCounter() depend on counter() so use the logic correctly */

  /* derivedCounter: Signal<number> = computed(() => {
    if (this.multiplier > 0) {
      return this.counter() * this.multiplier;
    } else {
      return 0;
    }
  }) */

  name: Signal<string> = computed(() => {
    console.log('I am computed');
    return this.person().name;
  })

  /**
   * Constructs a new instance of the component.
   * This need to executed at least once to know the dependencies 
   * The constructor initializes an effect that logs the current counter value
   * whenever the counter changes. The `effect` function is used to create a 
   * reactive side effect that runs whenever the observed state (`this.counter()`) 
   * changes. This is useful for debugging or performing actions in response to 
   * state changes.
   * The effect clean-up is done by angular itself if ypu want manual clean-up give reference to effect and set manualCleanup to true and destroy the ref
   * On on effect clean-up if we want to do any action then we can have oncleanup callback
   * @constructor
   */
  constructor() {
    /* Actually effect use === equality to check change in it's previous and current value */
    effect(() => {
      console.log('current counter value ' + this.counter());
    });

    /* Manual clean-up not preferred */
    // this.effectRef = effect(() => {
    //   console.log('current counter value ' + this.counter());
    // }, {
    //   manualCleanup: true
    // });

    /* On cleanup */
    this.effectRef = effect((onCleanup) => {
      console.log('current counter value ' + this.counter());
      onCleanup(() => {
        console.log('Clean up started');
      })
    });
  }

  increment() {
    this.counter.set(this.counter() + 1);
    // OR
    //  this.counter.update(count=>count+1);
  }

  updatePersonAge() {
    this.person.update(person => ({ ...person, age: person.age - 1 }))
  }

  setSamePerson() {
    this.person.set({ name: "Prasanna Kumar", age: 27 });
  }

  ngOnDestroy(): void {
    this.effectRef.destroy();
  }

}
