import {
  animate,
  group,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';
import { of } from 'rxjs';
import {delay} from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('itemRemove', [
      transition(':leave', [
        style({ transform: 'translateX(0%)' }),
        group([animate(1500, style({ transform: 'translateX(110%)' }))]),
      ]),
    ]),
  ],
})
export class AppComponent {
  tabs=['first', 'second'];

  items = [
    'list',
    'animation',
    'list',
    'animation',
    'angular',
    'react',
    'vue',
    'rxjs',
    'list',
    'animation',
    'list',
    'animation',
    'angular',
    'react',
    'vue',
    'rxjs',
  ];
  removeItem() {
    of({}).pipe(delay(1500)).subscribe(() => {
      this.items = this.items.filter((item, index) => index !== 2);
    })    
  }
}
