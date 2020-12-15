import { Component} from '@angular/core';

@Component({
  selector: 'app-parent-counter',
  templateUrl: './parent-counter.component.html',
  styleUrls: ['./parent-counter.component.css']
})
export class ParentCounterComponent {

  
 

  likes : number = 0;
  dislikes : number = 0;

  clearOnClick()
  {
    this.likes = 0;
    this.dislikes = 0;
  }
  
}