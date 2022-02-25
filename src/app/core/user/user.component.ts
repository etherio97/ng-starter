import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'x-user',
  templateUrl: './user.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent {}
