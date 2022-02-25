import { Injectable } from '@angular/core';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Breakpoint } from '../core.types';

@Injectable()
export class BreakpointService {
  private _fallback: Breakpoint = 'xl';

  private _current: BehaviorSubject<Breakpoint> =
    new BehaviorSubject<Breakpoint>(this._fallback);

  private _screens: Map<string, Breakpoint> = new Map([
    [Breakpoints.XSmall, 'xs'],
    [Breakpoints.Small, 'sm'],
    [Breakpoints.Medium, 'md'],
    [Breakpoints.Large, 'lg'],
    [Breakpoints.XLarge, 'xl'],
  ]);

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .subscribe(({ breakpoints }) => {
        for (let breakpoint of Object.keys(breakpoints)) {
          if (breakpoints[breakpoint]) {
            this._current.next(this._screens.get(breakpoint) ?? this._fallback);
          }
        }
      });
  }

  get breakpoint(): Observable<Breakpoint> {
    return this._current.asObservable();
  }
}
