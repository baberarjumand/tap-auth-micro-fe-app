import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated$ = new BehaviorSubject(false);
  isProfileComplete$ = new BehaviorSubject(true);

  constructor(private router: Router) {}

  sampleLogIn() {
    this.isAuthenticated$.next(true);
    this.router.navigate(['']);
  }

  sampleLogOut() {
    this.isAuthenticated$.next(false);
    this.router.navigate(['login']);
  }
}
