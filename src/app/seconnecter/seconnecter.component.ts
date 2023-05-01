import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seconnecter',
  templateUrl: './seconnecter.component.html',
  styleUrls: ['./seconnecter.component.css'],
})
export class SeconnecterComponent {
  username: string = '';
  password: string = '';
  errormsg: string = '';
  constructor(private router: Router) {}
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
        const res = await fetch(process.env.NG_APP_API + '/login', {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newUser),
        });

        if (res.status === 200) {
          this.errormsg = '';
          this.router.navigate(['/']);
        } else {
          this.errormsg = "Nom d'utilisateur ou mot de passe non valides";
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
}
