import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'x-layout',
  templateUrl: './layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {}
