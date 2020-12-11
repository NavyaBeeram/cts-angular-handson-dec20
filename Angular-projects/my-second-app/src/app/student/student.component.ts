import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  Student1 : string= "Navya";
  marks1: number = 30;
  Student2 : string= "Veni";
  marks2: number = 50;
  Student3 : string= "Sai";
  marks3: number = 80;

}
