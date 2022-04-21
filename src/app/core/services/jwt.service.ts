import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class JwtService {
  getToken(): string {
    return window.localStorage['jwtToken'];
  }

  saveToken(token: string) {
    window.localStorage['jwtToken'] = token;
  }

  getUserInfo(): User {
    return JSON.parse(window.localStorage['userInfo']) as User;
  }

  saveUserInfo(user: User) {
    window.localStorage['userInfo'] = JSON.stringify(user);
  }

  destroyToken() {
    window.localStorage.removeItem('jwtToken');
    window.localStorage.removeItem('userInfo');
  }

  getDecodedToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  getUserIdFromToken(): string {
    const decodedToken = this.getDecodedToken(this.getToken());
    return decodedToken.user_id;
  }

  getRolesFromToken(): [any] {
    const decodedToken = this.getDecodedToken(this.getToken());
    return decodedToken.roles;
  }

  getExpirationDate(): Date {
    const decodedToken = this.getDecodedToken(this.getToken());
    return new Date(decodedToken.exp * 1000);
  }
}
