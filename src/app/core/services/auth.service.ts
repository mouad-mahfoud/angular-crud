import { User } from './../models/user.model';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { map, distinctUntilChanged, mergeMap, tap } from 'rxjs/operators';
import { ApiService } from './api.service';
import { JwtService } from './jwt.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isAuthenticated$ = new BehaviorSubject<boolean>(false);
  public isAuthenticated$ = this._isAuthenticated$
    .asObservable()
    .pipe(distinctUntilChanged());

  constructor(
    private router: Router,
    private apiService: ApiService,
    private jwtService: JwtService,
    private userService: UserService
  ) {}

  logout() {
    this.jwtService.destroyToken();
    this._isAuthenticated$.next(false);
    this.router.navigate(['/auth/login']);
  }

  attemptAuth(credentials: {
    email: String;
    password: String;
  }): Observable<any> {
    return this.apiService.post(`users/login`, credentials).pipe(
      tap(({ token }) => {
        this.jwtService.saveToken(token);
        this._isAuthenticated$.next(true);
      })
    );
  }

  checkAuth() {
    if (
      this.jwtService.getToken() &&
      this.jwtService.getExpirationDate() > new Date()
    ) {
      this._isAuthenticated$.next(true);
    } else this.logout();
  }
}
