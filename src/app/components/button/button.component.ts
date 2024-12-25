import { Component, Input } from '@angular/core';
import { ButtonState } from '../../classes/button-state';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() backgroundColor: string = 'blue';
  @Input() buttonState: ButtonState = new ButtonState();
}
