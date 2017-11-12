import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './../login/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  mostrarMenuLogado = false;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.mostrarMenuLogadoEmitter.subscribe(
      mostrar => {
        this.mostrarMenuLogado = mostrar;

        if (!this.mostrarMenuLogado) {
          this.router.navigate(['/login']);
        }
      }
    );
  }

}
