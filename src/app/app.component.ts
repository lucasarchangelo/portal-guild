import { AuthService } from './login/auth.service';
import { Component, OnInit } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';
  mostrarMenuLogado = -1;
  usuarioNome = '';
  usuarioPsn = '';
  constructor(private authService: AuthService) { }

  ngOnInit() {

    $('.button-collapse').sideNav({
      menuWidth: 280, // Default is 300
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true, // Choose whether you can drag to open on touch screens,
      onOpen: function(el) { /* Do Stuff */ }, // A function to be called when sideNav is opened
      onClose: function(el) { /* Do Stuff */ }, // A function to be called when sideNav is closed
    });
    $('.collapsible').collapsible();
    $('#modal1').modal({
      dismissible: false
    });
    $('#modal2').modal();
    $('#modal3').modal();

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
