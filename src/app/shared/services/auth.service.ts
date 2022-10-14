import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated$ = new BehaviorSubject(false);
  isProfileComplete$ = new BehaviorSubject(true);

  constructor(private router: Router) {
    const tkn = localStorage.getItem('token');

    if (tkn) {
      this.sampleLogIn(tkn);
    }
  }

  sampleLogIn(sessionToken: string) {
    localStorage.setItem('token', sessionToken);
    this.isAuthenticated$.next(true);
    this.router.navigate(['']);
  }

  sampleLogOut() {
    localStorage.removeItem('token');
    this.isAuthenticated$.next(false);
    this.router.navigate(['login']);
  }

  loginWithWallet(walletType: string) {
    window.location.href = environment.REACT_APP_BASE_URL + '/' + walletType;
  }

  // in a real app, logic to verify the validity of a session token in this function
  verifySessionToken(sessionToken: string) {
    if (sessionToken.length > 0) {
      console.log('Token Verified!');
      return true;
    } else {
      console.log('Token Verification Failed!');
      return false;
    }
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
