import { NavigationItem } from './core/core.types';
import { FirebaseOptions } from 'firebase/app';

export const navigationItems: NavigationItem[] = [
  {
    type: 'basic',
    title: 'Home',
    icon: 'mat_outline:home',
    path: '/home',
  },
  {
    type: 'basic',
    title: 'About',
    icon: 'mat_outline:info',
    path: '/about',
  },
];

export const firebaseConfig: FirebaseOptions = {
  apiKey: 'AIzaSyBe7uSG9hFjXn9Q7wdRj7WsLYErI2rL7Gg',
  authDomain: 'ethereal-tech.firebaseapp.com',
  databaseURL:
    'https://ethereal-tech-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'ethereal-tech',
  storageBucket: 'ethereal-tech.appspot.com',
  messagingSenderId: '733927971997',
  appId: '1:733927971997:web:8d470c5ec2d89e3828c874',
  measurementId: 'G-5FBVF0Z2L8',
};
