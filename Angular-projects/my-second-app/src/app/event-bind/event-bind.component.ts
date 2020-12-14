import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-bind',
  templateUrl: './event-bind.component.html',
  styleUrls: ['./event-bind.component.css']
})
export class EventBindComponent  {

  username: string = undefined;
  handleClick(value: any): void{
    this.username =value;
  }

}
