import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'practice';

  array = [5, 7, 2, 4, 8, 3, 5, 7, 9, 2];

  ngOnInit(): void {
    this.bubbleSort();
    console.log(this.array);
    console.log(this.fibonacci(8));
    console.log(this.findRepeatingLetterAndReplace("Bangalore"))

  }

  bubbleSort() {
    for (let i = 0; i < this.array.length - 1; i++) {
      // this.array.length - 1 - i is important for optimization as bigger number shifted to last position as iterate
      for (let j = 0; j < this.array.length - 1 - i; j++) {
        if (this.array[j] > this.array[j + 1]) {
          const temp = this.array[j];
          this.array[j] = this.array[j + 1]
          this.array[j + 1] = temp;
        }
      }
    }
  }

  fibonacci(input: number) {
    if (input < 0) {
      window.alert('Invalid input for fibonacci series')
      return;
    }
    let fibonacciSeries: number[] = [0, 1];
    for (let i = 2; i <= input; i++) {
      if (i === 0) {
        fibonacciSeries.push(i)
      } else if (i === 1) {
        fibonacciSeries.push(i)
      } else {
        const fibonacciValue: number = fibonacciSeries[i - 2] + fibonacciSeries[i - 1];
        fibonacciSeries.push(fibonacciValue)
      }
    }
    return fibonacciSeries.slice(0, input + 1).join(" "); /* Slice to manage 0 as input */
  }

  findRepeatingLetterAndReplace(input: string) {
    const inputAsArray: string[] = input.split("");

    /*  O(n2)
     for(let i=0;i<inputAsArray?.length;i++){
       let count=0;
       for(let j=i+1;j<inputAsArray?.length;j++){
         if (inputAsArray[j+1]!=="_"&& inputAsArray[i]?.toLocaleLowerCase()===inputAsArray[j+1]?.toLocaleLowerCase() ){
           count++;
           inputAsArray[j+1]="_";
         }
         if(j===inputAsArray?.length-1 && count){
           inputAsArray[i]="_";
         }
       }
     }
     
     OR */

    // O (n)
    let frequencyMap: Record<string, number> = {};

    for (let char of inputAsArray) {
      const lowercaseChar = char.toLocaleLowerCase();
      frequencyMap[lowercaseChar] = (frequencyMap[lowercaseChar] || 0) + 1
    }

    for (let i = 0; i < inputAsArray?.length; i++) {
      if (frequencyMap[inputAsArray[i]?.toLocaleLowerCase()] > 1) {
        inputAsArray[i] = "_";
      }
    }

    return inputAsArray.join("");
  }
}
