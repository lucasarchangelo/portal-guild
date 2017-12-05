import { CookieService } from 'ngx-cookie-service';
import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Usuario } from './usuario';

@Injectable()
export class AuthService {

  private token = '';
  private usuarioAutenticado = false;
  private usuarioAcesso = -1;
  private usuarioID = '';
  private usuarioNome = '';
  private usuarioPsn = '';
  mostrarMenuLogadoEmitter = new EventEmitter<number>();
   url = `https://backend-guild.herokuapp.com/guild/login`;
  // url = `http://localhost:5000/guild/login`;
  constructor(private router: Router, private http: Http, private cookieService: CookieService) { }

  login(usuario: Usuario, $: any) {
    $('#modal1').modal('open');
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    if (this.cookieService.get('PortalGuild') !== '') {
      headers.append('x-access-token', this.cookieService.get('PortalGuild'));
    }
    const options = new RequestOptions({ headers });
    return this.http.post(this.url, JSON.stringify(usuario), options).
      map((res: Response) => res.json()).subscribe(data => {
        this.usuarioAutenticado = true;
        this.usuarioAcesso = data.acesso;
        this.token = data.token;
        this.usuarioID = data.id;
        this.usuarioNome = data.nome;
        this.usuarioPsn = data.idpsn;
        this.cookieService.set( 'PortalGuild', data.token );
        this.mostrarMenuLogadoEmitter.emit(this.usuarioAcesso);
        if (this.usuarioAcesso > 1) {
          this.router.navigate(['/adm-membros']);
        }else {
          this.router.navigate(['/eventos']);
        }
      },
      error => {
        this.cookieService.deleteAll();
        this.mostrarMenuLogadoEmitter.emit(-1);
        this.usuarioAutenticado = false;
        this.usuarioAcesso = -1;
        this.usuarioID = '';
        $('#modal1').modal('close');
        $('#modal2').modal('open');
      });
  }

  isUsuarioAutenticado() {
    return this.usuarioAutenticado;
  }

  acessLevel() {
    return this.usuarioAcesso;
  }

  getToken() {
    return this.token;
  }

  getID() {
    return this.usuarioID;
  }

  getNome() {
    return this.usuarioNome;
  }

  getIdPsn() {
    return this.usuarioPsn;
  }
}
