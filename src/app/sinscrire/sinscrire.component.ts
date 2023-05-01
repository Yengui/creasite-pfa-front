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
  selector: 'app-sinscrire',
  templateUrl: './sinscrire.component.html',
  styleUrls: ['./sinscrire.component.css'],
})
export class SinscrireComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  passwordconfirmation: string = '';
  errormsg: string = '';
  registerUser(userJson: string) {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/json; charset=utf-8'
    );
    return this.http.post(process.env.NG_APP_API + '/register', userJson, {
      headers: headers,
      observe: 'response',
    });
  }
  constructor(private router: Router, private http: HttpClient) {}
  async onSubmit(form: NgForm) {
    console.log(form.value.username, form.value.email);
    if (
      form.value.password === '' ||
      form.value.passwordconfirmation === '' ||
      form.value.username === '' ||
      form.value.email === ''
    ) {
      this.errormsg = 'Veuiller remplir tous les champs';
    } else if (form.value.password !== form.value.passwordconfirmation) {
      this.errormsg = 'Mot de passe et confirmation non identiques !';
    } else {
      this.errormsg = '';
      try {
        const newUser = {
          username: form.value.username,
          email: form.value.email,
          password: form.value.password,
        };
        const userJson = JSON.stringify(newUser);
        console.log(userJson);
        this.registerUser(userJson).subscribe({
          next: (v) => {
            console.log(v);
            this.errormsg = '';
            this.router.navigate(['/login']);
          },
          error: (e) => {
            console.error(e);
            this.errormsg = "Email ou nom d'utilisateur existant";
          },
          complete: () => console.info('complete'),
        });
        // const res = await fetch(process.env.NG_APP_API + '/register', {
        //   method: 'POST',
        //   mode: 'no-cors',
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   body: userJson,
        // });

        // if (res.status === 201) {
        //   this.errormsg = '';
        //   this.router.navigate(['/login']);
        // } else {
        //   this.errormsg = "Email ou nom d'utilisateur existant";
        // }
      } catch (error) {
        console.log(error);
      }
    }
  }
}
