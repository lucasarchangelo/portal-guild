import { AuthService } from './login/auth.service';
import { Component } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';
  mostrarMenuLogado = -1;
  usuarioNome = '';
  usuarioPsn = '';
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.mostrarMenuLogadoEmitter.subscribe(
      mostrar => {
        this.mostrarMenuLogado = mostrar;
        this.infoUsers();
      }
    );
  }

  infoUsers() {
    this.usuarioNome = this.authService.getNome();
    this.usuarioPsn = this.authService.getIdPsn();
  }
}
