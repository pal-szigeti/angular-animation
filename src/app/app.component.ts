import { animate, group, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  animations: [
    trigger('itemRemove', [
      transition(':leave', [
        style({transform: 'translateX(0%)'}),
        group([animate(1500, style({transform: 'translateX(110%)'}))])
      ])
    ]) 
  ]
})
export class AppComponent  {
  show1 = true;
  show2 = true;
  show3 = true;
  show4 = true;

  items = ['list', 'animation', 'list', 'animation', 'angular', 'react', 'vue', 'rxjs'];
  removeItem() {
    this.items = this.items.filter((item, index) => index !== 2)
  }
}