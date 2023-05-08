import { Component, OnInit } from '@angular/core';
import { AuthService } from '../guards/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

type Website = {
  id: number;
  name: string;
};

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  username: string = '';
  websites: Website[] = [];

  constructor(private authService: AuthService, private http: HttpClient) {}

  fetchWebsites() {
    const headers = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + localStorage.getItem('token')
    );
    return this.http.get(process.env.NG_APP_API + '/websites/user', {
      headers: headers,
      observe: 'response',
    });
  }

  ngOnInit(): void {
    this.authService.getUser().subscribe((user) => {
      this.username = user?.username || '';
    });
    this.fetchWebsites().subscribe((websiteList) => {
      if (Array.isArray(websiteList.body)) {
        this.websites = [...websiteList.body];
      }
    });
  }
}
