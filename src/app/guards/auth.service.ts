import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface User {
  username: string;
  role: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user: User | null = null;
  constructor(private http: HttpClient) {}

  isLoggedIn(): Observable<boolean> {
    const headers = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + localStorage.getItem('token')
    );
    return this.http
      .post(
        `${process.env.NG_APP_API}/TokenInfo?token=${localStorage.getItem(
          'token'
        )}`,
        {},
        {
          headers,
        }
      )
      .pipe(
        map((data: any) => {
          this.user = {
            username: data.username,
            role: 'USER_ROLE',
          };
          return true;
        }),
        catchError(() => {
          this.user = null;
          return of(false);
        })
      );
  }

  logout(): void {
    this.user = null;
  }

  getUser(): Observable<User | null> {
    return of(this.user);
  }

  hasRole(role: string): Observable<boolean> {
    return this.getUser().pipe(
      map((user) => {
        if (user) {
          return user.role === role;
        } else {
          return false;
        }
      })
    );
  }
}
