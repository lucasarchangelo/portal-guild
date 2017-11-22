import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

import { Usuario } from './usuario';

declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = new Usuario();

  constructor(private authservice: AuthService) { }

  ngOnInit() {
  }

  login(form) {
    this.authservice.login(this.usuario, form, $);
    form.reset();
  }


}
