import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class UsersService extends BaseService {
  constructor(public http: HttpClient) {
    super(http, '/users');
  }

  post({ email, password }: { email: string; password: string }) {
    return this.http
      .post(
        this.rootApi(),
        {
          email,
          password,
        },
        { responseType: 'text' }
      )
      .pipe(catchError(this.exceptionHandler));
  }
}
