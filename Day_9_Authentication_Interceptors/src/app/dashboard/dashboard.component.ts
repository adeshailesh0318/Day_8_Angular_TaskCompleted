import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  username = '';
  role = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.username = this.authService.getUsername() || '';
    this.role = this.authService.getRole() || '';
  }

  logout(): void {

    this.authService.logout();

    this.router.navigate(['/login']);
  }
}