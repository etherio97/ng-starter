import { Injectable } from '@angular/core';
import { initializeApp, FirebaseOptions, FirebaseApp } from 'firebase/app';
import { AuthService } from './auth.service';

@Injectable()
export class FirebaseService {
  private _app!: FirebaseApp;

  constructor(private _auth: AuthService) {}

  initializeApp(firebaseConfig: FirebaseOptions) {
    this._app = initializeApp(firebaseConfig);
    this._auth.initializeAuth();
  }
}
