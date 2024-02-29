import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  router = inject(Router);
  private _isAuthenticated: boolean = false;
  public get isAuthenticated(): boolean {
    return this._isAuthenticated;
  }

  public login(username: string, password: string) {
    if (username.toLowerCase() === 'ichrak' && password.toLowerCase() === '123') {
      this._isAuthenticated = true;
      localStorage.setItem('isAuthenticated', 'true');
      this.router.navigate(['']);
    }
  }
}
