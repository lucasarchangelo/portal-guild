import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { Usuario } from './usuario';

@Injectable()
export class AuthService {

  private usuarioAutenticado = false;
  mostrarMenuLogadoEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  login(usuario: Usuario) {
      if (usuario.email === 'usuario@email.com' && usuario.password === '123456') {
        this.usuarioAutenticado = true;
        this.mostrarMenuLogadoEmitter.emit(true);
        this.router.navigate(['/adm-membros']);
      }else {
        this.usuarioAutenticado = false;
        this.mostrarMenuLogadoEmitter.emit(false);
      }
  }

  isUsuarioAutenticado() {
    return this.usuarioAutenticado;
  }
}
