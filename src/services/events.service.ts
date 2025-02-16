import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { catchError } from 'rxjs';

export type Event = {
  id?: number;
  title: string;
  description: string;
  imageUrl: string;
  startIn: string;
  endsIn: string;
  userId?: number;
};

@Injectable({
  providedIn: 'root',
})
export class EventsService extends BaseService {
  constructor(public http: HttpClient) {
    super(http, '/events');
  }

  post(payload: Event) {
    return this.http
      .post<number>(this.rootApi(), payload)
      .pipe(catchError(this.exceptionHandler));
  }

  get() {
    return this.http
      .get<Event[]>(this.rootApi())
      .pipe(catchError(this.exceptionHandler));
  }

  delete(id: number) {
    const params = new HttpParams().set('id', id);
    return this.http
      .delete(this.rootApi(), { params })
      .pipe(catchError(this.exceptionHandler));
  }

  put(payload: Event) {
    return this.http
      .put(this.rootApi(), payload)
      .pipe(catchError(this.exceptionHandler));
  }
}
