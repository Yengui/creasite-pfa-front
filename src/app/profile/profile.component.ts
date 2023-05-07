import { Component, OnInit } from '@angular/core';
import { AuthService } from '../guards/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  username: string = '';
  constructor(private authService: AuthService) {}
  ngOnInit(): void {
    this.authService.getUser().subscribe((user) => {
      this.username = user?.username || '';
    });
  }
}
