import { EventosService } from './eventos.service';
import { Component, OnInit } from '@angular/core';
import { Evento } from './evento';
import { AuthService } from '../login/auth.service';

declare var $: any;
@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  private eventos: any;
  private mostrarMenuADM = false;
  constructor(private eventosService: EventosService, private authService: AuthService) { }

  ngOnInit() {
    this.listAll();

    this.authService.mostrarADMEmitter.subscribe(
      mostrarAdm => this.mostrarMenuADM = mostrarAdm
    );
  }

  listAll() {
    $('#modal1').modal('open');
    this.eventosService.listAll().subscribe(
      data => {
        this.eventos = data;
        $('#modal1').modal('close');
      }
    );
  }

  criarEvento() {

  }
}
