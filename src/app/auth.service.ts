import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { firebase } from '@nativescript/firebase-core';
import '@nativescript/firebase-auth';
import '@nativescript/firebase-firestore';
import { AppComponent } from './app.component';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth = firebase().auth();
  private authStatusSub = new BehaviorSubject<any | null>(null); 
  currentAuthStatus = this.authStatusSub.asObservable();

  constructor() {
    firebase().auth().addAuthStateChangeListener((user) => {
      this.authStatusSub.next(user); 
    });
  }
  get currentUser() {
    return this.auth.currentUser;
  }
  register(email: string, password: string,list: {}){
    return this.auth.createUserWithEmailAndPassword(email,password);
  }
  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  login(email: string, password: string){
    return this.auth.signInWithEmailAndPassword(email,password);
  }
  signIn(email: string, password: string) {
    return this.auth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        console.log('Logged in:', res.user);
      })
      .catch((err) => {
        console.error('Login error:', err);
      });
  }
  signOut() {
    return this.auth.signOut().then(() => {
      console.log('Logged out');
    });
  }
  resetPassword(data){
    return this.auth.sendPasswordResetEmail(data);
  }
}
