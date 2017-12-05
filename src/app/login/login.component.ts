import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

import { Usuario } from './usuario';
import { CookieService } from 'ngx-cookie-service';

declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = new Usuario();

  constructor(private authservice: AuthService, private cookieService: CookieService) { }

  ngOnInit() {
    if (this.cookieService.get('PortalGuild')) {
      this.authservice.login(this.usuario, $);
    }
  }

  login(form) {
    this.authservice.login(this.usuario, $);
    form.reset();
  }


}
