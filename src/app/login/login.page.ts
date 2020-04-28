import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  form: FormGroup;
  usuario = {email: '', clave: ''};
  logeado = false;
  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(this.usuario.email, [
          Validators.required,
          Validators.email
      ]),
      clave: new FormControl(this.usuario.clave, [
          Validators.required,
          Validators.minLength(6)
      ])
    });
  }

    doLogin() {
      this.usuario.email = this.form.value.email;
      this.usuario.clave = this.form.value.clave;
      this.logeado = true;
    }
}
