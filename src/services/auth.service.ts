import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends BaseService {
  constructor(public http: HttpClient) {
    super(http, '/auth');
  }

  post({ email, password }: { email: string; password: string }) {
    return this.http
      .post(
        this.rootApi(),
        {
          email,
          password,
        },
        {
          responseType: 'text',
        }
      )
      .pipe(catchError(this.exceptionHandler));
  }

  public tokenExpired(token: string) {
    const expiry = JSON.parse(atob(token.split('.')[1])).exp;
    return Math.floor(new Date().getTime() / 1000) >= expiry;
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  clearToken(): void {
    localStorage.removeItem('token');
  }
}
