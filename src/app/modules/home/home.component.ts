import { Component } from '@angular/core';
import { expandCollapse } from 'src/app/core/animations/expand-collapse';
import { slideInLeft } from 'src/app/core/animations/slide';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  animations: [slideInLeft, expandCollapse],
})
export class HomeComponent {
  expanded = false;
}
