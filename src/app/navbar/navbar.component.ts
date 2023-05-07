import { Component, OnInit } from '@angular/core';
import { AuthService } from '../guards/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private authService: AuthService) {}
  openList: boolean = false;
  handleListClick() {
    this.openList = !this.openList;
  }
  loggedIn!: boolean;
  ngOnInit(): void {
    this.authService.isLoggedIn().subscribe((loggedIn) => {
      this.loggedIn = loggedIn;
    });
  }
  disconnect() {
    localStorage.removeItem('token');
    this.authService.logout();
  }
}
