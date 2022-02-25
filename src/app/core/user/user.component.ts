import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { User } from 'firebase/auth';
import { AuthService } from '../services/auth.service';
import { zoomIn, zoomOut } from '../animations/zoom';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { expandCollapse } from '../animations/expand-collapse';

@Component({
  selector: 'x-user',
  templateUrl: './user.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [zoomIn, zoomOut, expandCollapse],
})
export class UserComponent implements OnInit, OnDestroy {
  user!: User | null;

  loggedIn: boolean = false;

  formGroup!: FormGroup;

  error: string = '';

  @ViewChild('modal') modal!: TemplateRef<HTMLDivElement>;

  @ViewChild('closeBtn') closeBtn!: HTMLButtonElement;

  private _destroy: Subject<void> = new Subject<void>();

  constructor(
    private authService: AuthService,
    private changeDetectorRef: ChangeDetectorRef,
    private dialog: MatDialog,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.authService.currentUser
      .pipe(takeUntil(this._destroy))
      .subscribe((userOrNull) => {
        this.loggedIn = !!userOrNull;
        this.user = userOrNull;
        this.changeDetectorRef.detectChanges();
      });

    this.formGroup = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  ngOnDestroy(): void {
    this._destroy.next();
    this._destroy.unsubscribe();
  }

  openModal() {
    this.dialog.open(this.modal, {
      width: '100%',
      height: '100%',
      maxWidth: '100vw',
      minHeight: '100vh',
    });
  }

  signIn() {
    this.error = '';
    if (!this.formGroup.valid) return;
    this.authService
      .signInWithEmailAndPassword(
        this.formGroup.value.email,
        this.formGroup.value.password
      )
      .subscribe(
        () => this.closeBtn.click(),
        (err) => {
          this.error = err.message;
        }
      );
  }

  signOut() {
    this.authService.signOut();
  }
}
