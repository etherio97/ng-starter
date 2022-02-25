import { Injectable } from '@angular/core';
import {
  Auth,
  User,
  onAuthStateChanged,
  getAuth,
  signOut,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { from, Observable, Subject } from 'rxjs';

@Injectable()
export class AuthService {
  private _auth!: Auth;

  private _currentUser: Subject<User | null> = new Subject<User | null>();

  initializeAuth() {
    this._auth = getAuth();
    /* this.signInWithEmailAndPassword(
      'admin@example.com',
      'password'
    ).subscribe(); */
    onAuthStateChanged(this._auth, (userOrNull) => {
      this._currentUser.next(userOrNull);
    });
  }

  signInWithEmailAndPassword(email: string, password: string) {
    return from(signInWithEmailAndPassword(this._auth, email, password));
  }

  signOut() {
    return from(signOut(this._auth));
  }

  get currentUser(): Observable<User | null> {
    return this._currentUser.asObservable();
  }
}
