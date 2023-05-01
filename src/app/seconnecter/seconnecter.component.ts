import { HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-seconnecter',
  templateUrl: './seconnecter.component.html',
  styleUrls: ['./seconnecter.component.css'],
})
export class SeconnecterComponent {
  username: string = '';
  password: string = '';
  errormsg: string = '';
  loginUser(userJson: string) {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/json; charset=utf-8'
    );
    return this.http.post(process.env.NG_APP_API + '/login', userJson, {
      headers: headers,
      observe: 'response',
    });
  }
  constructor(private router: Router, private http: HttpClient) {}
  async onSubmit(form: NgForm) {
    console.log(form.value.username, form.value.email);
    if (form.value.password === '' || form.value.username === '') {
      this.errormsg = 'Veuiller remplir tous les champs';
    } else {
      this.errormsg = '';
      try {
        const newUser = {
          username: form.value.username,
          password: form.value.password,
        };
        const userJson = JSON.stringify(newUser);
        console.log(userJson);
        this.loginUser(userJson).subscribe({
          next: (v) => {
            console.log(v);
            this.errormsg = '';
            this.router.navigate(['/create']);
          },
          error: (e) => {
            console.error(e);
            this.errormsg = "Nom d'utilisateur ou mot de passe invalide";
          },
          complete: () => console.info('complete'),
        });
        // const res = await fetch(process.env.NG_APP_API + '/login', {
        //   method: 'POST',
        //   mode: 'no-cors',
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify(newUser),
        // });

        // if (res.status === 200) {
        //   this.errormsg = '';
        //   this.router.navigate(['/create']);
        // } else {
        //   this.errormsg = "Nom d'utilisateur ou mot de passe non valides";
        // }
      } catch (error) {
        console.log(error);
      }
    }
  }
}
