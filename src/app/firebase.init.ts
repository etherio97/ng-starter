import { firebaseConfig } from './app.config';
import { FirebaseService } from './core/services/firebase.service';

export const initializeFirebase = (firebaseService: FirebaseService) => () =>
  firebaseService.initializeApp(firebaseConfig);
