import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { MatDrawer } from '@angular/material/sidenav';
import { Subject, takeUntil } from 'rxjs';
import { Breakpoint, NavigationItem } from '../core.types';
import { BreakpointService } from '../services/breakpoint.service';
import { NavigationService } from './navigation.service';

@Component({
  selector: 'x-navigation',
  templateUrl: './navigation.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent implements OnInit, OnDestroy {
  @Input() drawer!: MatDrawer;

  breakpoint!: Breakpoint;

  items: Array<NavigationItem> = [];

  private _destory: Subject<void> = new Subject<void>();

  constructor(
    private navigationService: NavigationService,
    private changeDetectorRef: ChangeDetectorRef,
    private breakpointService: BreakpointService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.navigationService.items
      .pipe(takeUntil(this._destory))
      .subscribe((items) => {
        this.items = items;
        this.changeDetectorRef.detectChanges();
      });

    this.breakpointService.breakpoint
      .pipe(takeUntil(this._destory))
      .subscribe((breakpoint) => {
        this.breakpoint = breakpoint;
        this.changeDetectorRef.detectChanges();
      });
  }

  ngOnDestroy(): void {
    this._destory.next();
    this._destory.unsubscribe();
  }

  goto(path: string) {
    this.router.navigate([path]).then(() => {
      if (['xs', 'sm'].includes(this.breakpoint)) {
        this.drawer.close();
      }
    });
  }
}
