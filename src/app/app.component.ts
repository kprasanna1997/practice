import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Circle, Student } from './classes/example.class';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'practice';

  student = new Student('Alexa', 18, 'student', 12);
  circle = new Circle(10)

  ngOnInit(): void {
    this.student.printProfession();
    this.student.currentAge = 45;
    console.log(this.student.currentAge);
    Student.myAge(18);
    console.log(this.circle.calculateArea());

  }
}
