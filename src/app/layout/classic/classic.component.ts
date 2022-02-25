import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Breakpoint } from 'src/app/core/core.types';
import { BreakpointService } from 'src/app/core/services/breakpoint.service';

@Component({
  selector: 'x-layout-classic',
  templateUrl: './classic.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClassicComponent implements OnInit, OnDestroy {
  breakpoint!: Breakpoint;

  opened: boolean = true;

  mode: 'side' | 'push' | 'over' = 'side';

  private _destroy = new Subject<void>();

  constructor(
    private breakpointService: BreakpointService,
    private ref: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.breakpointService.breakpoint
      .pipe(takeUntil(this._destroy))
      .subscribe((breakpoint) => {
        this.breakpoint = breakpoint;

        this.opened = !['xs', 'sm', 'md'].includes(this.breakpoint);

        switch (this.breakpoint) {
          case 'xs':
          case 'sm':
            this.mode = 'over';
            break;
          default:
            this.mode = 'side';
        }

        this.ref.detectChanges();
      });
  }

  ngOnDestroy(): void {
    this._destroy.next();
    this._destroy.unsubscribe();
  }
}
