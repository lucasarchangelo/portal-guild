import { AuthService } from './login/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';
  mostrarMenuADM = false;
  mostrarMenuLogado = false;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.mostrarMenuLogadoEmitter.subscribe(
      mostrar => this.mostrarMenuLogado = mostrar
    );

    this.authService.mostrarADMEmitter.subscribe(
      mostrarAdm => this.mostrarMenuADM = mostrarAdm
    );
  }
}
