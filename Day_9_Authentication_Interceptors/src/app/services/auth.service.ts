import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface LoginResponse {
  token: string;
  username: string;
  role: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private users = [
    {
      username: 'user',
      password: '1234',
      role: 'User'
    },
    {
      username: 'admin',
      password: 'admin123',
      role: 'Admin'
    }
  ];

  constructor() { }

  login(username: string, password: string): Observable<LoginResponse> {

    const user = this.users.find(
      u => u.username === username && u.password === password
    );

    if (user) {

      const token = this.generateMockToken();

      const response: LoginResponse = {
        token: token,
        username: user.username,
        role: user.role
      };

      return of(response).pipe(delay(500));
    }

    return throwError(() => new Error('Invalid username or password'));
  }

  private generateMockToken(): string {

    const header = btoa(JSON.stringify({
      alg: 'HS256',
      typ: 'JWT'
    }));

    const payload = btoa(JSON.stringify({
      sub: '101',
      username: 'user',
      iat: Date.now()
    }));

    const signature = btoa('mock-signature');

    return `${header}.${payload}.${signature}`;
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('role');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getUsername(): string | null {
    return localStorage.getItem('username');
  }

  getRole(): string | null {
    return localStorage.getItem('role');
  }
}