import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DeadlineCountdownService {
  constructor(private http: HttpClient) {}

  getSecondsLeft(): Observable<{ secondsLeft: number }> {
    return this.http.get<{ secondsLeft: number }>('/api/deadline');
  }
}
