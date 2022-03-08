import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';

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

  destroyToken() {
    window.localStorage.removeItem('jwtToken');
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
