import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {

  number1 = 100;
  number2 = 200;

  array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  letter = 'a';

}
