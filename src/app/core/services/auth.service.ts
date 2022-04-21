import { User } from './../models/user.model';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { distinctUntilChanged, switchMap, tap } from 'rxjs/operators';
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
    private jwtService: JwtService
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
      }),
      switchMap((val) => {
        console.log(val);
        const userPublicId = this.jwtService.getUserIdFromToken();
        return this.apiService.get<User>(`users/${userPublicId}`);
      })
    );
  }

  hasRole(role: string): boolean {
    return this.jwtService.getRolesFromToken().some((el) => el === role);
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
