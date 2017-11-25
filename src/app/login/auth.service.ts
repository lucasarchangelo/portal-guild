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
  mostrarMenuLogadoEmitter = new EventEmitter<boolean>();
  mostrarADMEmitter = new EventEmitter<boolean>();
  // url = `https://backend-guild.herokuapp.com/guild/login`;
   url = `http://localhost:5000/guild/login`;
  constructor(private router: Router, private http: Http) { }

  login(usuario: Usuario, form: any, $: any) {
    $('#modal1').modal('open');
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({ headers });
    return this.http.post(this.url, JSON.stringify(usuario), options).
      map((res: Response) => res.json()).subscribe(data => {
        this.usuarioAutenticado = true;
        this.mostrarMenuLogadoEmitter.emit(true);
        this.usuarioAcesso = data.acesso;
        this.token = data.token;
        this.usuarioID = data.id;
        if (this.usuarioAcesso > 1) {
          this.router.navigate(['/adm-membros']);
          this.mostrarADMEmitter.emit(true);
        }else {
          this.router.navigate(['/eventos']);
          this.mostrarADMEmitter.emit(false);
        }
      },
      error => {
        this.mostrarADMEmitter.emit(false);
        this.mostrarMenuLogadoEmitter.emit(false);
        this.usuarioAutenticado = false;
        this.usuarioAcesso = -1;
        this.usuarioID = '';
        form.reset();
        $('#modal1').modal('close');
        $('#modal2').modal('open');
      });
  }

  autenticaUsuario() {
    if (this.usuarioAcesso > 1) {
      this.router.navigate(['/adm-membros']);
      this.mostrarADMEmitter.emit(true);
    }else {
      this.router.navigate(['/eventos']);
      this.mostrarADMEmitter.emit(false);
    }
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
}
