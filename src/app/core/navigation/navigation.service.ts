import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { navigationItems } from 'src/app/app.config';
import { NavigationItem } from '../core.types';

@Injectable()
export class NavigationService {
  get items(): Observable<NavigationItem[]> {
    return of(navigationItems);
  }
}
