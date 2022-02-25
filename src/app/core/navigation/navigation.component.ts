import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { NavigationItem } from '../core.types';
import { NavigationService } from './navigation.service';

@Component({
  selector: 'x-navigation',
  templateUrl: './navigation.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent implements OnInit, OnDestroy {
  items: Array<NavigationItem> = [];

  private _destory: Subject<void> = new Subject<void>();

  constructor(
    private navigationService: NavigationService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.navigationService.items
      .pipe(takeUntil(this._destory))
      .subscribe((items) => {
        this.items = items;
        this.changeDetectorRef.detectChanges();
      });
  }

  ngOnDestroy(): void {
    this._destory.next();
    this._destory.unsubscribe();
  }
}
